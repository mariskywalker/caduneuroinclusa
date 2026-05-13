import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionHeading, SectionShell } from "@/components/instituto/sections/section-shell";
import { FadeIn } from "@/components/instituto/motion/fade-in";
import { Separator } from "@/components/instituto/ui/separator";
import { aboutPage } from "@/content/instituto/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: aboutPage.hero.lead,
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        lead={aboutPage.hero.lead}
      />

      <SectionShell id={aboutPage.mission.id}>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading title={aboutPage.mission.title} />
          <FadeIn>
            <p className="text-[1.08rem] leading-relaxed text-icu-ink-secondary">
              {aboutPage.mission.body}
            </p>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell muted>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading title={aboutPage.vision.title} />
          <FadeIn>
            <p className="text-[1.08rem] leading-relaxed text-icu-ink-secondary">
              {aboutPage.vision.body}
            </p>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell id={aboutPage.team.id}>
        <SectionHeading title={aboutPage.team.title} description={aboutPage.team.intro} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutPage.team.members.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.05}>
              <li className="rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-surface p-5">
                <p className="font-inst-serif text-xl text-icu-ink">{m.name}</p>
                <p className="mt-1 font-inst-mono text-[0.62rem] uppercase tracking-[0.18em] text-icu-ink-faint">
                  {m.role}
                </p>
                <p className="mt-3 text-[0.9rem] text-icu-ink-secondary">{m.area}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </SectionShell>

      <SectionShell muted id={aboutPage.partners.id} className="border-b-0">
        <SectionHeading title={aboutPage.partners.title} description={aboutPage.partners.body} />
        <FadeIn className="mt-10 max-w-2xl">
          <Separator />
          <ol className="mt-8 space-y-4 text-[0.95rem] text-icu-ink-secondary">
            <li>2019: fundação do Instituto como braço de pesquisa da Casa do Urso.</li>
            <li>2022: primeiros frameworks públicos de Sistemas Neuroafetivos.</li>
            <li>2024: parcerias internacionais e expansão da biblioteca editorial.</li>
            <li>2026: plataforma institucional modular e pronta para CMS.</li>
          </ol>
        </FadeIn>
      </SectionShell>
    </>
  );
}
