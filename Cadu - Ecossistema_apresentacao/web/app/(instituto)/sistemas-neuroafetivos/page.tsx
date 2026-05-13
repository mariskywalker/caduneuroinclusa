import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionHeading, SectionShell } from "@/components/instituto/sections/section-shell";
import { SystemPillarsGrid } from "@/components/instituto/sections/system-pillars-grid";
import { Container } from "@/components/instituto/layout/container";
import { FadeIn } from "@/components/instituto/motion/fade-in";
import { sistemasPage } from "@/content/instituto/sistemas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistemas Neuroafetivos",
  description: sistemasPage.hero.lead,
};

export default function SistemasNeuroafetivosPage() {
  return (
    <>
      <PageHero
        variant="deep"
        eyebrow={sistemasPage.hero.eyebrow}
        title={sistemasPage.hero.title}
        lead={sistemasPage.hero.lead}
      />
      <section className="border-y border-white/10 bg-icu-depth py-14 text-icu-depth-foreground">
        <Container>
          <p className="mx-auto max-w-3xl text-center font-inst-mono text-[0.72rem] uppercase tracking-[0.2em] text-icu-depth-foreground/55">
            {sistemasPage.hero.note}
          </p>
        </Container>
      </section>

      <SectionShell>
        <SectionHeading
          title={sistemasPage.introduction.title}
          description={sistemasPage.introduction.paragraphs[0]}
        />
        <FadeIn className="mt-8 max-w-3xl text-[1.05rem] leading-relaxed text-icu-ink-secondary">
          <p>{sistemasPage.introduction.paragraphs[1]}</p>
        </FadeIn>
      </SectionShell>

      <SectionShell muted>
        <SectionHeading
          eyebrow="Sete pilares"
          title="Um mapa vivo, não uma lista de buzzwords."
          description="Cada card pode ser expandido no futuro em páginas filhas, datasets ou playbooks sem alterar a malha visual."
        />
        <div className="mt-14">
          <SystemPillarsGrid pillars={sistemasPage.pillars} />
        </div>
      </SectionShell>

      <SectionShell className="border-b-0">
        <div className="grid gap-8 rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-muted/30 p-8 md:grid-cols-[1fr_1.4fr] md:p-10">
          <h2 className="font-inst-serif text-3xl tracking-tight text-icu-ink">
            {sistemasPage.closing.title}
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-icu-ink-secondary">
            {sistemasPage.closing.body}
          </p>
        </div>
      </SectionShell>
    </>
  );
}
