import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SITE, nav, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-panel">
      {/* flowing light / smoke — brand orange + blue, animated (light & dark) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="foot-streak foot-streak-1" />
        <span className="foot-streak foot-streak-2" />
        <span className="foot-streak foot-streak-3" />
        <span className="foot-streak foot-streak-4" />
      </div>

      <div className="container-px relative z-10">
        <div className="grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-20 sm:h-24" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-fg/60">
              {SITE.tagline} Strategy, creativity and growth under one roof.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-fg/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              {SITE.address}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-12 w-12 place-items-center rounded-full border border-line text-fg/60 transition hover:border-orange/50 hover:text-orange"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-full border border-line text-fg/60 transition hover:border-orange/50 hover:text-orange"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="grid h-12 w-12 place-items-center rounded-full border border-line text-fg/60 transition hover:border-orange/50 hover:text-orange"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-label text-fg/40">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/contact"
                    className="text-base text-fg/65 transition hover:text-fg"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-label text-fg/40">
              Company
            </h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-base text-fg/65 transition hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1 text-base text-fg/65 transition hover:text-fg"
                >
                  {SITE.email}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-fg/45">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm font-semibold uppercase tracking-label text-orange">
            Let&apos;s build something remarkable.
          </p>
        </div>
      </div>
    </footer>
  );
}
