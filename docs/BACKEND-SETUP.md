# Backend setup — The HootLab Media

The site is a **static export** (no server), so both parts of the backend run
on free third-party services that the browser posts to directly.

There are **two parts**, and **two things you edit**:

| Form | Goes to | Service | You edit |
|------|---------|---------|----------|
| **Contact** (`/contact`) | Email only → company inbox | Web3Forms | `src/lib/web3forms.ts` (paste key) |
| **Brand** + **Creator** (`/onboarding`) | **Google Sheet + Email + WhatsApp** | Google Apps Script relay | `src/lib/relay.ts` (paste URL) |

> The detailed, click-by-click walkthrough for the relay (CallMeBot, deploying
> the script, etc.) lives in **`integrations/FORMS-SETUP.md`**. This file is the
> overview.

---

## Part A — Contact form → email

The contact form emails submissions to your inbox via **Web3Forms**.

1. Get a free key at **https://web3forms.com** — enter the inbox you want
   (e.g. `contact@thehootlabmedia.com`).
2. Open **`src/lib/web3forms.ts`** and paste it:

   ```ts
   export const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
   ```

That's the whole contact backend. Until a key is set, the contact form shows a
friendly "not configured" message and logs a dev warning.

---

## Part B — Brand & Creator forms → Sheet + Email + WhatsApp

These two forms need to reach three places at once, so they POST to a **Google
Apps Script** web app (`integrations/Code.gs`) that fans out to all three.

**Quick version** (full steps in `integrations/FORMS-SETUP.md`):

1. **WhatsApp key** — message CallMeBot to get a free API key (see FORMS-SETUP).
2. **Deploy the script** — paste `integrations/Code.gs` into
   https://script.google.com, fill the `CONFIG` block (email, WhatsApp phone +
   key), then **Deploy ▸ Web app** ("Execute as: Me", "Who has access: Anyone").
3. **Connect the site** — copy the deployment's `/exec` URL into
   **`src/lib/relay.ts`**:

   ```ts
   export const RELAY_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";
   ```

Each submission then: appends a row to a **Google Sheet**, emails your inbox,
and sends a **WhatsApp** alert. The honeypot drops bot submissions automatically.

### About the "Google Form"

The live Google destination is a **Google Sheet** (auto-created, one tab per form
type — the standard way to collect responses). If you specifically want them
mirrored into an existing **Google Form's** responses too, `Code.gs` has a ready
`forwardToGoogleForm()` stub — send over the form link and its field IDs and it
gets switched on with no other changes.

---

## Testing before launch

1. Set the Web3Forms key (Part A) and the relay URL (Part B), run `npm run dev`.
2. `/contact` → submit → check the inbox.
3. `/onboarding` → submit **both** Brand and Creator → confirm you get an email,
   a WhatsApp, and a new Google Sheet row for each.

---

## Spam protection (built in)

Every form has a hidden `botcheck` honeypot. Web3Forms drops flagged contact
submissions; the Apps Script drops flagged onboarding submissions. Nothing to
configure.

---

## Files involved

```
src/lib/web3forms.ts              contact backend — paste WEB3FORMS_KEY   (EDIT)
src/lib/relay.ts                  onboarding backend — paste RELAY_URL    (EDIT)
integrations/Code.gs              the Apps Script (Sheet + Email + WhatsApp)
integrations/FORMS-SETUP.md       full relay walkthrough
src/components/LeadForm.tsx           contact form  → Web3Forms
src/components/forms/BrandForm.tsx        brand form    → relay ("brand")
src/components/forms/InfluencerForm.tsx   creator form  → relay ("influencer")
src/components/forms/OnboardingForms.tsx  the Brand/Creator tab switch
```

The displayed contact address around the site comes from `SITE.email` in
`src/data/site.ts` (display only — actual delivery is set by the key/URL above).
