import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Conditionally join + de-duplicate Tailwind classes. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Compact number formatter: 12000 -> "12K", 50000000 -> "50M". */
export function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${+(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${+(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

/** Shared Framer Motion easing — a calm, expensive-feeling curve. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Tiny dark surface-tinted blur placeholder for remote images (avoids flashes). */
export const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjYiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjYiIGZpbGw9IiMwRTE0MUIiLz48L3N2Zz4=";
