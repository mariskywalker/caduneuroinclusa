import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionShell } from "@/components/instituto/sections/section-shell";
import { FadeIn } from "@/components/instituto/motion/fade-in";
import { programsPage } from "@/content/instituto/programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programas",
  description: programsPage.hero.lead,
};

export default function ProgramasPage() {
  return (
    <>
      <PageHero
        eyebrow={programsPage.hero.eyebrow}
        title={programsPage.hero.title}
        lead={programsPage.hero.lead}
      />
      <SectionShell muted className="border-b-0">
        <div className="grid gap-8 lg:grid-cols-3">
          {programsPage.programs.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-surface p-6">
                <p className="font-inst-mono text-[0.62rem] uppercase tracking-[0.2em] text-brand-mint">
                  {p.format}
                </p>
                <h2 className="mt-3 font-inst-serif text-2xl text-icu-ink">{p.title}</h2>
                <p className="mt-2 text-[0.85rem] text-icu-ink-faint">{p.audience}</p>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-icu-ink-secondary">
                  {p.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
