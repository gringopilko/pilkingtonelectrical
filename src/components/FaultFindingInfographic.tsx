import { Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  Cable,
  ClipboardList,
  CloudRain,
  FileCheck2,
  Hammer,
  Hourglass,
  MessageSquare,
  Notebook,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  Split,
  Unplug,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: Search, title: "Tested, not guessed", text: "Each circuit is isolated and tested until the actual cause is found." },
  { icon: ShieldCheck, title: "Safe first", text: "Anything dangerous is made safe straight away, before the hunt continues." },
  { icon: Wrench, title: "Honest options", text: "Repair the fault, or rerun the circuit when that is the better long term fix." },
  { icon: MessageSquare, title: "Kept in the loop", text: "I explain what I've found as I go, and agree any extra work before doing it." },
];

const columns = [
  {
    icon: AlertTriangle,
    title: "Common signs",
    intro: "Call me if you notice:",
    points: [
      "A safety switch that keeps tripping",
      "Power off to part of the house",
      "Flickering or dimming lights",
      "A burning smell, buzzing or a warm power point",
      "Tripping that only happens after rain",
    ],
  },
  {
    icon: Hammer,
    title: "Common causes",
    intro: "What I usually find:",
    points: [
      "Nails or screws through a cable",
      "Water in outdoor lights, power points or junction boxes",
      "Old cable with brittle or damaged insulation",
      "A faulty appliance leaking to earth",
      "Loose connections, or circuits sharing a neutral in older homes",
    ],
  },
  {
    icon: Hourglass,
    title: "Why it can take time",
    intro: "Faults are not always where they show up:",
    points: [
      "Cables run hidden through walls, ceilings and under floors",
      "Some faults only appear with rain, heat or one appliance",
      "Each section of a circuit is tested one at a time",
      "Roof space and subfloor access can be tight",
    ],
  },
  {
    icon: Activity,
    title: "How I find it",
    intro: "A step by step process:",
    points: [
      "Unplug appliances to rule them out",
      "Isolate and test each circuit with an insulation tester",
      "Split the circuit into sections to narrow it down",
      "Open up power points, lights and junction boxes along the run",
    ],
  },
];

const steps = [
  { icon: MessageSquare, text: "Tell me what is happening and when" },
  { icon: ShieldCheck, text: "Make it safe" },
  { icon: Unplug, text: "Rule out appliances" },
  { icon: Zap, text: "Isolate and test each circuit" },
  { icon: Split, text: "Narrow it down section by section" },
  { icon: Search, text: "Find and show you the cause" },
  { icon: ClipboardList, text: "Explain the options before extra work" },
  { icon: FileCheck2, text: "Fix, retest and report" },
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

export function FaultFindingInfographic() {
  return (
    <section id="fault-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Homes, rentals &amp; businesses</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Electrical Fault Finding</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Find the real cause. Fix it properly.</p>
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

        {/* Honest statement */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-slate-900 px-5 py-4 text-white">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
            <Hourglass className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold leading-snug sm:text-base">
            Some faults are found in minutes. Others take longer, because the problem is hidden inside a wall or only shows up now and then. I'll tell you what I'm finding as I go.
          </p>
        </div>

        {/* Four columns */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title} className="rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <col.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-base font-extrabold uppercase leading-snug tracking-tight">{col.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{col.intro}</p>
              <ul className="mt-3 space-y-2">
                {col.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why after an upgrade */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="flex items-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-5 py-5 text-white sm:px-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
              <Zap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">Tripping after a switchboard upgrade?</p>
              <p className="mt-1 text-sm text-white/75">It is common, and the new board is usually not the problem.</p>
            </div>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "More sensitive protection", text: "An RCBO, a circuit breaker and safety switch in one, watches each circuit for tiny leaks of current to earth. Older protection often ignored them." },
              { icon: Hammer, title: "Old damage shows up", text: "A nail through a cable, or water in an outdoor light, may have been leaking quietly for years. The new device finally sees it and trips." },
              { icon: Cable, title: "Shared neutrals", text: "Older homes sometimes have circuits sharing a neutral wire. Separate RCBOs on those circuits will trip until the wiring is corrected." },
            ].map((x) => (
              <div key={x.title} className="bg-card p-5 sm:p-6">
                <x.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <p className="mt-3 font-bold tracking-tight">{x.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#eef6fe] px-5 py-4 text-sm font-medium leading-relaxed sm:px-6">
            The tripping is the new protection doing its job. It has found an existing fault that was a shock or fire risk all along.
          </div>
        </div>

        {/* Repair or rerun */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <RotateCcw className="h-7 w-7 text-primary" aria-hidden="true" />
            <p className="text-lg font-extrabold tracking-tight">Repair it, or rerun the circuit?</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Sometimes the fault is in one spot and a simple repair fixes it. Other times a cable has been damaged in several places over the years, for example nailed in more than one spot during renovations. Chasing every hidden point can take longer and cost more than running a new cable, and a new cable is the more reliable fix.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-background p-4 ring-1 ring-border">
              <p className="font-extrabold tracking-tight text-primary">Repair is usually best when</p>
              <Dotted items={["The fault is in one place I can reach", "The rest of the cable tests well", "The circuit is otherwise in good condition"]} />
            </div>
            <div className="rounded-xl bg-background p-4 ring-1 ring-primary/40">
              <p className="font-extrabold tracking-tight text-primary">Rerunning is usually best when</p>
              <Dotted items={["The cable is damaged in several places", "The damage is hidden in walls or ceilings", "The cable is old, brittle or keeps failing", "Repairs would cost more than a new run"]} />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Either way, I explain what I've found and agree the approach with you before doing extra work.</p>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">How I Find a Fault</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">Methodical, so it stays fixed</p>
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
        </div>

        {/* Intermittent banner */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <CloudRain className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Fault comes and goes? Note when it trips, the weather and what was running. It helps me find it faster.</p>
          </div>
          <a href="tel:0466270949" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            0466 270 949
          </a>
        </div>

        {/* Two panels */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Notebook className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">Before I arrive</p>
            </div>
            <Dotted
              items={[
                "Do not keep resetting a switch that trips straight away",
                "Unplug appliances on the affected circuit if it is safe to",
                "Note which lights and power points are off",
                "Keep clear of anything sparking, hot or wet, and call me",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <FileCheck2 className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">What you get</p>
            </div>
            <Dotted
              items={[
                "The cause explained in plain English",
                "Options and a quote before any extra work",
                "Every affected circuit retested after the fix",
                "A certificate of electrical safety where the work needs one",
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Something tripping, flickering or not working?</p>
            <p className="mt-2 text-sm text-white/70">
              Tell me what is happening. For dangerous faults, see{" "}
              <Link to="/services/$slug" params={{ slug: "emergency-electrical" }} className="font-bold text-sky-300 hover:underline">emergency electrical</Link>.
            </p>
          </div>
          <a href="tel:0466270949" className="flex flex-col items-center justify-center gap-2 bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-brand-dark">
            <Phone className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Call me</span>
            <span className="text-lg font-extrabold">0466 270 949</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center gap-2 bg-brand-dark p-6 text-center text-white transition-colors hover:bg-slate-900">
            <ClipboardList className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Book a visit</span>
            <span className="text-lg font-extrabold">Request online</span>
          </a>
        </div>
      </div>
    </section>
  );
}
