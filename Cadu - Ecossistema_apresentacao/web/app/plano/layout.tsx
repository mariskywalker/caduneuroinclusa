import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecossistema Casa do Urso: Master Architecture Plan",
  description:
    "Visão unificada de produtos, marca, governança e crescimento na Casa do Urso.",
};

export default function PlanoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
