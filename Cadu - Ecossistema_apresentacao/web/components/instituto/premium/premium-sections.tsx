"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  premiumCta,
  premiumFamily,
  premiumImpactPillars,
  premiumInnovation,
  premiumProblem,
  premiumPrograms,
  premiumVision,
  premiumWhy,
} from "@/content/instituto/home-premium";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px", amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionWhyExists() {
  return (
    <section className="border-t border-icu-border/80 bg-icu-surface/80 py-24 md:py-32">
      <div className="premium-container">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
            {premiumWhy.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[18ch] text-balance text-4xl font-light leading-[1.08] tracking-tight text-icu-ink md:text-5xl">
            {premiumWhy.title}
          </h2>
          <div className="mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-icu-ink-secondary">
            {premiumWhy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionProblem() {
  return (
    <section className="relative overflow-hidden border-t border-icu-border/60 bg-icu-canvas py-24 md:py-32">
      <div
        className="pointer-events-none absolute -right-[20%] top-1/2 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,92,66,0.07),transparent_68%)] blur-3xl"
        aria-hidden
      />
      <div className="premium-container relative">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
            {premiumProblem.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[20ch] text-balance text-4xl font-light leading-[1.08] tracking-tight text-icu-ink md:text-[2.65rem]">
            {premiumProblem.title}
          </h2>
          <ul className="mt-14 max-w-2xl space-y-5 text-lg leading-relaxed text-icu-ink-secondary">
            {premiumProblem.bullets.map((b) => (
              <li key={b} className="flex gap-4 border-l border-icu-accent/35 pl-5">
                <span className="text-icu-accent">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-14 max-w-3xl text-lg leading-relaxed text-icu-ink-secondary md:text-xl">
            {premiumProblem.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionVisionSticky() {
  return (
    <section className="border-t border-icu-border/80 bg-icu-surface py-24 md:py-36">
      <div className="premium-container">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="lg:sticky lg:top-[calc(var(--icu-header-h)+2.5rem)] lg:self-start">
            <Reveal>
              <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
                {premiumVision.eyebrow}
              </p>
              <h2 className="mt-4 max-w-[14ch] text-balance text-4xl font-light leading-[1.06] tracking-tight text-icu-ink md:text-5xl">
                {premiumVision.title}
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-icu-ink-secondary">{premiumVision.lede}</p>
            </Reveal>
          </div>
          <div className="flex flex-col gap-10 md:gap-14">
            {premiumVision.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.05}>
                <article className="group rounded-sm border border-icu-border/70 bg-icu-canvas/50 p-8 transition-colors duration-300 hover:border-icu-accent/30 hover:bg-icu-canvas md:p-10">
                  <h3 className="text-xl font-medium tracking-tight text-icu-ink md:text-2xl">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-icu-ink-secondary md:text-[1.05rem]">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionImpactPillars() {
  return (
    <section className="border-t border-icu-border/60 bg-icu-depth py-24 text-icu-depth-foreground md:py-32">
      <div className="premium-container">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
            {premiumImpactPillars.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[22ch] text-balance text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
            {premiumImpactPillars.title}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {premiumImpactPillars.items.map((item, i) => (
            <Reveal key={item.kicker} delay={i * 0.06} className="bg-icu-depth p-8 md:p-9">
              <span className="font-inst-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
                {item.kicker}
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-white md:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-[0.95rem]">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionPrograms() {
  return (
    <section className="border-t border-icu-border/80 bg-icu-surface py-24 md:py-32">
      <div className="premium-container">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
            {premiumPrograms.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[18ch] text-balance text-4xl font-light leading-[1.08] text-icu-ink md:text-5xl">
            {premiumPrograms.title}
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-icu-border/80 border-t border-b border-icu-border/80">
          {premiumPrograms.rows.map((row, i) => (
            <Reveal key={row.name} delay={i * 0.04}>
              <Link
                href={row.href}
                className="group flex flex-col gap-2 py-8 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-10 md:py-10"
              >
                <span className="text-xl font-medium tracking-tight text-icu-ink transition-colors group-hover:text-icu-accent md:text-2xl">
                  {row.name}
                </span>
                <span className="font-inst-mono text-[0.62rem] uppercase tracking-[0.18em] text-icu-ink-faint">
                  {row.meta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionInnovation() {
  return (
    <section className="border-t border-icu-border/60 bg-icu-canvas py-24 md:py-32">
      <div className="premium-container grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
            {premiumInnovation.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[16ch] text-balance text-4xl font-light leading-[1.08] text-icu-ink md:text-5xl">
            {premiumInnovation.title}
          </h2>
          <div className="mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-icu-ink-secondary">
            {premiumInnovation.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:justify-self-end">
          <Link
            href={premiumInnovation.cta.href}
            className="inline-flex border-b border-icu-ink/25 pb-1 font-inst-mono text-[0.68rem] uppercase tracking-[0.2em] text-icu-ink transition-colors hover:border-icu-accent hover:text-icu-accent"
          >
            {premiumInnovation.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionFamily() {
  return (
    <section className="border-t border-icu-border/80 bg-icu-surface py-24 md:py-32">
      <div className="premium-container max-w-4xl">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
            {premiumFamily.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-light leading-[1.08] text-icu-ink md:text-5xl">
            {premiumFamily.title}
          </h2>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-icu-ink-secondary">
            {premiumFamily.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={premiumFamily.cta.href}
            className="mt-10 inline-flex border-b border-icu-ink/25 pb-1 font-inst-mono text-[0.68rem] uppercase tracking-[0.2em] text-icu-ink transition-colors hover:border-icu-accent hover:text-icu-accent"
          >
            {premiumFamily.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionFinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-icu-border/60 py-28 md:py-36">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,#f0e8df_0%,#ebe4d9_38%,#e8dfd4_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-[10%] top-0 h-[50vmin] w-[50vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(184,92,66,0.11),transparent_62%)] blur-3xl" aria-hidden />
      <div className="premium-container relative text-center">
        <Reveal>
          <p className="font-inst-mono text-[0.65rem] uppercase tracking-[0.22em] text-icu-accent">
            {premiumCta.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-[18ch] text-balance text-4xl font-light leading-[1.08] text-icu-ink md:text-[2.75rem]">
            {premiumCta.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-icu-ink-secondary md:text-xl">
            {premiumCta.lede}
          </p>
        </Reveal>
        <div className="mt-12 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-5">
          {premiumCta.actions.map((a, i) => (
            <Reveal key={a.label} delay={0.08 + i * 0.05}>
              <Link
                href={a.href}
                className={
                  a.variant === "primary"
                    ? "inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-full bg-icu-depth px-8 text-sm font-medium text-icu-depth-foreground transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
                    : a.variant === "secondary"
                      ? "inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-full border border-icu-border bg-icu-surface/80 px-8 text-sm font-medium text-icu-ink transition-colors hover:border-icu-accent/40 hover:text-icu-accent"
                      : "inline-flex min-h-11 items-center justify-center px-5 text-sm font-medium text-icu-ink-secondary underline-offset-4 transition-colors hover:text-icu-accent"
                }
              >
                {a.label}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
