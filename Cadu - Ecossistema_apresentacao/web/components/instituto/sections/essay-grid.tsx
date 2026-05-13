import Link from "next/link";

import { FadeIn } from "@/components/instituto/motion/fade-in";
import { Card, CardContent } from "@/components/instituto/ui/card";
import type { EssayItem } from "@/content/instituto/essays";

export function EssayGrid({ essays }: { essays: readonly EssayItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {essays.map((essay, i) => (
        <FadeIn key={essay.id} delay={i * 0.05}>
          <Link href={`/ensaios#${essay.id}`} className="group block h-full">
            <Card className="h-full border-transparent transition-colors duration-200 group-hover:border-icu-border group-hover:bg-icu-muted/25">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <span className="font-inst-mono text-[0.62rem] uppercase tracking-[0.2em] text-icu-ink-faint">
                  {essay.category} · {essay.minutes} min
                </span>
                <h3 className="font-inst-serif text-2xl tracking-tight text-icu-ink group-hover:text-icu-accent">
                  {essay.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-icu-ink-secondary">
                  {essay.dek}
                </p>
              </CardContent>
            </Card>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
