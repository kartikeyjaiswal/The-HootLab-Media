"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * AmbientBackground — site-wide premium backdrop behind all content:
 *   slow-drifting brand glows  +  a cursor-reactive orange glow  +  faint grain.
 *
 * GPU-cheap: glows animate transform/opacity only (static blur). The cursor glow
 * is transform-only and desktop-only. Honours reduced-motion (motion is killed
 * globally in globals.css); touch devices drop the cursor glow.
 */
export function AmbientBackground() {
  const mx = useMotionValue(-700);
  const my = useMotionValue(-700);
  const gx = useSpring(mx, { stiffness: 120, damping: 24, mass: 0.5 });
  const gy = useSpring(my, { stiffness: 120, damping: 24, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return; // skip touch
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden="true" className="amb pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="amb-glow amb-a1" />
      <div className="amb-glow amb-a2" />
      <div className="amb-glow amb-a3" />
      <motion.div className="amb-cursor hidden lg:block" style={{ x: gx, y: gy }} />
      <div className="amb-grain" />
    </div>
  );
}
