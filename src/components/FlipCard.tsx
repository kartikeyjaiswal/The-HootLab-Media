"use client";

import { useEffect, useId, useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FlipCard — front shows the icon + name; on hover (desktop) or tap (mobile)
 * it flips in 3D to reveal the details on a navy back face. Transform-only (GPU).
 * Under reduced-motion the flip snaps instead of animating (handled globally).
 */
export function FlipCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const id = useId();

  // Only one card stays flipped at a time — opening one flips the others back.
  useEffect(() => {
    const onOpen = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) setFlipped(false);
    };
    window.addEventListener("flipcard:open", onOpen);
    return () => window.removeEventListener("flipcard:open", onOpen);
  }, [id]);

  function toggle() {
    const next = !flipped;
    setFlipped(next);
    if (next) window.dispatchEvent(new CustomEvent("flipcard:open", { detail: id }));
  }

  function onTap() {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      toggle();
    }
  }

  return (
    <div
      className="group h-full [perspective:1400px]"
      onClick={onTap}
      role="button"
      tabIndex={0}
      aria-label={`${title}. ${body}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div
        className={cn(
          "relative min-h-[15.5rem] w-full transition-transform duration-500 ease-premium [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        {/* front */}
        <div className="absolute inset-0 flex flex-col rounded-2xl border border-line bg-panel p-7 shadow-card [backface-visibility:hidden] [transform:translateZ(0)]">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-fg/[0.06] text-fg">
            {icon}
          </span>
          <h3 className="mt-auto text-heading font-semibold text-fg">{title}</h3>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-fg/40">
            <RotateCw className="h-3.5 w-3.5" /> Hover to see more
          </span>
        </div>

        {/* back */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-orange/30 bg-navy p-7 text-white shadow-lift [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange/20 blur-2xl" />
          <span className="relative text-[11px] font-semibold uppercase tracking-label text-orange">
            {title}
          </span>
          <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/75">{body}</p>
          <a
            href="/contact"
            className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors hover:text-orange-400"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
