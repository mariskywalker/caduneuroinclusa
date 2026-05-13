import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionHeading, SectionShell } from "@/components/instituto/sections/section-shell";
import { FadeIn } from "@/components/instituto/motion/fade-in";
import { researchPage } from "@/content/instituto/research";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
  description: researchPage.hero.lead,
};

export default function PesquisaPage() {
  return (
    <>
      <PageHero
        eyebrow={researchPage.hero.eyebrow}
        title={researchPage.hero.title}
        lead={researchPage.hero.lead}
      />
      <SectionShell>
        <div className="grid gap-8 md:grid-cols-3">
          {researchPage.themes.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.06}>
              <article className="h-full rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-surface p-6">
                <h2 className="font-inst-serif text-2xl text-icu-ink">{t.title}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-icu-ink-secondary">
                  {t.summary}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </SectionShell>
      <SectionShell muted id={researchPage.library.id} className="border-b-0">
        <SectionHeading
          title={researchPage.library.title}
          description={researchPage.library.description}
        />
      </SectionShell>
    </>
  );
}
