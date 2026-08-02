# Glow Atelier

Marketing website for **Glow Atelier**, a beauty salon in Rijeka, Croatia offering laser hair removal (laserska epilacija), Hydrafacial, and Tesla/HIEMT body-sculpting treatments. Built with Next.js App Router, targeted at paid Google/Meta ad traffic — no CMS, no booking calendar, no e-commerce.

## Stack

- **Next.js 16.2.12** (App Router, Turbopack, React Compiler enabled)
- **React 19.2.4**
- CSS Modules per component, shared tokens/utilities in `src/app/globals.css`
- `framer-motion` for scroll/entry animations
- `lucide-react` for icons
- `next/og` for programmatic OG image generation
- No database, no server actions, no API routes — every route is statically prerendered

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

- `src/app/` — routes (App Router). Includes file-convention SEO assets: `sitemap.js`, `robots.js`, `icon.png`/`apple-icon.png`/`favicon.ico`, `opengraph-image.jsx`.
- `src/app/tretmani/[slug]/` — dynamic treatment pages (`generateStaticParams` from `src/data/treatments.js`).
- `src/components/` — one folder per component, each with its own `.module.css`.
- `src/data/` — plain (non-client) data modules: treatments, gallery, home FAQ. Kept out of client components so they can also feed server-only JSON-LD.
- `src/lib/seo.js` — `buildMetadata()`, the shared helper every page's `metadata`/`generateMetadata` export goes through (title/description/canonical/OG/Twitter).
- `src/lib/structuredData.js` — Schema.org JSON-LD builders (`BeautySalon`, `Service`, `FAQPage`), rendered via `src/components/JsonLd/JsonLd.jsx`.

## Content language

All user-facing copy is Croatian. No fabricated testimonials, review counts, or credentials — only real content the salon has provided.

## Analytics / consent

Google Tag Manager (`GTM-P9P2WPFG`) is loaded in `src/app/layout.js` with a Google Consent Mode v2 default-deny script (`beforeInteractive`) ahead of it, plus a cookie banner (`PrivacyBanner`) that grants consent on accept.

## Deployment status

The codebase builds cleanly and is fully static — see the [security audit notes](#security) below. Known open items before full launch:

- **Web3Forms** — contact/booking forms are built but not yet wired to a submission endpoint.
- **Working hours** — placeholder hours are used on the Kontakt page and in the `BeautySalon` JSON-LD; need to be confirmed with the salon.
- **Email address** — `glowatelier.rijeka@gmail.com` is used site-wide; confirm this matches the salon's registered contact email.
- **Reviews / Results pages** — intentionally not built; no real review data or before/after photos (with consent) exist yet.

## Security

- `npm audit` reports 3 high-severity findings, all transitive dependencies bundled inside `next` itself (`postcss`, `sharp`). Neither is exploitable here: the site has no server-rendered routes, no untrusted CSS input, and `next/image` is configured with no `remotePatterns`/`domains`, so the image optimizer only ever processes local files under `public/`. The only automated fix (`npm audit fix --force`) would downgrade `next` to `9.3.3` — a pre-App-Router release that would break the entire codebase — so it should not be run. Re-check `npm audit` after Next.js version bumps.
- `next.config.mjs` sets `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` headers on all routes.
- No secrets, API keys, or `.env` files are present in the repo.
