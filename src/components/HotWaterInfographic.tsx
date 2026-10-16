import {
  AlertTriangle,
  ClipboardList,
  Clock,
  Droplets,
  FileCheck2,
  Gauge,
  Phone,
  Power,
  RefreshCw,
  Search,
  ShieldCheck,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: Search, title: "Quick diagnosis", text: "I find out whether it is the element, the thermostat, the circuit or the unit itself before anything is replaced." },
  { icon: Power, title: "Safely isolated", text: "Power is isolated and locked off at the switchboard before any work on the unit." },
  { icon: Gauge, title: "Circuit checked", text: "I confirm the circuit and switchboard suit the unit, including off-peak supply where you have it." },
  { icon: ShieldCheck, title: "Tested before I leave", text: "Every job is tested and the water temperature checked before handover." },
];

const faults = [
  { icon: Thermometer, title: "No hot water at all", text: "Often a failed element or thermostat, or the safety cut-out has tripped." },
  { icon: Gauge, title: "Not hot enough or runs out", text: "A tired element or thermostat, or an off-peak supply that is not switching on." },
  { icon: Zap, title: "Safety switch keeps tripping", text: "A leaking element can leak current to earth and trip the safety switch." },
  { icon: Droplets, title: "Water leaking from the tank", text: "Usually means the tank has failed and the unit needs replacing." },
];

const steps = [
  { icon: Search, text: "Find the fault and check the circuit" },
  { icon: ClipboardList, text: "Quote to repair or replace" },
  { icon: Power, text: "Isolate the power at the switchboard" },
  { icon: Droplets, text: "Turn off the water and drain as needed" },
  { icon: Wrench, text: "Change over the element, thermostat or unit" },
  { icon: Zap, text: "Reconnect and secure the wiring" },
  { icon: RefreshCw, text: "Refill fully before the power goes back on" },
  { icon: FileCheck2, text: "Test, check the temperature and clean up" },
];

function Dotted({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((pt) => (
        <li key={pt} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          {pt}
        </li>
      ))}
    </ul>
  );
}

export function HotWaterInfographic() {
  return (
    <section id="hot-water-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Electric hot water</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Hot Water Repairs &amp; Changeovers</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Found fast. Fixed safely. Tested before I leave.</p>
          </div>
          <div className="inline-flex shrink-0 items-center gap-3 self-start rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15 sm:self-auto">
            <ShieldCheck className="h-8 w-8 text-sky-300" aria-hidden="true" />
            <div>
              <p className="text-sm font-extrabold leading-tight">Licensed electrician</p>
              <p className="text-xs text-white/70">REC 30450 &middot; $5M insured</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-8">
        {/* Highlights */}
        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="flex gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <h.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold tracking-tight">{h.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Common faults */}
        <div className="mt-8">
          <p className="text-lg font-extrabold tracking-tight">Common hot water problems</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {faults.map((f) => (
              <div key={f.title} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold tracking-tight">{f.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repair or replace */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">Repair</span>
            <p className="mt-3 text-lg font-extrabold tracking-tight">Usually worth it when</p>
            <Dotted items={["The element or thermostat has failed", "The tank itself is sound and not leaking", "The unit is not near the end of its life"]} />
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Replace</span>
            <p className="mt-3 text-lg font-extrabold tracking-tight">Usually the better call when</p>
            <Dotted items={["The tank is leaking or badly corroded", "The unit is old and repairs keep adding up", "You want to upgrade to a more efficient system"]} />
          </div>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">How a Changeover Runs</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">Step by step, safely isolated</p>
          <ol className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.text} className="relative flex flex-col items-center text-center">
                {i % 4 !== 3 && (
                  <span className="absolute left-[calc(50%+2.25rem)] right-[-0.6rem] top-8 hidden border-t-2 border-dotted border-primary/40 sm:block" aria-hidden="true" />
                )}
                <span className="absolute -top-2 left-1/2 z-10 inline-flex h-6 w-6 -translate-x-[2.4rem] items-center justify-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground ring-4 ring-background">{i + 1}</span>
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-card text-slate-800 ring-1 ring-border">
                  <st.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-3 text-xs font-medium leading-snug sm:text-sm">{st.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-[#eef6fe] p-4 text-center text-sm font-medium leading-relaxed">
            The tank is always refilled before the power goes back on. Powering an empty tank burns out a new element in seconds.
          </p>
        </div>

        {/* Water spillage */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 sm:flex-row sm:items-start sm:p-6">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-lg font-extrabold tracking-tight">Please note: some water can spill</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              During a changeover there can be some spillage of water, even after the tank has been drained. I put towels down to catch it, but some water can still get through. If your unit is inside, please move anything you want kept dry away from the area before I start.
            </p>
          </div>
        </div>

        {/* Off-peak */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Clock className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Hot water running out late in the day? If your unit heats on an off-peak supply, the problem can be the supply switching, not the unit. I check that first.</p>
          </div>
          <a href="tel:0466270949" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            0466 270 949
          </a>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">No hot water?</p>
            <p className="mt-2 text-sm text-white/70">Tell me the make and age of your unit and what it is doing, and I&apos;ll get it sorted.</p>
          </div>
          <a href="tel:0466270949" className="flex flex-col items-center justify-center gap-2 bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-brand-dark">
            <Phone className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Call me</span>
            <span className="text-lg font-extrabold">0466 270 949</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center gap-2 bg-brand-dark p-6 text-center text-white transition-colors hover:bg-slate-900">
            <ClipboardList className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Get a quote</span>
            <span className="text-lg font-extrabold">Request online</span>
          </a>
        </div>
      </div>
    </section>
  );
}
