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
  if (!auth || !auth.startsWith("Bearer ")) return false;
  const token = auth.slice(7);
  return token === env.ADMIN_PASSWORD;
}

const VALID_STATUSES = ["Planning", "In Progress", "On Hold", "Completed", "Cancelled"];
const VALID_PILLARS = ["assist", "build", "iot", "home"];
const ALLOWED_FIELDS = [
  "title", "customer_name", "customer_email", "pillar", "service",
  "description", "budget", "deadline", "status", "progress", "notes",
];

function parseFiles(filesValue) {
  if (!filesValue) return [];
  try {
    const parsed = JSON.parse(filesValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function projectRowToObject(row) {
  return {
    id: row.id,
    project_id: row.project_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
    request_id: row.request_id,
    customer_name: row.customer_name,
    customer_email: row.customer_email,
    title: row.title,
    pillar: row.pillar,
    service: row.service,
    description: row.description,
    budget: row.budget,
    deadline: row.deadline,
    status: row.status,
    progress: row.progress,
    notes: row.notes,
    files: parseFiles(row.files),
  };
}

export async function handleAdminProjects(request, env) {
  if (!isAuthorized(request, env)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const url = new URL(request.url);
  const method = request.method;

  // GET /api/admin/projects — list
  if (method === "GET" && !url.pathname.match(/\/api\/admin\/projects\/.+/)) {
    try {
      const search = url.searchParams.get("search") || "";
      const statusFilter = url.searchParams.get("status") || "";

      let query = `
        SELECT id, project_id, created_at, updated_at, request_id, customer_name,
               customer_email, title, pillar, service, description, budget, deadline,
               status, progress, notes, files
        FROM projects
      `;
      const conditions = [];
      const bindings = [];

      if (search) {
        conditions.push(
          `(project_id LIKE ? OR title LIKE ? OR customer_name LIKE ? OR customer_email LIKE ?)`
        );
        const like = `%${search}%`;
        bindings.push(like, like, like, like);
      }
      if (statusFilter && VALID_STATUSES.includes(statusFilter)) {
        conditions.push("status = ?");
        bindings.push(statusFilter);
      }

      if (conditions.length > 0) {
        query += " WHERE " + conditions.join(" AND ");
      }

      query += " ORDER BY created_at DESC";

      const result = await env.DB.prepare(query).bind(...bindings).all();
      const projects = (result.results || []).map(projectRowToObject);

      return jsonResponse({ success: true, data: projects });
    } catch (err) {
      return jsonResponse({ error: "Internal server error" }, 500);
    }
  }

  // POST /api/admin/projects — create
  if (method === "POST" && url.pathname === "/api/admin/projects") {
    try {
      let body;
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: "Invalid JSON" }, 400);
      }

      if (!body || typeof body !== "object" || Array.isArray(body)) {
        return jsonResponse({ error: "Request body must be a JSON object" }, 400);
      }

      const required = ["title", "customer_name", "customer_email", "pillar", "service", "description"];
      const missing = required.filter((f) => !body[f] || !body[f].trim());
      if (missing.length > 0) {
        return jsonResponse({ error: `Missing required fields: ${missing.join(", ")}` }, 400);
      }

      if (!VALID_PILLARS.includes(body.pillar)) {
        return jsonResponse({ error: `Invalid pillar: ${body.pillar}. Must be one of: ${VALID_PILLARS.join(", ")}` }, 400);
      }

      // Normalize progress
      let progress = 0;
      if (body.progress !== undefined && body.progress !== null && body.progress !== "") {
        progress = parseInt(body.progress, 10);
        if (isNaN(progress) || progress < 0 || progress > 100) {
          return jsonResponse({ error: "Progress must be an integer between 0 and 100" }, 400);
        }
      }

      // Normalize status
      let status = "Planning";
      if (body.status && VALID_STATUSES.includes(body.status)) {
        status = body.status;
      }

      const id = crypto.randomUUID();
      const projectId = `proj-${id}`;
      const now = new Date().toISOString();
      const files = body.files ? JSON.stringify(body.files) : "[]";

      const stmt = env.DB.prepare(
        `INSERT INTO projects (id, project_id, created_at, updated_at, request_id,
         customer_name, customer_email, title, pillar, service, description,
         budget, deadline, status, progress, notes, files)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      );

      const result = await stmt.bind(
        id,
        projectId,
        now,
        now,
        body.request_id || null,
        body.customer_name.trim(),
        body.customer_email.trim().toLowerCase(),
        body.title.trim(),
        body.pillar,
        body.service.trim(),
        body.description.trim(),
        body.budget !== undefined && body.budget !== "" ? body.budget : null,
        body.deadline || null,
        status,
        progress,
        body.notes || "",
        files
      ).run();

      if (!result.success) {
        console.error("D1 POST insert failed:", result.meta);
        return jsonResponse({ error: "Failed to create project", details: result.meta }, 500);
      }

      console.log("D1 POST insert succeeded for project_id:", projectId);

      const selectResult = await env.DB
        .prepare("SELECT * FROM projects WHERE project_id = ?")
        .bind(projectId)
        .first();

      return jsonResponse({ success: true, data: projectRowToObject(selectResult) }, 201);
    } catch (err) {
      console.error("D1 POST catch error:", err.message);
      return jsonResponse({ error: "Internal server error" }, 500);
    }
  }

  // GET /api/admin/projects/:projectId — single
  const detailMatch = url.pathname.match(/^\/api\/admin\/projects\/(.+)$/);
  if (method === "GET" && detailMatch) {
    try {
      const projectId = detailMatch[1];
      const row = env.DB
        .prepare("SELECT * FROM projects WHERE project_id = ?")
        .bind(projectId)
        .first();

      if (!row) {
        return jsonResponse({ error: "Project not found" }, 404);
      }

      return jsonResponse({ success: true, data: projectRowToObject(row) });
    } catch (err) {
      return jsonResponse({ error: "Internal server error" }, 500);
    }
  }

  // PATCH /api/admin/projects/:projectId — update
  if (method === "PATCH" && detailMatch) {
    try {
      const projectId = detailMatch[1];
      const existing = env.DB
        .prepare("SELECT id FROM projects WHERE project_id = ?")
        .bind(projectId)
        .first();

      if (!existing) {
        return jsonResponse({ error: "Project not found" }, 404);
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: "Invalid JSON" }, 400);
      }

      if (!body || typeof body !== "object" || Array.isArray(body)) {
        return jsonResponse({ error: "Request body must be a JSON object" }, 400);
      }

      const keys = Object.keys(body);
      for (const key of keys) {
        if (!ALLOWED_FIELDS.includes(key)) {
          return jsonResponse({ error: `Unknown field: ${key}` }, 400);
        }
      }

      // Validate status
      if (body.status && !VALID_STATUSES.includes(body.status)) {
        return jsonResponse({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}` }, 400);
      }

      // Validate progress
      if (body.progress !== undefined && body.progress !== null && body.progress !== "") {
        const progress = parseInt(body.progress, 10);
        if (isNaN(progress) || progress < 0 || progress > 100) {
          return jsonResponse({ error: "Progress must be an integer between 0 and 100" }, 400);
        }
      }

      // Build dynamic UPDATE
      const updateFields = [];
      const values = [];
      const fieldMap = {
        title: "title", customer_name: "customer_name", customer_email: "customer_email",
        pillar: "pillar", service: "service", description: "description",
        budget: "budget", deadline: "deadline", status: "status", progress: "progress", notes: "notes",
      };

      for (const key of keys) {
        if (key === "files" && body.files !== undefined) {
          updateFields.push("files = ?");
          values.push(JSON.stringify(body.files));
          continue;
        }
        if (key in fieldMap) {
          updateFields.push(`${fieldMap[key]} = ?`);
          let val = body[key];
          if (typeof val === "string") val = val.trim();
          values.push(val);
        }
      }

      updateFields.push("updated_at = datetime('now')");
      values.push(projectId);

      const setClause = updateFields.join(", ");
      const patchResult = await env.DB.prepare(`UPDATE projects SET ${setClause} WHERE project_id = ?`).bind(...values).run();
      if (!patchResult.success) {
        console.error("D1 PATCH update failed:", patchResult.meta);
      } else {
        console.log("D1 PATCH update succeeded for project_id:", projectId);
      }

      const updated = await env.DB
        .prepare("SELECT * FROM projects WHERE project_id = ?")
        .bind(projectId)
        .first();

      return jsonResponse({ success: true, data: projectRowToObject(updated) });
    } catch (err) {
      console.error("D1 PATCH catch error:", err.message);
      return jsonResponse({ error: "Internal server error" }, 500);
    }
  }

  // DELETE /api/admin/projects/:projectId
  if (method === "DELETE" && detailMatch) {
    try {
      const projectId = detailMatch[1];
      const existing = env.DB
        .prepare("SELECT id FROM projects WHERE project_id = ?")
        .bind(projectId)
        .first();

      if (!existing) {
        return jsonResponse({ error: "Project not found" }, 404);
      }

      await env.DB.prepare("DELETE FROM projects WHERE project_id = ?").bind(projectId).run();

      return jsonResponse({ success: true, message: "Project deleted successfully" });
    } catch (err) {
      console.error("D1 DELETE catch error:", err.message);
      return jsonResponse({ error: "Internal server error" }, 500);
    }
  }

  // Method not allowed
  return jsonResponse({ error: "Method not allowed" }, 405);
}
