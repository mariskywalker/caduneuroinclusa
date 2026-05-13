import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionShell } from "@/components/instituto/sections/section-shell";
import { EssayGrid } from "@/components/instituto/sections/essay-grid";
import { essaysPage } from "@/content/instituto/essays";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ensaios",
  description: essaysPage.hero.lead,
};

export default function EnsaiosPage() {
  return (
    <>
      <PageHero
        eyebrow={essaysPage.hero.eyebrow}
        title={essaysPage.hero.title}
        lead={essaysPage.hero.lead}
      />
      <SectionShell muted className="border-b-0">
        <EssayGrid essays={essaysPage.essays} />
      </SectionShell>
    </>
  );
}
