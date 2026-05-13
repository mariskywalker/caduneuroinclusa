import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const widths = {
  default: "max-w-[var(--icu-content-max)]",
  prose: "max-w-[var(--icu-prose-max)]",
  wide: "max-w-[88rem]",
} as const;

export function Container({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: keyof typeof widths;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        widths[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
