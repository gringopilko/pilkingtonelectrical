import {
  ArrowDownToLine,
  Crosshair,
  Fan,
  FileCheck2,
  Hammer,
  Home,
  Lightbulb,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: Crosshair, title: "Properly centred", text: "Placed where it looks right in the room, not just where the nearest joist happens to be." },
  { icon: Hammer, title: "Fixed to solid timber", text: "Mounted on a rated bracket fixed to a joist or new timber, so it runs smooth and wobble free." },
  { icon: Ruler, title: "Right size for the room", text: "Blade span and ceiling height matched to the space for good airflow without the noise." },
  { icon: SlidersHorizontal, title: "Controls that suit you", text: "Remote, wall control or both, with the fan and light switched separately if you want." },
];

const sizes = [
  { room: "Bedroom or study", span: "About 1050 to 1300 mm", note: "42 to 52 inch" },
  { room: "Living room or main bedroom", span: "About 1300 to 1400 mm", note: "52 to 56 inch" },
  { room: "Large open plan", span: "1500 mm or more", note: "60 inch plus, or two fans" },
];

const mounting = [
  { icon: Home, title: "Standard ceilings", text: "A close-mounted fan keeps a tidy profile on a typical 2.4 m ceiling." },
  { icon: ArrowDownToLine, title: "High ceilings", text: "A downrod drops the fan to where it actually moves air you can feel." },
  { icon: Wind, title: "Raked ceilings", text: "An angled mounting kit lets the fan hang straight on a sloping ceiling." },
  { icon: ShieldCheck, title: "Safe clearance", text: "Most fans need the blades at least 2.1 m above the floor, which I check before you buy." },
];

const steps = [
  { icon: Search, text: "Check the room, ceiling and roof access" },
  { icon: Crosshair, text: "Mark the true centre or the best spot" },
  { icon: Hammer, text: "Add timber between joists if needed" },
  { icon: Zap, text: "Run cabling and set up the switching" },
  { icon: Wrench, text: "Fit the rated mounting bracket" },
  { icon: Fan, text: "Assemble, hang and balance the fan" },
  { icon: SlidersHorizontal, text: "Pair the remote or wall control" },
  { icon: FileCheck2, text: "Test every speed and the light" },
];

export function CeilingFanInfographic() {
  return (
    <section id="ceiling-fan-guide" className="mb-14 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5">
      {/* Title band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Homes &amp; rentals</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Ceiling Fan Installation</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-sky-300 sm:text-base">Centred, solid and quiet.</p>
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

        {/* Dead centre */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-5 py-5 text-white sm:px-6">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
                <Crosshair className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">Getting it dead centre</p>
                <p className="mt-1 text-sm text-white/75">Why a perfectly centred fan sometimes takes a little more work.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 bg-card p-5 sm:p-6 md:grid-cols-2">
            <div>
              <p className="font-bold tracking-tight">The joists rarely line up</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                A fan has to hang from solid timber, not plasterboard. Ceiling joists run at set spacings, so the exact centre of a room often falls between two of them, or the old light point sits off to one side.
              </p>
            </div>
            <div>
              <p className="font-bold tracking-tight">So I add timber where it is needed</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                To put the fan exactly where it looks best, I fix new timber between the joists from the roof space and mount the fan to that. It takes a bit more time, but the fan sits dead centre and runs without a wobble.
              </p>
            </div>
          </div>
          <div className="bg-card px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="rounded-xl bg-[#eef6fe] p-4 text-sm font-medium leading-relaxed">
              No roof access, such as under another storey? A small access hole may be needed to fit the timber. I keep it as neat as possible, and your plasterer or painter makes it good afterwards.
            </p>
          </div>
        </div>

        {/* Size guide */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="text-lg font-extrabold tracking-tight">What size fan?</p>
          <p className="mt-1 text-sm text-muted-foreground">A rough guide to blade span by room. I&apos;ll confirm the right size for your space.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {sizes.map((s) => (
              <div key={s.room} className="rounded-xl bg-background p-4 ring-1 ring-border">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{s.room}</p>
                <p className="mt-1 text-lg font-extrabold tracking-tight text-primary">{s.span}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AC vs DC */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">AC motor</span>
            <p className="mt-3 text-lg font-extrabold tracking-tight">The traditional choice</p>
            <ul className="mt-3 space-y-2">
              {["Usually three speeds", "Often runs from a wall controller", "A good, lower cost option"].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-primary bg-[#eef6fe] p-5 shadow-lg shadow-primary/10 sm:p-6">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">DC motor, my pick</span>
            <p className="mt-3 text-lg font-extrabold tracking-tight">Quieter and more efficient</p>
            <ul className="mt-3 space-y-2">
              {["Near silent, ideal for bedrooms", "Uses far less power than AC", "More speeds, usually with a remote"].map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mounting */}
        <div className="mt-8">
          <p className="text-lg font-extrabold tracking-tight">Ceiling height and mounting</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {mounting.map((m) => (
              <div key={m.title} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold tracking-tight">{m.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-10">
          <p className="text-center text-xl font-extrabold uppercase tracking-tight md:text-2xl">How a Fan Install Runs</p>
          <p className="mt-1 text-center text-sm font-bold uppercase tracking-wide text-primary">Solid, centred and tested</p>
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

        {/* Light kit note */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Lightbulb className="h-10 w-10 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold leading-snug sm:text-base">Replacing a light with a fan and light? I can switch them separately, so you can run the fan without the light on.</p>
          </div>
          <a href="tel:0466270949" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            0466 270 949
          </a>
        </div>

        {/* CTA */}
        <div className="mt-8 grid overflow-hidden rounded-2xl sm:grid-cols-3">
          <div className="bg-slate-900 p-6 text-white">
            <p className="text-lg font-extrabold leading-snug">Planning a new fan?</p>
            <p className="mt-2 text-sm text-white/70">Tell me the room and ceiling height, and I&apos;ll help you pick the right fan and the best spot.</p>
          </div>
          <a href="tel:0466270949" className="flex flex-col items-center justify-center gap-2 bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-brand-dark">
            <Phone className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Call me</span>
            <span className="text-lg font-extrabold">0466 270 949</span>
          </a>
          <a href="#quote" className="flex flex-col items-center justify-center gap-2 bg-brand-dark p-6 text-center text-white transition-colors hover:bg-slate-900">
            <FileCheck2 className="h-7 w-7" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wide">Get a quote</span>
            <span className="text-lg font-extrabold">Request online</span>
          </a>
        </div>
      </div>
    </section>
  );
}
