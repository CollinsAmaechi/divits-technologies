import { onRequest } from "../../functions/api/requests.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/requests") {
      return onRequest({ request, env, ctx });
    }

    return env.ASSETS.fetch(request);
  },
};
