import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionShell } from "@/components/instituto/sections/section-shell";
import { ContactFormBlock } from "@/components/instituto/sections/contact-form-block";
import { FadeIn } from "@/components/instituto/motion/fade-in";
import { contactPage } from "@/content/instituto/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: contactPage.hero.lead,
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        lead={contactPage.hero.lead}
      />
      <SectionShell muted className="border-b-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <ul className="space-y-6">
            {contactPage.channels.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.05}>
                <li>
                  <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.2em] text-icu-ink-faint">
                    {c.label}
                  </p>
                  <p className="mt-1 text-[1rem] text-icu-ink">{c.value}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
          <ContactFormBlock />
        </div>
      </SectionShell>
    </>
  );
}
