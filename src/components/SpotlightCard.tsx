"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — a card with a soft orange highlight that follows the cursor
 * inside it, plus a reactive border sheen. The glow is a CSS radial-gradient
 * driven by --mx/--my custom properties (see `.spotlight` in globals.css), so
 * it costs nothing until hovered. Falls back to a plain card on touch.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={cn("spotlight", className)}>
      {children}
    </div>
  );
}
