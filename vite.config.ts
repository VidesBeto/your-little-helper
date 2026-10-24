import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Gera HTML estático (dist/client) para hospedagem simples como Hostinger.
    prerender: { enabled: true, crawlLinks: true },
  },
});
