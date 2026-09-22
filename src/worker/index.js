import { onRequest } from "../../functions/api/requests.js";
import { handleAdminRequests } from "./admin/requests.js";
import { handleAdminAnalytics } from "./admin/analytics.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/requests") {
      return onRequest({ request, env, ctx });
    }

    if (url.pathname === "/api/admin/requests") {
      return handleAdminRequests(request, env);
    }

    if (url.pathname === "/api/admin/analytics") {
      return handleAdminAnalytics(request, env);
    }

    const match = url.pathname.match(/^\/api\/admin\/requests\/(.+)$/);
    if (match) {
      return handleAdminRequests(request, env, match[1]);
    }

    return env.ASSETS.fetch(request);
  },
};
