import { Sora, Inter } from "next/font/google";

// Headings (h1/h2, display statements) — Sora 700–800.
// Geometric and confident: the premium, modern SaaS look.
export const display = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Subheadings (600) + body (400–500) — Inter.
export const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
