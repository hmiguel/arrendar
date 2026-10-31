# arrendar

A plain-language guide to Portuguese residential tenancy law, built as a static Astro site.

Live at [arrendar.hmiguel.dev](https://arrendar.hmiguel.dev).

## What this is

The essentials of renting a home in Portugal, Código Civil and NRAU included, laid out as a four-stage timeline (before signing, deposit & contract, during the tenancy, ending it). Each highlight expands into plain-language detail, and every legal citation expands again into the actual quoted text, with a link to the full article.

Content is in Portuguese, since that's who the site is for. It is informational only and is not legal advice.

## Stack

- [Astro](https://astro.build), static output, no framework runtime
- Plain CSS (no Tailwind, no component library)
- TypeScript for the content data model (`src/data/stages.ts`)

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # preview the production build
```

## Content and sourcing

Every law citation (`src/data/stages.ts`) carries either a verbatim `quote` or a short `note` when no single article applies, plus a `source` link to the full article on [informador.pt](https://informador.pt) (Código Civil, Código do IRS, NRAU) or the [Diário da República](https://diariodarepublica.pt) (standalone laws). A `pending` field flags anything affected by the rental law reform proposed in July 2026, which has not yet passed Parliament.

## License

[MIT](LICENSE)
