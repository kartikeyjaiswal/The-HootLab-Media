# Demo data — what to replace before / after launch

Everything on the site currently renders from a few data files. Real facts are
filled in where known; the rest is **clearly‑marked demo data**. This doc lists
every placeholder and exactly where to edit it. Nothing here breaks the build —
you can launch with the demo values and swap them whenever you're ready.

Priority key: 🔴 shown on live/linked pages (replace before launch) ·
🟡 nice to update · ⚪ only on hidden demo pages (optional).

---

## 🔴 1. Testimonials — `src/data/site.ts`

```ts
export const testimonials = [
  { quote: "…", name: "Client Name", role: "Founder, Brand Name" },
  ...
];
```

Quotes are real‑sounding but the **names/roles are placeholders**
("Client Name", "Brand Name"). Replace with genuine client quotes + names, or
remove any you can't yet back up. Ask clients for a one‑line quote + their name,
title and company.

---

## 🔴 3. Portfolio reels / videos — `src/data/site.ts` + `public/videos/`

```ts
export const reels = [
  { id: "r1", title: "Content that connects", tag: "Creative Reel", src: "/videos/demo-reel.mp4" },
  ...
];
```

All four tiles point at the **same demo video** (`/videos/demo-reel.mp4`).
To use real work:

1. Drop your `.mp4` files into `public/videos/`.
2. Point each reel's `src` at its file (e.g. `/videos/lumen-summer.mp4`).
3. Update `title` and `tag` to match.

---

## 🟡 4. Services, "Why us", and Vision values — `src/data/site.ts`

`services`, `whyUs`, and `values` are written to describe HootLab and are
**safe to keep**. Edit copy/icons only if your positioning changes. Icons come
from `lucide-react`.

---

## 🟡 5. Site identity — `src/data/site.ts`

```ts
export const SITE = {
  name: "The HootLab Media",
  email: "contact@thehootlabmedia.com",
  instagram: "https://www.instagram.com/hootlabmedia/",
  instagramHandle: "@hootlabmedia",
  domain: "thehootlabmedia.com",
};
```

Real values already in place. Double‑check the email + Instagram are correct;
the email here is only what's *displayed* (see `docs/BACKEND-SETUP.md` for where
submissions are actually received).

---

## 🟡 6. Form option lists — inside each form component

Dropdown choices (budgets, categories, channels, inquiry types) now live inline
in the form files: `src/components/LeadForm.tsx`,
`src/components/forms/BrandForm.tsx`, `src/components/forms/InfluencerForm.tsx`,
and the inquiry list in `src/data/site.ts`. Tune these to match how you qualify
leads. Budgets are in ₹.

---

## ✅ 7. Old demo pages + mock data — REMOVED

The leftover product‑demo material from the previous template has been deleted
in a cleanup pass: the mock analytics dashboard (`data/dashboard.ts`), the
creator marketplace (`data/influencers.ts`), the standalone testimonials
(`data/testimonials.ts`), and ~30 unused section/component files that only they
used. Nothing here needs your attention.

The `/dashboard` and `/discovery` URLs still exist but now simply **redirect to
the homepage**, so old links don't 404. Delete `src/app/dashboard/` and
`src/app/discovery/` entirely if you don't even want the redirects.

---

## Summary — edit order for launch

Backend (Web3Forms contact key + Apps Script relay) is already configured. What's left:

1. `src/data/site.ts` — real `testimonials` (currently "Client Name"). 🔴
2. `public/videos/` + `reels` in `site.ts` — real portfolio videos. 🔴

Then: `npm run build` and upload the `out/` folder to Hostinger.
