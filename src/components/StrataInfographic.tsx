import { Link } from "@tanstack/react-router";
import { EvApartmentOptions } from "@/components/EvApartmentOptions";
import {
  AlertTriangle,
  Cable,
  Gauge,
  PlugZap,
  Receipt,
  Route,
  Scale,
  BookOpen,
  Building2,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  DoorOpen,
  FileCheck2,
  FileText,
  Gavel,
  Lightbulb,
  Phone,
  Search,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: Building2, title: "Common property", text: "Lighting, switchboards and shared services that every owner relies on, kept safe and working." },
  { icon: ShieldCheck, title: "Licensed electrician", text: "REC 30450 and $5 million public liability cover, with certificates of electrical safety where required." },
  { icon: FileText, title: "Committee-ready quotes", text: "Itemised options and plain-English reports a manager or committee can approve quickly." },
  { icon: DoorOpen, title: "Residents first", text: "Access planned with the manager, notice for any power interruptions and a tidy finish." },
];

const names = [
  { term: "Owners corporation", text: "The current legal name in Victoria under the Owners Corporations Act 2006." },
  { term: "Body corporate", text: "The old Victorian name. Still widely used by owners and on older documents." },
  { term: "Strata", text: "The common term interstate and in everyday use. Same idea: shared ownership of common property." },
];

