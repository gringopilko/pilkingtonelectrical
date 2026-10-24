import { Zap } from "lucide-react";

const items = [
  "Licensed REC 30450",
  "$5M insured",
  "Lifetime labour guarantee",
  "Bayside & South East Melbourne",
  "10+ years on the tools",
];

/** Oversized scrolling statement band. */
export function BigTicker() {
  return (
    <section aria-label="Pilkington Electrical at a glance" className="ticker grain overflow-hidden bg-slate-950 py-7 text-white md:py-10">
      <p className="sr-only">{items.join(", ")}</p>
      <div className="ticker-track" aria-hidden="true">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="ticker-item">
            {t}
            <Zap className="ticker-bolt" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
