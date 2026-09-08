import { Section, SectionHeader } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { VideoReel } from "@/components/VideoReel";
import { reels } from "@/data/site";

export function Work() {
  return (
    <Section id="work" className="bg-panel">
      <SectionHeader
        eyebrow="Our Work"
        title={
          <>
            Content that <span className="text-orange">stops the scroll.</span>
          </>
        }
        lead="Short-form video and creative built to grab attention and drive real engagement."
      />

      <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {reels.map((r) => (
          <StaggerItem key={r.id}>
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-navy shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[9/16] overflow-hidden">
                <VideoReel
                  src={r.src}
                  poster={r.poster}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-panel/90 px-2.5 py-1 text-[10px] font-semibold text-fg backdrop-blur">
                  {r.tag}
                </span>
                <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white drop-shadow">
                  {r.title}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
