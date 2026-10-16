import {
  AlertTriangle,
  Box,
  Brush,
  Building2,
  ClipboardCheck,
  ClipboardList,
  Drill,
  FileCheck2,
  Hammer,
  Home,
  Layers,
  PaintRoller,
  Phone,
  Plug,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Old wiring made safe", text: "Rubber, cloth and unearthed cables replaced with modern cable, protected by safety switches." },
  { icon: Layers, title: "Your choice of finish", text: "Hidden in the wall, or neat surface ducting. I'll explain the trade-offs so you can choose." },
  { icon: Search, title: "Honest about access", text: "How easily cables can get into your walls and ceiling drives the time. I'll tell you up front." },
  { icon: FileCheck2, title: "Tested and certified", text: "Every circuit tested, with a certificate of electrical safety when the work is done." },
];

const signs = [
  "Old rubber or cloth covered cables",
  "No earth wires to lights or power points",
  "Ceramic fuses and very old switchgear",
  "Lights flickering or circuits tripping",
  "Scorch marks, buzzing or a burning smell",
  "Renovating, extending or adding rooms",
];

const finishes = [
  {
    icon: Hammer,
    tag: "Best finish, my recommendation",
    name: "Concealed in the wall",
    text: "Cables are hidden inside the wall for the cleanest result. In brick and masonry I chase the wall in house with a professional Metabo twin blade wall chaser connected to an H-class dust extractor, cutting clean, straight channels at a set depth with the dust captured at the blade. The cable is then set in, ready for your plasterer to make good. It is the finish I recommend, and with the right tools it is better value than most people expect.",
    best: "Best for: anyone who wants a clean, built-in look in any room.",
    highlight: true,
    image: { src: "/img/metabo-wall-chaser.webp", alt: "Metabo wall chaser cutting a clean channel in a brick wall", w: 452, h: 364 },
  },
  {
    icon: Box,
    tag: "Most affordable",
    name: "Surface ducting, standard",
    text: "Slim plastic ducting runs neatly along the wall or skirting, with standard white mounting blocks behind switches and power points. Quick to install with no cutting into walls.",
    best: "Best for: brick walls, garages, sheds, rentals and tight budgets.",
    highlight: false,
  },
  {
    icon: Sparkles,
    tag: "Premium surface",
    name: "Surface ducting, premium",
    text: "Premium surface mounting boxes and brackets from Clipsal and Hager, designed to match their switch and power point ranges. A tidier, more built-in look without chasing the walls.",
    best: "Best for: living areas where you want a tidy finish without chasing the walls.",
    highlight: false,
  },
];

const access = [
  {
    icon: Home,
    level: "Easy",
    tone: "good",
    title: "Single storey, or the top floor",
    text: "With a ceiling space above, cables are fed down inside the wall from the roof space. Usually only small holes at the switch and power point positions.",
  },
  {
    icon: Building2,
    level: "Harder",
    tone: "warn",
    title: "Ground floor with a storey above",
    text: "There is no roof space above, so access holes have to be cut in the plaster to get cables past the wall framing. Expect holes that will need patching.",
  },
  {
    icon: AlertTriangle,
    level: "More time",
    tone: "warn",
    title: "No manhole and a metal roof",
    text: "If there is no way into the roof space, roof sheets may need to be lifted. The sarking underneath, the membrane that keeps out dust, moisture and insects, is cut to get through and sealed again. It takes longer and costs a little more.",
  },
  {
    icon: Drill,
    level: "Adds up",
    tone: "warn",
    title: "Noggins and framing",
    text: "Noggins are the horizontal timber braces inside walls. Each one in a cable's path has to be drilled through, and in roof spaces with lots of framing that time adds up.",
  },
];

const costFactors = [
  "Number of storeys and how the floors are built",
  "Wall type: plasterboard, brick veneer or double brick",
  "Ceiling and roof access, and the roof type",
  "Insulation in the ceiling or walls that has to be worked around",
  "The finish you choose: chased, standard ducting or premium",
  "Furniture, fitted cabinetry and contents in the way",
  "Whether the switchboard also needs upgrading",
];

