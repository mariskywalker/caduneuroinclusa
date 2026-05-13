import { PageHero } from "@/components/instituto/sections/page-hero";
import { SectionHeading, SectionShell } from "@/components/instituto/sections/section-shell";
import { EcosystemLayers } from "@/components/instituto/sections/ecosystem-layers";
import { ecosystemPage } from "@/content/instituto/ecosystem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecossistema",
  description: ecosystemPage.hero.lead,
};

export default function EcossistemaPage() {
  return (
    <>
      <PageHero
        eyebrow={ecosystemPage.hero.eyebrow}
        title={ecosystemPage.hero.title}
        lead={ecosystemPage.hero.lead}
      />
      <SectionShell muted className="border-b-0">
        <SectionHeading
          eyebrow="Camadas"
          title="Arquitetura institucional em três frentes."
          description="Os detalhes operacionais vivem em cada organização; aqui mostramos o contrato conceitual entre elas."
        />
        <div className="mt-14">
          <EcosystemLayers />
        </div>
      </SectionShell>
    </>
  );
}
