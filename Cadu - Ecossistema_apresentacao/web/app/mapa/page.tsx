import { EcosystemCanvas } from "@/components/ecosystem/EcosystemCanvas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa do ecossistema · CADU",
  description:
    "Mapa interativo: Casa do Urso, CADU, Instituto e relações institucionais.",
};

export default function MapaEcosystemPage() {
  return <EcosystemCanvas />;
}
