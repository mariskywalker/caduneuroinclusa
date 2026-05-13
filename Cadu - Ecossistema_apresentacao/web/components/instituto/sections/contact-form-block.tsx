"use client";

import { useState } from "react";

import { FadeIn } from "@/components/instituto/motion/fade-in";
import { Button } from "@/components/instituto/ui/button";

export function ContactFormBlock() {
  const [sent, setSent] = useState(false);

  return (
    <FadeIn>
      <form
        className="mx-auto max-w-xl space-y-5 rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-surface p-6 md:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <label htmlFor="nome" className="font-inst-mono text-[0.65rem] uppercase tracking-[0.18em] text-icu-ink-faint">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            autoComplete="name"
            className="mt-2 w-full rounded-[var(--icu-radius-sm)] border border-icu-border bg-icu-canvas px-3 py-2.5 text-[0.95rem] text-icu-ink outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-icu-accent/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-inst-mono text-[0.65rem] uppercase tracking-[0.18em] text-icu-ink-faint">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-[var(--icu-radius-sm)] border border-icu-border bg-icu-canvas px-3 py-2.5 text-[0.95rem] text-icu-ink outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-icu-accent/30"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="font-inst-mono text-[0.65rem] uppercase tracking-[0.18em] text-icu-ink-faint">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            className="mt-2 w-full resize-y rounded-[var(--icu-radius-sm)] border border-icu-border bg-icu-canvas px-3 py-2.5 text-[0.95rem] text-icu-ink outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-icu-accent/30"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Enviar
        </Button>
        {sent ? (
          <p className="text-[0.9rem] text-icu-ink-secondary" role="status">
            Obrigado. Em produção, esta mensagem seria enviada ao CRM ou fila segura.
          </p>
        ) : null}
      </form>
    </FadeIn>
  );
}
