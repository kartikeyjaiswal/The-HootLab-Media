"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ThemeToggle — flips `.dark` on <html> and persists to localStorage.
 * On supporting browsers (Chrome/Edge) the switch uses the View Transition API:
 * the new theme spills out from the button like ink (circular reveal). Other
 * browsers fall back to a smooth colour cross-fade. Reduced-motion respected.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function apply(next: boolean) {
    const el = document.documentElement;
    el.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  function toggle() {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback: no View Transitions (Safari/Firefox) or reduced motion → cross-fade
    if (!("startViewTransition" in document) || reduce) {
      el.classList.add("theme-transition");
      apply(next);
      window.setTimeout(() => el.classList.remove("theme-transition"), 420);
      return;
    }

    // Set the ink origin at the button centre + radius to the farthest corner
    const r = btn.current?.getBoundingClientRect();
    const x = r ? r.left + r.width / 2 : window.innerWidth - 40;
    const y = r ? r.top + r.height / 2 : 40;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    el.style.setProperty("--vt-x", `${x}px`);
    el.style.setProperty("--vt-y", `${y}px`);
    el.style.setProperty("--vt-r", `${radius}px`);
    el.classList.add("vt-theme");

    const t = document.startViewTransition(() => apply(next));
    t.finished.finally(() => el.classList.remove("vt-theme"));
  }

  return (
    <button
      ref={btn}
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-fg/70 transition-colors hover:border-orange/40 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-500 ease-premium",
          dark ? "translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-500 ease-premium",
          dark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
