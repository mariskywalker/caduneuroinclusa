import type { ReactNode } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

import { SiteFooter } from "@/components/instituto/layout/site-footer";
import { SiteHeader } from "@/components/instituto/layout/site-header";
import { SkipLink } from "@/components/instituto/layout/skip-link";
import { cn } from "@/lib/utils";

const premiumSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-premium-serif",
  display: "swap",
});

export default function InstitutoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "instituto-site instituto-premium flex min-h-dvh flex-col",
        premiumSerif.variable,
      )}
      data-surface="instituto"
    >
      <SkipLink />
      <noscript>
        <div
          style={{
            padding: "1rem",
            background: "#14100e",
            color: "#fff",
            fontFamily: "system-ui,sans-serif",
            fontSize: "0.9rem",
          }}
        >
          Ative o JavaScript para interações avançadas. Ligações principais:{" "}
          <Link href="/sobre" style={{ color: "#e8c4b8" }}>
            Sobre
          </Link>
          {" · "}
          <Link href="/sistemas-neuroafetivos" style={{ color: "#e8c4b8" }}>
            Sistemas Neuroafetivos
          </Link>
          {" · "}
          <Link href="/contato" style={{ color: "#e8c4b8" }}>
            Contato
          </Link>
        </div>
      </noscript>
      <SiteHeader />
      <main id="conteudo-principal" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
