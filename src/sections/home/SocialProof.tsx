import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { testimonials } from "@/data/site";

export function SocialProof() {
  return (
    <Section id="results">
      <SectionHeader
        eyebrow="Results"
        title={
          <>
            Trusted to make brands <span className="text-orange">grow.</span>
          </>
        }
        lead="Words from the brands we build with."
      />

      {/* Testimonials */}
      <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <StaggerItem key={i}>
            <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
              <Quote className="h-7 w-7 text-orange/30" fill="currentColor" />
              <blockquote className="mt-4 flex-1 text-pretty text-fg/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-0.5" aria-label="5 out of 5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-orange" fill="currentColor" />
                ))}
              </div>
              <div className="mt-3 border-t border-line pt-4">
                <p className="text-sm font-semibold text-fg">{t.name}</p>
                <p className="text-xs text-fg/50">{t.role}</p>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
