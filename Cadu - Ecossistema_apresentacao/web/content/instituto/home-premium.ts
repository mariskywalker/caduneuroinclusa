/**
 * Conteúdo placeholder em português — homepage institucional premium.
 * Substituir por CMS ou fonte editorial quando disponível.
 */

export const premiumHero = {
  eyebrow: "Instituto Casa do Urso",
  manifesto: "Nenhuma criança deveria crescer sentindo que nasceu errada.",
  subline:
    "Excelência em neurodesenvolvimento, ciência aplicada e apoio às famílias — com a profundidade de um laboratório e a calor de uma instituição que transforma realidades.",
  scrollHint: "Rolar para conhecer",
} as const;

export type PremiumHeroCopy = typeof premiumHero;

export const premiumWhy = {
  eyebrow: "Por que existimos",
  title: "Porque a infância neurodivergente merece outro tipo de futuro.",
  paragraphs: [
    "O Instituto Casa do Urso nasce da urgência de construir caminhos onde crianças e adolescentes possam desenvolver-se com dignidade, pertencimento e acesso real a cuidado de qualidade — sem serem reduzidos a laudos ou protocolos rígidos.",
    "Somos uma instituição que une pesquisa, prática clínica, tecnologia sensível e impacto social. Não somos um template de saúde nem uma landing de produto: somos infraestrutura humana de conhecimento.",
  ],
} as const;

export const premiumProblem = {
  eyebrow: "O que enfrentamos",
  title: "Famílias ainda atravessam o diagnóstico sozinhas.",
  bullets: [
    "Mães e pais esgotados, navegando sistemas fragmentados sem tradução entre escola, saúde e território.",
    "Crianças vistas por comportamentos, antes de serem compreendidas em sua integralidade emocional.",
    "Inclusão que vira esforço privado — quando deveria ser desenho coletivo, contínuo e mensurável.",
  ],
  closing:
    "Recusamos a lógica em que suporte é privilégio e exclusão veste o nome de inclusão. Trabalhamos para que isso mude — com método, afeto e rigor.",
} as const;

export const premiumVision = {
  eyebrow: "Nossa visão",
  title: "Ciência, cuidado, tecnologia e pertencimento — no mesmo fio.",
  lede:
    "Acreditamos em evidência com humanidade, em tecnologia que amplifica vínculo (sem substituí-lo) e em ambientes que aprendem com quem acolhem.",
  pillars: [
    {
      title: "Ciência com escuta",
      body: "Pesquisa aplicada e protocolos que respeitam a complexidade do desenvolvimento — sem promessas vazias.",
    },
    {
      title: "Cuidado em rede",
      body: "Família no centro: continuidade entre clínica, escola e políticas, com linguagem comum entre profissionais.",
    },
    {
      title: "Tecnologia sensível",
      body: "Ferramentas que organizam memória institucional e reduzem atrito — sempre com ética e transparência.",
    },
    {
      title: "Pertencimento real",
      body: "Segurança simbólica e espaço para ser quem se é: inclusão como estrutura, não como slogan.",
    },
  ],
} as const;

export const premiumImpactPillars = {
  eyebrow: "Pilares de impacto",
  title: "O que sustenta nossa atuação no mundo.",
  items: [
    {
      kicker: "01",
      title: "Pesquisa & evidência",
      text: "Indicadores e estudos que alimentam decisões públicas e clínicas com responsabilidade.",
    },
    {
      kicker: "02",
      title: "Formação & cultura",
      text: "Capacitação de equipes e instituições para operar neuroinclusão com consistência.",
    },
    {
      kicker: "03",
      title: "Inovação social",
      text: "Modelos replicáveis que conectam território, tecnologia e políticas sem perder o humano.",
    },
    {
      kicker: "04",
      title: "Advocacy silencioso",
      text: "Influência por qualidade: documentos, parcerias e narrativas que sustentam mudança de longo prazo.",
    },
  ],
} as const;

export const premiumPrograms = {
  eyebrow: "Programas e iniciativas",
  title: "Rotas concretas para transformação.",
  rows: [
    {
      name: "Formação em neurodesenvolvimento",
      meta: "Residências e trilhas modulares",
      href: "/programas",
    },
    {
      name: "Laboratório de inclusão escolar",
      meta: "Protocolos com escolas e redes",
      href: "/programas",
    },
    {
      name: "Observatório de famílias",
      meta: "Escuta longitudinal e apoio psicoeducativo",
      href: "/programas",
    },
  ],
} as const;

export const premiumInnovation = {
  eyebrow: "Inovação & pesquisa",
  title: "Onde a curiosidade encontra o rigor.",
  paragraphs: [
    "Investigamos interfaces entre neurociência do desenvolvimento, design de serviços e políticas públicas — sempre com fronteira clara entre evidência e hipótese.",
    "Publicamos ensaios, relatórios e frameworks que equipes de saúde e educação podem usar na prática, sem jargão desnecessário.",
  ],
  cta: { label: "Ver linha de pesquisa", href: "/pesquisa" },
} as const;

export const premiumFamily = {
  eyebrow: "Apoio às famílias",
  title: "Ninguém deveria caminhar isso em silêncio.",
  paragraphs: [
    "Oferecemos espaços de acolhimento informado, orientação e articulação com redes de cuidado — com respeito ao tempo e à história de cada família.",
    "O apoio não é assistencialismo: é estrutura emocional e informacional para que decisões sejam tomadas com mais clareza e menos desgaste.",
  ],
  cta: { label: "Falar com o Instituto", href: "/contato" },
} as const;

export const premiumCta = {
  eyebrow: "Participe",
  title: "Construa conosco o próximo capítulo.",
  lede:
    "Há muitas formas de apoiar: parcerias institucionais, pesquisa conjunta, voluntariado especializado ou investimento social privado. Escolha o canal que faz sentido para você.",
  actions: [
    { label: "Ser parceiro", href: "/contato", variant: "primary" as const },
    { label: "Apoiar financeiramente", href: "/contato", variant: "secondary" as const },
    { label: "Doar tempo & expertise", href: "/contato", variant: "ghost" as const },
  ],
} as const;
