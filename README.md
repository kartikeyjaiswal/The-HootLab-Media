<h1 align="center">The HootLab Media</h1>

<p align="center">
  Marketing website for <strong>The HootLab Media</strong> — a creative marketing agency
  (reels, social, brand strategy, influencer &amp; performance marketing).
</p>

<p align="center">
  <a href="https://thehootlabmedia.com"><strong>🌐 Live site → thehootlabmedia.com</strong></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs">
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-11-EF4A8B">
</p>

---

## Overview

A production website for a real client, built as a **static site** — no server to run
or maintain. It compiles to plain HTML/CSS/JS and deploys to shared hosting (Hostinger).

### Highlights

- **Interactive brand mark** — a custom SVG owl whose pupils follow the cursor and touch,
  animated with `requestAnimationFrame` and disabled under `prefers-reduced-motion`.
- **Motion-driven UI** — Framer Motion reveal/stagger animations, light/dark theming,
  and a fully responsive layout.
- **Serverless lead capture** — contact form via Web3Forms; onboarding forms fan out to a
  Google Sheet, branded email, and WhatsApp through a Google Apps Script relay.
- **Performance-tuned** — WebP images, portfolio video compressed ~95% (124 MB → ~5.5 MB),
  SEO metadata, sitemap, robots, and Open Graph image, all statically generated.

---

## Screenshots

> Add screenshots to `docs/screenshots/` and update the paths below.

<p align="center">
  <img src="docs/screenshots/home.png" alt="Home page" width="80%"><br><br>
  <img src="docs/screenshots/services.png" alt="Services section" width="80%">
</p>

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, **static export**) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | `next/font` — **Sora** 700/800 (headings) + **Inter** 400–600 (subheadings & body) |
| Contact form | Web3Forms (form → email) |
| Onboarding forms | Google Apps Script relay → Google Sheet + Email + WhatsApp |

Brand colours (see `tailwind.config.ts`): **navy `#082E6D`** · **orange `#F5A21A`**.

---

## Pages

- **`/`** — Home: hero (interactive owl), who-we-are, services, portfolio reels, why-us, reviews, CTA.
- **`/about`** — Vision, values, how-we-work, the owl story.
- **`/onboarding`** — Brand and Creator application forms.
- **`/contact`** — Contact form + channels.
- **`/dashboard`, `/discovery`** — retired routes that now redirect to `/`.

Dark mode is the primary look; a theme toggle is in the navbar.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy (Hostinger)

```bash
npm run build    # type-checks, then exports static files to ./out
```

Then upload the **contents of `out/`** to your Hostinger `public_html`.
(`next.config.mjs` sets `output: "export"` for production + `trailingSlash`.)

---

## Backend / forms

Two free services, configured in two files. Full guide in
[`docs/BACKEND-SETUP.md`](docs/BACKEND-SETUP.md) and
[`integrations/FORMS-SETUP.md`](integrations/FORMS-SETUP.md).

| Form | Delivery | Configure in |
| --- | --- | --- |
| **Contact** | Email → inbox | `src/lib/web3forms.ts` (`WEB3FORMS_KEY`) |
| **Brand / Creator** | Google Sheet + Email + WhatsApp | `src/lib/relay.ts` (`RELAY_URL`) + `integrations/Code.gs` |

The onboarding relay is a Google Apps Script (`integrations/Code.gs`) deployed as
a Web App. WhatsApp alerts use **Green API** (activates once the client scans the
QR; email + Sheet work regardless).

---

## Editing content

Most copy lives in `src/data/site.ts`. Before launch:

- **Reviews** — real names are in (`Anshu Mishra`, `Nitya`, `VedaXbot`); replace the
  placeholder **quote text** with the real wording (`testimonials` in `site.ts`).
- **Portfolio reels** — real clips are in `public/videos/reel-{1,2,3}.mp4`; edit
  titles/tags in `reels` (`site.ts`).
- See [`docs/DEMO-DATA.md`](docs/DEMO-DATA.md) for the full map of editable data.

---

## Project structure

```
src/
  app/         # routes, layout, metadata, sitemap, robots, OG image, 404
  components/  # ui/ primitives, motion/ helpers, layout/ (Navbar, Footer), owls
  sections/    # home/ + contact/ page sections
  data/        # site.ts (copy, services, reels, reviews)
  lib/         # fonts, utils, web3forms, relay
public/        # logos (webp), favicon, videos/ (reels + posters)
integrations/  # Code.gs (Apps Script relay) + FORMS-SETUP.md
docs/          # BACKEND-SETUP.md, DEMO-DATA.md
.backups/      # source videos & original art (NOT deployed)
```

## Notes

- Animations respect `prefers-reduced-motion`; the ambient background and video
  reels are tuned down on mobile for smooth scrolling.
- Images are WebP; portfolio videos are H.264, muted, and autoplay on-screen only.
- No analytics/tracking or third-party runtime dependencies beyond the form services.
