/**
 * Configuração modular do site: altere textos aqui sem mudar o layout.
 */

export type NavItem = {
  label: string;
  href: string;
  /** Conceptual weight for future mega-menus / CMS */
  emphasis?: "primary" | "default";
};

export const siteIdentity = {
  shortName: "Instituto",
  fullName: "Instituto Casa do Urso",
  tagline: "Sistemas Neuroafetivos",
  locale: "São Paulo, Brasil",
} as const;

export const primaryNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Sistemas Neuroafetivos", href: "/sistemas-neuroafetivos", emphasis: "primary" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Pesquisa", href: "/pesquisa" },
  { label: "Ensaios", href: "/ensaios" },
  { label: "Programas", href: "/programas" },
  { label: "Contato", href: "/contato" },
];

export const utilityNav: NavItem[] = [
  { label: "Mapa do ecossistema (CADU)", href: "/mapa" },
];

export const footerColumns = [
  {
    title: "Instituto",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Missão e visão", href: "/sobre#missao" },
      { label: "Equipe", href: "/sobre#equipe" },
      { label: "Parceiros", href: "/sobre#parceiros" },
    ],
  },
  {
    title: "Conhecimento",
    links: [
      { label: "Sistemas Neuroafetivos", href: "/sistemas-neuroafetivos" },
      { label: "Ensaios", href: "/ensaios" },
      { label: "Pesquisa", href: "/pesquisa" },
      { label: "Biblioteca", href: "/pesquisa#biblioteca" },
    ],
  },
  {
    title: "Programas",
    links: [
      { label: "Formação", href: "/programas" },
      { label: "Consultoria institucional", href: "/contato" },
      { label: "Parcerias acadêmicas", href: "/contato" },
    ],
  },
  {
    title: "Ecossistema",
    links: [
      { label: "Casa do Urso", href: "/ecossistema#casa-do-urso" },
      { label: "CADU", href: "/ecossistema#cadu" },
      { label: "Mapa interativo", href: "/mapa" },
    ],
  },
] as const;

export const footerLegal = {
  rights: `© ${new Date().getFullYear()} Instituto Casa do Urso. Todos os direitos reservados.`,
  ecosystemLine: "Ecossistema: Casa do Urso · CADU · Instituto",
} as const;
