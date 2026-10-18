import { Link } from "@tanstack/react-router";
import {
  Building2,
  Cable,
  ExternalLink,
  Car,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  Gauge,
  Home,
  MessageSquare,
  Phone,
  PlugZap,
  Route,
  Scale,
  ShieldCheck,
  Smartphone,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import { EvApartmentOptions } from "@/components/EvApartmentOptions";

const highlights = [
  { icon: Gauge, title: "Capacity check first", text: "I check your switchboard and supply before recommending a charger, so nothing is overloaded." },
  { icon: Car, title: "Matched to your car", text: "The right charging speed for your car, your driving and your supply. Bigger is not always faster." },
  { icon: Zap, title: "Load management", text: "Chargers that share power with the rest of the property, so the main supply is never overloaded." },
  { icon: ShieldCheck, title: "Neat and certified", text: "A dedicated circuit with its own protection, tested, with a certificate of electrical safety." },
];

const speeds = [
  { phase: "Single phase", kw: "About 7 kW", text: "The usual home option. Enough to fill most daily driving overnight." },
  { phase: "Three phase", kw: "11 kW to 22 kW", text: "Needs a three phase supply, and a car that can accept the higher rate." },
];

const houseSteps = [
  { icon: MessageSquare, text: "Tell me your car, where you park and how far you drive" },
  { icon: Gauge, text: "Check the switchboard, supply and spare capacity" },
  { icon: Route, text: "Plan the cable route to the garage or driveway" },
  { icon: ClipboardList, text: "Recommend a charger and quote the full job" },
  { icon: Cable, text: "Install a dedicated circuit with its own protection" },
  { icon: PlugZap, text: "Mount the charger and set up load management" },
  { icon: Smartphone, text: "Set up the app, scheduling and any solar settings" },
  { icon: FileCheck2, text: "Test, certify and show you how it works" },
];

const apartmentChallenges = [
  { icon: Gauge, title: "Limited supply", text: "Most buildings were not designed for many cars charging at once." },
  { icon: ClipboardCheck, title: "Who pays?", text: "Power used in a shared car park has to be billed fairly to the right person." },
  { icon: Route, title: "Cable routes", text: "Cables cross common property, so routes, fire separation and looks all matter." },
  { icon: Scale, title: "Approvals", text: "Changes to common property need owners corporation approval, which needs a clear proposal." },
];

export function EVInfographic() {
  return (
    <section id="ev-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Houses &amp; apartments</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">EV Charger Installation</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">The right speed. Safe supply. Charging that just works.</p>
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

        {/* Jump links */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href="#ev-houses" className="group flex items-center gap-4 rounded-2xl bg-slate-900 p-5 text-white transition-colors hover:bg-primary">
            <Home className="h-9 w-9 shrink-0 text-sky-300 group-hover:text-white" aria-hidden="true" />
            <div>
              <p className="text-lg font-extrabold leading-tight">Houses and townhouses</p>
              <p className="mt-0.5 text-sm text-white/70 group-hover:text-white/90">Your own supply, your own charger</p>
            </div>
          </a>
          <a href="#ev-apartments" className="group flex items-center gap-4 rounded-2xl bg-slate-900 p-5 text-white transition-colors hover:bg-primary">
            <Building2 className="h-9 w-9 shrink-0 text-sky-300 group-hover:text-white" aria-hidden="true" />
            <div>
              <p className="text-lg font-extrabold leading-tight">Apartments and strata</p>
              <p className="mt-0.5 text-sm text-white/70 group-hover:text-white/90">Shared car parks and owners corporations</p>
            </div>
          </a>
        </div>

        {/* Speeds */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">How fast can you charge at home?</p>
          <p className="mt-1 text-sm text-muted-foreground">Home chargers are AC chargers. The actual speed is limited by the lowest of three things: the charger, your car's onboard charger and the power available at the property.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {speeds.map((sp) => (
              <div key={sp.phase} className="rounded-xl bg-background p-4 ring-1 ring-border">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{sp.phase}</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-primary">{sp.kw}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{sp.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Load management + solar */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Zap className="h-5 w-5" aria-hidden="true" /></span>
              <p className="text-lg font-extrabold tracking-tight">Load management, explained</p>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "A sensor at the switchboard measures what the property is using in real time",
                "The charger slows down when the oven, heating or air conditioning are running",
                "It speeds back up when demand drops, usually overnight",
                "It can avoid an expensive supply or switchboard upgrade",
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
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-900"><Sun className="h-5 w-5" aria-hidden="true" /></span>
              <p className="text-lg font-extrabold tracking-tight">Got solar?</p>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "Some smart chargers can charge from spare solar during the day",
                "Scheduling lets you charge in off-peak hours on a time of use tariff",
                "Settings are managed in the charger's app",
                "I'll set it up and show you how it works before I leave",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Houses process */}
        <div id="ev-houses" className="mt-10 scroll-mt-28">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">Houses and Townhouses</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">How a home charger install runs</p>
          <ol className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4">
            {houseSteps.map((st, i) => (
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
          <p className="mt-6 rounded-xl bg-card p-4 text-center text-sm text-muted-foreground ring-1 ring-border">
            If the switchboard is old or full, I'll explain the options. Sometimes load management avoids an upgrade, and sometimes{" "}
            <Link to="/services/$slug" params={{ slug: "switchboards" }} className="font-bold text-primary hover:underline">a switchboard upgrade</Link> is the right first step.
          </p>
        </div>

        {/* Apartments */}
        <div id="ev-apartments" className="mt-10 scroll-mt-28 overflow-hidden rounded-2xl border border-border">
          <div className="flex items-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-5 py-5 text-white sm:px-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">Apartments and Strata</p>
              <p className="mt-1 text-sm text-white/75">How to add EV charging to a shared car park safely, fairly and without overloading the building.</p>
            </div>
          </div>
          <div className="grid gap-3 bg-background p-5 sm:grid-cols-2 sm:p-6">
            {apartmentChallenges.map((p) => (
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
          <div className="border-t border-border bg-background p-5 sm:p-6">
            <p className="text-sm font-extrabold uppercase tracking-wide text-muted-foreground">Three ways to set it up</p>
            <div className="mt-4">
              <EvApartmentOptions open />
            </div>
            <div className="mt-5 flex flex-col gap-4 rounded-xl bg-[#eef6fe] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-sm font-bold leading-snug sm:text-base">On a committee or managing a building? I can prepare a proposal covering capacity, options, cable routes and who pays, so owners can vote on something clear.</p>
              <Link to="/services/$slug" params={{ slug: "body-corporate" }} hash="strata-ev" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">
                Strata services
              </Link>
            </div>
          </div>
        </div>

        {/* Apartment hardware */}
        <div id="ev-apartment-systems" className="mt-10 scroll-mt-28">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">Apartment Charging Systems I Recommend</p>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Apartment charging needs more than a charger. Each resident needs an RFID card or app login, the building needs a load controller, and the owners corporation needs software that tracks and bills each user. These are the two systems I work with.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border-2 border-primary bg-card p-5 shadow-lg shadow-primary/10 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xl font-extrabold tracking-tight">Ocular + Exploren</p>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">My pick for apartments</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Ocular chargers and the Exploren platform, both from EVSE Australia.</p>
              <ul className="mt-4 space-y-3">
                {[
                  ["Ocular IQ Mini", "A compact charger designed for apartment car spaces, with RFID access and optional 4G for underground car parks."],
                  ["Ocular IQ Wallbox", "7 kW or 22 kW, with RFID, a touchscreen and load management."],
                  ["Ocular IQ Dual Port Tower", "Charges two cars at once. Suits shared or visitor bays."],
                  ["Ocular Flexi Load Controller", "Load manages up to 250 chargers in one building."],
                  ["Exploren software", "Resident access by app or RFID, automatic billing, and the energy cost paid back to the owners corporation. It works with over 40 OCPP charger brands."],
                ].map(([name, text]) => (
                  <li key={name} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">{name}: </span>
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-4 text-sm font-semibold text-primary">Best for: medium and large buildings that want one managed system with automatic billing.</p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xl font-extrabold tracking-tight">Evnex</p>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">My pick for houses</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Designed and made in New Zealand, with the CP Link cloud platform.</p>
              <ul className="mt-4 space-y-3">
                {[
                  ["E2 Core", "7.4 kW single phase with solar charging built in, and able to join a multi-charger setup."],
                  ["E2 Plus", "Adds Wi-Fi and 4G and a longer 8\u00a0m cable. Handy for car parks with weak Wi-Fi."],
                  ["X22", "22 kW three phase, with RFID access control and commercial load management."],
                  ["CP Link", "Cloud dashboard and app to manage a group of chargers, lock or unlock them remotely and recover charging costs."],
                  ["E2 Flex", "The budget home model. It cannot join a multi-charger system, so it is not one for apartments."],
                ].map(([name, text]) => (
                  <li key={name} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">{name}: </span>
                    {text}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-4 text-sm font-semibold text-primary">Best for: houses and townhouses, especially with solar, and smaller buildings.</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
              <p className="text-lg font-extrabold tracking-tight">What are RFID cards?</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                A card or key fob each resident taps on the charger to start charging, just like a building access fob. The system knows who is charging, so it can stop anyone else using the charger and record every kWh against the right person for billing. A lost card is cancelled in the app and a new one issued.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eef6fe] p-5 sm:p-6">
              <p className="text-lg font-extrabold tracking-tight">Why I recommend Ocular for apartments</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                It is built for strata from the ground up: a compact RFID charger for each bay, one controller for the whole building, and billing that pays the owners corporation back automatically. It runs on OCPP, the open standard, so the building is not locked into one brand. Whichever system a building chooses, every resident should connect to the same one, so load management and billing work for everyone.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
            <p className="text-sm font-extrabold tracking-tight">Please note: a general guide only</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Product ranges, features and specifications change often, and not every model suits every building or supply. This section is a summary to help you compare options, not a full specification or a quote. Please check each manufacturer's current information before deciding, and talk to me about what suits your property. Brand and product names belong to their owners.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ["Evnex chargers", "https://www.evnex.com/au"],
                ["Evnex FAQs", "https://www.evnex.com/au/faq"],
                ["EVSE Australia apartment charging", "https://evse.com.au/apartment-ev-charging/"],
                ["Exploren software", "https://evse.com.au/ocpp-chargepoint-software/"],
                ["Ocular chargers", "https://ocularcharging.com.au/"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-background px-3.5 py-1.5 text-xs font-bold text-primary ring-1 ring-border transition-colors hover:ring-primary/50"
                >
                  {label}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Ready to charge at home?</p>
            <p className="mt-2 text-sm text-white/70">Tell me your car and where you park, and I'll recommend the right setup.</p>
          </div>
          <a href="tel:0466270949" className="flex flex-col items-center justify-center gap-2 bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-brand-dark">
            <Phone className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Call me</span>
            <span className="text-lg font-extrabold">0466 270 949</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center gap-2 bg-brand-dark p-6 text-center text-white transition-colors hover:bg-slate-900">
            <Wrench className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Get a quote</span>
            <span className="text-lg font-extrabold">Request online</span>
          </a>
        </div>
      </div>
    </section>
  );
}
