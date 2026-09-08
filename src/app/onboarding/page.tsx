import type { Metadata } from "next";
import { OnboardingForms } from "@/components/forms/OnboardingForms";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Onboarding",
  description:
    "Collaborate with The HootLab Media. Creators can apply to join our network, and brands can start a project — we reply within one business day.",
};

export default function OnboardingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-orange/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:44px_44px] opacity-50 [mask-image:radial-gradient(100%_50%_at_50%_0%,black,transparent)]" />

      <section className="container-px relative pt-32 pb-20 sm:pt-36">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <Reveal>
            <div className="text-center">
              <span className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Onboarding
              </span>
              <h1 className="text-balance font-display text-display-lg font-extrabold text-fg [view-transition-name:page-title]">
                Let&apos;s build something{" "}
                <span className="text-orange">remarkable.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lead text-fg/65">
                Are you a creator who wants to collaborate, or a brand looking to
                grow? Pick your path below and share a few details — we&apos;ll take
                it from there.
              </p>
            </div>
          </Reveal>

          {/* Forms */}
          <Reveal delay={0.1}>
            <div className="mt-10">
              <OnboardingForms />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
