"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Bridge between the click interceptor and the "route committed" effect.
let resolveNav: (() => void) | null = null;

/**
 * ViewTransitions — wraps internal link navigations in the View Transition API
 * so pages morph (soft cross-fade) instead of hard-cutting, on supporting
 * browsers (Chrome/Edge). Because Next's router is async, we resolve the
 * transition once the new route commits (pathname change), with a safety
 * timeout so it can never freeze the page. No-op on unsupported browsers,
 * reduced-motion, and modified/new-tab clicks.
 */
export function ViewTransitions() {
  const router = useRouter();
  const pathname = usePathname();

  // Route (and its DOM) committed → finish any pending transition.
  useEffect(() => {
    if (resolveNav) {
      resolveNav();
      resolveNav = null;
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined" || !("startViewTransition" in document)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const t = a.getAttribute("target");
      if ((t && t !== "_self") || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return; // internal paths only
      const url = new URL(href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;

      e.preventDefault();
      e.stopPropagation();

      document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            resolveNav = resolve;
            window.setTimeout(() => {
              if (resolveNav === resolve) {
                resolveNav = null;
                resolve();
              }
            }, 600);
            router.push(url.pathname + url.search + url.hash);
          }),
      );
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
