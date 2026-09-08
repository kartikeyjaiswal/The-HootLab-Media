import type { Metadata } from "next";
import { Mail, Instagram, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The HootLab Media for creative reels, social media, brand strategy and performance marketing. We reply within one business day.",
};

const channels = [
  { icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}`, hint: "Fastest way to reach us" },
  { icon: Briefcase, label: "New business", value: "Start a project", href: "/onboarding", hint: "Tell us your brief" },
  { icon: Instagram, label: "Social", value: SITE.instagramHandle, href: SITE.instagram, hint: "See our latest work" },
  { icon: MapPin, label: "Office", value: SITE.address, hint: "Gurgaon, India" },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:44px_44px] opacity-50 [mask-image:radial-gradient(100%_60%_at_50%_0%,black,transparent)]" />

      <section className="container-px relative pt-32 pb-20 sm:pt-36">
        <Reveal className="max-w-3xl">
          <span className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Contact
          </span>
          <h1 className="text-balance font-display text-display-lg font-extrabold text-fg [view-transition-name:page-title]">
            Let&apos;s make your brand{" "}
            <span className="text-orange">impossible to ignore.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lead text-fg/65">
            Whether you need scroll-stopping reels, a full content system, or a
            performance campaign — tell us where you want to go and we&apos;ll map
            the path.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map((c) => {
              const external = c.href?.startsWith("http") || c.href?.startsWith("mailto");
              const cls =
                "group flex h-full items-start gap-4 rounded-2xl border border-line bg-panel p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/30";
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange ring-1 ring-orange/20">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wide text-fg/45">{c.label}</p>
                    <p className="mt-0.5 flex items-center gap-1 truncate text-sm font-semibold text-fg">
                      {c.value}
                      {c.href && <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-orange opacity-0 transition group-hover:opacity-100" />}
                    </p>
                    <p className="mt-1 text-xs text-fg/50">{c.hint}</p>
                  </div>
                </>
              );
              return (
                <StaggerItem key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className={cls}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal direction="left" delay={0.1}>
            <LeadForm variant="contact" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
