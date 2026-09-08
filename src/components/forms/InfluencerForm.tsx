"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { field } from "@/lib/web3forms";
import { submitToRelay } from "@/lib/relay";
import { SITE } from "@/data/site";
import { EASE } from "@/lib/utils";

const channels = ["Instagram", "Facebook", "Snapchat", "Youtube", "LinkedIn"];
const categories = [
  "Skincare Collaborations",
  "Fitness Collaborations",
  "Lifestyle Collaborations",
  "Youtube Vlogger Collaborations",
  "Men Fashion Collaborations on Instagram",
  "Men Fashion Collaborations on Youtube",
  "Tech Collaboration",
  "Mom Influencer Collaboration",
  "Couple Creators",
  "Other",
];

const labelText = "block text-xs font-medium text-fg/70";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-b border-line pb-2 text-[0.7rem] font-semibold uppercase tracking-wider text-orange">
      {children}
    </p>
  );
}

export function InfluencerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [otherChannel, setOtherChannel] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const ok = await submitToRelay(new FormData(e.currentTarget), "influencer");
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
          Application received.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-fg/60">
          Thanks for applying to collaborate with The HootLab Media. Our team
          reviews new creators and will reach out if it&apos;s a fit.
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
      className="card space-y-8 p-6 sm:p-8"
    >
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* About you */}
      <div className="space-y-5">
        <SectionTitle>About you</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className={labelText}>Name of influencer *</span>
            <input name="influencer_name" required placeholder="Full name" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>Email *</span>
            <input name="email" type="email" required placeholder="you@email.com" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>Contact number *</span>
            <input name="contact_number" type="tel" required placeholder="+91 …" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>Alternative contact number</span>
            <input name="alt_contact_number" type="tel" placeholder="Optional" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>Age *</span>
            <input name="age" type="number" min={1} required placeholder="Your age" className={field} />
          </label>
          <div className="space-y-2">
            <span className={labelText}>Gender *</span>
            <div className="flex flex-wrap gap-2">
              {["Female", "Male", "Other"].map((g) => (
                <label
                  key={g}
                  className={`cursor-pointer rounded-xl border px-4 py-2 text-sm transition ${
                    gender === g
                      ? "border-orange bg-orange/10 text-fg"
                      : "border-line text-fg/60 hover:border-orange/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    required
                    className="sr-only"
                    onChange={() => setGender(g)}
                  />
                  {g}
                </label>
              ))}
            </div>
            {gender === "Other" && (
              <input name="gender_other" placeholder="Please specify" className={field} />
            )}
          </div>
        </div>
      </div>

      {/* Reach & channels */}
      <div className="space-y-5">
        <SectionTitle>Reach &amp; channels</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className={labelText}>Followers / subscribers on Instagram *</span>
            <input name="instagram_followers" required placeholder="e.g. 45,000" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>Followers / subscribers on YouTube *</span>
            <input name="youtube_followers" required placeholder="e.g. 12,000 (or 0)" className={field} />
          </label>
        </div>

        <div className="space-y-2">
          <span className={labelText}>Which social media channels do you create content on? *</span>
          <div className="flex flex-wrap gap-2">
            {channels.map((c) => (
              <label
                key={c}
                className="cursor-pointer rounded-xl border border-line px-4 py-2 text-sm text-fg/70 transition hover:border-orange/40 has-[:checked]:border-orange has-[:checked]:bg-orange/10 has-[:checked]:text-fg"
              >
                <input type="checkbox" name="channels" value={c} className="sr-only" />
                {c}
              </label>
            ))}
            <label className="cursor-pointer rounded-xl border border-line px-4 py-2 text-sm text-fg/70 transition hover:border-orange/40 has-[:checked]:border-orange has-[:checked]:bg-orange/10 has-[:checked]:text-fg">
              <input
                type="checkbox"
                name="channels"
                value="Other"
                className="sr-only"
                onChange={(e) => setOtherChannel(e.target.checked)}
              />
              Other
            </label>
          </div>
          {otherChannel && (
            <input name="channels_other" placeholder="Other channel(s)" className={field} />
          )}
        </div>

        <div className="grid gap-5">
          <label className="space-y-2">
            <span className={labelText}>Instagram profile link *</span>
            <input name="instagram_link_1" type="url" required placeholder="https://instagram.com/…" className={field} />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className={labelText}>Any other Instagram profile link</span>
              <input name="instagram_link_2" type="url" placeholder="Optional" className={field} />
            </label>
            <label className="space-y-2">
              <span className={labelText}>Other link (YouTube / Snapchat / Facebook)</span>
              <input name="other_platform_link" type="url" placeholder="Optional" className={field} />
            </label>
          </div>
        </div>
      </div>

      {/* Collaboration */}
      <div className="space-y-5">
        <SectionTitle>Collaboration</SectionTitle>

        <div className="space-y-2">
          <span className={labelText}>Type *</span>
          <div className="flex flex-wrap gap-2">
            {["Barter", "Paid"].map((t) => (
              <label
                key={t}
                className={`cursor-pointer rounded-xl border px-5 py-2 text-sm transition ${
                  type === t
                    ? "border-orange bg-orange/10 text-fg"
                    : "border-line text-fg/60 hover:border-orange/40"
                }`}
              >
                <input
                  type="radio"
                  name="collab_type"
                  value={t}
                  required
                  className="sr-only"
                  onChange={() => setType(t)}
                />
                {t}
              </label>
            ))}
          </div>
        </div>

        {type === "Paid" && (
          <label className="space-y-2">
            <span className={labelText}>
              Share your commercials — Reel, Story, Post
            </span>
            <textarea
              name="commercials"
              rows={3}
              placeholder="e.g. Reel ₹—, Story ₹—, Post ₹—"
              className={field}
            />
          </label>
        )}

        <div className="space-y-2">
          <span className={labelText}>Which category do you create content in? *</span>
          <select
            name="category"
            required
            defaultValue=""
            className={`${field} cursor-pointer`}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select…
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {category === "Other" && (
            <input name="category_other" placeholder="Please specify" className={field} />
          )}
        </div>

        <label className="space-y-2">
          <span className={labelText}>Past brand collaborations</span>
          <textarea
            name="past_collabs"
            rows={2}
            placeholder="Brands you've collaborated with before (optional)"
            className={field}
          />
        </label>
      </div>

      {/* Location & languages */}
      <div className="space-y-5">
        <SectionTitle>Location &amp; languages</SectionTitle>
        <label className="space-y-2">
          <span className={labelText}>Languages you create content in *</span>
          <input name="languages" required placeholder="e.g. English, Hindi, Punjabi" className={field} />
        </label>
        <div className="grid gap-5 sm:grid-cols-3">
          <label className="space-y-2">
            <span className={labelText}>City *</span>
            <input name="city" required placeholder="City" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>State *</span>
            <input name="state" required placeholder="State" className={field} />
          </label>
          <label className="space-y-2">
            <span className={labelText}>PIN code *</span>
            <input name="pincode" required inputMode="numeric" placeholder="PIN" className={field} />
          </label>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please email us at {SITE.email}.
        </p>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-fg/45">We review every application personally.</p>
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Submit application <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
