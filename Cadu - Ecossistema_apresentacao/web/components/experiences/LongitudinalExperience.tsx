"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const marks = [
  { t: "primeiro contato", sub: "tudo ainda é possibilidade" },
  { t: "marcos invisíveis", sub: "mudanças que o olhar médio não nomeia" },
  { t: "rearticulação", sub: "escola e clínica no mesmo tempo" },
  { t: "continuidade frágil", sub: "quando o sistema troca de mãos" },
  { t: "horizonte aberto", sub: "o cuidado como duração, não como episódio" },
];

export function LongitudinalExperience() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });
  const lineH = useTransform(scrollYProgress, [0.05, 0.92], ["8%", "92%"]);

  return (
    <div ref={root} className="relative min-h-[380vh] bg-bg-deep">
      <div className="pointer-events-none fixed left-[8%] top-0 z-20 hidden h-full w-px md:left-[12%] md:block">
        <motion.div
          className="absolute top-0 w-px origin-top bg-gradient-to-b from-transparent via-fg/25 to-fg/10"
          style={{ height: lineH }}
        />
      </div>

      <header className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:ml-[18%] md:max-w-2xl md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-fg-muted">
            longitudinal
          </p>
          <h1 className="font-serif text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-light leading-tight text-fg">
            O eixo do tempo não é linha de produção: é superfície onde o
            cuidado deixa camadas.
          </h1>
        </motion.div>
      </header>

      <div className="relative z-10 space-y-0 px-6 md:ml-[18%] md:max-w-xl md:px-0">
        {marks.map((m, i) => (
          <Mark key={m.t} {...m} index={i} />
        ))}
      </div>

      <div className="h-[40vh]" aria-hidden />
    </div>
  );
}

function Mark({
  t,
  sub,
  index,
}: {
  t: string;
  sub: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "start 0.4"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -28 : 28, 0]);
  const o = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0.75]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity: o }}
      className="min-h-[70vh] border-t border-line py-20 md:py-28"
    >
      <div className="flex gap-6 md:gap-10">
        <span className="mt-1 font-mono text-[10px] text-fg-faint">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <div>
          <h2 className="font-serif text-xl font-light text-fg md:text-2xl">
            {t}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
            {sub}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
