"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useId, useRef } from "react";

export function ContinuityExperience() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });
  const id = useId();

  return (
    <div ref={root} className="relative min-h-[340vh] bg-bg-deep">
      <div className="sticky top-0 z-0 flex h-[100dvh] items-center justify-center overflow-hidden px-4">
        <svg
          className="h-[min(72vh,640px)] w-full max-w-4xl text-fg/25"
          viewBox="0 0 800 520"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient
              id={`${id}-g`}
              x1="80"
              y1="400"
              x2="720"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" stopOpacity="0.12" />
              <stop offset="0.5" stopColor="currentColor" stopOpacity="0.5" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ContinuityRibbon
            gradientId={`${id}-g`}
            scrollYProgress={scrollYProgress}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl space-y-[22vh] px-6 pb-48 pt-[8vh] md:px-0">
        <header>
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-fg-muted">
            continuidade
          </p>
          <h1 className="font-serif text-balance text-[clamp(1.65rem,3.6vw,2.5rem)] font-light leading-snug text-fg">
            Uma linha que atravessa instituições, invisível até falhar.
          </h1>
        </header>

        <ContinuityBlock
          k="família"
          body="Afeto e rotina como dados legítimos no mesmo plano do clínico."
        />
        <ContinuityBlock
          k="escola"
          body="Observação pedagógica como continuidade, não como relatório isolado."
        />
        <ContinuityBlock
          k="clínica"
          body="Decisões ancoradas em trajetória, não em instantâneo."
        />
        <ContinuityBlock
          k="sistema"
          body="Coordenação que não compete com o humano; sustenta o que já existe."
        />
      </div>
    </div>
  );
}

function ContinuityRibbon({
  gradientId,
  scrollYProgress,
}: {
  gradientId: string;
  scrollYProgress: MotionValue<number>;
}) {
  const pathLength = useTransform(scrollYProgress, [0.05, 0.55], [0, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.88, 1],
    [0, 1, 1, 0.45],
  );

  return (
    <motion.path
      d="M 72 420 C 180 360, 220 200, 340 180 S 520 120, 620 200 S 720 320, 728 96"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.35"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      style={{ pathLength, opacity }}
    />
  );
}

function ContinuityBlock({ k, body }: { k: string; body: string }) {
  const r = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: r,
    offset: ["start 0.9", "start 0.35"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  const o = useTransform(scrollYProgress, [0, 0.35, 1], [0.2, 1, 0.85]);

  return (
    <motion.div ref={r} style={{ y, opacity: o }} className="border-t border-line pt-14">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
        {k}
      </p>
      <p className="mt-5 max-w-md font-serif text-[clamp(1.05rem,2vw,1.25rem)] font-light leading-relaxed text-fg-muted">
        {body}
      </p>
    </motion.div>
  );
}
