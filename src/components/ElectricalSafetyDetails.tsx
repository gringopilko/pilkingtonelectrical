import { Check, ArrowRight, Download } from "lucide-react";
import { Collapsible } from "@/components/Collapsible";
import logoImg from "@/assets/pilkington-logo-icon.webp";

const visualChecks = [
  ["Consumer mains", "The supply cables from the street or pit into the switchboard, for damage and secure fixing."],
  ["Switchboards", "Enclosure, covers, labelling, signs of heat, moisture or damage, and safe access."],
  ["Circuit protection", "Circuit breakers or fuses suit the circuits they protect, with no unsafe substitutes."],
  ["Safety switches (RCDs)", "Fitted where required and in good condition."],
  ["Exposed earth electrode", "The earth stake and its connection are present, connected and protected."],
  ["Water pipe bonding", "The bond to metallic water pipes is in place where one is needed."],
  ["Installation wiring", "Visible cables for damage, deterioration, overheating and unsafe joins."],
  ["Power points", "Damage, scorching, loose fittings and missing covers."],
  ["Light fittings", "Condition, heat damage, broken diffusers and correct mounting."],
  ["Cooking equipment", "Oven, cooktop and rangehood supplied with the property."],
  ["Dishwasher, washer and dryer", "Connections for appliances supplied with the property."],
  ["Electric water heater", "Condition, connection and signs of water damage near electrical parts."],
  ["Air conditioners", "Isolators, cabling and connections for split systems and other units."],
  ["Space heaters", "Fixed heaters supplied with the property, for condition and safe connection."],
  ["Exhaust and ceiling fans", "Mounting, condition and signs of overheating."],
  ["Solar and batteries", "Visible condition of solar and other renewable systems."],
  ["Swimming pool equipment", "Pumps, heaters and lighting connected to the installation."],
  ["Vehicle chargers", "EV charger condition, cabling and protection."],
];

const testChecks = [
  ["Polarity and correct connections", "Consumer mains, circuit protection, safety switches, power points and light fittings are connected the right way around."],
  ["Earth continuity", "The main earth conductor, switchboard enclosure, water pipe bond, power points, light fittings and fans are properly earthed."],
  ["Fixed appliances", "Water heater, air conditioners, cooking equipment, dishwasher, solar, pool equipment and vehicle chargers, tested for polarity and earthing."],
  ["Safety switch push button test", "Every RCD is operated with its test button to confirm it trips."],
  ["Safety switch trip time test", "Every RCD is tested with an instrument to confirm it trips fast enough."],
  ["Smoke alarms", "Correctly installed, in working order and tested to the manufacturer's instructions."],
];

const reportItems = [
  "Which rooms and parts of the property were included, and anything that could not be accessed",
  "Every defect found, with a clear recommendation",
  "Safety switch results for every circuit tested",
  "Smoke alarm result and when the next alarm check is due",
  "My licence details, REC 30450",
  "The inspection date and when the next check is due",
];

const inclusions = [
  ["Switchboard & safety switches", "Inspection of the switchboard, circuit protection and earthing, with instrument testing of RCD safety switches and other tests required for the installation."],
  ["Power points & switches", "Check accessible outlets and switches for damage and unsafe conditions, with polarity and earthing tests as required."],
  ["Wiring, lighting & fittings", "Assess accessible wiring, lighting and electrical fittings for deterioration, damage and safety issues. The check covers the installation, not just the switchboard."],
  ["Owner-provided electrical equipment", "Inspect accessible electrical equipment supplied with the property, including visible plugs, leads and connections, as applicable to the safety check."],
  ["Rental electrical standards", "Check the installation against the applicable requirements, including circuit breaker and RCD protection for power outlets and lighting circuits."],
  ["Written safety report", "Receive a report with my licence details, the inspection date, test findings and any required repairs or actions, for your property records."],
];

