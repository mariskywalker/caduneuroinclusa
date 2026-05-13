"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const layers = [
  {
    href: "/memory",
    title: "Memória operacional",
    whisper: "o que permanece quando o ato clínico termina",
  },
  {
    href: "/longitudinal",
    title: "Longitudinalidade",
    whisper: "o tempo como superfície de cuidado",
  },
  {
    href: "/fragmentation",
    title: "Fragmentação",
    whisper: "sistemas que nunca conversaram",
  },
  {
    href: "/continuity",
    title: "Continuidade",
    whisper: "uma linha, muitas mãos",
  },
  {
    href: "/ecosystem",
    title: "Ecossistema",
    whisper: "família, escola, clínica no mesmo fio",
  },
  {
    href: "/future",
    title: "Futuro",
    whisper: "infraestrutura que antecede o discurso",
  },
] as const;

export function AtlasIndex() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const yMark = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <div ref={ref} className="relative min-h-[320vh] bg-bg-deep">
      <motion.div
        style={{ y: yMark }}
        className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.07]"
        aria-hidden
      >
        <span className="font-serif text-[clamp(8rem,28vw,22rem)] font-light leading-none tracking-tight">
          CADU
        </span>
      </motion.div>

      <header className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-32 md:px-16 md:pb-40">
        <p className="mb-6 max-w-md text-[11px] uppercase tracking-[0.35em] text-fg-muted">
          atlas conceitual
        </p>
        <h1 className="font-serif text-balance text-[clamp(1.75rem,4.5vw,3.25rem)] font-light leading-[1.12] text-fg md:max-w-3xl">
          Infraestrutura longitudinal de cuidado ao neurodesenvolvimento:
          memória viva, coordenação invisível, confiança institucional.
        </h1>
        <p className="mt-10 max-w-lg text-sm leading-relaxed text-fg-muted">
          Não é um produto. É o substrato onde históricos, afetos e protocolos
          permanecem ligados à mesma criança através do tempo.
        </p>
      </header>

      <div className="relative z-10 space-y-0 px-6 md:px-16">
        {layers.map((layer, i) => (
          <LayerEntry key={layer.href} index={i} {...layer} />
        ))}
      </div>

      <footer className="relative z-10 px-6 pb-40 pt-24 md:px-16">
        <p className="max-w-md font-mono text-[10px] leading-relaxed text-fg-faint">
          scroll narrativo · camadas experimentais · cada rota é um estado do
          sistema
        </p>
      </footer>
    </div>
  );
}

function LayerEntry({
  href,
  title,
  whisper,
  index,
}: {
  href: string;
  title: string;
  whisper: string;
  index: number;
}) {
  const local = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: local,
    offset: ["start 0.85", "start 0.25"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.2, 1, 1, 0.35]);
  const y = useTransform(scrollYProgress, [0, 1], [48, -12]);

  return (
    <motion.div
      ref={local}
      style={{ opacity, y }}
      className="flex min-h-[72vh] flex-col justify-center border-t border-line py-16 first:border-t-0"
    >
      <span className="mb-4 font-mono text-[10px] text-fg-faint">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Link
        href={href}
        className="group block max-w-2xl outline-none transition-colors"
      >
        <h2 className="font-serif text-[clamp(1.5rem,3.2vw,2.4rem)] font-normal italic text-fg transition-colors duration-500 group-hover:text-accent">
          {title}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-muted">
          {whisper}
        </p>
        <span className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] text-fg-faint transition-all duration-700 group-hover:translate-x-1 group-hover:text-fg-muted">
          entrar na camada →
        </span>
      </Link>
    </motion.div>
  );
}