const steps = [
  { icon: Search, text: "Walk through and plan the cable routes" },
  { icon: Layers, text: "Choose your finish room by room" },
  { icon: ClipboardList, text: "Quote that explains the access" },
  { icon: Zap, text: "Isolate and disconnect old wiring" },
  { icon: Wrench, text: "Run new cables to each point" },
  { icon: Plug, text: "Fit power points, switches and lights" },
  { icon: ShieldCheck, text: "Test every circuit and certify" },
  { icon: Brush, text: "Clean up and show you through" },
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

export function RewiringInfographic() {
  return (
    <section id="rewiring-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Homes &amp; renovations</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Rewiring &amp; Extensions</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Choose your finish. Know what affects the time.</p>
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

        {/* Statement */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-slate-900 px-5 py-4 text-white">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
            <Ruler className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold leading-snug sm:text-base">
            Every house is different. The finish you choose, and how easily cables can get into your walls and ceiling, make the biggest difference to how long a rewire takes.
          </p>
        </div>

        {/* Signs */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">Signs it is time to rewire</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {signs.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Finishes */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">Three Ways to Run New Cables</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">From the best finish to the most budget friendly</p>
          <div className="mt-6 grid items-start gap-4 md:grid-cols-3">
            {finishes.map((f) => (
              <div key={f.name} className={`flex h-full flex-col rounded-2xl p-5 ${f.highlight ? "border-2 border-primary bg-[#eef6fe] shadow-lg shadow-primary/10" : "border border-border bg-card"}`}>
                {"image" in f && f.image ? (
                  <img src={f.image.src} alt={f.image.alt} width={f.image.w} height={f.image.h} loading="lazy" decoding="async" className="-mx-1 -mt-1 mb-1 aspect-[4/3] w-[calc(100%+0.5rem)] rounded-xl object-cover" />
                ) : (
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/25">
                    <f.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                )}
                <span className="mt-4 inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">{f.tag}</span>
                <p className="mt-2 text-lg font-extrabold tracking-tight">{f.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <p className="mt-auto pt-3 text-sm font-semibold text-primary">{f.best}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solid brick and art deco */}
        <div id="solid-brick" className="mt-10 scroll-mt-28 overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-5 py-6 text-white sm:px-6">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Solid brick and concrete walls</p>
            <p className="mt-2 text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">Art deco apartments and older homes</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/75">
              Many art deco apartments and older homes around St Kilda, Elwood and Elsternwick have solid brick or concrete walls, so there is no cavity to feed new cables through. That leaves two good options, and I offer both.
            </p>
          </div>
          <div className="grid gap-4 bg-card p-5 sm:p-6 md:grid-cols-2">
            <div className="rounded-2xl bg-background p-5 shadow-sm">
              <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">Budget friendly</span>
              <p className="mt-3 text-lg font-extrabold tracking-tight">Sleek surface ducting</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Low-profile ducting runs neatly along the wall or cornice, finished with standard or premium Clipsal and Hager mounting to suit the room. It is the quickest to install, with minimal dust and nothing to make good afterwards, which is why it is usually the most affordable choice for art deco apartments.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-5 shadow-sm">
              <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Best finish</span>
              <p className="mt-3 text-lg font-extrabold tracking-tight">Chasing solid brick and concrete</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I chase solid walls in house with a professional Metabo twin blade wall chaser and an H-class dust extractor, which cuts clean, straight channels at a set depth in one pass and captures the dust at the blade, so it stays out of your home. With the right tools on hand, hidden cables in solid walls are better value than most people expect. The chase is then ready for your plasterer to make good.
              </p>
            </div>
          </div>
          <div className="bg-card px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="rounded-xl bg-[#eef6fe] p-4 text-sm font-medium leading-relaxed">
              Not sure which suits your place? I'll show you both on site and quote each one, so you can choose between the best value and a fully hidden finish.
            </p>
          </div>
        </div>

        {/* Access */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <div className="bg-slate-900 px-5 py-4 text-white sm:px-6">
            <p className="text-lg font-extrabold tracking-tight sm:text-xl">How cables get into your walls</p>
            <p className="mt-0.5 text-sm text-white/70">Access is the biggest thing that changes the time a job takes.</p>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {access.map((a) => (
              <div key={a.title} className="bg-card p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <a.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${a.tone === "good" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-900"}`}>{a.level}</span>
                </div>
                <p className="mt-3 font-extrabold tracking-tight">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* No patch and paint */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 sm:flex-row sm:items-start sm:p-6">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
            <PaintRoller className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-lg font-extrabold tracking-tight">Please note: I don't patch or paint</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              Plasterboard walls are usually straightforward, but where access holes are needed I keep them as small and neat as possible. Patching the plaster and painting is done by your plasterer or painter afterwards. I'll show you where any holes will be before I start, so there are no surprises.
            </p>
          </div>
        </div>

        {/* Cost factors */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">What affects the time and cost</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {costFactors.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">Every job is quoted after I've seen the property, so the quote reflects your access, your finish and your walls.</p>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">How a Rewire Runs</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">Planned, tidy and certified</p>
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

        {/* Renovating banner */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Hammer className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Renovating? Get the wiring done while the walls are open. It is the quickest and cheapest time to do it.</p>
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
              <ClipboardCheck className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-tight">Before I start</p>
            </div>
            <Dotted
              items={[
                "Mark where you want new power points, switches and lights",
                "Move furniture away from the walls being worked on",
                "Clear access to the manhole and switchboard",
                "Plan for the power to be off in parts of the house at times",
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
                "New cable to the current Wiring Rules",
                "Safety switch protection on every circuit",
                "Every circuit tested, with results recorded",
                "A certificate of electrical safety",
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Planning a rewire or extension?</p>
            <p className="mt-2 text-sm text-white/70">I'll walk through the house with you and explain the options for each room.</p>
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
