import { onRequest } from "../../functions/api/requests.js";
import { handleAdminRequests } from "./admin/requests.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/requests") {
      return onRequest({ request, env, ctx });
    }

    if (url.pathname === "/api/admin/requests") {
      return handleAdminRequests(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
