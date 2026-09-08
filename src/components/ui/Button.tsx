import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-[3.25rem] px-7 text-[15px]",
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-soft disabled:opacity-50 disabled:pointer-events-none active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white shadow-glow hover:bg-orange-600 hover:-translate-y-0.5 focus-visible:ring-orange/50",
  secondary:
    "border border-line bg-panel text-fg shadow-soft hover:border-orange/40 hover:-translate-y-0.5 focus-visible:ring-orange/30",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  arrow?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", href, arrow = false, className, children, ...props },
  ref,
) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button ref={ref} className={cls} {...props}>
      {content}
    </button>
  );
});
