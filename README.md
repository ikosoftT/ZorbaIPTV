# Zorba IPTV

Next.js 16.2.4 App Router website with React 19, TypeScript, Tailwind CSS 4 and Embla. Marketing pages and the article library render on the server; pricing, category search, navigation, accordions and carousel controls use small client components.

## Run locally

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Production checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`. Serve the production build with `npm start`. This frontend starts a contextual WhatsApp conversation; it does not process payments or provision subscriptions.

## Configuration and ownership

`src/lib/site-config.ts` centralizes brand, canonical origin, contact, catalogue figures and qualified service wording. Environment variables are documented in `.env.example`. Use a full HTTP(S) origin for `NEXT_PUBLIC_SITE_URL`; the canonical default is `https://zorbaiptv.cc`. The original repository owner WhatsApp number, `212624637669`, is retained as the default. An explicit environment override takes precedence. No support email or analytics property has been invented. Optional GA is disabled unless `NEXT_PUBLIC_GA_ID` is supplied by the owner; its WhatsApp event captures source, plan and page path, never the message body.

`src/lib/pricing-data.ts` is the single pricing source: one active connection, 3 months $35, 6 months $49, 12 months $69 USD. Each additional connection adds 10% of the original base plan price (two connections: 110%; three: 120%). Totals are calculated centrally with Math.round and displayed as whole dollars. Device installation and simultaneous viewing are different allowances. Confirm catalogue figures, trial conditions, actual device/login support and the support-led 72-hour/prorated refund policy before publishing. The site avoids fake reviews, rating schema, uptime guarantees and activation-time promises.

## Routes and content

Existing marketing routes remain available. The three original World Cup article URLs redirect permanently (308) to their updated 2030 equivalents; all other original article slugs are retained. `/about` and `/free-trial` are added. `/order` redirects plan context to WhatsApp and is excluded from indexing. The blog contains 26 complete articles, including 10 original practical guides. `blog-data.ts` and `blog-additions.ts` share the existing `BlogPost` model; the same article renderer provides headings, tables, lists, internal links, a table of contents, visible FAQs and related posts. Publication dates remain distinct from the migration update date. There are no public publishing plans or image placeholders.

Page metadata uses `src/lib/seo.ts`; global Organization/WebSite, visible FAQ, breadcrumbs, BlogPosting and pricing Service/Offer JSON-LD describe rendered content. Sitemap and robots use the configured origin. Configure the production domain before building, because public environment values are compiled into the bundle.

## Visual assets and accessibility

The logo and brand icon are original SVG artwork, with raster favicon/social variants. Photography is downloaded from Pexels, stored locally as optimized WebP and documented in `public/photos/sources.json` and the complete 26-article mapping in `public/photos/article-sources.json`. Each article has a distinct topic-related image used on its card, article background/figure and metadata/schema. The router and Fire TV photos are CC BY-SA 4.0 assets with visible creator/source/license credits and conversion notes. Pexels permits commercial use under its license: https://www.pexels.com/license/. Photographs illustrate topics; they are not representations of channels supplied, endorsements or subscriber testimonials. The movie and logo sliders use the original repository-supplied artwork, as requested. Source ownership is retained with the supplied assets; these images are not evidence of catalogue availability or partnerships.

The homepage hero uses a brand-color background and a separate sports/movie collage. Its main artwork rotates every five seconds with pause and manual navigation controls; reduced motion disables automatic swaps. Grid sections alternate image/copy positions. Category and device marquees have pause controls and stop for reduced-motion preferences; the movie carousel loops automatically with pause/resume and labeled navigation buttons. Navigation, trial device selection, channel search and connection selection are keyboard accessible. Closed mobile navigation leaves the tab order, Escape closes it, and FAQ controls expose expanded state.

## Deployment checklist

Confirm owner-managed contact, domain, claims and policy; set required environment values; run the production checks; verify generated canonical URLs and WhatsApp message context. Deploy through the project's normal hosting workflow. No deployment, Git push or external WhatsApp message is part of the local migration.

World Cup content targets 2030 using FIFA-confirmed host information. Current fixtures, territorial broadcaster rights, package coverage and broadcast quality must be verified; the guides make no guaranteed coverage or final schedule claim. Publication dates and unrelated 2026 guides remain unchanged.
