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
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    const timer = window.setTimeout(() => {
      const fold = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>("section, [data-reveal]").forEach((el) => {
        if (el.closest("footer") || el.classList.contains("reveal-item")) return;
        if (el.getBoundingClientRect().top < fold) return; // never hide what is already on screen
        if (el.offsetHeight > window.innerHeight * 1.5) return; // very long sections just show, so nothing can stay hidden
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

  // Headings slide up word by word as they come into view
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-word-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.3 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Desktop: call and quote buttons gently pull towards the mouse
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let px = -9999;
    let py = -9999;
    const apply = () => {
      raf = 0;
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = px - (r.left + r.width / 2);
        const dy = py - (r.top + r.height / 2);
        const reach = Math.max(r.width, r.height) / 2 + 40;
        const dist = Math.hypot(dx, dy);
        if (dist < reach) {
          const pull = 1 - dist / reach;
          el.style.transform = `translate(${(dx * 0.22 * pull).toFixed(1)}px, ${(dy * 0.32 * pull).toFixed(1)}px)`;
        } else if (el.style.transform) {
          el.style.transform = "";
        }
      });
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Lets phones show the pressed state on cards (iOS needs a touch listener for :active)
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  // Cursor glow on dark panels
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let lastCard: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      // Dark panels
      const host = target?.closest?.(".from-slate-950") as HTMLElement | null;
      if (host) {
        host.classList.add("glow-host");
        const r = host.getBoundingClientRect();
        host.style.setProperty("--mx", `${e.clientX - r.left}px`);
        host.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      // Clickable cards: a soft spotlight follows the cursor and the edge lights up
      const found = target?.closest?.("a.rounded-2xl, details.rounded-2xl, details.rounded-xl, [data-glow]") as HTMLElement | null;
      const card = found && !found.matches(".bg-primary, .from-slate-950") ? found : null;
      if (lastCard && lastCard !== card) lastCard.classList.remove("glow-card");
      if (card) {
        card.classList.add("glow-card");
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      lastCard = card;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
