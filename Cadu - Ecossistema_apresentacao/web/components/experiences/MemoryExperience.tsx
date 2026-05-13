"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const strata = [
  {
    depth: "superfície",
    pt: "O que a família lembra em silêncio.",
    en: "What the family holds without naming.",
  },
  {
    depth: "registro",
    pt: "Notas que sobrevivem à rotina.",
    en: "Notes that outlast the shift change.",
  },
  {
    depth: "protocolo",
    pt: "Padrões que instituições reconhecem.",
    en: "Patterns institutions can trust.",
  },
  {
    depth: "substrato",
    pt: "A criança como eixo, não o arquivo.",
    en: "The child as axis, not the file.",
  },
  {
    depth: "legado",
    pt: "Memória que permite cuidado futuro.",
    en: "Memory that enables future care.",
  },
];

export function MemoryExperience() {
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const bgShift = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(10,9,8,1)", "rgba(18,16,14,1)"],
  );

  return (
    <motion.div
      ref={wrap}
      style={{ backgroundColor: bgShift }}
      className="relative min-h-[420vh]"
    >
      <div className="sticky top-0 z-0 flex h-screen items-center justify-center overflow-hidden">
        <MemoryStickyIntro scrollYProgress={scrollYProgress} />
      </div>

      <div className="relative z-10 space-y-0 px-6 pb-48 pt-[15vh] md:px-20">
        {strata.map((s, i) => (
          <Stratum key={s.depth} index={i} {...s} />
        ))}
      </div>
    </motion.div>
  );
}

function MemoryStickyIntro({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, [0, 0.12], [0, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="font-serif text-balance px-6 text-center text-[clamp(1.25rem,3vw,2rem)] font-light leading-snug text-fg md:max-w-2xl"
    >
      A história acompanha a criança, não o sistema que a atendeu por
      acaso.
    </motion.p>
  );
}

function Stratum({
  depth,
  pt,
  en,
  index,
}: {
  depth: string;
  pt: string;
  en: string;
  index: number;
}) {
  const el = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start 0.9", "start 0.35"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80 * (index % 2 === 0 ? 1 : -0.6), 0],
  );
  const op = useTransform(scrollYProgress, [0, 0.45, 1], [0.15, 1, 0.85]);

  return (
    <motion.article
      ref={el}
      style={{ y, opacity: op }}
      className="min-h-[85vh] border-t border-line py-24 first:border-t-0 md:py-32"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
        {depth}
      </p>
      <p className="mt-8 max-w-xl font-serif text-[clamp(1.2rem,2.4vw,1.65rem)] font-light leading-relaxed text-fg">
        {pt}
      </p>
      <p className="mt-6 max-w-md text-sm font-light italic leading-relaxed text-fg-muted">
        {en}
      </p>
    </motion.article>
  );
}
