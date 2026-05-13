"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const shards = [
  "escola",
  "clínica",
  "família",
  "município",
  "prontuário",
  "conversa informal",
  "exame",
  "rotina",
];

export function FragmentationExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const driftA = useTransform(scrollYProgress, [0, 1], ["-12%", "8%"]);
  const driftB = useTransform(scrollYProgress, [0, 1], ["14%", "-10%"]);
  const driftC = useTransform(scrollYProgress, [0, 1], ["-6%", "14%"]);

  return (
    <div ref={ref} className="relative min-h-[300vh] overflow-hidden bg-bg-deep">
      <motion.div
        style={{ x: driftA }}
        className="pointer-events-none absolute left-[-5%] top-[18%] w-[45%] text-[clamp(3rem,12vw,9rem)] font-serif font-light leading-none text-fg/[0.04]"
        aria-hidden
      >
        fragmentação
      </motion.div>
      <motion.div
        style={{ x: driftB }}
        className="pointer-events-none absolute right-[-8%] top-[48%] w-[50%] text-right text-[clamp(2.5rem,10vw,7rem)] font-serif font-light leading-none text-fg/[0.035]"
        aria-hidden
      >
        sistemas
      </motion.div>
      <motion.div
        style={{ x: driftC }}
        className="pointer-events-none absolute bottom-[12%] left-[10%] text-[clamp(2rem,8vw,5rem)] font-serif italic text-fg/[0.03]"
        aria-hidden
      >
        silêncio entre
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-[20vh] md:px-12">
        <header className="mb-32 md:mb-48">
          <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-fg-muted">
            fragmentação
          </p>
          <h1 className="font-serif text-balance text-[clamp(1.6rem,3.8vw,2.6rem)] font-light leading-snug text-fg">
            Cada instituição guarda um pedaço. Ninguém guarda o todo, até que
            a infraestrutura se torne memória compartilhada.
          </h1>
        </header>

        <div className="columns-1 gap-16 md:columns-2 md:gap-x-20">
          {shards.map((word, i) => (
            <Shard key={word} label={word} index={i} />
          ))}
        </div>

        <FragmentClosing scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function FragmentClosing({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, [0.55, 0.75], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0.55, 0.8], [30, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="mt-40 max-w-lg font-serif text-lg font-light leading-relaxed text-fg-muted md:text-xl"
    >
      CADU não “integra dashboards”. Reduz a distância entre o que foi vivido
      e o que pode ser lembrado com rigor.
    </motion.p>
  );
}

function Shard({ label, index }: { label: string; index: number }) {
  const r = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: r,
    offset: ["start 0.95", "start 0.5"],
  });
  const skew = useTransform(scrollYProgress, [0, 1], [index % 2 ? 3 : -3, 0]);
  const op = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 1, 0.9]);

  return (
    <motion.p
      ref={r}
      style={{ skewX: skew, opacity: op }}
      className="mb-12 break-inside-avoid font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-light text-fg"
    >
      {label}
    </motion.p>
  );
}
