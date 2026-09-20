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

export async function handleAdminRequests(request, env) {
  if (!isAuthorized(request, env)) {
    return jsonResponse(
      { error: "Unauthorized" },
      401
    );
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
