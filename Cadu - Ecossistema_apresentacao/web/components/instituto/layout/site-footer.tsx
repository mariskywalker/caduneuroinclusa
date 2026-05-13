import Link from "next/link";

import { Container } from "@/components/instituto/layout/container";
import { Separator } from "@/components/instituto/ui/separator";
import { footerColumns, footerLegal, siteIdentity } from "@/content/instituto/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-icu-border bg-icu-muted/50" role="contentinfo">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm space-y-4">
            <p className="font-inst-serif text-2xl tracking-tight text-icu-ink">
              {siteIdentity.fullName}
            </p>
            <p className="text-[0.95rem] leading-relaxed text-icu-ink-secondary">
              {siteIdentity.tagline}: pesquisa, editorial e formação para ecossistemas
              de cuidado longitudinal.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.2em] text-icu-ink-faint">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[0.9rem] text-icu-ink-secondary transition-colors hover:text-icu-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-10" />
        <div className="flex flex-col gap-3 text-[0.75rem] text-icu-ink-faint md:flex-row md:items-center md:justify-between">
          <span>{footerLegal.rights}</span>
          <span className="font-inst-mono uppercase tracking-[0.14em]">
            {footerLegal.ecosystemLine}
          </span>
        </div>
      </Container>
    </footer>
  );
}
