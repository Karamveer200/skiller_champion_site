# Skiller Champion

Landing page for **Skiller Champion** — Web3 infrastructure and services for startups. Built with Next.js 16, React 19, and TypeScript.

## Stack

- **Next.js** 16.x (App Router)
- **React** 19.x
- **TypeScript** 5.x
- **Tailwind CSS** 4.x
- **Framer Motion** (animations)
- **next-themes** (light/dark)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## SEO & LinkedIn company verification

- **Metadata**: Title, description, keywords, Open Graph, and Twitter cards are set in `src/app/layout.tsx`.
- **Structured data**: Organization and WebSite JSON-LD in `src/components/JsonLd.tsx` for rich results.
- **Sitemap**: `/sitemap.xml` is generated in `src/app/sitemap.ts`.
- **Robots**: `/robots.txt` is generated in `src/app/robots.ts`.

For **LinkedIn company verification**:

1. In [LinkedIn Company Page admin](https://www.linkedin.com/company/setup/new/), use your site URL (e.g. `https://skillerchampion.com`).
2. When LinkedIn asks for a verification method, choose “Verify by website” and add the meta tag they give you.
3. Add that meta tag in `src/app/layout.tsx` under `metadata.verification.other` (e.g. `other: { "linkedin": "your-verification-code" }`), or place it in a custom `<head>` in the root layout.
4. Add a 1200×630 image at `public/og.png` for social previews and update `metadata.openGraph.images` if the path differs.

## Project structure

- `src/app/` — App Router (layout, page, globals, sitemap, robots)
- `src/components/` — Header, Footer, Logo, JsonLd, section components
- `src/components/sections/` — Hero, Services, About, How We Work, Process, Contact
- `src/lib/utils.ts` — `cn()` and shared utilities

## Links on the page

Single-page layout with in-page anchors:

- **#services** — What we do
- **#about** — Who we are
- **#how-we-work** — Culture / how we work
- **#process** — From first call to launch
- **#contact** — CTA and email / LinkedIn

All are linked from the header, footer, and cross-links in copy.
