"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Looping muted reel that only plays while on screen (IntersectionObserver),
 * so a wall of reels never downloads/plays all at once. Production-ready for
 * static hosting: swap `src` per tile with real MP4s.
 */
export function VideoReel({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
