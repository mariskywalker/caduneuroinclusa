import type { NeuroSystemPillar } from "@/content/instituto/sistemas";
import { cn } from "@/lib/utils";

export function SystemPillarsGrid({ pillars }: { pillars: readonly NeuroSystemPillar[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {pillars.map((pillar, i) => (
        <article
          key={pillar.slug}
          id={pillar.slug}
          className="scroll-mt-[calc(var(--icu-header-h)+1rem)]"
        >
          <PillarInner pillar={pillar} index={i} />
        </article>
      ))}
    </div>
  );
}

function PillarInner({
  pillar,
  index,
}: {
  pillar: NeuroSystemPillar;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[var(--icu-radius-lg)] border border-icu-border bg-icu-surface p-6 md:p-8",
        "transition-shadow duration-200 hover:shadow-[0_12px_40px_-28px_rgba(20,18,16,0.35)]",
      )}
    >
      <span className="font-inst-mono text-[0.62rem] uppercase tracking-[0.2em] text-icu-ink-faint">
        {String(index + 1).padStart(2, "0")} · {pillar.subtitle}
      </span>
      <h2 className="mt-3 font-inst-serif text-2xl tracking-tight text-icu-ink md:text-3xl">
        {pillar.title}
      </h2>
      <p className="mt-4 text-[1.02rem] leading-relaxed text-icu-ink-secondary">
        {pillar.thesis}
      </p>
      <ul className="mt-6 space-y-2 border-t border-icu-border pt-6">
        {pillar.scope.map((line) => (
          <li
            key={line}
            className="flex gap-2 text-[0.92rem] leading-snug text-icu-ink-secondary"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-mint/80" aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[0.88rem] leading-relaxed text-icu-ink-faint">{pillar.bridges}</p>
    </div>
  );
}
