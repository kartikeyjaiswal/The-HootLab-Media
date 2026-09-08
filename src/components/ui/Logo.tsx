import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The HootLab Media — full lockup (owl + wordmark).
 * By default it swaps between light/dark variants with the theme.
 * Pass `forceDark` to always render the dark-mode (light-text) logo,
 * e.g. on a permanently dark surface like the footer.
 */
export function Logo({
  className,
  priority = false,
  forceDark = false,
}: {
  className?: string;
  priority?: boolean;
  forceDark?: boolean;
}) {
  const base = cn("h-9 w-auto select-none sm:h-10", className);

  if (forceDark) {
    return (
      <Image
        src="/hootlab-logo-dark.webp"
        alt="The HootLab Media"
        width={900}
        height={430}
        priority={priority}
        className={base}
      />
    );
  }

  return (
    <>
      <Image
        src="/hootlab-logo.webp"
        alt="The HootLab Media"
        width={900}
        height={430}
        priority={priority}
        className={cn(base, "dark:hidden")}
      />
      <Image
        src="/hootlab-logo-dark.webp"
        alt="The HootLab Media"
        width={900}
        height={430}
        priority={priority}
        className={cn(base, "hidden dark:block")}
      />
    </>
  );
}