const columns = [
  {
    icon: Users,
    title: "Who looks after what?",
    intro: "As a general guide:",
    points: [
      "The owners corporation: common property and its services",
      "Each lot owner: the electrical work inside their own lot",
      "The plan of subdivision sets the exact boundaries",
      "The manager or committee arranges and approves work",
    ],
  },
  {
    icon: Gavel,
    title: "What the law expects",
    intro: "For Victorian owners corporations:",
    points: [
      "Repair and maintain common property, fixtures, fittings and services",
      "Tier 1 and 2 need a maintenance plan and fund",
      "Maintain essential safety measures such as emergency and exit lighting",
      "An annual essential safety measures report, where the building has them",
    ],
  },
  {
    icon: Lightbulb,
    title: "Common electrical items",
    intro: "Shared systems I look after:",
    points: [
      "Stairwell, corridor, garden and car park lighting",
      "Emergency and exit lights",
      "Main and common area switchboards",
      "Power to gates, pumps and shared equipment",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Problems I see often",
    intro: "The calls that come up most:",
    points: [
      "Common lights out, or sensors and timers set wrong",
      "Common circuits tripping, often after rain",
      "Ageing switchboards with limited protection",
      "Requests for EV charging in shared car parks",
    ],
  },
];

const tiers = [
  { tier: "Tier 1", lots: "More than 100 lots", plan: "Maintenance plan required" },
  { tier: "Tier 2", lots: "51 to 100 lots", plan: "Maintenance plan required" },
  { tier: "Tier 3", lots: "10 to 50 lots", plan: "Optional" },
  { tier: "Tier 4", lots: "3 to 9 lots", plan: "Optional" },
  { tier: "Tier 5", lots: "2 lots or services only", plan: "Optional" },
];

const evProblems = [
  { icon: Gauge, title: "Limited supply", text: "Most buildings were not designed for dozens of cars charging at once." },
  { icon: Receipt, title: "Who pays?", text: "Power used in a shared car park has to be billed fairly to the right person." },
  { icon: Route, title: "Cable routes", text: "Cables cross common property, so routes, fire separation and looks all matter." },
  { icon: Scale, title: "Approvals", text: "Changes to common property need owners corporation approval, which stalls without a clear proposal." },
];

const evSolutions = [
  { icon: Gauge, title: "Capacity check first", text: "I assess the building's supply and spare capacity before anything is promised." },
  { icon: Zap, title: "Load management", text: "Smart chargers share the available power between cars, so the main supply is not overloaded." },
  { icon: Receipt, title: "Fair billing", text: "Charging from the owner's own supply, or smart chargers that track each user's energy so costs can be recharged." },
  { icon: Cable, title: "Neat, compliant installs", text: "Planned cable routes, suitable protection, testing and a certificate of electrical safety." },
];

const steps = [
  { icon: Phone, text: "The manager or committee reports the issue" },
  { icon: CalendarClock, text: "Access and resident notice agreed" },
  { icon: Search, text: "Inspect and find the cause" },
  { icon: ShieldCheck, text: "Make safe straight away if needed" },
  { icon: ClipboardList, text: "Itemised quote with options" },
  { icon: Wrench, text: "Approved work completed" },
  { icon: FileCheck2, text: "Tested and certified where required" },
  { icon: ClipboardCheck, text: "Report and recommendations for the maintenance plan" },
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

export function StrataInfographic() {
  return (
    <section id="strata-victoria" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Victoria</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Strata &amp; Body Corporate Electrical</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Safe common property. Clear reports. Easy approvals.</p>
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
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold leading-snug sm:text-base">
            Pilkington Electrical works with owners corporation managers, committees and building managers across Bayside and South East Melbourne on common property electrical work.
          </p>
        </div>

        {/* Names explainer */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="text-lg font-extrabold tracking-tight">Body corporate, strata or owners corporation?</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Three names for the same thing: a group of owners who share responsibility for common property.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {names.map((n) => (
              <div key={n.term} className="rounded-xl bg-background p-4 ring-1 ring-border">
                <p className="font-extrabold tracking-tight text-primary">{n.term}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{n.text}</p>
              </div>
            ))}
          </div>
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

        {/* Tiers */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">Owners corporation tiers in Victoria</p>
          <p className="mt-1 text-sm text-muted-foreground">The tier depends on the number of lots. Tier 1 and 2 must have a maintenance plan and maintenance fund for common property.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {tiers.map((t) => (
              <div key={t.tier} className={`rounded-xl p-4 ring-1 ${t.plan === "Optional" ? "bg-background ring-border" : "bg-primary/5 ring-primary/40"}`}>
                <p className="text-xl font-extrabold tracking-tight text-primary">{t.tier}</p>
                <p className="mt-1 text-sm font-semibold leading-snug">{t.lots}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">Maintenance plan: {t.plan === "Optional" ? "optional" : "required"}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Electrical items such as common lighting, switchboards and emergency lighting belong in the plan, so they can be budgeted for rather than fixed in a hurry.</p>
        </div>

        {/* EV charging in apartment buildings */}
        <div id="strata-ev" className="mt-10 scroll-mt-28 overflow-hidden rounded-2xl border border-border">
          <div className="flex items-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-5 py-5 text-white sm:px-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
              <PlugZap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">EV Charging in Apartment Buildings</p>
              <p className="mt-1 text-sm text-white/75">More residents want to charge at home. Here is how to do it safely, fairly and without overloading the building.</p>
            </div>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2">
            <div className="bg-card p-5 sm:p-6">
              <p className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">The challenges</p>
              <div className="mt-4 space-y-4">
                {evProblems.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900/5 text-slate-700">
                      <p.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold tracking-tight">{p.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#eef6fe] p-5 sm:p-6">
              <p className="text-sm font-extrabold uppercase tracking-wide text-primary">How I solve them</p>
              <div className="mt-4 space-y-4">
                {evSolutions.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                      <p.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold tracking-tight">{p.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background p-5 sm:p-6">
            <p className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">Three ways to set it up</p>
            <div className="mt-4">
              <EvApartmentOptions />
            </div>
            <div className="mt-5 flex flex-col gap-4 rounded-xl bg-slate-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-sm font-bold leading-snug sm:text-base">I can prepare a proposal for the committee: capacity, options, cable routes and who pays, so owners can vote on something clear.</p>
              <Link to="/services/$slug" params={{ slug: "ev-charger-install" }} hash="ev-apartments" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-white hover:text-slate-900">
                Full EV charging details
              </Link>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">How a Common Property Job Runs</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">From the first call to the committee report</p>
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

        {/* Lot owners banner */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Building2 className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Own a lot you rent out? Its two-yearly electrical safety check is separate from common property, and I can do both.</p>
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
              <p className="text-lg font-extrabold tracking-tight">Reports a committee can act on</p>
            </div>
            <Dotted
              items={[
                "What was found, in plain English",
                "What is urgent and what can be planned",
                "Itemised options so the committee can choose",
                "Records to support the maintenance plan and ESM report",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">Why planned maintenance matters</p>
            </div>
            <Dotted
              items={[
                "Fewer call-outs and after-hours emergencies",
                "Safer stairwells, paths and car parks at night",
                "Costs spread through the maintenance fund",
                "A clear history if insurers or auditors ask",
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Managing a building or sitting on a committee?</p>
            <p className="mt-2 text-sm text-white/70">Talk to me about a job, a quote for approval or ongoing maintenance.</p>
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

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          General information only, based on Consumer Affairs Victoria guidance on owners corporations and the Building Regulations 2018 on essential safety measures. Check your plan of subdivision, rules and building records for your property.
        </p>
      </div>
    </section>
  );
}
