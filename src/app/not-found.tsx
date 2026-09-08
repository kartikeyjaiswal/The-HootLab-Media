import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroOwl } from "@/components/HeroOwl";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:44px_44px] opacity-60 [mask-image:radial-gradient(90%_70%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange/10 blur-[130px]" />

      <div className="container-px relative">
        <div className="mx-auto max-w-xl text-center">
          <HeroOwl className="mx-auto w-28" />

          <p className="mt-8 font-display text-display-xl font-extrabold leading-none text-fg">
            4<span className="text-orange">0</span>4
          </p>

          <h1 className="mt-4 font-display text-display-md font-bold text-fg">
            This page flew the nest.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lead text-fg/60">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
            get you back to something worth watching.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg" arrow>
              Back home
            </Button>
            <Link
              href="/onboarding"
              className="btn-secondary h-[3.25rem] px-6 text-base"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
