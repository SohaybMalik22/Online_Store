# Sonia Zari Boutique — display catalogue

A display-only storefront for a physical boutique. Customers browse the
collection online, shortlist what they like, and come into the shop to try it
on. There is **no cart, no checkout, no prices and no admin panel** — that is
deliberate, not missing.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (every page prerenders to static HTML)
npm start
```

## What the client edits

Everything the shop owner would want to change lives in two files.

### `src/data/site.ts`

Shop name, phone, WhatsApp, email, address, opening hours, social links, the
three hero slides, the "why us" strip and the testimonials.

### `src/data/products.ts`

The catalogue. Three categories (`formal`, `party-wear`, `bridal`) and the
products themselves. To add a piece, copy an existing entry and change the
fields — `slug` must be unique, everything else is free text. There is
intentionally no `price` field on the `Product` type, so a price can never leak
onto the site by accident.

## Swapping in real photographs

Images are currently Pexels placeholders, stored as bare photo ids. `imgUrl()`
in `src/data/products.ts` passes anything starting with `http` straight
through, so real photos drop in one at a time with no other changes:

```ts
images: ["https://cdn.yourhost.com/aurelia-1.jpg", "12791933"],
```

Add the new host to `images.remotePatterns` in `next.config.ts`. Shoot in
portrait (3:4 works best) — the grid, gallery and category cards are all built
around that ratio.

If a subject sits high or low in the frame, set `coverPosition` (categories) or
`position` (hero slides) to an `object-position` value like `"50% 15%"` so faces
survive the crop.

## Why it stays fast

- Every route prerenders to static HTML at build time — no server work per visit
- `next/image` with AVIF/WebP, per-breakpoint `sizes`, and a restricted quality
  allowlist, so no oversized bytes ship to a phone
- A shimmering skeleton sits under every image until the bytes land, then the
  photo fades in over it — no white flash, no layout shift
- No animation library. Transitions are CSS; scroll reveals use one
  IntersectionObserver per element that disconnects after firing
- Search filters the catalogue in the browser, so results appear as you type
- Hero carousel pauses when the tab is hidden and respects
  `prefers-reduced-motion`

## Structure

```
src/
  app/
    page.tsx                      home
    collection/[category]/        formal · party-wear · bridal (+ loading skeleton)
    product/[slug]/               detail page (+ loading skeleton)
    about/ contact/ saved/
    sitemap.ts robots.ts not-found.tsx
  components/                     Header, Hero, ProductCard, Footer, …
  data/                           site.ts, products.ts  ← the two you edit
```

## The shortlist

`useSaved()` keeps a saved-pieces list in `localStorage` under
`soniazari:saved`. It never leaves the browser — the customer shows the list at
the counter. Backed by `useSyncExternalStore`, so it hydrates without a
mismatch and syncs across tabs.
# Online_Store
