"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: "2rem", fontFamily: "system-ui,sans-serif" }}>
        <h1 style={{ fontSize: "1.25rem" }}>Erro ao carregar a aplicação</h1>
        <p style={{ color: "#444" }}>{error.message}</p>
        {error.digest ? (
          <p style={{ fontSize: "0.85rem", color: "#666" }}>Digest: {error.digest}</p>
        ) : null}
        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Tentar outra vez
        </button>
      </body>
    </html>
  );
}
