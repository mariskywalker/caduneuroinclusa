import type { Edge, Node } from "@xyflow/react";
import type { EcosystemNodeData, EcosystemNodeMeta } from "./ecosystem-types";

export const ECOSYSTEM_NODES: EcosystemNodeMeta[] = [
  {
    id: "cadu",
    title: "CADU",
    shortLabel: "infraestrutura longitudinal do cuidado",
    description:
      "Camada digital que organiza histórico, consentimento e continuidade entre escola, clínica e família, sem substituir o juízo humano.",
    role:
      "Eixo técnico e semântico: o que foi vivido permanece acessível a quem precisa, no tempo certo.",
  },
  {
    id: "casa-do-urso",
    title: "Casa do Urso",
    shortLabel: "laboratório vivo",
    description:
      "Clínica multidisciplinar onde práticas são testadas e validadas no encontro real com famílias e crianças.",
    role: "Onde a metodologia encontra o corpo e o cotidiano, antes de escalar.",
  },
  {
    id: "instituto",
    title: "Instituto",
    shortLabel: "legitimidade e metodologia",
    description:
      "Pesquisa, boas práticas, formação, políticas públicas e validação institucional do que o ecossistema propõe.",
    role: "Traduz experiência em critério, evidência e linguagem que instituições reconhecem.",
  },
  {
    id: "carewing",
    title: "CareWing",
    shortLabel: "comunidade e circulação",
    description:
      "Espaço seguro de educação continuada, comunidade curada e troca entre famílias, profissionais e escolas.",
    role: "Sustenta confiança entre pares: o cuidado não vive só em protocolo.",
  },
  {
    id: "familias",
    title: "Famílias",
    shortLabel: "continuidade da jornada",
    description:
      "O histórico acompanha a criança; a família governa o compartilhamento e a narrativa ao longo do tempo.",
    role: "Donos legítimos da história; a infraestrutura serve a isso, não o contrário.",
  },
  {
    id: "clinicas",
    title: "Clínicas",
    shortLabel: "operação multidisciplinar",
    description:
      "Registros, supervisão, PTS, PEI e coordenação entre profissionais em torno do mesmo caso.",
    role: "Onde decisões clínicas e educacionais precisam conversar sem ruído.",
  },
  {
    id: "escolas",
    title: "Escolas",
    shortLabel: "inclusão aplicada",
    description:
      "PEI integrado, contexto educacional e continuidade entre cuidado terapêutico e aprendizagem.",
    role: "Pontos de observação diária, visíveis para quem acompanha a trajetória.",
  },
  {
    id: "setor-publico",
    title: "OSS / Setor público",
    shortLabel: "escala institucional",
    description:
      "Pilotos, governança, indicadores e coordenação em rede entre órgãos e operadores sociais.",
    role: "Escala e legitimidade democrática: ritmos diferentes, mesma orientação de cuidado.",
  },
  {
    id: "pesquisa",
    title: "Pesquisa",
    shortLabel: "evidência",
    description:
      "Dados agregados, publicações, relatórios e produção de conhecimento a partir do que o sistema aprende.",
    role: "Fecho entre prática, método e o que pode ser dito com rigor.",
  },
  {
    id: "boas-praticas",
    title: "Boas práticas",
    shortLabel: "cultura de cuidado",
    description:
      "Frameworks, formação, certificações e linguagem comum entre frentes do ecossistema.",
    role: "Menos improviso isolado; mais continuidade reconhecível.",
  },
  {
    id: "longitudinalidade",
    title: "Longitudinalidade",
    shortLabel: "memória viva",
    description: "O cuidado deixa de recomeçar do zero a cada porta que se abre.",
    role: "Horizonte ético e técnico: tempo como dimensão do cuidado, não só do calendário.",
  },
];

const R = 520;
const CADU_W = 280;
const CADU_H = 120;
const ORBIT_W = 220;
const ORBIT_H = 88;

