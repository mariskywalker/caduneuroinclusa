import Link from "next/link";

import { FadeInItem, FadeInStagger } from "@/components/instituto/motion/fade-in";
import type { EcosystemCard } from "@/content/instituto/home";
import { Card, CardContent } from "@/components/instituto/ui/card";

export function EcosystemTrio({ items }: { items: EcosystemCard[] }) {
  return (
    <FadeInStagger className="grid gap-6 md:grid-cols-3">
      {items.map((card) => (
        <FadeInItem key={card.id}>
          <Link href={card.href} className="group block h-full">
            <Card className="h-full border-transparent bg-icu-surface transition-colors duration-200 group-hover:border-icu-border group-hover:bg-icu-muted/30">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span className="font-inst-mono text-[0.62rem] uppercase tracking-[0.2em] text-icu-warm">
                  {card.layer}
                </span>
                <h3 className="font-inst-serif text-2xl text-icu-ink group-hover:text-icu-accent">
                  {card.name}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-icu-ink-secondary">
                  {card.role}
                </p>
                <span className="mt-auto font-inst-mono text-[0.65rem] uppercase tracking-[0.16em] text-icu-ink-faint">
                  Explorar →
                </span>
              </CardContent>
            </Card>
          </Link>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}
