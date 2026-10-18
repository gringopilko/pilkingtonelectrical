import { useEffect, useRef, useState } from "react";
import { SwitchboardExplorer } from "@/components/SwitchboardExplorer";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Cable,
  CircleSlash,
  ExternalLink,
  Flame,
  Gauge,
  LayoutGrid,
  Power,
  ShieldCheck,
  Sparkles,
  Split,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Product photo that quietly falls back to an icon if the manufacturer's image cannot load. */
function ProductImage({ src, alt, icon: Icon }: { src?: string; alt: string; icon: LucideIcon }) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);
  // If the image already failed before the page became interactive, onError never fires, so check once on mount.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-border">
      {failed ? (
        <Icon className="h-14 w-14 text-primary/70" strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-2"
        />
      )}
    </div>
  );
}

const devices = [
  {
    icon: Power,
    name: "Main switch",
    abbr: "Isolator",
    img: "/img/hager-main-switch.webp",
    alt: "Hager single pole main switch with a red toggle",
    does: "Turns off the power to the whole switchboard at once.",
    why: "Every board needs one, clearly labelled and usually with a red toggle, so power can be cut quickly in an emergency or for safe work.",
    brands: "Hager main switches and switchgear, Clipsal MAX9 range",
  },
  {
    icon: Zap,
    name: "Circuit breaker",
    abbr: "MCB",
    img: "/img/hager-mcb.webp",
    alt: "Hager miniature circuit breaker",
    does: "Switches a circuit off when it is overloaded or short circuited.",
    why: "Protects the cables from overheating and replaces old rewireable fuses. It does not protect people from electric shock.",
    brands: "Hager onekonekt MCBs, Clipsal MAX9 MCBs",
  },
  {
    icon: ShieldCheck,
    name: "Safety switch",
    abbr: "RCD / RCCB",
    img: "/img/hager-rccb.webp",
    alt: "Hager RCCB safety switch",
    does: "Watches for current leaking to earth, for example through a person, and switches off in a fraction of a second.",
    why: "Protects people from electric shock. One RCCB usually covers several circuits, so a single fault turns them all off.",
    brands: "Hager RCCBs, Clipsal MAX9 RCCBs",
  },
  {
    icon: Split,
    name: "Combined breaker and safety switch",
    abbr: "RCBO",
    img: "/img/hager-rcbo.webp",
    alt: "Hager single module RCBO with its neutral fly lead",
    does: "A circuit breaker and safety switch in one device, fitted to each circuit.",
    why: "A fault only turns off its own circuit, so the fridge and lights stay on. This is how I set up modern boards.",
    brands: "Hager onekombo single module RCBO, Clipsal MAX9 RCBOs",
  },
  {
    icon: Flame,
    name: "Arc fault detection device",
    abbr: "AFDD",
    img: "/img/hager-afdd.webp",
    alt: "Hager arc fault detection device combined with an RCBO",
    does: "Detects the tell-tale signs of dangerous arcing from damaged cables or loose connections, and switches the circuit off.",
    why: "Arcing can start a fire without tripping a breaker or safety switch. AS/NZS 3000 recommends AFDDs for homes and places where people sleep.",
    brands: "Clipsal Resi9 AFDD (with earth leakage protection built in), Hager AFDD range",
  },
  {
    icon: Gauge,
    name: "Surge protection",
    abbr: "SPD",
    img: "/img/hager-spd.webp",
    alt: "Hager single phase surge protection device",
    does: "Limits voltage spikes from lightning or switching on the network.",
    why: "Helps protect TVs, computers, appliances and solar inverters from damaging surges.",
    brands: "Hager SPDs, Clipsal surge protection devices",
  },
  {
    icon: Sparkles,
    name: "Switchboard fire suppression unit",
    abbr: "Automatic",
    img: undefined,
    alt: "Switchboard fire suppression unit",
    does: "A self-contained unit mounted inside the switchboard that releases a fire suppressing aerosol if the temperature rises to fire level.",
    why: "An extra layer for commercial, strata and critical boards. No power or wiring needed. It does not replace proper circuit protection.",
    brands: "Made by specialist fire protection brands such as AF-X Fireblocker and MAUS Fire Stixx, not by Hager or Clipsal",
  },
];

const rcdTypes = [
  { type: "Type AC", tone: "bad", text: "Detects AC leakage only. Cannot be installed in new work in Australia since 1 May 2023. Existing ones can stay if they test correctly." },
  { type: "Type A", tone: "good", text: "Detects AC and pulsating DC leakage from modern electronics. The standard choice for homes today." },
  { type: "Type F", tone: "good", text: "Adds detection for appliances with variable speed motors, such as heat pumps, inverter air conditioners and some washing machines." },
  { type: "Type B", tone: "good", text: "Also detects smooth DC leakage. Used for some EV chargers, solar and battery inverters, unless the equipment has its own DC protection." },
];

const upgradeReasons = [
  "Old ceramic fuses that can be rewired with the wrong fuse wire and give no shock protection",
  "No safety switch at all, or only on some circuits",
  "One or two safety switches for the whole house, so one fault blacks out everything",
  "Type AC devices in a home with solar, a battery, an EV charger or inverter appliances",
  "A full board with no room for new circuits like an EV charger",
  "Older boards with asbestos backing, which needs specialist handling",
  "Rental properties, which must have circuit breakers and safety switches",
];

