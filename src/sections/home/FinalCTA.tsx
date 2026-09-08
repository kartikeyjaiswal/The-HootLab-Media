import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { HeroOwl } from "@/components/HeroOwl";
import { Magnetic } from "@/components/Magnetic";

export function FinalCTA() {
  return (
    <section className="relative px-4 py-16 sm:py-20">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-orange/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-fg/[0.07] blur-3xl" />

            <div className="relative">
              <HeroOwl className="mx-auto w-28" />
              <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-display-md font-bold text-fg">
                Let&apos;s build something{" "}
                <span className="text-orange">remarkable.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-fg/60">
                Tell us about your brand and we&apos;ll map the path — creative,
                strategy, and growth, all in one place.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Magnetic className="inline-flex">
                  <Button href="/onboarding" size="lg" arrow>
                    Start a project
                  </Button>
                </Magnetic>
                <Button href="/contact" size="lg" variant="secondary">
                  Talk to us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
