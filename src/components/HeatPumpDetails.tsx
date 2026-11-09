import { Check } from "lucide-react";

const rules = [
  { tag: "Existing homes", title: "From 1 March 2027", text: "When a gas hot water system in an existing home breaks and can't be repaired, it must be replaced with an efficient electric system, usually a heat pump. You can still repair a working gas system, and gas cooking and gas heating in owner-occupied homes aren't affected." },
  { tag: "Rentals", title: "From 1 March 2027", text: "Under the new rental minimum energy efficiency standards, when a rental's hot water system fails and can't be repaired, the replacement must be a heat pump or an electric-boosted solar water heater. Failed heaters must be replaced with efficient electric heating too, such as a reverse cycle system." },
  { tag: "New homes", title: "From 1 January 2027", text: "All new homes must be built all-electric, so hot water will be a heat pump or another electric system from the start." },
];

const plumber = [
  "Removing the old system and disconnecting and capping the gas",
  "Water connections, tempering valve and relief drain",
  "The condensate drain from the heat pump",
];
const electrician = [
  "A dedicated circuit sized for the unit, protected by a safety switch",
  "An isolating switch next to the unit for safe servicing",
  "Checking the switchboard has the capacity, and upgrading it if not",
  "A timer so it heats during the day, or a controlled load (off-peak) connection",
  "Disconnecting the old electric hot water unit if you're replacing one",
  "Testing and your Certificate of Electrical Safety",
];

const checks = [
  { title: "Coming off gas", text: "A gas unit usually has no power supply suitable for a heat pump, so you'll need a new circuit from the switchboard. In older homes I also check the switchboard has room and capacity, because the heat pump's backup booster element can draw as much as an electric kettle." },
  { title: "Replacing an electric storage unit", text: "There's usually already a dedicated circuit, often on off-peak. I check the cable, protection and switch suit the new unit, then reconnect it. Sometimes that's all that's needed." },
  { title: "Running it on solar", text: "Heat pumps are most efficient in warmer daytime air. If you have solar, a timer that runs the heat pump in the middle of the day uses your own power instead of buying it from the grid." },
  { title: "Where it goes", text: "It sits outside and needs open air around it. It also makes a low compressor hum, so keep it away from bedroom windows and your neighbour's windows where you can." },
];

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2 text-sm leading-relaxed">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function HeatPumpDetails() {
  return (
    <section id="heat-pump-details" className="mt-12 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Victoria's new hot water rules</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Victoria is moving homes off gas hot water. These are the dates that matter.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {rules.map((r) => (
          <div key={r.tag} className="rounded-2xl bg-muted p-5 dark:bg-slate-200/10">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">{r.tag}</p>
            <h3 className="mt-1 font-bold tracking-tight">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">If your gas hot water is getting old, it's worth planning the switch now, before it fails on a cold morning and you're rushed into a replacement.</p>

      <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">Who does what</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">A heat pump installation needs two trades. The plumber handles the water and gas. I handle everything electrical.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-muted p-5 dark:bg-slate-200/10">
          <h3 className="font-bold tracking-tight">Plumber</h3>
          <Ticks items={plumber} />
        </div>
        <div className="rounded-2xl bg-muted p-5 dark:bg-slate-200/10">
          <h3 className="font-bold tracking-tight">Electrician (me)</h3>
          <Ticks items={electrician} />
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">The electrical side, in detail</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {checks.map((c) => (
          <div key={c.title} className="rounded-2xl bg-muted p-5 dark:bg-slate-200/10">
            <h3 className="font-bold tracking-tight">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">Discounts and rebates</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Replacing gas or electric storage hot water with a heat pump can attract a Victorian Energy Upgrades discount, a Solar Victoria rebate and federal small-scale technology certificates (STCs). Amounts and eligibility change, so check the official pages below or ask your plumber or installer what applies to you.</p>

      <h2 className="mt-12 text-2xl font-extrabold tracking-tight md:text-3xl">Official sources</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          ["Planning Victoria: Victoria's Gas Substitution Roadmap", "https://www.planning.vic.gov.au/guides-and-resources/strategies-and-initiatives/victorias-gas-substitution-roadmap"],
          ["Consumer Affairs Victoria: Rental minimum energy efficiency standards, hot water", "https://www.consumer.vic.gov.au/resources-and-tools/legislation/public-consultations-and-reviews/new-minimum-energy-efficiency-standards/minimum-energy-efficiency-standards-hot-water-standard"],
          ["Energy Victoria: Electric and efficiency standards for buildings", "https://www.energy.vic.gov.au/households/electric-and-efficiency-standards-for-buildings"],
          ["Energy Victoria: Victorian Energy Upgrades", "https://www.energy.vic.gov.au/victorian-energy-upgrades"],
          ["Solar Victoria", "https://www.solar.vic.gov.au"],
        ].map(([label, url]) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:no-underline">{label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
