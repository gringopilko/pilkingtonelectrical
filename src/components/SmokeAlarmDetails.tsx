import { Check } from "lucide-react";

const cfa = "https://www.cfa.vic.gov.au/fire-safety/home-fire-safety/smoke-alarms/";
const cav = "https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/keeping-the-property-safe/smoke-alarms-and-fire-safety";
const options = [
  { title: "Replaceable-battery alarms", subtitle: "Usually a removable 9V battery", text: "A lower-cost option where battery-only alarms are permitted. There is no mains wiring to install, but someone must keep up with battery replacement.", care: "Replace 9V batteries yearly and follow the alarm instructions. A flat or removed battery leaves the alarm unable to protect you." },
  { title: "Sealed 10-year battery alarms", subtitle: "Long-life battery inside the unit", text: "Useful for suitable older homes and additional coverage without new power wiring. The battery is sealed, so there is no annual battery swap.", care: "Still needs testing and cleaning. Replace the whole alarm at the end of its life, or earlier if it fails. It cannot replace a legally required hardwired alarm." },
  { title: "Hardwired alarms", subtitle: "240V mains power with battery backup", text: "Connected to the electrical supply by a licensed electrician. Installation cost depends on existing wiring, access and the number of alarms.", care: "Backup power protects during an outage. The backup battery may be replaceable or sealed, depending on the model. Mains power does not remove the need for servicing." },
];
const faqs = [
  ["Why choose photoelectric?", "Photoelectric describes how an alarm detects smoke, not how it is powered. CFA recommends photoelectric alarms for homes: they respond well to smouldering fires and are less prone to nuisance alarms from cooking than ionisation models. Correct placement still matters."],
  ["Does hardwired mean interconnected?", "No. Mains power and interconnection are separate features. Interconnected alarms alert together when one detects smoke. They can link through a cable or compatible wireless radio technology. I check compatibility and test the group; mixing different brands or models does not guarantee they will link."],
  ["Why does an alarm keep chirping?", "An occasional chirp may indicate a low battery, missing mains supply, contamination or a fault. The light pattern and instructions help identify the cause. I can check the battery, supply, condition and replacement date. A sealed battery is not something to open and replace."],
  ["What about alarms triggered by cooking or steam?", "Repeated unwanted alarms need investigation. Dust, location and the type of alarm can contribute. Don't disconnect an alarm to solve the problem. I'll assess the position and suitable replacement options. If an alarm sounds and you suspect a fire, leave the building and call 000."],
  ["Can I just swap a wired alarm for a battery one?", "I first check what your property requires. A battery-only alarm is not a substitute where hardwiring is required. Replacing a hardwired unit also involves checking the base, electrical connection and compatibility with any linked alarms."],
  ["How much does the work cost?", "The quote depends on the number and type of alarms, cable access, existing wiring and any interconnection or repairs. Send your suburb, a photo of the alarm and its model or date label if safely accessible. I'll explain the options before work begins."],
];

export function SmokeAlarmDetails() {
  return <>
    <nav aria-label="Smoke alarm page sections" className="mb-10 flex flex-wrap gap-2">{[["Services", "alarm-services"], ["Compare alarms", "alarm-options"], ["Victorian requirements", "alarm-requirements"], ["Care & FAQs", "alarm-care"]].map(([label,id])=><a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">{label}</a>)}</nav>
    <section id="alarm-services" className="scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Working alarms. Suitable locations. Clear advice.</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Not sure how old your alarms are, why one keeps beeping, or which type your home needs? I'll assess the existing alarms, explain any issues and quote the suitable work. Based in Hampton East, I service Bayside and South East Melbourne homes and rental properties.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">{["New alarms and replacement of faulty or expired units", "Testing, cleaning and battery replacement where suitable", "Hardwired supply and backup-battery checks", "Compatible interconnection and group testing", "Assessment of locations and additional coverage", "Annual rental checks and records of findings"].map(s=><div key={s} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm"><Check className="h-5 w-5 shrink-0 text-primary"/>{s}</div>)}</div>
    </section>
    <section id="alarm-options" className="mt-14 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Hardwired or battery: what changes?</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">The right choice depends on your building's requirements, access and the coverage you want. These are three different power options; photoelectric detection and interconnection can be considered alongside them.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">{options.map(o=><article key={o.title} className="rounded-2xl border border-border bg-card p-6"><p className="text-xs font-bold uppercase tracking-wide text-primary">{o.subtitle}</p><h3 className="mt-3 text-xl font-bold">{o.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.text}</p><p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{o.care}</p></article>)}</div>
      <a href={cfa+"types-of-smoke-alarms"} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline">CFA: alarm power and connection options</a>
    </section>
    <section id="alarm-requirements" className="mt-14 scroll-mt-28 rounded-2xl border border-border bg-card p-6 md:p-8">
      <h2 className="text-2xl font-bold">What does a Victorian home need?</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">CFA's guidance distinguishes older homes, homes built between 1 August 1997 and 30 April 2014 that need mains-powered alarms with backup, and homes built or significantly renovated after 1 May 2014 that need hardwired, interconnected alarms. I'll check the requirements that apply to your property and proposed work.</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">CFA recommends extra alarms in bedrooms and living rooms, beyond minimum coverage. A suitable location and an alert you can hear matter as much as the power source. If anyone is deaf or hard of hearing, ask about specialist alerting options.</p>
      <a href={cfa+"selecting-a-smoke-alarm"} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline">CFA: choosing alarms for your home</a>
      <h3 className="mt-7 text-lg font-bold">Rental properties: annual checks</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Since 25 November 2025, annual smoke alarm safety checks apply to all Victorian rental properties. Rental providers must keep alarms correctly installed and working, with tests at least every 12 months following manufacturer instructions. A non-working alarm needs urgent repair. I can coordinate access with your agent and record the checks and any work needed.</p>
      <a href={cav} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline">Consumer Affairs Victoria: rental smoke alarm duties</a>
    </section>
    <section id="alarm-care" className="mt-14 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Maintenance doesn't stop at installation</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">CFA recommends monthly testing, yearly cleaning and annual replacement of 9V batteries. All smoke alarms need replacement after 10 years, including hardwired units. Follow your model's instructions and arrange attention sooner if a unit fails. A 10-year battery does not mean ten years without checks.</p>
      <a href={cfa+"smoke-alarm-maintenance"} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-primary underline">CFA: testing and maintenance</a>
      <h3 className="mt-8 text-xl font-bold">Common questions and problems</h3>
      <div className="mt-5 space-y-3">{faqs.map(([q,a])=><details key={q} className="rounded-xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div>
      <p className="mt-4 text-xs text-muted-foreground">Model-specific fault guidance: <a href="https://www.brooks.com.au/in-the-know/faqs/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Brooks alarm FAQs</a>. Always use the instructions for your own alarm.</p>
    </section>
  </>;
}
