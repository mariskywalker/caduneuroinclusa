"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

import type { PremiumHeroCopy } from "@/content/instituto/home-premium";

export function HeroManifesto({ data }: { data: PremiumHeroCopy }) {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current || !layerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(layerRef.current, {
        y: 56,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <header
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden pb-16 pt-[calc(var(--icu-header-h)+3rem)] md:pb-24 md:pt-[calc(var(--icu-header-h)+4rem)]"
    >
      <div
        ref={layerRef}
        className="pointer-events-none absolute inset-0 -z-10 will-change-transform"
        aria-hidden
      >
        <div className="premium-hero-mesh absolute inset-0" />
        <div className="animate-premium-drift absolute -left-[20%] top-[10%] h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(196,92,62,0.14),transparent_62%)] blur-3xl" />
        <div className="animate-premium-drift-reverse absolute -right-[15%] bottom-[5%] h-[48vmin] w-[48vmin] rounded-full bg-[radial-gradient(circle_at_70%_60%,rgba(139,110,80,0.12),transparent_58%)] blur-3xl [animation-delay:-6s]" />
        <svg
          className="absolute bottom-0 left-0 right-0 h-[42%] opacity-[0.07]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            className="text-premium-ink"
            d="M0,224 C180,120 360,280 540,200 C720,120 900,40 1080,96 C1260,152 1380,96 1440,128 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <div className="premium-container">
        <motion.p
          className="font-inst-mono text-[0.65rem] uppercase tracking-[0.26em] text-premium-ink-muted"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.eyebrow}
        </motion.p>

        <motion.h1
          className="font-premium-display mt-6 max-w-[14ch] text-[clamp(2.35rem,6.5vw,4.75rem)] font-light leading-[1.02] tracking-[-0.03em] text-premium-ink"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.manifesto}
        </motion.h1>

        <motion.p
          className="mt-10 max-w-2xl text-lg leading-relaxed text-premium-ink-secondary md:text-xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.subline}
        </motion.p>

        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <span
            className={cn(
              "font-inst-mono text-[0.62rem] uppercase tracking-[0.2em] text-premium-ink-faint",
              !reduced && "motion-safe:animate-premium-nudge",
            )}
          >
            {data.scrollHint}
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-[rgba(184,92,66,0.45)] to-transparent" aria-hidden />
        </motion.div>
      </div>
    </header>
  );
}
