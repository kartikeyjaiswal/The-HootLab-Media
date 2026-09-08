"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      if (y > last && y > 140) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[90] flex justify-center px-4 pt-4">
      <motion.nav
        aria-label="Primary"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-3 [transition:background-color_300ms,box-shadow_300ms,border-color_300ms] sm:px-6 xl:max-w-[1360px]",
          scrolled
            ? "border border-line bg-panel/85 shadow-soft backdrop-blur-md"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link
          href="/"
          aria-label="The HootLab Media — home"
          className="relative shrink-0 transition-transform duration-200 ease-premium hover:scale-[1.03]"
        >
          {/* soft warm glow hugging the logo — makes it catch the eye */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -inset-y-3 rounded-full bg-orange/20 blur-2xl"
          />
          <span className="relative block">
            <Logo priority className="h-14 sm:h-16" />
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-fg" : "text-fg/55 hover:text-fg",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-fg/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button href="/contact" arrow className="h-10 px-5">
            Let&apos;s Talk
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-[4.75rem] z-[80] rounded-3xl border border-line bg-panel p-4 shadow-soft md:hidden"
          >
            <div className="flex flex-col">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium",
                    pathname === l.href ? "bg-fg/[0.07] text-fg" : "text-fg/70",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <div className="px-2 pt-3">
                <Button href="/contact" className="w-full justify-center" arrow>
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
