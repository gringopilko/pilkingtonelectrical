import { useEffect, useState } from "react";

/** Hero lights start at dusk and flick on shortly after the page loads. Reduced motion: lights are simply on. */
export function useHeroLights(): [boolean, (v: boolean) => void] {
  const [lit, setLit] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(true);
      return;
    }
    const t = window.setTimeout(() => setLit(true), 900);
    return () => window.clearTimeout(t);
  }, []);
  return [lit, setLit];
}

/** A wall switch plate that turns the hero lights on and off. */
export function HeroLightSwitch({ lit, onToggle }: { lit: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={() => {
        onToggle();
        if ("vibrate" in navigator) navigator.vibrate?.(12);
      }}
      aria-pressed={lit}
      aria-label={lit ? "Turn the lights off" : "Turn the lights on"}
      className="group inline-flex items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-3 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/15 sm:py-1.5 sm:pl-1.5 sm:pr-4 sm:text-sm"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-b from-white to-slate-200 shadow-md ring-1 ring-black/10 sm:h-6 sm:w-6" aria-hidden="true">
        <span className="relative h-3.5 w-2 overflow-hidden rounded-[2px] bg-slate-100 ring-1 ring-slate-300 sm:h-4 sm:w-2.5">
          <span className={`absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-slate-300 transition-all duration-200 ${lit ? "top-0" : "top-1/2"}`} />
          <span className={`absolute left-1/2 top-[1px] h-[2px] w-[2px] -translate-x-1/2 rounded-full transition-colors ${lit ? "bg-amber-400 shadow-[0_0_6px_#fbbf24]" : "bg-slate-300"}`} />
        </span>
      </span>
      {lit ? "Lights on" : "Flick the switch"}
    </button>
  );
}
