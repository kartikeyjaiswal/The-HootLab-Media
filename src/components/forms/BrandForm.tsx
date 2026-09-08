"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { field } from "@/lib/web3forms";
import { submitToRelay } from "@/lib/relay";
import { SITE } from "@/data/site";
import { EASE } from "@/lib/utils";

const labelText = "block text-xs font-medium text-fg/70";

const budgets = [
  "Under ₹50k",
  "₹50k – ₹1.5L",
  "₹1.5L – ₹5L",
  "₹5L+",
  "Not sure yet",
];

export function BrandForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const ok = await submitToRelay(new FormData(e.currentTarget), "brand");
      setStatus(ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 py-14 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-orange/15 ring-1 ring-orange/30"
        >
          <Check className="h-9 w-9 text-orange" strokeWidth={3} />
        </motion.div>
        <h3 className="mt-6 text-2xl font-semibold text-fg">
          Enquiry sent.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-fg/60">
          Thanks for reaching out. A strategist from The HootLab Media will get
          back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="card space-y-5 p-6 sm:p-8"
    >
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className={labelText}>First name *</span>
          <input name="first_name" required placeholder="First name" className={field} />
        </label>
        <label className="space-y-2">
          <span className={labelText}>Last name *</span>
          <input name="last_name" required placeholder="Last name" className={field} />
        </label>
      </div>

      <label className="space-y-2">
        <span className={labelText}>Company name *</span>
        <input name="company" required placeholder="Your company / brand" className={field} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className={labelText}>Email *</span>
          <input name="email" type="email" required placeholder="you@company.com" className={field} />
        </label>
        <label className="space-y-2">
          <span className={labelText}>Phone *</span>
          <input name="phone" type="tel" required placeholder="+91 …" className={field} />
        </label>
      </div>

      <label className="space-y-2">
        <span className={labelText}>Budget</span>
        <select name="budget" defaultValue="" className={`${field} cursor-pointer`}>
          <option value="" disabled>
            Select…
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2">
        <span className={labelText}>Requirements *</span>
        <textarea
          name="requirements"
          required
          rows={5}
          placeholder="Tell us about your brand, goals and what you're looking for…"
          className={field}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please email us at {SITE.email}.
        </p>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-fg/45">We reply within one business day.</p>
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send enquiry <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
