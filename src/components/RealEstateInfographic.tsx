import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BellRing,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  FolderOpen,
  Gavel,
  Handshake,
  Hourglass,
  Inbox,
  KeyRound,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  Siren,
  Timer,
  UserCheck,
  Wrench,
} from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Compliance sorted", text: "Two-yearly electrical safety checks, smoke alarm checks and the records to prove them." },
  { icon: Siren, title: "Urgent repairs", text: "Dangerous electrical faults and loss of power answered promptly, made safe, then fixed." },
  { icon: Handshake, title: "Owner-friendly quotes", text: "Clear options with the owner's budget in mind, sent for approval before work starts." },
  { icon: KeyRound, title: "Renter-friendly access", text: "I book times directly with renters under your notice, turn up when I say, and leave it tidy." },
];

const columns = [
  {
    icon: Gavel,
    title: "What the rules require",
    intro: "For Victorian rental properties:",
    points: [
      "An electrical safety check at least every two years",
      "Smoke alarms checked at least every 12 months",
      "Switchboards with circuit breakers and safety switches",
      "Records kept and shown to the renter on request",
    ],
  },
  {
    icon: Siren,
    title: "Urgent electrical repairs",
    intro: "Consumer Affairs Victoria lists these as urgent:",
    points: [
      "A dangerous electrical fault",
      "The electricity supply not working",
      "Rental providers must arrange urgent repairs immediately",
      "If nothing happens, renters can arrange the repair themselves",
    ],
  },
  {
    icon: Hourglass,
    title: "What slows agents down",
    intro: "The usual headaches:",
    points: [
      "Chasing trades who do not call back",
      "Missed access times and unhappy renters",
      "Vague quotes owners will not approve",
      "No paperwork for the property file",
    ],
  },
  {
    icon: UserCheck,
    title: "How I make it easy",
    intro: "One electrician for the whole process:",
    points: [
      "I contact the renter and book the visit",
      "You get updates without having to chase",
      "Itemised options ready to send to the owner",
      "Reports and certificates for every job",
    ],
  },
];

const calendar = [
  { icon: BellRing, time: "Every 12 months", what: "Smoke alarm check" },
  { icon: CalendarCheck, time: "Every 2 years", what: "Electrical safety check" },
  { icon: FolderOpen, time: "Before a new lease", what: "Tell the renter when the last checks were done" },
  { icon: Timer, time: "Within 14 days", what: "Non-urgent repairs after a written request" },
];

const steps = [
  { icon: Inbox, text: "Work order received from the agency" },
  { icon: MessageSquare, text: "I contact the renter and book access" },
  { icon: KeyRound, text: "On time, with the agreed notice" },
  { icon: Search, text: "Inspect, test or find the fault" },
  { icon: ShieldCheck, text: "Make safe straight away if needed" },
  { icon: ClipboardList, text: "Itemised options for owner approval" },
  { icon: Wrench, text: "Approved work completed and tested" },
  { icon: FileCheck2, text: "Report, certificate and invoice to the agency" },
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

export function RealEstateInfographic() {
  return (
    <section id="property-managers-victoria" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Victoria</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Electrical for Agents &amp; Property Managers</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Compliant rentals. Happy renters. Owners kept informed.</p>
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
            <Handshake className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold leading-snug sm:text-base">
            Pilkington Electrical works with real estate agents and property managers across Bayside and South East Melbourne on safety checks, repairs and upgrades for rental properties.
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

        {/* Compliance calendar */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-lg font-extrabold tracking-tight">The rental compliance calendar</p>
            <Link to="/guides/$slug" params={{ slug: "electrical-safety-checks-victorian-rentals" }} className="text-sm font-bold text-primary hover:underline">
              Read the rental checks guide
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {calendar.map((c) => (
              <div key={c.what} className="rounded-xl bg-background p-4 ring-1 ring-border">
                <c.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <p className="mt-2 text-base font-extrabold tracking-tight text-primary">{c.time}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{c.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">I can book checks so they line up, for example the smoke alarm check and electrical safety check in one visit when both are due.</p>
        </div>

        {/* Urgent vs non-urgent */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          <div className="bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-lg font-extrabold tracking-tight">Urgent: act immediately</p>
            </div>
            <Dotted items={["Sparking, burning smells or hot fittings", "No power to the property", "A switchboard that keeps tripping and will not reset", "Exposed live wiring or water near electrics"]} />
            <p className="mt-4 text-xs text-muted-foreground">Call me straight away. I'll make it safe first, then quote the full repair for the owner.</p>
          </div>
          <div className="bg-[#eef6fe] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-lg font-extrabold tracking-tight">Non-urgent: within 14 days</p>
            </div>
            <Dotted items={["A broken power point or light switch", "A light fitting that has stopped working", "An exhaust fan or a single light circuit not working", "Extra power points or upgrades the owner wants"]} />
            <p className="mt-4 text-xs text-muted-foreground">Send the work order and I'll book it with the renter and keep you updated.</p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">From Work Order to Invoice</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">You stay informed without chasing</p>
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

        {/* Portfolio banner */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <FolderOpen className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Managing a portfolio? Send me a list of properties and due dates, and I can group checks by area or building.</p>
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
              <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">What you get on every job</p>
            </div>
            <Dotted
              items={[
                "A written report in plain English, ready for the property file",
                "A certificate of electrical safety where the work needs one",
                "Itemised options so the owner can choose",
                "An invoice that matches the approved quote",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Handshake className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">Why owners are happy</p>
            </div>
            <Dotted
              items={[
                "The sensible option first, not the most expensive one",
                "No surprise invoices",
                "Small problems caught before they become urgent",
                "Compliance records ready if they are ever asked for",
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Looking for a reliable electrician for your rent roll?</p>
            <p className="mt-2 text-sm text-white/70">Talk to me about safety checks, repairs or setting up as a regular trade.</p>
          </div>
          <a href="tel:0466270949" className="flex flex-col items-center justify-center gap-2 bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-brand-dark">
            <Phone className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Call me</span>
            <span className="text-lg font-extrabold">0466 270 949</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center gap-2 bg-brand-dark p-6 text-center text-white transition-colors hover:bg-slate-900">
            <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Send a job</span>
            <span className="text-lg font-extrabold">Request online</span>
          </a>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          General information only, based on Consumer Affairs Victoria guidance on rental repairs, safety checks and minimum standards. Check the current rules for each property and agreement.
        </p>
      </div>
    </section>
  );
}
