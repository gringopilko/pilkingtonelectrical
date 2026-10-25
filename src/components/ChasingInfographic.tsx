import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Box,
  Brush,
  Cable,
  ClipboardList,
  FileCheck2,
  Hammer,
  MapPin,
  PaintRoller,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  Wind,
} from "lucide-react";

const highlights = [
  { icon: Hammer, title: "Specialist chasing", text: "Brick, concrete and masonry walls cut cleanly with a professional Metabo twin blade wall chaser." },
  { icon: Cable, title: "25 mm conduit every time", text: "Every cable runs in conduit, so it can be replaced or added to later without chasing the wall again." },
  { icon: Wind, title: "Dust captured at the blade", text: "The chaser runs with an H-class dust extractor, so dust stays out of your home." },
  { icon: Box, title: "Flush wall boxes", text: "Switch and power point boxes are recessed into the wall, so plates sit flat and neat." },
];

const specs = [
  ["Conduit", "25 mm conduit in every chase"],
  ["Chase depth", "Usually 30 to 35 mm, deep enough for conduit plus render"],
  ["Wall boxes", "Recessed flush boxes, so plates sit flat"],
];

const steps = [
  { icon: MapPin, text: "Plan the routes and positions with you" },
  { icon: Search, text: "Confirm any hidden services in the walls" },
  { icon: Ruler, text: "Mark out straight, level chase lines" },
  { icon: Hammer, text: "Cut the chases with dust extraction" },
  { icon: Box, text: "Fit 25 mm conduit and flush wall boxes" },
  { icon: Cable, text: "Pull the cables through the conduit" },
  { icon: FileCheck2, text: "Fit off, test and certify" },
  { icon: Brush, text: "Clean up, ready for your plasterer" },
];

export function ChasingInfographic() {
  return (
    <section id="chasing-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Concealed wiring</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Wall Chasing, Done Properly</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Hidden cables. Future proofed. No mess.</p>
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
        {/* Photo + highlights */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:items-center">
          <img
            src="/img/metabo-wall-chaser.webp"
            alt="Metabo wall chaser cutting a clean channel in a brick wall"
            width={452}
            height={364}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
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
        </div>

        {/* Future proofed */}
        <div className="mt-8 rounded-2xl border-2 border-primary bg-[#eef6fe] p-5 sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">Why conduit makes it future proof</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Cables chased straight into a wall are there for good. Because every chase I cut carries 25 mm conduit, old cables can be pulled out and new ones pulled through later, whether that is an upgrade, an extra circuit or data cabling, without cutting into the wall again.
          </p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-3">
            {specs.map(([term, detail]) => (
              <div key={term} className="rounded-xl bg-white/70 p-3">
                <dt className="text-xs font-bold uppercase tracking-wide text-primary">{term}</dt>
                <dd className="mt-1 text-sm leading-snug text-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hidden services */}
        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-red-300">
          <div className="flex items-center gap-4 bg-red-50 px-5 py-4 sm:px-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white">
              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-red-700">Please tell me what is in the walls before I start</p>
          </div>
          <div className="space-y-3 bg-card p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
            <p>
              Water and gas pipes, heating pipes, data and phone cables and existing wiring can all run through walls. Before any chasing, please tell me about any services you know of, and share building plans or renovation drawings if you have them.
            </p>
            <p>
              I check the routes carefully before cutting, but I cannot see inside a wall. To the extent permitted by law, I am not responsible for damage to concealed services that were not disclosed to me and could not reasonably have been detected.
            </p>
            <p>Long horizontal chases in load-bearing walls are avoided, or checked with your builder first.</p>
          </div>
        </div>

        {/* No patching */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 text-slate-900 sm:flex-row sm:items-start sm:p-6">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
            <PaintRoller className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-lg font-extrabold tracking-tight">I don&apos;t do patching or painting</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              Once the conduit and cables are in, the chases are left clean and ready for your plasterer to make good. If the wall needs repainting afterwards, that is done by your painter. I can talk the timing through with your other trades so everything runs in order.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">How a Chasing Job Runs</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">Planned, clean and certified</p>
          <ol className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.text} className="relative flex flex-col items-center text-center">
                {i % 4 !== 3 && (
                  <span className="absolute left-[calc(50%+2.25rem)] right-[-0.6rem] top-8 hidden border-t-2 border-dotted border-primary/40 sm:block current-line" aria-hidden="true" />
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

        {/* Rewiring link */}
        <p className="mt-8 text-sm text-muted-foreground">
          Rewiring a whole home or comparing chasing with premium surface ducting? See{" "}
          <Link to="/services/$slug" params={{ slug: "rewiring-extensions" }} className="font-semibold text-primary hover:underline">
            rewiring and extensions
          </Link>
          .
        </p>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Planning concealed wiring?</p>
            <p className="mt-2 text-sm text-white/70">Tell me what you need and where, and I&apos;ll plan the chase routes with you.</p>
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
