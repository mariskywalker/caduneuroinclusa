"use client";

import { HeroManifesto } from "@/components/instituto/premium/hero-manifesto";
import {
  SectionFamily,
  SectionFinalCta,
  SectionImpactPillars,
  SectionInnovation,
  SectionProblem,
  SectionPrograms,
  SectionVisionSticky,
  SectionWhyExists,
} from "@/components/instituto/premium/premium-sections";
import { SmoothScrollProvider } from "@/components/instituto/premium/smooth-scroll-provider";
import { premiumHero } from "@/content/instituto/home-premium";

export function PremiumHomeRoot() {
  return (
    <SmoothScrollProvider>
      <HeroManifesto data={premiumHero} />
      <SectionWhyExists />
      <SectionProblem />
      <SectionVisionSticky />
      <SectionImpactPillars />
      <SectionPrograms />
      <SectionInnovation />
      <SectionFamily />
      <SectionFinalCta />
    </SmoothScrollProvider>
  );
}
