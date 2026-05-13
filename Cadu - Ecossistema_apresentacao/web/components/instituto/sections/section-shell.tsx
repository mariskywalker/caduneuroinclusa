import type { ReactNode } from "react";

import { FadeIn } from "@/components/instituto/motion/fade-in";
import { Container } from "@/components/instituto/layout/container";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <FadeIn className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="font-inst-mono text-[0.68rem] uppercase tracking-[0.22em] text-icu-ink-faint">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-inst-serif text-3xl tracking-tight text-icu-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-icu-ink-secondary">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}

export function SectionShell({
  children,
  id,
  className,
  muted,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-icu-border py-20 md:py-24",
        muted && "bg-icu-muted/40",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
