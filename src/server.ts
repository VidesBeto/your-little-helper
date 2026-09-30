import "@tanstack/react-start/server-entry";

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const handler = await import("@tanstack/react-start/server-entry");
    const entry = (handler as any).default ?? handler;
    return entry.fetch(request, env, ctx);
  },
};