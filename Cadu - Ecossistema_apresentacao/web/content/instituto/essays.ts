export type EssayItem = {
  id: string;
  category: string;
  title: string;
  dek: string;
  minutes: number;
};

export const essaysPage = {
  hero: {
    eyebrow: "Ensaios",
    title: "Textos fundacionais e atualizações de campo.",
    lead:
      "Ensaios longos, com tempo de leitura estimado, hierarquia editorial clara e espaço em branco intencional. Cada texto indica público, nível de evidência e implicações práticas. A lista cresce com revisão editorial e, quando aplicável, comentários de pares externos.",
  },
  essays: [
    {
      id: "introducao",
      category: "Framework",
      title: "Sistemas Neuroafetivos: introdução operacional",
      dek: "Definições, limites, exemplos em saúde e educação, e um glossário mínimo para alinhar equipes multidisciplinares.",
      minutes: 12,
    },
    {
      id: "apc",
      category: "Política",
      title: "Atenção primária como malha de continuidade",
      dek: "Por que fragmentação administrativa produz sobrecarga emocional em famílias e como contratos e indicadores podem refletir continuidade, não apenas produtividade.",
      minutes: 9,
    },
    {
      id: "interfaces",
      category: "Tecnologia calma",
      title: "Interfaces clínicas e carga cognitiva",
      dek: "Padrões de UI que respeitam atenção fragmentada, fadiga e contexto emocional em salas de espera digitais e prontuários.",
      minutes: 11,
    },
    {
      id: "comunicacao",
      category: "Comunicação",
      title: "Tom institucional e segurança simbólica",
      dek: "Como linguagem pública pode ferir ou sustentar pertencimento, com exemplos de revisão de campanhas e comunicação de incidentes.",
      minutes: 8,
    },
    {
      id: "governanca-dados",
      category: "Governança",
      title: "Consentimento longitudinal e portabilidade",
      dek: "Checklist para gestores: retenção, finalidade, revogação, acesso por perfil e transparência com famílias em linguagem acessível.",
      minutes: 14,
    },
  ] satisfies EssayItem[],
} as const;
