"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "atlas" },
  { href: "/plano", label: "plano ma" },
  { href: "/memory", label: "memória" },
  { href: "/longitudinal", label: "longitudinal" },
  { href: "/fragmentation", label: "fragmentação" },
  { href: "/continuity", label: "continuidade" },
  { href: "/ecosystem", label: "ecossistema" },
  { href: "/future", label: "futuro" },
] as const;

export function AtlasNav() {
  const pathname = usePathname();

  if (pathname.startsWith("/plano")) {
    return null;
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[60] pointer-events-none"
      aria-label="Camadas do atlas"
    >
      <div className="pointer-events-auto mx-auto flex max-w-[100vw] flex-wrap items-end justify-center gap-x-5 gap-y-2 px-4 pb-6 pt-10 bg-gradient-to-t from-bg-deep via-bg-deep/90 to-transparent">
        {routes.map(({ href, label }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`text-[10px] uppercase tracking-[0.28em] transition-all duration-700 ease-out ${
                active
                  ? "text-fg opacity-100"
                  : "text-fg-muted opacity-35 hover:opacity-80"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
