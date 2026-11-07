import { Check } from "lucide-react";

type Option = { title: string; tag: string; text: string; points: string[] };

const heating: Option[] = [
  {
    title: "Wall fan heater",
    tag: "Fast heat",
    text: "A heater that mounts on the wall and blows warm air. The most common choice when the ceiling can't take a heat light.",
    points: ["Usually 2 to 2.4 kW, so it needs its own circuit", "Heats a small bathroom in a few minutes", "Best on a timer so it can't be left running"],
  },
  {
    title: "Infrared or radiant wall panel",
    tag: "Quiet, gentle heat",
    text: "A slim panel that warms you and the walls directly, with no fan noise.",
    points: ["Silent, with no moving parts", "Slower to warm the room than a fan heater", "Often a lower wattage than a fan heater"],
  },
  {
    title: "Heated towel rail",
    tag: "Takes the chill off",
    text: "Hardwired to the wall on a timer. Low wattage, warm towels, and it helps dry the room out.",
    points: ["Low running cost", "Not enough on its own in a cold bathroom", "Pairs well with a wall heater"],
  },
  {
    title: "Lowered ceiling with a 3-in-1 unit",
    tag: "The full heat light setup",
    text: "Drop the bathroom ceiling, a floating ceiling or bulkhead, to make room for a 3-in-1 heat light and its duct to an outside wall.",
    points: ["Heat, light and exhaust in one unit", "Needs a builder for the ceiling and a plumber for the duct", "The most work, but the closest to a standard bathroom"],
  },
];

const steam: Option[] = [
  {
    title: "Openable window",
    tag: "Simplest",
    text: "If the bathroom has an openable window big enough to count as natural ventilation, that can handle the steam, with a wall heater for warmth.",
    points: ["No duct or penetration needed", "Relies on people opening it", "Not an option for windowless bathrooms"],
  },
  {
    title: "Wall exhaust fan through an outside wall",
    tag: "Most common in flats",
    text: "A fan mounted high on an external wall, venting straight outside. The plumber does the wall penetration and I wire the fan.",
    points: ["Meets the rule to vent to outdoor air", "Usually needs owners corporation approval, as external walls are often common property", "Can be wired to come on with the light, with a 10 minute run-on"],
  },
  {
    title: "Ducted fan above a lowered ceiling",
    tag: "Hidden",
    text: "With a lowered ceiling or bulkhead, a ceiling fan or 3-in-1 unit can be ducted above it to an outside wall.",
    points: ["Clean look, nothing on the walls", "Builder, plumber and electrician all involved", "Still needs approval for the wall penetration"],
  },
];

function Panel({ o }: { o: Option }) {
  return (
    <div className="rounded-2xl bg-muted p-5 dark:bg-slate-200/10">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">{o.tag}</p>
      <h4 className="mt-1 font-bold tracking-tight text-foreground">{o.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
      <ul className="mt-3 space-y-2">
        {o.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArtDecoBathroomOptions() {
  return (
    <section id="art-deco-options" className="mt-12 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Art deco flats and concrete ceilings: your options</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Many art deco and interwar flats have a concrete ceiling with no roof space above, so a standard ceiling heat light with a duct won't fit. You still have good options. The trick is to treat heat and steam as two separate jobs, then pick one of each.
      </p>

      <h3 className="mt-8 text-lg font-bold tracking-tight">1. Heating the bathroom</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {heating.map((o) => <Panel key={o.title} o={o} />)}
      </div>

      <h3 className="mt-10 text-lg font-bold tracking-tight">2. Getting rid of the steam</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Under Victoria's newer building rules, exhaust has to go to outdoor air. A wall heater doesn't remove steam, so you'll still need one of these.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {steam.map((o) => <Panel key={o.title} o={o} />)}
      </div>

      <h3 className="mt-10 text-lg font-bold tracking-tight">What I do for every option</h3>
      <ul className="mt-4 space-y-2.5">
        {[
          "Run a new dedicated circuit from the switchboard, protected by a safety switch, instead of tapping into old lighting wiring.",
          "Chase the cable into the brick for a concealed finish wherever possible, or use premium surface ducting where chasing isn't an option.",
          "Position heaters and fans outside the bath and shower zones set by the wiring rules (AS/NZS 3000), using wet-area rated gear.",
          "Fit a timer or indicator switch for heaters, and wire exhaust fans to the light with a run-on timer where the room needs it.",
          "Check with you whether the switchboard or cable route is in a common area, so any owners corporation approval is sorted first.",
        ].map((t) => (
          <li key={t} className="flex items-start gap-3 text-sm leading-relaxed">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Not sure which combination suits your flat? Send me a few photos of the bathroom and switchboard through the quote form and I'll talk you through it.
      </p>
    </section>
  );
}
