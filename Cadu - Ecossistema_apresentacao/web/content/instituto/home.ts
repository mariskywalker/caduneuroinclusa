export const homeHero = {
  eyebrow: "Camada institucional e intelectual",
  title: "Infraestruturas neuroafetivas para o tempo longo do cuidado.",
  lead:
    "O Instituto Casa do Urso articula pesquisa, editorial, formação e transformação institucional em torno dos Sistemas Neuroafetivos. Trata-se de redes emocionais, sensoriais, comunicacionais, tecnológicas e de governança que sustentam o desenvolvimento humano com segurança, clareza e continuidade entre clínica, família, escola e políticas públicas. O objetivo é nomear com rigor o que já se pratica com cuidado, para que possa ser ensinado, medido e melhorado em escala.",
  primaryCta: { label: "Explorar o framework", href: "/sistemas-neuroafetivos" },
  secondaryCta: { label: "Ecossistema", href: "/ecossistema" },
} as const;

export const homeThesis = {
  title: "Tese central",
  paragraphs: [
    "Neuroafetividade não é estética nem modismos de UX. É a qualidade das infraestruturas (clínicas, pedagógicas, comunicacionais, tecnológicas) que regulam estados internos ao longo do tempo. Quando ritmos, linguagens e ambientes são coerentes entre si, reduz-se a carga que famílias e profissionais carregam sem perceber.",
    "O design é uma camada de aplicação importante, mas não substitui a tese sistémica: como ambientes, políticas, interfaces e relações podem ser compostos para reduzir sobrecarga cognitiva, aumentar segurança emocional e preservar agência.",
    "Publicamos e formamos a partir dessa tese para que decisores em saúde, educação e tecnologia tenham vocabulário comum, critérios de prioridade e exemplos concretos de implementação.",
  ],
} as const;

export const homeManifesto = {
  eyebrow: "Manifesto vivo",
  title: "Um instituto que pensa em sistemas, não em telas isoladas.",
  paragraphs: [
    "Publicamos ensaios, frameworks e pesquisas que conectam cuidado, tecnologia calma, educação, governança e comunicação. Cada entrega pretende ser legível, respirável e reutilizável por clínicas, escolas, governos e equipes de produto, sem simplificar o que é clinicamente sensível.",
    "O site é modular: blocos editoriais, grades de artigos, fichas de pesquisa e programas podem ser substituídos ou ampliados sem redesenhar a arquitetura. Isso mantém o investimento editorial acumulado e permite evoluir o site à medida que a biblioteca e os programas crescem.",
    "Trabalhamos com transparência sobre limites: o que é evidência consolidada, o que é hipótese operacional e o que é convite à colaboração. Essa honestidade epistémica faz parte do compromisso neuroafetivo com segurança simbólica.",
  ],
  link: { label: "Ler ensaios", href: "/ensaios" },
} as const;

export type EcosystemCard = {
  id: string;
  layer: string;
  name: string;
  role: string;
  href: string;
};

export const homeEcosystemPreview: EcosystemCard[] = [
  {
    id: "casa",
    layer: "Cuidado",
    name: "Casa do Urso",
    role:
      "Clínica multidisciplinar de neurodesenvolvimento. Aqui vivem a escuta fina, os planos terapêuticos integrados e o apoio centrado na família. É a camada humana que informa o que o CADU precisa suportar em dados e o que o Instituto precisa traduzir em linguagem pública.",
    href: "/ecossistema#casa-do-urso",
  },
  {
    id: "cadu",
    layer: "Tecnologia",
    name: "CADU",
    role:
      "Plataforma longitudinal que integra saúde, educação, famílias e governança institucional, com consentimento explícito e tecnologia calma. Organiza histórico, comunicação e indicadores sem substituir o juízo clínico nem extrair valor de dados sensíveis.",
    href: "/ecossistema#cadu",
  },
  {
    id: "instituto",
    layer: "Conhecimento",
    name: "Instituto",
    role:
      "Pesquisa aplicada, editorial, formação e tradução institucional dos Sistemas Neuroafetivos. Produz vocabulário comum, frameworks e relatórios que permitem que clínicas, escolas e governos alinhem prioridades com base em evidência e em ética de cuidado.",
    href: "/sobre",
  },
];

export const homeResearchTeaser = {
  eyebrow: "Pesquisa",
  title: "Evidência, revisão por pares e tradução para políticas.",
  summary:
    "Investigamos regulação emocional como infraestrutura de saúde, desenho de serviços neuroinclusivos e coordenação entre sistemas de cuidado e dados longitudinais. Trabalhamos com parceiros acadêmicos e públicos, com pré-registro quando aplicável e publicações que incluem implicações práticas para gestores e equipes de linha de frente.",
  href: "/pesquisa",
  cta: "Ver agenda de pesquisa",
} as const;

export type EssayTeaser = {
  id: string;
  category: string;
  title: string;
  readingMinutes: number;
  href: string;
};

export const homeEssayTeasers: EssayTeaser[] = [
  {
    id: "1",
    category: "Framework",
    title: "Sistemas Neuroafetivos: uma introdução operacional",
    readingMinutes: 12,
    href: "/ensaios#introducao",
  },
  {
    id: "2",
    category: "Políticas públicas",
    title: "Atenção primária e continuidade: desenho de ecossistemas",
    readingMinutes: 9,
    href: "/ensaios#apc",
  },
  {
    id: "3",
    category: "Tecnologia calma",
    title: "Interfaces que reduzem carga cognitiva em contextos clínicos",
    readingMinutes: 11,
    href: "/ensaios#interfaces",
  },
  {
    id: "4",
    category: "Comunicação",
    title: "Tom institucional e segurança simbólica",
    readingMinutes: 8,
    href: "/ensaios#comunicacao",
  },
];

export const homeProgramsTeaser = {
  eyebrow: "Programas",
  title: "Formação e transformação institucional.",
  summary:
    "Residências, certificações e consultorias para equipes que precisam alinhar cuidado, comunicação e governança com princípios neuroafetivos. Os formatos combinam teoria, simulação supervisionada e trabalho sobre processos reais, com entregáveis que podem ser usados em comitês e em rotinas de serviço.",
  href: "/programas",
  cta: "Explorar programas",
} as const;
