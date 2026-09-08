import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/** Section wrapper with consistent vertical rhythm + container. */
export function Section({
  children,
  className,
  id,
  containered = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  containered?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <div className={containered ? "container-px" : undefined}>{children}</div>
    </section>
  );
}

/** Section header — orange eyebrow marker + navy heading + optional lead/action. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
  action?: ReactNode;
}) {
  if (align === "center") {
    return (
      <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
        {eyebrow && (
          <span className="eyebrow mb-4 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-balance font-display text-display-md font-bold text-fg">
          {title}
        </h2>
        {lead && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lead text-fg/65">
            {lead}
          </p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal className={className}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {eyebrow}
            </span>
          )}
          <h2 className="text-balance font-display text-display-md font-bold text-fg">
            {title}
          </h2>
          {lead && (
            <p className="mt-4 max-w-xl text-pretty text-lead text-fg/65">{lead}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  );
}
