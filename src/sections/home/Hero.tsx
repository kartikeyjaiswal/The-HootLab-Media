"use client";

import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/Magnetic";
import { HeroOwl } from "@/components/HeroOwl";
import { EASE } from "@/lib/utils";

const chips = ["Creative Reels", "Social Media", "Brand Strategy", "Performance"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
      {/* soft background texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:44px_44px] [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_75%)] opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[26rem] w-[26rem] rounded-full bg-fg/[0.07] blur-[130px]" />

      <div className="container-px relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="eyebrow rounded-full border border-line bg-panel px-3 py-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Creative Marketing Agency
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="mt-5 text-balance font-display text-display-xl font-extrabold text-fg [view-transition-name:page-title]"
            >
              Creative marketing that delivers{" "}
              <span className="text-orange">real results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-lg text-lead text-fg/65"
            >
              We help brands grow through strategy-led content, bold creative
              execution, and performance marketing — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic className="inline-flex">
                <Button href="#work" size="lg" arrow>
                  View Our Work
                </Button>
              </Magnetic>
              <Button href="/contact" size="lg" variant="secondary">
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-orange" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-fg/55">
                Trusted by <span className="font-semibold text-fg">growing brands</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6"
            >
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-fg/50"
                >
                  <span className="h-1 w-1 rounded-full bg-orange" />
                  {c}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — interactive owl (reel temporarily detached; disabled block below) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="relative mx-auto -mt-6 w-full max-w-[35rem] lg:-mt-16 lg:mr-0"
          >
            {/* soft brand glow behind the owl */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-orange/10 blur-[90px]" />
            <HeroOwl className="w-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
