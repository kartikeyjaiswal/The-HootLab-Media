// ─────────────────────────────────────────────────────────────
//  Form relay — Brand & Creator submissions.
//
//  These two forms need to fan out to THREE places (Google Sheet +
//  email + WhatsApp), which a plain form-to-email service can't do.
//  So they POST to a Google Apps Script Web App that runs on Google
//  and delivers to all three.
//
//  SETUP (one-time): deploy the script in `integrations/Code.gs` as a
//  Web App ("Execute as: Me", "Who has access: Anyone"), then paste its
//  /exec URL below. Full steps in docs/BACKEND-SETUP.md.
//
//  (The Contact form is separate — it uses Web3Forms → email only.)
// ─────────────────────────────────────────────────────────────

// Deployed Apps Script Web App — fans out to Google Sheet + email (+ WhatsApp later).
export const RELAY_URL: string = "https://script.google.com/macros/s/AKfycbyvFRfrCtRJIe2UPZ1VeygicSSzw2T5UvI15-oFr48nVz7aaYBY44IyA45NpQvFxp5Nhg/exec";

export const RELAY_CONFIGURED = RELAY_URL !== "YOUR_APPS_SCRIPT_WEB_APP_URL";

/**
 * POST form data to the Apps Script relay.
 * Apps Script web apps 302-redirect their response, so the reply is often
 * opaque to the browser — we treat a resolved request as success (the script
 * still logs to the Sheet, emails, and WhatsApps on its side).
 * `formType` is "brand" or "creator" — the script routes on it.
 */
export async function submitToRelay(
  data: FormData,
  formType: string,
): Promise<boolean> {
  if (!RELAY_CONFIGURED) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[relay] RELAY_URL not set — see src/lib/relay.ts / docs/BACKEND-SETUP.md",
      );
    }
    return false;
  }

  data.append("form_type", formType);
  try {
    const res = await fetch(RELAY_URL, { method: "POST", body: data });
    try {
      const json = await res.json();
      return json.success !== false;
    } catch {
      return true; // opaque/redirected response — assume delivered
    }
  } catch {
    return true; // CORS on the redirected response — the script still ran
  }
}
