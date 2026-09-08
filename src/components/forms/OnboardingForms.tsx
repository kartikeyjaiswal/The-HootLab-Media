"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Building2 } from "lucide-react";
import { InfluencerForm } from "./InfluencerForm";
import { BrandForm } from "./BrandForm";
import { EASE } from "@/lib/utils";

type Tab = "creator" | "brand";

const tabs: { id: Tab; label: string; sub: string; icon: typeof Users }[] = [
  { id: "creator", label: "I'm a Creator", sub: "Apply to collaborate", icon: Users },
  { id: "brand", label: "I'm a Brand", sub: "Work with us", icon: Building2 },
];

export function OnboardingForms() {
  const [tab, setTab] = useState<Tab>("creator");

  return (
    <div className="space-y-8">
      {/* Toggle */}
      <div className="grid gap-3 sm:grid-cols-2">
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-orange bg-orange/[0.06] shadow-card"
                  : "border-line bg-panel hover:border-orange/40"
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition ${
                  active ? "bg-orange text-white" : "bg-fg/[0.06] text-fg"
                }`}
              >
                <t.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-fg">{t.label}</span>
                <span className="block text-xs text-fg/55">{t.sub}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Active form */}
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {tab === "creator" ? <InfluencerForm /> : <BrandForm />}
      </motion.div>
    </div>
  );
}
