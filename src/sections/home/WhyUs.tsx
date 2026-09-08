import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { whyUs } from "@/data/site";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:44px_44px] opacity-[0.15] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)]" />

      <div className="container-px relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Why The HootLab Media
          </span>
          <h2 className="text-balance font-display text-display-md font-bold text-white">
            Creative work that&apos;s built to{" "}
            <span className="text-orange">perform.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <StaggerItem key={w.title}>
              <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange/40 hover:bg-white/[0.07]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange/15 text-orange ring-1 ring-orange/30 transition-transform duration-300 group-hover:-translate-y-1">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{w.body}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10">
          <p className="text-balance text-xl font-medium text-white/90 sm:text-2xl">
            We create brands that capture attention,{" "}
            <span className="text-orange">build trust</span>, and stay remembered.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
