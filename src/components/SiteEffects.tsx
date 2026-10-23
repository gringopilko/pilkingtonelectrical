import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Site-wide visual polish:
 * - sections below the fold fade and rise in as they scroll into view
 * - a soft blue glow follows the cursor across dark panels (desktop only)
 * Content stays fully visible without JavaScript, and nothing moves for visitors who prefer reduced motion.
 */
export function SiteEffects() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Scroll reveals, re-run on every page change
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    const timer = window.setTimeout(() => {
      const fold = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>("section, [data-reveal]").forEach((el) => {
        if (el.closest("footer") || el.classList.contains("reveal-item")) return;
        if (el.getBoundingClientRect().top < fold) return; // never hide what is already on screen
        el.classList.add("reveal-item");
        io.observe(el);
      });
    }, 60);
    return () => {
      window.clearTimeout(timer);
      io.disconnect();
      document.querySelectorAll(".reveal-item:not(.is-visible)").forEach((el) => el.classList.remove("reveal-item"));
    };
  }, [pathname]);

  // Phones: the menu slides away while scrolling down and comes back when scrolling up
  useEffect(() => {
    const root = document.documentElement;
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - last;
      last = y;
      const phone = window.matchMedia("(max-width: 767px)").matches;
      const menuOpen = !!document.querySelector("[data-mobile-menu]");
      if (!phone || menuOpen || y < 140) root.classList.remove("nav-hidden");
      else if (delta > 6) root.classList.add("nav-hidden");
      else if (delta < -6) root.classList.remove("nav-hidden");
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("nav-hidden");
    };
  }, [pathname]);

  // Cursor glow on dark panels
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const host = (e.target as HTMLElement | null)?.closest?.(".from-slate-950") as HTMLElement | null;
      if (!host) return;
      host.classList.add("glow-host");
      const r = host.getBoundingClientRect();
      host.style.setProperty("--mx", `${e.clientX - r.left}px`);
      host.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
