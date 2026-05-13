import Link from "next/link";

import { FadeIn } from "@/components/instituto/motion/fade-in";
import { Button } from "@/components/instituto/ui/button";
import { ecosystemPage } from "@/content/instituto/ecosystem";

export function EcosystemLayers() {
  return (
    <div className="space-y-12">
      {ecosystemPage.layers.map((layer, i) => (
        <FadeIn key={layer.id} delay={i * 0.06}>
          <article
            id={layer.id}
            className="scroll-mt-[calc(var(--icu-header-h)+1rem)] rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-surface p-6 md:flex md:gap-10 md:p-10"
          >
            <div className="md:w-1/3">
              <p className="font-inst-mono text-[0.62rem] uppercase tracking-[0.2em] text-icu-warm">
                {layer.tag}
              </p>
              <h2 className="mt-2 font-inst-serif text-3xl tracking-tight text-icu-ink">
                {layer.name}
              </h2>
            </div>
            <div className="mt-6 md:mt-0 md:w-2/3">
              <p className="text-[1.05rem] leading-relaxed text-icu-ink-secondary">
                {layer.description}
              </p>
              <ul className="mt-6 space-y-2">
                {layer.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-[0.95rem] text-icu-ink-secondary"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-mint/75" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </FadeIn>
      ))}
      <FadeIn delay={0.2} className="flex justify-center">
        <Button variant="secondary" size="lg" asChild>
          <Link href={ecosystemPage.diagramCta.href}>{ecosystemPage.diagramCta.label}</Link>
        </Button>
      </FadeIn>
    </div>
  );
}
