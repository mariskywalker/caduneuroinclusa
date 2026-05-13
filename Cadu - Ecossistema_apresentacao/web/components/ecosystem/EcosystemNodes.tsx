"use client";

import { motion } from "framer-motion";
import type { NodeProps } from "@xyflow/react";
import type { EcosystemNodeData } from "./ecosystem-types";
import { useEcosystemMap } from "./EcosystemMapContext";

export function CenterCaduNode({ data, id }: NodeProps) {
  const d = data as EcosystemNodeData;
  const { setHoveredId, setSelectedId, selectedId } = useEcosystemMap();
  const selected = selectedId === id;

  return (
    <motion.div
      className={`group relative flex h-[120px] w-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border bg-[#041f33]/88 px-6 text-center shadow-[0_0_0_1px_rgba(249,116,110,0.1),0_0_48px_-8px_rgba(249,116,110,0.2)] backdrop-blur-md ${
        selected
          ? "border-[#f9746e]/65 ring-1 ring-[#f9746e]/35"
          : "border-[#f9746e]/35"
      }`}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.9,
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => setSelectedId(id)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#f9746e]/[0.09] to-transparent"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="font-serif text-[1.35rem] font-medium tracking-[0.14em] text-[#e8e4dc]">
        {d.title}
      </span>
      <span className="mt-2.5 max-w-[15rem] text-[9px] font-normal uppercase leading-relaxed tracking-[0.24em] text-[#9a948a]">
        {d.shortLabel}
      </span>
    </motion.div>
  );
}

export function OrbitEcosystemNode({ data, id }: NodeProps) {
  const d = data as EcosystemNodeData;
  const { setHoveredId, setSelectedId, selectedId } = useEcosystemMap();
  const selected = selectedId === id;
  const delay = 1.05 + d.revealOrder * 0.09;

  return (
    <motion.div
      className={`group flex h-[88px] w-[220px] cursor-pointer flex-col justify-center rounded-xl border bg-[#062238]/82 px-4 backdrop-blur-md transition-colors hover:border-white/[0.16] hover:bg-[#072d45]/88 ${
        selected
          ? "border-[#f9746e]/40 ring-1 ring-[#f9746e]/25"
          : "border-white/[0.09]"
      }`}
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => setSelectedId(id)}
    >
      <span className="text-[12px] font-semibold tracking-wide text-[#e0dcd3]">
        {d.title}
      </span>
      <span className="mt-1.5 text-[9px] font-normal uppercase tracking-[0.2em] text-[#f9746e]/85">
        {d.shortLabel}
      </span>
    </motion.div>
  );
}
