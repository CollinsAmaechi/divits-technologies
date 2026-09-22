import { onRequest } from "../../functions/api/requests.js";
import { handleAdminRequests } from "./admin/requests.js";
import { handleAdminAnalytics } from "./admin/analytics.js";
import { handleAdminProjects } from "./admin/projects.js";

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

    if (url.pathname === "/api/admin/projects") {
      return handleAdminProjects(request, env);
    }

    const match = url.pathname.match(/^\/api\/admin\/projects\/(.+)$/);
    if (match) {
      return handleAdminProjects(request, env);
    }

    const requestMatch = url.pathname.match(/^\/api\/admin\/requests\/(.+)$/);
    if (requestMatch) {
      return handleAdminRequests(request, env, requestMatch[1]);
    }

    return env.ASSETS.fetch(request);
  },
};
