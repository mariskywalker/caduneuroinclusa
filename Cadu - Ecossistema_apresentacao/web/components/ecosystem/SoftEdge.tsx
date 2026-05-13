"use client";

import {
  BaseEdge,
  getBezierPath,
  type EdgeProps,
  type Position,
} from "@xyflow/react";
import { useEcosystemMap } from "./EcosystemMapContext";

export function SoftEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  animated,
}: EdgeProps) {
  const { hoveredId, selectedId, edgesOpacity } = useEcosystemMap();

  let path: string;
  try {
    [path] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition: sourcePosition as Position,
      targetX,
      targetY,
      targetPosition: targetPosition as Position,
    });
  } catch {
    path = `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
  }

  const focusId = hoveredId ?? selectedId;
  const lit =
    !focusId || source === focusId || target === focusId;
  const base = edgesOpacity * (lit ? 0.55 : focusId ? 0.04 : 0.22);
  const isCaduEdge = source === "cadu" || target === "cadu";
  const stroke = isCaduEdge
    ? "rgba(249, 116, 110, 0.42)"
    : "rgba(232, 228, 220, 0.28)";

  return (
    <BaseEdge
      id={id}
      path={path}
      className={animated ? "eco-soft-animated" : undefined}
      style={{
        ...style,
        stroke,
        strokeWidth: isCaduEdge && lit ? 1.15 : 0.9,
        opacity: base,
      }}
    />
  );
}
