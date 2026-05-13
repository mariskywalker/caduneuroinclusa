import type { Metadata } from "next";
import "./critical.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://instituto.casadourso.com.br"),
  title: {
    default: "Instituto Casa do Urso",
    template: "%s · Instituto Casa do Urso",
  },
  description:
    "Pesquisa, formação e transformação institucional em torno dos Sistemas Neuroafetivos: a camada intelectual e editorial do ecossistema Casa do Urso.",
  openGraph: {
    title: "Instituto Casa do Urso",
    description:
      "Sistemas Neuroafetivos: infraestruturas emocionais, sensoriais e institucionais para o desenvolvimento humano ao longo do tempo.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
