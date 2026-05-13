"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { EcosystemNodeData } from "./ecosystem-types";
import { getEcosystemAdjacency, titleById } from "./ecosystem-data";
import { useMemo } from "react";

type Props = {
  node: EcosystemNodeData | null;
  onClose: () => void;
};

export function NodeDetailPanel({ node, onClose }: Props) {
  const adj = useMemo(() => getEcosystemAdjacency(), []);

  const neighbors = useMemo(() => {
    if (!node) return [];
    const s = adj.get(node.id);
    if (!s) return [];
    return [...s].map((id) => ({ id, title: titleById(id) }));
  }, [node, adj]);

  return (
    <AnimatePresence>
      {node ? (
        <>
          <motion.button
            type="button"
            aria-label="Fechar painel"
            className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="eco-panel-title"
            className="fixed bottom-0 right-0 top-0 z-[90] flex w-[min(100%,420px)] flex-col border-l border-white/[0.08] bg-[#021c2f]/94 shadow-[-24px_0_48px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div className="flex items-start justify-between border-b border-white/[0.06] px-7 py-6">
              <div>
                <p
                  id="eco-panel-title"
                  className="font-serif text-xl font-light text-[#e8e4dc]"
                >
                  {node.title}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#f9746e]/90">
                  {node.shortLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[11px] uppercase tracking-[0.2em] text-[#6f6a62] transition-colors hover:text-[#c9c2b4]"
              >
                fechar
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-7 py-6">
              <p className="text-[13px] leading-relaxed text-[#a39e94]">
                {node.description}
              </p>
              <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-[#5c5850]">
                Papel no ecossistema
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[#8f8a80]">
                {node.role}
              </p>

              <p className="mt-10 text-[10px] uppercase tracking-[0.22em] text-[#5c5850]">
                Ligações
              </p>
              <ul className="mt-4 space-y-2">
                {neighbors.map(({ id, title }) => (
                  <li
                    key={id}
                    className="border-b border-white/[0.05] pb-2 text-[12px] text-[#8f8a80] last:border-0"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>

            <p className="border-t border-white/[0.06] px-7 py-4 text-[10px] italic leading-relaxed text-[#5c5850]">
              O histórico acompanha a criança. A tecnologia organiza. A comunidade
              sustenta. A metodologia valida.
            </p>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
