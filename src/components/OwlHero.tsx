"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Eye (pupil) centres as % of the box, per artwork.
const EYE_SETS = {
  // Web_Logo dark (white outer ring, navy pupils) — moving element = white dot
  logo: {
    aspect: "900/744",
    dotSize: 5.5,
    eyes: [
      { x: 27.39, y: 59.42 },
      { x: 72.61, y: 59.42 },
    ],
  },
  // Web_Logo light (navy outer ring, navy pupils) — moving element = white dot
  logoLight: {
    aspect: "900/744",
    dotSize: 5.5,
    eyes: [
      { x: 27.39, y: 59.42 },
      { x: 72.61, y: 59.42 },
    ],
  },
};

/**
 * OwlHero — the brand owl mark (navy/orange) with pupils that follow the cursor.
 * A soft filled light circle sits behind it so the navy rings read clearly in
 * dark mode too. Pupils lerp via rAF (loop stops when settled). Disabled on
 * touch / reduced-motion.
 */
export function OwlHero({
  className,
  src = "/hero-dark.webp",
  backing = false,
  variant = "logo",
}: {
  className?: string;
  /** owl artwork — defaults to the navy-ring owl; pass the white-ring one for dark surfaces */
  src?: string;
  /** soft white glow behind the owl so navy rings read on dark (not needed for the white-ring owl) */
  backing?: boolean;
  /** which artwork's eye geometry to use ("owl" or "logo") */
  variant?: keyof typeof EYE_SETS;
}) {
  const cfg = EYE_SETS[variant];
  const EYES = cfg.eyes;
  const wrap = useRef<HTMLDivElement>(null);
  const pupils = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // honour reduced-motion; otherwise track mouse AND touch

    const targets = EYES.map(() => ({ x: 0, y: 0 }));
    const curs = EYES.map(() => ({ x: 0, y: 0 }));
    let raf = 0;
    let running = false;

    const apply = () => {
      pupils.current.forEach((p, i) => {
        if (p)
          p.style.transform = `translate(calc(-50% + ${curs[i].x.toFixed(2)}px), calc(-50% + ${curs[i].y.toFixed(2)}px))`;
      });
    };

    const tick = () => {
      let moving = false;
      curs.forEach((c, i) => {
        c.x += (targets[i].x - c.x) * 0.16;
        c.y += (targets[i].y - c.y) * 0.16;
        if (Math.abs(targets[i].x - c.x) > 0.05 || Math.abs(targets[i].y - c.y) > 0.05) moving = true;
      });
      apply();
      if (moving) raf = requestAnimationFrame(tick);
      else running = false;
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    // Aim the pupils at a screen point — cursor on desktop, finger on touch.
    // Both eyes aim from the owl's CENTRE (not each eye individually), so they
    // always move as a pair. Per-eye aiming goes cross-eyed when the pointer is
    // near or between the eyes, which reads as broken.
    const point = (cx: number, cy: number) => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (!r.width) return;
      const max = r.width * 0.048; // eye travel
      // midpoint of the two eyes
      const ox = r.left + ((EYES[0].x + EYES[1].x) / 200) * r.width;
      const oy = r.top + ((EYES[0].y + EYES[1].y) / 200) * r.height;
      const dx = cx - ox;
      const dy = cy - oy;
      const d = Math.hypot(dx, dy) || 1;
      const f = Math.min(1, d / 240);
      const tx = (dx / d) * max * f;
      const ty = (dy / d) * max * f;
      for (const t of targets) {
        t.x = tx;
        t.y = ty;
      }
      start();
    };

    const onMouse = (e: MouseEvent) => point(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) point(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <div ref={wrap} className={cn("relative", className)} style={{ aspectRatio: cfg.aspect.replace("/", " / ") }}>
      {/* soft light circle behind the owl — lets the navy rings read on dark */}
      {backing && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(62% 58% at 50% 52%, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.55) 55%, transparent 76%)",
          }}
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="The HootLab Media owl"
        draggable={false}
        loading="eager"
        fetchPriority="high"
        className="relative h-full w-full select-none object-contain drop-shadow-[0_22px_50px_rgba(8,46,109,0.18)]"
      />
      {EYES.map((e, i) => (
        <span
          key={i}
          ref={(el) => {
            pupils.current[i] = el;
          }}
          aria-hidden="true"
          className="pointer-events-none absolute aspect-square rounded-full bg-white will-change-transform"
          style={{
            left: `${e.x}%`,
            top: `${e.y}%`,
            width: `${cfg.dotSize}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
