"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "O futuro do neurodesenvolvimento não será mais dados.",
  "Será menos ruído entre quem observa e quem ama.",
  "Infraestrutura quieta, inevitável quando olhamos para trás.",
];

export function FutureExperience() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1]);
  const mist = useTransform(scrollYProgress, [0.4, 0.85], [0, 0.4]);

  return (
    <div ref={root} className="relative min-h-[280vh] bg-bg-deep">
      <motion.div
        style={{ opacity: mist }}
        className="pointer-events-none fixed inset-0 z-40 bg-bg-elevated"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-6 py-32 md:px-24">
        <motion.div style={{ scale }} className="max-w-3xl origin-top">
          <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-fg-muted">
            futuro
          </p>
          {lines.map((line, i) => (
            <FutureLine key={i} text={line} index={i} />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 px-6 pb-48 md:px-24">
        <FutureClosing />
      </div>
    </div>
  );
}

function FutureLine({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const start = 0.92 - index * 0.04;
  const end = 0.48 - index * 0.03;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${start}`, `start ${end}`],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const o = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 0.92]);

  return (
    <motion.p
      ref={ref}
      style={{ y, opacity: o }}
      className="mb-14 font-serif text-[clamp(1.35rem,3.2vw,2.1rem)] font-light leading-snug text-fg md:mb-16"
    >
      {text}
    </motion.p>
  );
}

function FutureClosing() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const o = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity: o }}
      className="max-w-md font-mono text-[10px] leading-relaxed text-fg-faint"
    >
      conceptual atlas · CADU · longitudinal care infrastructure · this layer
      closes without a call to action, only presence
    </motion.p>
  );
}
