import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, HeadContent, Scripts, createRootRouteWithContext, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">MERAKI STUDIO</p>
      <h1>Essa página não existe.</h1>
      <Link to="/">Voltar para o início</Link>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Meraki Studio — Beleza com essência" },
      { name: "description", content: "Meraki Studio: colocar sua essência em tudo o que você faz. Serviços para cabelos e beleza com atendimento personalizado." },
      { property: "og:title", content: "Meraki Studio — Beleza com essência" },
      { property: "og:description", content: "Colocar sua essência em tudo o que você faz." },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}