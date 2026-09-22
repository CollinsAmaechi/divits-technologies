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

const VALID_STATUSES = ["New", "Reviewing", "Accepted", "In Progress", "Completed", "Cancelled"];
const VALID_PILLARS = ["assist", "build", "iot", "home"];

export async function handleAdminAnalytics(request, env) {
  if (!isAuthorized(request, env)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    // Total count
    const totalResult = await env.DB
      .prepare("SELECT COUNT(*) as count FROM requests")
      .first();
    const total = totalResult?.count ?? 0;

    // Status distribution (include all valid statuses with zero counts)
    const statusRows = await env.DB
      .prepare("SELECT status, COUNT(*) as count FROM requests GROUP BY status")
      .all();
    const status = {};
    VALID_STATUSES.forEach((s) => (status[s] = 0));
    for (const row of statusRows.results || []) {
      if (VALID_STATUSES.includes(row.status)) {
        status[row.status] = row.count;
      }
    }

    // Pillar distribution (include all valid pillars with zero counts)
    const pillarRows = await env.DB
      .prepare("SELECT pillar, COUNT(*) as count FROM requests GROUP BY pillar")
      .all();
    const pillars = {};
    VALID_PILLARS.forEach((p) => (pillars[p] = 0));
    for (const row of pillarRows.results || []) {
      if (VALID_PILLARS.includes(row.pillar)) {
        pillars[row.pillar] = row.count;
      }
    }

    // Services sorted descending by count
    const serviceRows = await env.DB
      .prepare("SELECT service, COUNT(*) as count FROM requests GROUP BY service ORDER BY count DESC")
      .all();
    const services = (serviceRows.results || []).map((row) => ({
      service: row.service,
      count: row.count,
    }));

    // Sources sorted descending by count (NULL/empty → "unknown")
    const sourceRows = await env.DB
      .prepare(
        `SELECT CASE WHEN source IS NULL OR source = '' THEN 'unknown' ELSE source END as source, COUNT(*) as count FROM requests GROUP BY source ORDER BY count DESC`
      )
      .all();
    const sources = (sourceRows.results || []).map((row) => ({
      source: row.source,
      count: row.count,
    }));

    // Source → pillar → service breakdown, sorted by count descending
    const breakdownRows = await env.DB
      .prepare(
        `SELECT CASE WHEN source IS NULL OR source = '' THEN 'unknown' ELSE source END as source, pillar, service, COUNT(*) as count FROM requests GROUP BY source, pillar, service ORDER BY count DESC`
      )
      .all();
    const sourceBreakdown = (breakdownRows.results || []).map((row) => ({
      source: row.source,
      pillar: row.pillar,
      service: row.service,
      count: row.count,
    }));

    // Referrals (source_referral where available), sorted by count descending
    const referralRows = await env.DB
      .prepare(
        `SELECT source, source_referral as referral, COUNT(*) as count FROM requests WHERE source_referral IS NOT NULL AND source_referral != '' GROUP BY source, source_referral ORDER BY count DESC`
      )
      .all();
    const referrals = (referralRows.results || []).map((row) => ({
      source: row.source,
      referral: row.referral,
      count: row.count,
    }));

    // Requests over time grouped by date, oldest → newest
    const overTimeRows = await env.DB
      .prepare(
        "SELECT DATE(created_at) as date, COUNT(*) as count FROM requests GROUP BY date ORDER BY date ASC"
      )
      .all();
    const overTime = (overTimeRows.results || []).map((row) => ({
      date: row.date,
      count: row.count,
    }));

    return jsonResponse({
      success: true,
      data: {
        total,
        status,
        pillars,
        services,
        sources,
        source_breakdown: sourceBreakdown,
        referrals,
        over_time: overTime,
      },
    });
  } catch (err) {
    return jsonResponse({ error: "Internal server error" }, 500);
  }
}
