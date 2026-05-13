import type { Metadata } from "next";

import { PremiumHomeRoot } from "@/components/instituto/premium/premium-home-root";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Instituto Casa do Urso: excelência em neurodesenvolvimento, ciência, cuidado e impacto social. Nenhuma criança deveria crescer sentindo que nasceu errada.",
};

export default function InstitutoHomePage() {
  return <PremiumHomeRoot />;
}
