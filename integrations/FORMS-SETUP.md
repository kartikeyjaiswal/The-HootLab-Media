# Form notifications — setup guide

Brand & Influencer submissions notify you **3 ways** (Google Sheet + Email + WhatsApp).
The Contact form is **email only** (via Web3Forms).

It works on static Hostinger hosting because a tiny free **Google Apps Script** does the work — your site just POSTs to it.

---

## Step 1 — GREEN-API (free WhatsApp alerts)

1. Go to **https://console.green-api.com** and sign up (free).
2. Click **Create an instance** → choose the **Developer** plan ($0/month).
3. Open the instance and note two values: **idInstance** and **apiTokenInstance**.
4. **Link WhatsApp:** the instance shows a **QR code**. On the phone whose WhatsApp
   should *send* the alerts (your agency number), open WhatsApp ▸ **Settings ▸
   Linked Devices ▸ Link a Device**, and scan that QR. Wait until the instance
   status turns **authorized** (green).
5. Decide the **recipient** number — where alerts are delivered (country code,
   digits only, e.g. `919876543210`). It can be the same linked number or another.

> Keep the linked phone online now and then — like WhatsApp Web, the session
> needs the phone to check in occasionally.

## Step 2 — Deploy the Apps Script relay

1. Go to **https://script.google.com** → **New project**.
2. Delete the sample code, paste the entire contents of **`Code.gs`** (in this folder).
3. At the top, fill in the **CONFIG** block:
   - `NOTIFY_EMAIL` → `contact@thehootlabmedia.com` (already set)
   - `GREENAPI_ID_INSTANCE` → the idInstance from Step 1
   - `GREENAPI_API_TOKEN` → the apiTokenInstance from Step 1
   - `WHATSAPP_PHONE` → the recipient number from Step 1 (e.g. `919876543210`)
   - `SHEET_ID` → leave empty (it auto-creates a sheet named "HootLab Submissions" in your Drive)
4. Click **Save**.
5. Click **Deploy ▸ New deployment** → gear icon ▸ **Web app**.
   - **Execute as:** Me
   - **Who has access:** **Anyone**
6. **Deploy** → approve the Google permissions prompt (it's your own script).
7. Copy the **Web app URL** (ends in `/exec`).

> Test it: paste that URL in a browser — you should see
> `{"status":"HootLab form relay is live."}`

## Step 3 — Connect the site

1. Open **`src/lib/relay.ts`**.
2. Replace `YOUR_APPS_SCRIPT_WEB_APP_URL` with the `/exec` URL from Step 2.
3. Save. Submit a test from `/onboarding` (both Creator and Brand) — you should get
   an email, a WhatsApp, and a new row in the Google Sheet.

## Step 4 — Contact form email (Web3Forms)

1. Get a free key at **https://web3forms.com** (enter `contact@thehootlabmedia.com`).
2. Paste it into **`src/lib/web3forms.ts`** → `WEB3FORMS_KEY`.

---

## Later — your existing Google Form

When you send me your Google Form, I'll wire the `forwardToGoogleForm()` function in
`Code.gs` so submissions also land in that form's responses/sheet — no other changes needed.

## Notes
- MailApp free quota is ~100 emails/day — far more than enough.
- If you ever change the script, use **Deploy ▸ Manage deployments ▸ Edit ▸ New version**
  so the same URL keeps working (no need to update the site).
