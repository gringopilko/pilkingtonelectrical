import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Gauge,
  ListChecks,
  MapPin,
  Phone,
  Plug,
  Search,
  ShieldCheck,
  Tag,
  Users,
  Wrench,
  XCircle,
} from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Your duty of care", text: "Victorian employers must provide a safe workplace, and that includes the electrical equipment people use every day." },
  { icon: Wrench, title: "Licensed electrician", text: "REC 30450. Faults found during testing can be assessed and repaired, not just failed." },
  { icon: FileText, title: "Clear records", text: "An equipment register, test results and retest dates for every item tested." },
  { icon: CalendarClock, title: "Planned around you", text: "Testing scheduled around your opening hours, with after-hours or holiday visits by arrangement." },
];

const columns = [
  {
    icon: Users,
    title: "Who is responsible?",
    intro: "Employers and the people who manage a workplace, such as:",
    points: ["Business owners and managers", "School business managers", "Facility and property managers", "Owners corporations for common area equipment"],
  },
  {
    icon: Plug,
    title: "Why some workplaces wear faster",
    intro: "Equipment fails sooner when it is:",
    points: ["Shared between lots of people", "Moved between rooms every day", "Used in kitchens, workshops or outdoors", "Plugged in and out constantly"],
  },
  {
    icon: ListChecks,
    title: "What AS/NZS 3760 covers",
    intro: "The standard for testing equipment in service:",
    points: ["Visual inspection of every item", "Electrical testing", "Tagging and record keeping", "Retest intervals set by the environment"],
  },
  {
    icon: Search,
    title: "What proper testing looks like",
    intro: "Each item is checked, not just tagged:",
    points: ["Plug, cord and strain relief inspected", "Earth continuity and insulation tested where they apply", "Pass: tagged with the next test date", "Fail: removed from service and labelled"],
  },
];

const intervals = [
  { time: "3 months", where: "Construction sites and hire equipment" },
  { time: "6 months", where: "Factories, workshops and commercial cleaning" },
  { time: "12 months", where: "Equipment that is moved often or open to abuse" },
  { time: "5 years", where: "Fixed office equipment that is not moved" },
];

const steps = [
  { icon: CalendarClock, text: "Agree the scope and a time that suits you" },
  { icon: MapPin, text: "Work through the site area by area" },
  { icon: Search, text: "Visual inspection of every item" },
  { icon: Gauge, text: "Electrical testing with a portable appliance tester" },
  { icon: Tag, text: "Pass tags with the next test date" },
  { icon: XCircle, text: "Failed items removed from service and labelled" },
  { icon: ShieldCheck, text: "Safety switch testing, where agreed" },
  { icon: FileCheck2, text: "Written report with register and recommendations" },
];

export function TestTagInfographic() {
  return (
    <section id="test-tag-victoria" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Victoria</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Test &amp; Tag for Victorian Workplaces</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Safe equipment. Clear records. Less disruption.</p>
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

        {/* Statement banner */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-slate-900 px-5 py-4 text-white">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold leading-snug sm:text-base">
            Pilkington Electrical tests and tags equipment for offices, schools, shops, cafés and workshops across Bayside and South East Melbourne, with written records for every item.
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

        {/* Intervals strip */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-lg font-extrabold tracking-tight">How often? Indicative AS/NZS 3760 intervals</p>
            <Link to="/guides/$slug" params={{ slug: "test-and-tag-victoria-how-often" }} className="text-sm font-bold text-primary hover:underline">
              Full breakdown in the guide
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {intervals.map((iv) => (
              <div key={iv.time} className="rounded-xl bg-background p-4 ring-1 ring-border">
                <p className="whitespace-nowrap text-xl font-extrabold tracking-tight text-primary">{iv.time}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{iv.where}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Intervals can be adjusted after a risk assessment. I'll recommend a schedule that suits your equipment and environment.</p>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">The On-Site Process</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">A systematic approach, item by item</p>
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

        {/* Multi-site banner */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Building2 className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Several rooms, floors or buildings? Testing can be staged area by area to keep disruption low.</p>
          </div>
          <a href="tel:0466270949" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            0466 270 949
          </a>
        </div>

        {/* Records and why */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">Records that stand up</p>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "WorkSafe Victoria advises keeping records of your electrical safety program",
                "Item, location, test date, result and next test date",
                "Failed items and what was done about them",
                "Easy to show an inspector, insurer or client",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">Why regular testing matters</p>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "Finds faults that cannot be seen by eye",
                "Reduces the risk of shock and fire",
                "Supports your duty of care to staff and visitors",
                "Builds a clear history of every item",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Need test and tag for your workplace?</p>
            <p className="mt-2 text-sm text-white/70">Talk to me about a schedule, timing and the records you need.</p>
          </div>
          <a href="tel:0466270949" className="flex flex-col items-center justify-center gap-2 bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-brand-dark">
            <Phone className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Call me</span>
            <span className="text-lg font-extrabold">0466 270 949</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center gap-2 bg-brand-dark p-6 text-center text-white transition-colors hover:bg-slate-900">
            <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Get a quote</span>
            <span className="text-lg font-extrabold">Request online</span>
          </a>
        </div>
      </div>
    </section>
  );
}
