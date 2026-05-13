import Link from "next/link";

import { Container } from "@/components/instituto/layout/container";
import { Button } from "@/components/instituto/ui/button";
import { cn } from "@/lib/utils";

type Cta = { label: string; href: string };

export function PageHero({
  eyebrow,
  title,
  lead,
  className,
  primaryCta,
  secondaryCta,
  variant = "default",
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  className?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  variant?: "default" | "deep";
}) {
  return (
    <section
      className={cn(
        "border-b border-icu-border py-20 md:py-28",
        variant === "deep" && "bg-icu-depth text-icu-depth-foreground",
        className,
      )}
    >
      <Container width="prose" className="max-w-3xl">
        {eyebrow ? (
          <p
            className={cn(
              "font-inst-mono text-[0.68rem] uppercase tracking-[0.22em]",
              variant === "deep"
                ? "text-icu-depth-foreground/55"
                : "text-icu-ink-faint",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 font-inst-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
          {title}
        </h1>
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed md:text-xl",
            variant === "deep"
              ? "text-icu-depth-foreground/80"
              : "text-icu-ink-secondary",
          )}
        >
          {lead}
        </p>
        {primaryCta || secondaryCta ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button variant={variant === "deep" ? "secondary" : "primary"} asChild>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button
                variant={variant === "deep" ? "ghost" : "secondary"}
                className={variant === "deep" ? "text-icu-depth-foreground hover:bg-white/10" : undefined}
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
