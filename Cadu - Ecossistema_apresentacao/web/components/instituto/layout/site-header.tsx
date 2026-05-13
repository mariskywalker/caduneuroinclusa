import Link from "next/link";
import { Menu } from "lucide-react";
import { headers } from "next/headers";

import { Button } from "@/components/instituto/ui/button";
import { Container } from "@/components/instituto/layout/container";
import { primaryNav, siteIdentity, utilityNav } from "@/content/instituto/site";
import { cn } from "@/lib/utils";

/**
 * Header 100% servidor: o menu desktop e o menu móvel (elemento details) vêm no HTML
 * sem depender de hidratação ou de "use client".
 */
export async function SiteHeader() {
  const pathname = (await headers()).get("x-pathname") ?? "/";

  return (
    <header className="sticky top-0 z-[120] border-b border-icu-border bg-icu-surface/90 backdrop-blur-md">
      <div className="border-b border-icu-border/60 bg-icu-depth text-icu-depth-foreground">
        <Container className="flex h-9 items-center justify-between gap-4 text-[0.65rem] font-inst-mono uppercase tracking-[0.2em] text-icu-depth-foreground/70">
          <span className="truncate">
            {siteIdentity.fullName} · {siteIdentity.tagline}
          </span>
          <span className="hidden shrink-0 sm:inline">{siteIdentity.locale}</span>
        </Container>
      </div>
      <Container className="icu-header-inner flex h-[var(--icu-header-h)] items-center justify-between gap-6">
        <Link href="/" className="group flex flex-col gap-0.5">
          <span className="font-inst-mono text-[0.62rem] uppercase tracking-[0.22em] text-icu-ink-faint">
            {siteIdentity.shortName}
          </span>
          <span className="font-inst-serif text-lg leading-none tracking-tight text-icu-ink transition-colors group-hover:text-icu-accent md:text-xl">
            Casa do Urso
          </span>
        </Link>

        <nav
          className="icu-nav-desktop hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-[0.82rem] text-icu-ink-secondary transition-colors hover:bg-icu-muted hover:text-icu-ink",
                  active && "bg-icu-muted text-icu-ink",
                  item.emphasis === "primary" && "text-icu-accent",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="icu-header-actions hidden items-center gap-2 lg:flex">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/mapa">Mapa CADU</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contato">Contato</Link>
          </Button>
        </div>

        <details className="relative lg:hidden">
          <summary
            className="icu-mobile-nav-trigger inline-flex size-11 cursor-pointer list-none items-center justify-center rounded-md border border-icu-border text-icu-ink marker:hidden [&::-webkit-details-marker]:hidden"
            aria-label="Abrir ou fechar menu"
          >
            <Menu className="size-5" aria-hidden />
          </summary>
          <div
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-[140] max-h-[min(70vh,520px)] overflow-y-auto border-t border-icu-border bg-icu-surface shadow-lg"
          >
            <div className="flex flex-col gap-1 py-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 text-[0.95rem] text-icu-ink hover:bg-icu-muted"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 border-t border-icu-border px-3 pt-3 font-inst-mono text-[0.65rem] uppercase tracking-[0.16em] text-icu-ink-faint">
                Utilitários
              </div>
              {utilityNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-[0.85rem] text-icu-ink-secondary hover:bg-icu-muted"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
