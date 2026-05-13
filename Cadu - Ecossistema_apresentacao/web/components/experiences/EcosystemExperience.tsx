"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const nodes = [
  { id: "criança", x: 50, y: 46, r: 5 },
  { id: "família", x: 28, y: 62, r: 4 },
  { id: "escola", x: 72, y: 58, r: 4 },
  { id: "clínica", x: 38, y: 32, r: 4 },
  { id: "município", x: 68, y: 30, r: 3.5 },
  { id: "memória", x: 50, y: 72, r: 3 },
] as const;

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 5],
];

export function EcosystemExperience() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });
  const float = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <div ref={root} className="relative min-h-[320vh] bg-bg-deep">
      <div className="sticky top-0 z-0 flex h-[100dvh] items-center justify-center px-4">
        <motion.div
          style={{ y: float }}
          className="relative aspect-[4/3] w-full max-w-3xl md:aspect-video"
        >
          <svg
            className="absolute inset-0 h-full w-full text-fg/15"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {edges.map(([a, b], i) => (
              <EdgeLine
                key={`${a}-${b}`}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
            {nodes.map((n, i) => (
              <MapNode
                key={n.id}
                cx={n.x}
                cy={n.y}
                r={n.r}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </svg>
          {nodes.map((n) => (
            <span
              key={n.id}
              className="pointer-events-none absolute font-mono text-[9px] uppercase tracking-[0.25em] text-fg-muted"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                transform: "translate(-50%, 120%)",
              }}
            >
              {n.id}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-xl px-6 pb-48 pt-[6vh] md:px-0">
        <header className="mb-28">
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-fg-muted">
            ecossistema
          </p>
          <h1 className="font-serif text-balance text-[clamp(1.6rem,3.5vw,2.45rem)] font-light leading-snug text-fg">
            Coordenação não é painel. É reconhecimento mútuo de que todos
            orbitam o mesmo centro.
          </h1>
        </header>

        <EcosystemVerse
          text="O mapa não comanda: revela tensões. Onde a linha é tênue, o cuidado
          pede infraestrutura, não mais uma reunião."
        />
        <EcosystemVerse
          text="CADU habita o interstício: traduz continuidade sem substituir
          julgamento clínico ou pedagógico."
        />
      </div>
    </div>
  );
}

function EdgeLine({
  x1,
  y1,
  x2,
  y2,
  index,
  scrollYProgress,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [0.05 + index * 0.04, 0.35 + index * 0.03],
    [0, 0.55],
  );

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth="0.12"
      vectorEffect="non-scaling-stroke"
      style={{ opacity }}
    />
  );
}

function MapNode({
  cx,
  cy,
  r,
  index,
  scrollYProgress,
}: {
  cx: number;
  cy: number;
  r: number;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [0.08 + index * 0.05, 0.4],
    [0.15, 0.85],
  );

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      className="text-accent/40"
      fill="currentColor"
      style={{ opacity }}
    />
  );
}

function EcosystemVerse({ text }: { text: string }) {
  const r = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: r,
    offset: ["start 0.88", "start 0.38"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const o = useTransform(scrollYProgress, [0, 0.4, 1], [0.15, 1, 0.8]);

  return (
    <motion.p
      ref={r}
      style={{ y, opacity: o }}
      className="mb-24 border-t border-line pt-12 font-serif text-[clamp(1.05rem,2.2vw,1.3rem)] font-light leading-relaxed text-fg-muted"
    >
      {text}
    </motion.p>
  );
}
