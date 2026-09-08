import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // The HootLab Media — brand palette (from brand board)
        navy: {
          DEFAULT: "#082E6D",
          50: "#eef2fa",
          100: "#dce6f4",
          700: "#0a3a86",
          800: "#072655",
          900: "#051c40",
        },
        orange: {
          DEFAULT: "#F5A21A",
          600: "#e08f08",
          400: "#ffbb52",
        },
        // theme-aware surfaces (flip in dark mode via CSS vars)
        soft: "rgb(var(--soft) / <alpha-value>)", // page background
        panel: "rgb(var(--panel) / <alpha-value>)", // cards / elevated surfaces
        line: "rgb(var(--line) / <alpha-value>)", // borders / dividers
        fg: "rgb(var(--fg) / <alpha-value>)", // primary text (navy in light, soft-white in dark)
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem,6vw,4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem,5vw,3.6rem)", { lineHeight: "1.06", letterSpacing: "-0.022em" }],
        "display-md": ["clamp(1.95rem,3.8vw,3rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        heading: ["clamp(1.15rem,1.8vw,1.4rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.05rem,1.3vw,1.2rem)", { lineHeight: "1.65" }],
      },
      letterSpacing: { label: "0.16em" },
      boxShadow: {
        // layered, low-contrast depth — premium light UI (not one flat AI shadow)
        soft: "0 1px 2px rgba(8,46,109,0.04), 0 8px 24px -10px rgba(8,46,109,0.12)",
        card: "0 1px 1px rgba(8,46,109,0.03), 0 2px 6px -2px rgba(8,46,109,0.05), 0 14px 32px -18px rgba(8,46,109,0.16)",
        lift: "0 2px 4px -1px rgba(8,46,109,0.05), 0 22px 46px -22px rgba(8,46,109,0.24)",
        glow: "0 6px 20px -6px rgba(245,162,26,0.45)",
        ring: "inset 0 0 0 1px rgba(8,46,109,0.06)",
      },
      backgroundImage: {
        "orange-sheen": "linear-gradient(120deg, rgba(245,162,26,0.12), transparent 60%)",
        grid: "linear-gradient(rgba(8,46,109,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(8,46,109,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(3%,-4%) scale(1.06)" },
          "66%": { transform: "translate(-3%,3%) scale(0.96)" },
        },
        driftB: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-4%,5%) scale(1.1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 7s ease-in-out infinite",
        drift: "drift 24s ease-in-out infinite",
        "drift-b": "driftB 30s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