function centerPos(
  cx: number,
  cy: number,
  w: number,
  h: number,
): { x: number; y: number } {
  return { x: cx - w / 2, y: cy - h / 2 };
}

/** Arestas não dirigidas, sem duplicar pares */
function uniqueUndirectedPairs(
  pairs: [string, string][],
): [string, string][] {
  const seen = new Set<string>();
  const out: [string, string][] = [];
  for (const [a, b] of pairs) {
    const k = [a, b].sort().join("\0");
    if (seen.has(k)) continue;
    seen.add(k);
    out.push([a, b]);
  }
  return out;
}

function buildEdgePairs(): [string, string][] {
  const raw: [string, string][] = [];

  const add = (a: string, b: string) => raw.push([a, b]);

  const orbitIds = ECOSYSTEM_NODES.filter((n) => n.id !== "cadu").map(
    (n) => n.id,
  );
  for (const id of orbitIds) add("cadu", id);

  add("casa-do-urso", "instituto");
  add("casa-do-urso", "pesquisa");
  add("casa-do-urso", "clinicas");

  add("instituto", "carewing");
  add("instituto", "pesquisa");
  add("instituto", "boas-praticas");
  add("instituto", "setor-publico");

  add("carewing", "familias");
  add("carewing", "escolas");
  add("carewing", "boas-praticas");

  add("familias", "clinicas");
  add("familias", "escolas");

  add("clinicas", "boas-praticas");

  add("setor-publico", "pesquisa");

  add("boas-praticas", "escolas");

  add("longitudinalidade", "familias");
  add("longitudinalidade", "pesquisa");

  return uniqueUndirectedPairs(raw);
}

export function buildEcosystemFlowElements(): {
  nodes: Node<EcosystemNodeData>[];
  edges: Edge[];
} {
  const pairs = buildEdgePairs();

  const nodes: Node<EcosystemNodeData>[] = [];

  const caduMeta = ECOSYSTEM_NODES.find((n) => n.id === "cadu")!;
  nodes.push({
    id: "cadu",
    type: "center",
    position: centerPos(0, 0, CADU_W, CADU_H),
    data: {
      ...caduMeta,
      variant: "center",
      revealOrder: 0,
    },
    draggable: false,
    selectable: true,
  });

  const orbit = ECOSYSTEM_NODES.filter((n) => n.id !== "cadu");
  const nOrbit = orbit.length;
  orbit.forEach((meta, i) => {
    const angle = (2 * Math.PI * i) / nOrbit - Math.PI / 2;
    const cx = R * Math.cos(angle);
    const cy = R * Math.sin(angle);
    nodes.push({
      id: meta.id,
      type: "orbit",
      position: centerPos(cx, cy, ORBIT_W, ORBIT_H),
      data: {
        ...meta,
        variant: "orbit",
        revealOrder: i + 1,
      },
      draggable: false,
      selectable: true,
    });
  });

  const edges: Edge[] = pairs.map(([source, target], i) => ({
    id: `e-${source}-${target}`,
    source,
    target,
    type: "soft",
    animated: true,
    data: { pairIndex: i },
  }));

  return { nodes, edges };
}

export function buildAdjacency(
  edges: { source: string; target: string }[],
): Map<string, Set<string>> {
  const m = new Map<string, Set<string>>();
  const add = (a: string, b: string) => {
    if (!m.has(a)) m.set(a, new Set());
    if (!m.has(b)) m.set(b, new Set());
    m.get(a)!.add(b);
    m.get(b)!.add(a);
  };
  for (const e of edges) add(e.source, e.target);
  return m;
}

export function getEcosystemAdjacency(): Map<string, Set<string>> {
  return buildAdjacency(
    buildEdgePairs().map(([source, target]) => ({ source, target })),
  );
}

export function titleById(id: string): string {
  return ECOSYSTEM_NODES.find((n) => n.id === id)?.title ?? id;
}
