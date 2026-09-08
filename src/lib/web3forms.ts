// ─────────────────────────────────────────────────────────────
//  Web3Forms — form-to-email backend, no server required.
//
//  This is the ONE place the whole site's form backend is configured.
//  Every form (Contact, Project brief, Brand enquiry, Creator application)
//  posts here and is delivered straight to your inbox as an email.
//
//  ► GO LIVE IN 2 MINUTES:
//    1. Get a FREE access key at https://web3forms.com — enter the inbox
//       you want submissions delivered to (e.g. contact@thehootlabmedia.com).
//    2. Paste the key into WEB3FORMS_KEY below. That's the only change needed.
//
//  See docs/BACKEND-SETUP.md for the full guide (testing, spam, routing).
// ─────────────────────────────────────────────────────────────

// Web3Forms access key — delivers contact submissions to contact@thehootlabmedia.com.
export const WEB3FORMS_KEY: string = "3e986926-c20a-4761-bb16-f0ddefe3af92";

/** True once a real key has been pasted in (used to warn during local dev). */
export const WEB3FORMS_CONFIGURED = WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

const ENDPOINT = "https://api.web3forms.com/submit";

/** Shared input styling used across every form. */
export const field =
  "w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-fg placeholder:text-fg/35 transition-all duration-200 focus:border-orange/60 focus:outline-none focus:ring-2 focus:ring-orange/20";

export type SubmitResult = { success: boolean; message?: string };

/**
 * Submit a FormData payload to Web3Forms. Returns the parsed JSON.
 * `subject` becomes the email subject line so you can tell forms apart
 * in your inbox. The visitor's `email` field is used as the reply-to.
 */
export async function submitForm(
  data: FormData,
  subject: string,
): Promise<SubmitResult> {
  // Fail loudly in local dev if the key hasn't been set yet.
  if (!WEB3FORMS_CONFIGURED) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[web3forms] No access key set — see src/lib/web3forms.ts / docs/BACKEND-SETUP.md",
      );
    }
    return { success: false, message: "Form backend not configured yet." };
  }

  data.append("access_key", WEB3FORMS_KEY);
  data.append("subject", subject);
  data.append("from_name", "The HootLab Media website");

  try {
    const res = await fetch(ENDPOINT, { method: "POST", body: data });
    return (await res.json()) as SubmitResult;
  } catch {
    return { success: false, message: "Network error — please try again." };
  }
}
