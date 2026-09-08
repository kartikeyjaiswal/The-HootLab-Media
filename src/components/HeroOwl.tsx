import { OwlHero } from "@/components/OwlHero";

/**
 * Hero owl — the interactive brand mark (transparent "Web_Logo" art with a
 * redrawn, perfectly-round eye ring). A small white dot inside each navy pupil
 * follows the cursor/finger. Light mode = navy outer ring; dark mode = white
 * outer ring. Used by the hero, the "remarkable" CTA, and the 404 page.
 */
export function HeroOwl({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* Light mode — navy outer ring */}
      <OwlHero
        className="w-full dark:hidden"
        src="/hero-light.webp"
        backing={false}
        variant="logoLight"
      />
      {/* Dark mode — white outer ring */}
      <OwlHero
        className="hidden w-full dark:block"
        src="/hero-dark.webp"
        backing={false}
        variant="logo"
      />
    </div>
  );
}
