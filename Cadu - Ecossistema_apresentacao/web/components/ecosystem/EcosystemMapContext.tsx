"use client";

import { createContext, useContext } from "react";

export type EcosystemMapContextValue = {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  edgesOpacity: number;
};

const defaultValue: EcosystemMapContextValue = {
  hoveredId: null,
  setHoveredId: () => {},
  selectedId: null,
  setSelectedId: () => {},
  edgesOpacity: 1,
};

const EcosystemMapContext = createContext<EcosystemMapContextValue | null>(
  null,
);

/** Nunca lança; evita tela branca se um edge montar fora do provider. */
export function useEcosystemMap(): EcosystemMapContextValue {
  return useContext(EcosystemMapContext) ?? defaultValue;
}

export { EcosystemMapContext };
