import type { Metadata } from "next";
import { Eye, Aperture, Play, Feather, Sparkles, MessageSquare, Clapperboard, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FlipCard } from "@/components/FlipCard";
import { FinalCTA } from "@/sections/home/FinalCTA";
import { WhyUs } from "@/sections/home/WhyUs";
import { values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The HootLab Media is a creative marketing agency built on strategy, creativity and growth. Bold, smart, premium, human.",
};

const personality = ["Bold", "Smart", "Premium", "Human"];

const meaning = [
  { icon: Eye, title: "Vision", body: "Owl eyes — awareness and clarity in everything we create." },
  { icon: Aperture, title: "Craft", body: "The aperture — a creative lens and true media craft." },
  { icon: Play, title: "Motion", body: "The play icon — reels and digital storytelling that moves." },
  { icon: Feather, title: "Growth", body: "The wings — momentum, elevation, and brand growth." },
];

const contentStyle = [
  { icon: Sparkles, title: "Bold visuals", body: "Design that stops the scroll and stands out in a crowded feed." },
  { icon: MessageSquare, title: "Clean messaging", body: "Clear, confident words that land the point fast." },
  { icon: Clapperboard, title: "Motion-first design", body: "Built for reels and short-form, where attention actually lives." },
  { icon: TrendingUp, title: "Performance-led creativity", body: "Every creative choice tied to reach, leads, and growth." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-8 sm:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid [background-size:44px_44px] opacity-60 [mask-image:radial-gradient(110%_80%_at_50%_0%,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/10 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> About Us
            </span>
            <h1 className="text-balance font-display text-display-lg font-extrabold text-fg [view-transition-name:page-title]">
              A creative studio that makes brands{" "}
              <span className="text-orange">impossible to ignore.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lead text-fg/65">
              The HootLab Media is a creative marketing agency that helps brands grow
              through strategy-led content, bold creative execution, and
              performance-focused marketing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision + Values */}
      <Section className="bg-panel">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Our Vision
            </span>
            <p className="font-display text-display-md font-bold text-fg">
              To build brands that stand out, stay relevant, and grow with creative clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {personality.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-line bg-soft px-4 py-2 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/50 hover:text-orange hover:shadow-[0_8px_24px_-10px_rgba(245,162,26,0.6)]"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-line bg-soft p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_0_0_1px_rgba(245,162,26,0.22),0_20px_50px_-22px_rgba(245,162,26,0.5)]">
                  {/* ambient corner glow, revealed on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <h3 className="text-heading font-semibold text-fg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{v.body}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* How we work — content style */}
      <Section className="bg-soft">
        <SectionHeader
          eyebrow="How We Work"
          title={
            <>
              A motion-first, <span className="text-orange">premium</span> approach.
            </>
          }
          lead="Designed to look premium across every touchpoint."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contentStyle.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <FlipCard
                icon={<c.icon className="h-5 w-5 text-orange" />}
                title={c.title}
                body={c.body}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Logo meaning */}
      <Section className="bg-panel">
        <SectionHeader
          eyebrow="The Owl"
          title="What our mark stands for"
          lead="Every part of the HootLab owl carries meaning."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {meaning.map((m) => (
            <StaggerItem key={m.title} className="h-full">
              <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-line bg-panel p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/40 hover:shadow-[0_0_0_1px_rgba(245,162,26,0.22),0_22px_55px_-24px_rgba(245,162,26,0.55)]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/10 text-orange ring-1 ring-orange/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <m.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-fg">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{m.body}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <WhyUs />
      <FinalCTA />
    </>
  );
}
