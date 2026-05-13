export const ecosystemPage = {
  hero: {
    eyebrow: "Ecossistema",
    title: "Três camadas. Um desenho de continuidade.",
    lead:
      "Casa do Urso cuida. CADU coordena dados e fluxos com ética e interoperabilidade. O Instituto nomeia, pesquisa e publica os Sistemas Neuroafetivos que tornam essa continuidade possível e legítima para famílias e instituições. Juntos, cobrem desde a relação terapêutica até a governança da informação e a comunicação pública, sem confundir velocidade digital com qualidade de cuidado.",
  },
  layers: [
    {
      id: "casa-do-urso",
      name: "Casa do Urso",
      tag: "Cuidado",
      description:
        "Clínica multidisciplinar focada em segurança emocional, regulação sensorial, neurodiversidade, pertencimento e apoio centrado na família. É onde hipóteses clínicas e necessidades reais informam o que deve ser medido, compartilhado e melhorado no ecossistema.",
      bullets: [
        "Terapias integradas, planos compartilhados e rituais de transição entre profissionais",
        "Ambientes físicos pensados para redução de sobrecarga sensorial e cognitiva",
        "Pontes com escolas e redes de apoio, com linguagem alinhada entre relatórios clínicos e pedagógicos",
        "Participação em comitês de ética e desenho de serviço junto ao Instituto e ao CADU",
      ],
    },
    {
      id: "cadu",
      name: "CADU",
      tag: "Infraestrutura",
      description:
        "Plataforma longitudinal que integra saúde, educação, comunicação e governança, com ética de dados e tecnologia calma. Oferece trilhas de consentimento, histórico contextualizado e ferramentas para coordenação entre atores, sem substituir decisão clínica nem extrair valor de dados sensíveis.",
      bullets: [
        "Histórico clínico-educativo com consentimento explícito e registro de alterações",
        "Coordenação entre atores e instituições com visibilidade de responsabilidades",
        "Indicadores para melhoria contínua sem extrativismo e com revisão humana periódica",
        "APIs e eventos pensados para interoperar com sistemas legados de forma segura",
      ],
    },
    {
      id: "instituto",
      name: "Instituto Casa do Urso",
      tag: "Conhecimento",
      description:
        "Pesquisa aplicada, editorial, programas de formação e tradução institucional dos Sistemas Neuroafetivos. Produz frameworks, ensaios e relatórios que permitem alinhar discurso público, políticas e produtos com o que se aprende na clínica e na plataforma.",
      bullets: [
        "Frameworks e ensaios fundacionais com revisão por pares ou consultoria científica",
        "Parcerias acadêmicas e públicas, com divulgação clara de métodos e limitações",
        "Relatórios de impacto, accountability e canais de feedback com comunidade e parceiros",
        "Formação para lideranças que precisam operar o ecossistema com vocabulário comum",
      ],
    },
  ],
  diagramCta: {
    label: "Abrir mapa interativo do ecossistema",
    href: "/mapa",
  },
} as const;
