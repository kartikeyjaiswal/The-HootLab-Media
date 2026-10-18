"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { inquiryTypes, SITE } from "@/data/site";
import { EASE } from "@/lib/utils";
import { submitForm, field } from "@/lib/web3forms";

const budgets = ["Under ₹25k", "₹25k – ₹75k", "₹75k – ₹2L", "₹2L+", "Not sure yet"];

type Variant = "contact" | "project";

export function LeadForm({ variant = "contact" }: { variant?: Variant }) {
  const isProject = variant === "project";
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const json = await submitForm(
        new FormData(e.currentTarget),
        isProject ? "🚀 New project inquiry — HootLab" : "✉️ New contact message — HootLab",
      );
      setStatus(json.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center"
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
              Message sent.
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-fg/60">
              Thanks for reaching out — our team will get back to you within one
              business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="space-y-5"
          >
            {/* honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="block text-xs font-medium text-fg/70">Name</span>
                <input name="name" required placeholder="Your full name" className={field} />
              </label>
              <label className="space-y-2">
                <span className="block text-xs font-medium text-fg/70">Email</span>
                <input name="email" type="email" required placeholder="you@email.com" className={field} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="block text-xs font-medium text-fg/70">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 …"
                  pattern="[0-9+\-\s()]{7,}"
                  title="Please enter a valid phone number"
                  className={field}
                />
              </label>
              <label className="space-y-2">
                <span className="block text-xs font-medium text-fg/70">
                  Company / Brand
                </span>
                <input name="company" placeholder="Optional" className={field} />
              </label>
            </div>

            <div className={`grid gap-5 ${isProject ? "sm:grid-cols-2" : ""}`}>
              <label className="space-y-2">
                <span className="block text-xs font-medium text-fg/70">
                  {isProject ? "Service needed" : "Inquiry type"}
                </span>
                <select name="inquiry" required className={`${field} cursor-pointer`} defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              {isProject && (
                <label className="space-y-2">
                  <span className="block text-xs font-medium text-fg/70">Budget range</span>
                  <select name="budget" className={`${field} cursor-pointer`} defaultValue="">
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
              )}
            </div>

            <label className="space-y-2">
              <span className="block text-xs font-medium text-fg/70">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={
                  isProject
                    ? "Tell us about your brand and what you're looking for…"
                    : "How can we help?"
                }
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
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    {isProject ? "Send project brief" : "Send message"}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