const boards = [
  {
    icon: LayoutGrid,
    name: "Main switchboard",
    img: "/img/hager-golf-board-installed.webp",
    alt: "Hager switchboard with main switch, RCBOs and safety switch fitted",
    text: "Where the supply comes into the property. It holds the main switch and the protection for every circuit, and is often next to or inside the meter box.",
  },
  {
    icon: Cable,
    name: "Distribution board",
    img: "/img/hager-invicta-panelboard.webp",
    alt: "Hager invicta commercial panelboard",
    text: "A board fed from the main switchboard that serves one area, such as a floor of an office, a group of apartments, or a dedicated EV charging board.",
  },
  {
    icon: CircleSlash,
    name: "Sub-board",
    img: "/img/hager-golf-enclosure.webp",
    alt: "Hager golf flush mounted enclosure",
    text: "A smaller board in a garage, shed, granny flat or apartment, fed by a submain cable. It has its own main switch and circuit protection.",
  },
];

const links = [
  ["Hager residential RCBOs", "https://hager.com/au/solutions/product-and-installation-solutions/residential-rcbos"],
  ["Hager modular circuit protection", "https://hager.com/au/solutions/modular-circuit-protection"],
  ["Clipsal arc fault detection devices", "https://www.clipsal.com/afdd"],
  ["Clipsal MAX9 circuit protection", "https://www.clipsal.com/products/circuit-protection/max9"],
  ["ERAC advisory note on Type A RCDs", "https://www.erac.gov.au/wp-content/uploads/2023/07/ERAC-Advisory-Note-Type-A-RCDv2.pdf"],
];

export function ProtectionGuide() {
  return (
    <section id="protection-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Switchboard protection explained</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Safety Switches, Breakers &amp; AFDDs</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">What each device does and when to upgrade.</p>
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
        <SwitchboardExplorer />

        {/* Devices */}
        <p className="mt-10 text-xl font-extrabold tracking-tight md:text-2xl">What&apos;s in a modern switchboard</p>
        <p className="mt-1 text-sm text-muted-foreground">Each device protects against something different. A good board uses the right mix.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {devices.map((d) => (
            <div key={d.name} className="flex flex-col rounded-2xl border border-border bg-card p-4 sm:p-5">
              <ProductImage src={d.img} alt={d.alt} icon={d.icon} />
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <p className="text-lg font-extrabold tracking-tight">{d.name}</p>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">{d.abbr}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed"><span className="font-bold">What it does: </span><span className="text-muted-foreground">{d.does}</span></p>
              <p className="mt-1.5 text-sm leading-relaxed"><span className="font-bold">Why it matters: </span><span className="text-muted-foreground">{d.why}</span></p>
              <p className="mt-auto pt-3 text-xs font-semibold text-primary">{d.brands}</p>
            </div>
          ))}
        </div>

        {/* RCD types */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <div className="bg-slate-900 px-5 py-4 text-white sm:px-6">
            <p className="text-lg font-extrabold tracking-tight sm:text-xl">Safety switch types: AC, A, F and B</p>
            <p className="mt-0.5 text-sm text-white/70">The letter on the device tells you what kind of leakage it can detect.</p>
          </div>
          <div className="divide-y divide-border bg-card">
            {rcdTypes.map((t) => (
              <div key={t.type} className="flex items-start gap-4 p-4 sm:p-5">
                <span className={`inline-flex w-20 shrink-0 justify-center rounded-lg px-2 py-1.5 text-sm font-extrabold ${t.tone === "bad" ? "bg-red-50 text-red-700 ring-1 ring-red-200" : "bg-primary/10 text-primary"}`}>{t.type}</span>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RCCB vs RCBO */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <p className="text-lg font-extrabold tracking-tight">Older setup: shared safety switches</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">One or two RCCBs protect groups of circuits. When one appliance develops a fault, every circuit on that safety switch goes off, often including the fridge, lights and alarm.</p>
          </div>
          <div className="rounded-2xl border-2 border-primary bg-[#eef6fe] p-5 sm:p-6">
            <p className="text-lg font-extrabold tracking-tight">Modern setup: an RCBO on every circuit</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Each circuit has its own combined breaker and safety switch. A fault only turns off that circuit, so it is easier to find and the rest of the home keeps running.</p>
          </div>
        </div>

        {/* Why upgrade */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-900"><AlertTriangle className="h-5 w-5" aria-hidden="true" /></span>
            <p className="text-lg font-extrabold tracking-tight">Signs your protection needs an upgrade</p>
          </div>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {upgradeReasons.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Boards */}
        <div className="mt-10">
          <p className="text-xl font-extrabold tracking-tight md:text-2xl">Main switchboards, distribution boards and sub-boards</p>
          <p className="mt-1 text-sm text-muted-foreground">Bigger properties have more than one board. Here is how they fit together.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {boards.map((b) => (
              <div key={b.name} className="rounded-2xl border border-border bg-card p-4">
                <ProductImage src={b.img} alt={b.alt} icon={b.icon} />
                <p className="mt-3 font-extrabold tracking-tight">{b.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">What I recommend for most homes</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              "Type A RCBOs on every circuit, Hager onekonekt or Clipsal MAX9",
              "AFDDs on bedroom and living area power circuits",
              "Surge protection for the whole board",
              "Every circuit clearly labelled, with room to grow",
            ].map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm leading-snug text-white/85">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <Link to="/services/$slug" params={{ slug: "switchboards" }} hash="switchboard-options" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-white hover:text-slate-900">
            Switchboard upgrade options
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-sm font-extrabold tracking-tight">Please note: a general guide only</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Product ranges and the Wiring Rules change over time, and the right protection depends on your installation. This is a summary to help you understand your switchboard, not a design or a quote. Please check the manufacturers' current information, and talk to me about what suits your property. Product photos and names belong to their manufacturers.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-background px-3.5 py-1.5 text-xs font-bold text-primary ring-1 ring-border transition-colors hover:ring-primary/50">
                {label}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
