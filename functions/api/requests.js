import { randomUUID } from 'crypto';

const VALID_PILLARS = ['assist', 'build', 'iot', 'home'];
const REQUIRED_FIELDS = ['customer_name', 'customer_email', 'pillar', 'service', 'description'];

export async function onRequest({ request, env, }) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(request),
    });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  try {
    const body = await request.json();

    // Validate required fields
    const missing = REQUIRED_FIELDS.filter((f) => !body[f] || !body[f].trim());
    if (missing.length > 0) {
      return jsonResponse({ error: `Missing required fields: ${missing.join(', ')}` }, 400);
    }

    // Validate pillar
    if (!VALID_PILLARS.includes(body.pillar)) {
      return jsonResponse({
        error: `Invalid pillar: ${body.pillar}. Must be one of: ${VALID_PILLARS.join(', ')}`,
      }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.customer_email)) {
      return jsonResponse({ error: 'Invalid email format' }, 400);
    }

    // Validate field lengths
    if (body.customer_name && body.customer_name.length > 255) {
      return jsonResponse({ error: 'customer_name too long (max 255)' }, 400);
    }
    if (body.description && body.description.length > 5000) {
      return jsonResponse({ error: 'description too long (max 5000)' }, 400);
    }

    // Generate unique request ID server-side — do not trust client-provided ID
    const requestId = `req-${randomUUID()}`;
    const now = new Date().toISOString();

    // Simple rate limiting: max 5 requests per hour per IP
    const ipHash = await getIpHash(request, env);
    const rateLimitResult = await env.DB
      .prepare('SELECT COUNT(*) as count FROM requests WHERE ip_hash = ? AND created_at >= datetime(?, "-1 hour")')
      .bind(ipHash, now)
      .first();

    if (rateLimitResult && rateLimitResult.count >= 5) {
      return jsonResponse({ error: 'Too many requests. Please wait before submitting again.' }, 429);
    }

    // Prepare files as JSON string
    const files = body.files ? JSON.stringify(body.files) : '[]';

    // Insert into D1
    const result = await env.DB
      .prepare(
        `INSERT INTO requests (
          id, request_id, created_at, updated_at, customer_name, customer_email,
          whatsapp, pillar, service, description, budget, deadline, files,
          source, source_referral, status, notes, formspree_id, project_id, ip_hash
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        randomUUID(),
        requestId,
        now,
        now,
        body.customer_name.trim(),
        body.customer_email.trim().toLowerCase(),
        body.whatsapp || null,
        body.pillar,
        body.service,
        body.description.trim(),
        body.budget || null,
        body.deadline || null,
        files,
        body.source || 'direct',
        body.source_referral || null,
        'New',
        body.notes || '',
        null,
        body.project_id || null,
        ipHash
      )
      .run();

    if (!result.success) {
      return jsonResponse({ error: 'Failed to create request', details: result.meta }, 500);
    }

    return jsonResponse({
      success: true,
      data: {
        request_id: requestId,
        status: 'New',
        created_at: now,
      },
    }, 201);

  } catch (error) {
    console.error('Worker error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function getIpHash(request, env) {
  const forwarded = request.headers.get('CF-Connecting-IP');
  const ip = forwarded || request.headers.get('X-Forwarded-For') || 'unknown';
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return `ip_${Math.abs(hash).toString(36)}`;
}
