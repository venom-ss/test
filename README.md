# Hydraulic Toolbox

SEO-first technical utility site built with Astro 7.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Before launch

1. Replace `https://example.com` in `astro.config.mjs` and `src/layouts/BaseLayout.astro` with the real domain.
2. Replace placeholder contact/service links.
3. Add Google Search Console and analytics.
4. Apply for AdSense only after the site has substantial original content and navigation is complete.
5. If serving personalized ads in regions where consent is required, integrate an appropriate Google-certified CMP before enabling ads.
6. Add real affiliate links only after joining relevant programs, and disclose affiliate relationships.
7. Keep technical content reviewed by a competent human; calculators show theoretical results and include safety disclaimers.

## Architecture

- Astro static pages for SEO and speed.
- Vanilla JS calculator islands; no React runtime.
- Shared calculator layout and ad-slot placeholders.
- Reference/guides architecture ready for expansion.
- JSON-LD, canonical URLs, Open Graph metadata, robots.txt, and sitemap.xml included.
