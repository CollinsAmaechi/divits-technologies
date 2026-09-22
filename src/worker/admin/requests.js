function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function isAuthorized(request, env) {
  const auth = request.headers.get("Authorization");

  if (!auth || !auth.startsWith("Bearer ")) {
    return false;
  }

  const token = auth.slice(7);

  return token === env.ADMIN_PASSWORD;
}

const VALID_STATUSES = ['New', 'Reviewing', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];
const ALLOWED_FIELDS = ['status', 'notes'];

export async function handleAdminRequests(request, env, requestId = null) {
  if (!isAuthorized(request, env)) {
    return jsonResponse(
      { error: "Unauthorized" },
      401
    );
  }

  // Only PATCH is supported for /api/admin/requests/:requestId
  if (requestId && request.method !== "PATCH") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  // PATCH /api/admin/requests/:requestId
  if (requestId && request.method === "PATCH") {
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, 400);
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return jsonResponse({ error: "Request body must be a JSON object" }, 400);
    }

    const keys = Object.keys(body);

    // Reject unknown fields
    for (const key of keys) {
      if (!ALLOWED_FIELDS.includes(key)) {
        return jsonResponse({ error: `Unknown field: ${key}` }, 400);
      }
    }

    // Require at least one field
    if (keys.length === 0) {
      return jsonResponse({ error: "At least one field (status or notes) is required" }, 400);
    }

    // Validate status if supplied
    if (body.status !== undefined && !VALID_STATUSES.includes(body.status)) {
      return jsonResponse({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}` }, 400);
    }

    // Validate notes: must be string or null
    if (body.notes !== undefined && body.notes !== null && typeof body.notes !== 'string') {
      return jsonResponse({ error: "Notes must be a string or null" }, 400);
    }

    // Check that the request exists
    const existing = await env.DB
      .prepare("SELECT id FROM requests WHERE request_id = ?")
      .bind(requestId)
      .first();

    if (!existing) {
      return jsonResponse({ error: "Request not found" }, 404);
    }

    // Build dynamic UPDATE query with parameterized values
    const updateFields = [];
    const values = [];

    if (body.status !== undefined) {
      updateFields.push("status = ?");
      values.push(body.status);
    }
    if (body.notes !== undefined) {
      updateFields.push("notes = ?");
      values.push(body.notes);
    }
    updateFields.push("updated_at = datetime('now')");
    values.push(requestId);

    await env.DB
      .prepare(`UPDATE requests SET ${updateFields.join(', ')} WHERE request_id = ?`)
      .bind(...values)
      .run();

    // Fetch the updated record
    const updated = await env.DB
      .prepare("SELECT request_id, status, notes, updated_at FROM requests WHERE request_id = ?")
      .bind(requestId)
      .first();

    return jsonResponse({
      success: true,
      data: {
        request_id: updated.request_id,
        status: updated.status,
        notes: updated.notes,
        updated_at: updated.updated_at,
      },
    });
  }

  if (request.method !== "GET") {
    return jsonResponse(
      { error: "Method not allowed" },
      405
    );
  }

  const result = await env.DB
    .prepare(`
      SELECT
        id,
        request_id,
        created_at,
        updated_at,
        customer_name,
        customer_email,
        whatsapp,
        pillar,
        service,
        description,
        budget,
        deadline,
        files,
        source,
        source_referral,
        status,
        notes,
        formspree_id,
        project_id
      FROM requests
      ORDER BY created_at DESC
      LIMIT 100
    `)
    .all();

  return jsonResponse({
    success: true,
    data: result.results || [],
  });
}
