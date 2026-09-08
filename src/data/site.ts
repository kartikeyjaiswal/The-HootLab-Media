import {
  Clapperboard,
  LayoutGrid,
  Target,
  CalendarCheck,
  TrendingUp,
  Rocket,
  Lightbulb,
  Layers,
  Gem,
  LineChart,
  Megaphone,
} from "lucide-react";

export const SITE = {
  name: "The HootLab Media",
  tagline: "Creative marketing that makes brands impossible to ignore.",
  instagram: "https://www.instagram.com/thehootlabmedia",
  instagramHandle: "@thehootlabmedia",
  linkedin: "https://www.linkedin.com/company/thehootlabmedia/",
  email: "contact@thehootlabmedia.com",
  domain: "thehootlabmedia.com",
  address: "Spaze I-Tech, Sector 49, Gurgaon, Haryana 122018, India",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    icon: Clapperboard,
    title: "Creative Reels",
    body: "Scroll-stopping short-form video concepts, edits, and storytelling.",
  },
  {
    icon: LayoutGrid,
    title: "Social Media Posts",
    body: "High-quality posts, carousels, and visual creatives for strong brand presence.",
  },
  {
    icon: Target,
    title: "Brand Strategy",
    body: "A clear creative direction that aligns your content with your business goals.",
  },
  {
    icon: CalendarCheck,
    title: "Content Planning",
    body: "Monthly ideas, content structure, and platform-ready planning.",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    body: "Creator partnerships and campaigns that put your brand in front of the right audiences.",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    body: "End-to-end creative support from concept to launch.",
  },
];

export const whyUs = [
  {
    icon: Lightbulb,
    title: "Creative + Strategy",
    body: "We don't just design content, we build communication that works.",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    body: "From ideas and content to campaigns and execution, everything is aligned.",
  },
  {
    icon: Gem,
    title: "Premium Brand Thinking",
    body: "Every visual and message is designed to elevate brand perception.",
  },
  {
    icon: LineChart,
    title: "Growth Focused",
    body: "Creative work backed by marketing intent, visibility, and results.",
  },
];

export const values = [
  { title: "Creative", body: "Fresh ideas that make brand communication visually memorable." },
  { title: "Strategic", body: "Content and campaigns built with clear purpose and direction." },
  { title: "Agile", body: "Fast-moving execution for modern digital platforms and trends." },
  { title: "Result-Driven", body: "Creative work supported by marketing thinking and measurable growth." },
];

// Portfolio reels — real client work (autoplay muted on scroll).
export const reels = [
  { id: "r1", title: "Content that connects", tag: "Creator Reel", src: "/videos/reel-1.mp4", poster: "/videos/reel-1-poster.jpg" },
  { id: "r2", title: "Built for the brand", tag: "Brand Campaign", src: "/videos/reel-2.mp4", poster: "/videos/reel-2-poster.jpg" },
  { id: "r3", title: "Made unmissable", tag: "Social Content", src: "/videos/reel-3.mp4", poster: "/videos/reel-3-poster.jpg" },
];

// ── Reviews ─────────────────────────────────────────────────
//  Names/roles are real. The quote TEXT below is placeholder wording —
//  replace each `quote` with the reviewer's actual words before launch.
export const testimonials = [
  {
    quote:
      "Collaborating with The HootLab Media was effortless — clear briefs, creative freedom, and content that actually landed with my audience.",
    name: "Anshu Mishra",
    role: "Content Creator",
  },
  {
    quote:
      "They really understand how creators work. The shoot was smooth and the reels we made together pulled some of my best engagement yet.",
    name: "Nitya",
    role: "Content Creator",
  },
  {
    quote:
      "HootLab handled our campaign end to end — strategy, creators, and execution. The results spoke for themselves.",
    name: "VedaXbot",
    role: "Brand Partner",
  },
];

export const inquiryTypes = [
  "Creative Reels",
  "Social Media Management",
  "Brand Strategy",
  "Influencer Marketing",
  "Full-service (everything)",
  "Something else",
];
