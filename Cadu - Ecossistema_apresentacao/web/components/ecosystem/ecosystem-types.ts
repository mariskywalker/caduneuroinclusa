export type EcosystemNodeMeta = {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  role: string;
};

export type EcosystemNodeData = EcosystemNodeMeta & {
  variant: "center" | "orbit";
  /** Ordem no stagger de entrada (0 = CADU) */
  revealOrder: number;
};
