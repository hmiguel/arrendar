export interface UiStrings {
  htmlLang: string;
  pageTitle: string;
  metaDescription: string;
  ogLocale: string;
  canonicalPath: string;
  skipLink: string;
  heroEyebrow: string;
  heroTitle: string;
  timelineAriaLabel: string;
  stageSrLabel: (n: number, total: number) => string;
  noticeLabel: string;
  noticeParagraph: string; // contains <strong> tags, rendered as trusted HTML
  pendingLabel: string;
  viewFullArticle: string;
  unofficialTranslationLabel: string;
  disclaimerStrong: string;
  disclaimerRest: string;
  sourcesText: string; // contains no markup
  lastRevision: string;
  githubLabel: string;
  langSwitchLabel: string;
  langSwitchHref: string;
}

export const pt: UiStrings = {
  htmlLang: 'pt-PT',
  pageTitle: 'Guia do Arrendamento Habitacional',
  metaDescription:
    'O essencial da lei do arrendamento habitacional em Portugal, explicado em português simples, com detalhe legal para quem quiser aprofundar.',
  ogLocale: 'pt_PT',
  canonicalPath: '/',
  skipLink: 'Saltar para o conteúdo',
  heroEyebrow: 'Guia do arrendamento habitacional',
  heroTitle: 'O que diz a lei portuguesa sobre arrendar casa, em português simples.',
  timelineAriaLabel: 'Fases do arrendamento',
  stageSrLabel: (n, total) => `Fase ${n} de ${total}: `,
  noticeLabel: 'Em discussão',
  noticeParagraph:
    'Em julho de 2026, o Governo aprovou em Conselho de Ministros uma proposta para mudar esta lei, mas ainda tem de passar pelo Parlamento. Pode alterar a <strong>caução</strong>, os <strong>prazos de denúncia</strong> e a <strong>atualização de rendas antigas</strong>. Esta página mostra a lei atualmente em vigor e assinala, em cada ponto, o que pode vir a mudar.',
  pendingLabel: 'Em discussão: ainda não é lei',
  viewFullArticle: 'Ver artigo completo',
  unofficialTranslationLabel: 'Tradução não oficial',
  disclaimerStrong: 'Isto não é aconselhamento jurídico.',
  disclaimerRest:
    'Em caso de dúvida sobre o seu contrato, consulte um advogado ou o Balcão do Arrendatário e do Senhorio (BAS).',
  sourcesText:
    'Fontes: Código Civil (Arts. 1069.º–1113.º), Lei n.º 6/2006 (Novo Regime do Arrendamento Urbano), Lei n.º 56/2023 (Mais Habitação).',
  lastRevision: 'Última revisão · outubro de 2026',
  githubLabel: 'Código aberto no GitHub',
  langSwitchLabel: 'English',
  langSwitchHref: '/en/',
};

export const en: UiStrings = {
  htmlLang: 'en',
  pageTitle: 'Portuguese Residential Tenancy Law Guide',
  metaDescription:
    "The essentials of Portugal's residential tenancy law, explained in plain English, with legal detail for anyone who wants to dig deeper.",
  ogLocale: 'en_US',
  canonicalPath: '/en/',
  skipLink: 'Skip to content',
  heroEyebrow: 'Residential tenancy law guide',
  heroTitle: "What Portuguese law says about renting a home, in plain English.",
  timelineAriaLabel: 'Stages of a tenancy',
  stageSrLabel: (n, total) => `Stage ${n} of ${total}: `,
  noticeLabel: 'Under discussion',
  noticeParagraph:
    'In July 2026, the Portuguese government approved a proposal in the Council of Ministers to change this law, but it still has to pass Parliament. It could change the <strong>deposit cap</strong>, <strong>notice periods</strong>, and <strong>rent updates for old contracts</strong>. This page shows the law currently in force, and flags where each point might change.',
  pendingLabel: "Under discussion: not law yet",
  viewFullArticle: 'View full article',
  unofficialTranslationLabel: 'Unofficial translation',
  disclaimerStrong: 'This is not legal advice.',
  disclaimerRest:
    "If you're unsure about your contract, consult a lawyer or the Tenant and Landlord Counter (Balcão do Arrendatário e do Senhorio, BAS).",
  sourcesText:
    'Sources: Código Civil (Arts. 1069–1113), Lei n.º 6/2006 (Portugal’s New Urban Lease Regime), Lei n.º 56/2023 (Mais Habitação housing package).',
  lastRevision: 'Last revised · October 2026',
  githubLabel: 'Open source on GitHub',
  langSwitchLabel: 'Português',
  langSwitchHref: '/',
};
