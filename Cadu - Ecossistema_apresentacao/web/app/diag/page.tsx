import Link from "next/link";

export default function DiagPage() {
  return (
    <main
      style={{
        fontFamily: "system-ui,sans-serif",
        padding: "2rem",
        maxWidth: "40rem",
        lineHeight: 1.5,
      }}
    >
      <h1 style={{ fontSize: "1.25rem" }}>Diagnóstico</h1>
      <p>
        Se vês esta página, o servidor Next.js está a responder e o HTML chega ao
        browser.
      </p>
      <p>
        <Link href="/" style={{ color: "#0369a1" }}>
          Voltar ao início do Instituto
        </Link>
      </p>
    </main>
  );
}
