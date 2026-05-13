import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Reservado para futuras animações CSS (sem efeito hoje). */
  delay?: number;
  y?: number;
};

/** Conteúdo sempre visível no HTML (evita opacity:0 no SSR se o JS falhar). */
export function FadeIn({ children, className }: FadeInProps) {
  return <div className={cn(className)}>{children}</div>;
}

export function FadeInStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-6", className)}>{children}</div>;
}

export function FadeInItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
