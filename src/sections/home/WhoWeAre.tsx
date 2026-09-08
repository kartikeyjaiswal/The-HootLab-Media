import { Target, Lightbulb, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

const pillars = [
  {
    icon: Target,
    title: "What We Build",
    body: "Brand presence that looks strong, feels premium, and communicates clearly.",
  },
  {
    icon: Lightbulb,
    title: "How We Work",
    body: "We combine creative ideas, social storytelling, and marketing strategy into one system.",
  },
  {
    icon: TrendingUp,
    title: "What We Deliver",
    body: "Creative reels, social media design, content planning, and performance marketing that drive visibility and growth.",
  },
];

export function WhoWeAre() {
  return (
    <Section id="about" className="bg-panel">
      <SectionHeader
        eyebrow="Who We Are"
        title={
          <>
            A creative marketing partner built for{" "}
            <span className="text-orange">modern brands.</span>
          </>
        }
        lead="The HootLab Media helps brands grow through strategy-led content, bold creative execution, and performance-focused marketing."
      />

      <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <StaggerItem key={p.title}>
            <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-line bg-soft p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:bg-panel hover:shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange ring-1 ring-orange/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-heading font-semibold text-fg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/60">{p.body}</p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-8">
        <p className="text-sm font-medium text-fg/50">
          <span className="text-orange">Bold</span> · Smart · Premium · Human — one agency,
          strategy, creativity, and growth under one roof.
        </p>
      </Reveal>
    </Section>
  );
}