export function ElectricalSafetyDetails() {
  return (
    <>
      <nav aria-label="Electrical safety page sections" className="mb-12 flex flex-wrap gap-2">
        {[["About", "about-service"], ["Full checklist", "checklist"], ["Inclusions", "inclusions"], ["Service packages", "pricing"], ["Rental requirements", "requirements"], ["Book a Check", "quote"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{label}</a>
        ))}
      </nav>

      <section id="about-service" className="scroll-mt-28">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Electrical safety for Victorian properties</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">A thorough check. A clear report. A safer property.</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">Damaged wiring, faulty fittings and inadequate circuit protection can create a risk of electric shock or fire. A proper electrical safety check helps identify these issues and gives owners and property managers a clear picture of what needs attention.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">I'm Shane, your licensed electrician from the first enquiry through to the inspection and report. I carry out checks across Bayside and South-East Melbourne for rental properties, property managers and homeowners, with straightforward communication and upfront pricing.</p>
      </section>

      <section id="checklist" className="mt-14 scroll-mt-28">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Exactly what I check</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">The full electrical safety checklist</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Every check follows the same checklist under AS/NZS 3019, the Australian Standard for checking existing electrical installations, so nothing is missed. A blank copy is available to download below.</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background shadow-xl shadow-slate-900/5">
          <div className="flex items-center gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark px-5 py-5 text-white sm:px-8">
            <img src={logoImg} alt="Pilkington Electrical" width={58} height={72} className="h-11 w-auto" />
            <div className="min-w-0">
              <p className="text-lg font-extrabold leading-tight tracking-tight sm:text-xl">Electrical Safety Check Checklist</p>
              <p className="mt-0.5 text-xs text-white/70 sm:text-sm">Pilkington Electrical &middot; Licensed electrician REC 30450</p>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-bold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">1</span>
              Visual inspection
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:hidden">Each item below is inspected for damage, deterioration and safe connection.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {visualChecks.map(([title, text]) => (
                <div key={title} className="flex items-start gap-2 rounded-xl bg-card p-3 ring-1 ring-border sm:gap-3 sm:p-4">
                  <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border-2 border-primary text-primary sm:h-5 sm:w-5"><Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold leading-snug sm:text-sm">{title}</p>
                    <p className="mt-0.5 hidden text-sm leading-relaxed text-muted-foreground sm:block">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 flex items-center gap-3 text-lg font-bold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">2</span>
              Testing with instruments
            </h3>
            <div className="mt-4 divide-y divide-border rounded-xl bg-card ring-1 ring-border sm:grid sm:grid-cols-2 sm:gap-3 sm:divide-y-0 sm:bg-transparent sm:ring-0">
              {testChecks.map(([title, text]) => (
                <div key={title} className="flex items-start gap-3 p-3.5 sm:rounded-xl sm:bg-card sm:p-4 sm:ring-1 sm:ring-border">
                  <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border-2 border-primary text-primary sm:h-5 sm:w-5"><Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug">{title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 flex items-center gap-3 text-lg font-bold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">3</span>
              Your written report
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {reportItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-md">Items match Energy Safe Victoria's electrical safety check report for rentals and AS/NZS 3019. Repairs found during the check are quoted separately, so the owner can approve them before any work starts.</p>
              <a href="/downloads/electrical-safety-check-report.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download the checklist (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Collapsible id="inclusions" title={<>What's included in your electrical safety check</>} className="">
        
        <p className="mt-4 leading-relaxed text-muted-foreground">An inspection and testing of the property's electrical installation in accordance with the applicable requirements of AS/NZS 3019.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inclusions.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6">
              <Check className="mb-3 h-8 w-8 rounded-lg bg-primary/10 p-1.5 text-primary" />
              <h3 className="font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Please arrange access to the switchboard, outlets, fittings and owner-provided equipment. Any access limitations will be recorded in the report. A brief interruption to power may be needed for testing.</p>
      </Collapsible>

      <Collapsible id="pricing" title={<>Choose the support your property needs</>} className="">
        
        <p className="mt-4 leading-relaxed text-muted-foreground">Book a standalone electrical check, or combine it with smoke alarm servicing for one convenient visit. I'll confirm the inclusions and a clear quote for your property before you book.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 md:p-8"><p className="text-xs font-bold uppercase tracking-wide text-primary">Electrical safety check</p><h3 className="mt-3 text-2xl font-bold">A thorough check and written report</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Inspection and testing of the accessible electrical installation, clear findings and practical advice on any work needed.</p><a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-primary px-5 py-3 text-sm font-bold text-primary">Get a tailored quote <ArrowRight className="h-4 w-4" /></a></article>
          <article className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8"><p className="text-xs font-bold uppercase tracking-wide text-primary">Combined property safety package</p><h3 className="mt-3 text-2xl font-bold">Electrical check + smoke alarm service</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Coordinate the electrical safety check and written report with smoke alarm testing, cleaning, condition and expiry checks, and suitable battery servicing.</p><ul className="mt-4 space-y-2 text-sm text-muted-foreground"><li>✓ One coordinated visit and access arrangement</li><li>✓ Clear electrical and smoke alarm records</li><li>✓ Repair and replacement options explained</li></ul><a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Ask about the combined package <ArrowRight className="h-4 w-4" /></a></article>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Your quote depends on the property, access and number of alarms. Replacement alarms, parts, repairs and upgrades are agreed and quoted separately. Electrical checks and smoke alarm servicing have different required intervals; combining a visit does not change those intervals. Gas safety checks require a suitably qualified gasfitter.</p>
      </Collapsible>

      <Collapsible title={<>What happens next?</>} className="">
        
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[["01", "Arrange the visit", "Send the property details and any concerns. We'll confirm the scope, pricing and access arrangements with you or your property manager."], ["02", "Inspect & test", "I inspect and test the accessible installation, record the findings and explain any safety issues that need attention."], ["03", "Report & repair options", "You receive a written report. If repairs are needed, I'll explain the options and provide a separate quote. Any immediate hazards are addressed appropriately." ]].map(([n, title, text]) => (
            <article key={n} className="rounded-2xl border border-border bg-card p-6"><p className="text-sm font-bold text-primary">{n}</p><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>
          ))}
        </div>
      </Collapsible>

      <Collapsible id="requirements" title={<>Victorian rental safety requirements</>} className="">
        
        <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
          <p>Electrical safety checks are required at least every two years for rental agreements covered by Victoria's safety-check requirements. Since 13 October 2026, the requirement covers all rental agreements, regardless of when they began.</p>
          <p>The check must be completed by a licensed electrician. If a required check is overdue when a renter moves in, it must be arranged as soon as practicable.</p>
          <p>Rental properties must have the required circuit breaker and RCD safety switch protection for power outlets and lighting circuits. If your switchboard needs work, I'll explain the findings and quote the required upgrades separately.</p>
          <p>Keep the most recent safety-check record until the next one is created. The report should identify the electrician and licence number, inspection date, findings and repairs or actions taken. A copy must be supplied within seven days of a renter's written request.</p>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-bold">Official guidance</h3>
          <div className="mt-3 flex flex-col items-start gap-3 text-sm">
            <a className="text-primary underline underline-offset-4" href="https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/gas-electrical-and-water-safety-standards/rental-providers-gas-and-electrical-safety" target="_blank" rel="noopener noreferrer">Consumer Affairs Victoria: rental electrical safety</a>
            <a className="text-primary underline underline-offset-4" href="https://www.consumer.vic.gov.au/housing/renting/new-changes-to-the-rental-laws" target="_blank" rel="noopener noreferrer">Consumer Affairs Victoria: changes to rental laws</a>
            <a className="text-primary underline underline-offset-4" href="https://www.energysafe.vic.gov.au/industry-guidance/electrical/electricians-toolkit/residential-tenancy" target="_blank" rel="noopener noreferrer">Energy Safe Victoria: residential tenancy checks</a>
          </div>
        </div>
      </Collapsible>
    </>
  );
}
