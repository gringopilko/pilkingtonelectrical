import { Check, ArrowRight } from "lucide-react";

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
        {[["About", "about-service"], ["Inclusions", "inclusions"], ["Pricing", "pricing"], ["Rental requirements", "requirements"], ["Book a Check", "quote"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{label}</a>
        ))}
      </nav>

      <section id="about-service" className="scroll-mt-28">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Electrical safety for Victorian properties</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">A thorough check. A clear report. A safer property.</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">Damaged wiring, faulty fittings and inadequate circuit protection can create a risk of electric shock or fire. A proper electrical safety check helps identify these issues and gives owners and property managers a clear picture of what needs attention.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">I'm Shane, your licensed electrician from the first enquiry through to the inspection and report. I carry out checks across Bayside and South-East Melbourne for rental properties, property managers and homeowners, with straightforward communication and upfront pricing.</p>
      </section>

      <section id="inclusions" className="mt-14 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What's included in your electrical safety check</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">An inspection and testing of the property's electrical installation in accordance with the applicable requirements of AS/NZS 3019.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inclusions.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-border bg-card p-6">
              <Check className="mb-4 h-5 w-5 text-primary" />
              <h3 className="font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Please arrange access to the switchboard, outlets, fittings and owner-provided equipment. Any access limitations will be recorded in the report. A brief interruption to power may be needed for testing.</p>
      </section>

      <section id="pricing" className="mt-14 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Clear, upfront pricing</h2>
        <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Electrical Safety Inspection</p>
          <div className="mt-4 flex flex-wrap items-baseline gap-3"><span className="text-5xl font-extrabold tracking-tight">$350</span><span className="font-semibold text-muted-foreground">including GST · per inspection</span></div>
          <p className="mt-5 leading-relaxed text-muted-foreground">Includes the electrical safety check and written report. Rental checks are carried out on a two-yearly cycle; this price covers one inspection.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Repairs, replacement parts and switchboard upgrades are quoted separately. I'll explain any issues and agree the scope and price with you before additional work starts. For larger properties, multiple dwellings or unusual access requirements, contact me to confirm the scope and price before booking.</p>
          <a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">Book an Electrical Safety Check <ArrowRight className="h-4 w-4" /></a>
        </div>
        <p className="mt-5 leading-relaxed text-muted-foreground">Need smoke alarm servicing too? Ask me to quote it alongside your electrical check so we can coordinate access in one visit. Gas safety checks require a suitably qualified gasfitter and are not included in this electrical service.</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What happens next?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[["01", "Arrange the visit", "Send the property details and any concerns. We'll confirm the scope, pricing and access arrangements with you or your property manager."], ["02", "Inspect & test", "I inspect and test the accessible installation, record the findings and explain any safety issues that need attention."], ["03", "Report & repair options", "You receive a written report. If repairs are needed, I'll explain the options and provide a separate quote. Any immediate hazards are addressed appropriately." ]].map(([n, title, text]) => (
            <article key={n} className="rounded-xl border border-border bg-card p-6"><p className="text-sm font-bold text-primary">{n}</p><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>
          ))}
        </div>
      </section>

      <section id="requirements" className="mt-14 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Victorian rental safety requirements</h2>
        <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
          <p>Electrical safety checks are required at least every two years for rental agreements covered by Victoria's safety-check requirements. From 13 October 2026, the requirement extends to all rental agreements, regardless of when they began.</p>
          <p>The check must be completed by a licensed electrician. If a required check is overdue when a renter moves in, it must be arranged as soon as practicable.</p>
          <p>Rental properties must have the required circuit breaker and RCD safety switch protection for power outlets and lighting circuits. If your switchboard needs work, I'll explain the findings and quote the required upgrades separately.</p>
          <p>Keep the most recent safety-check record until the next one is created. The report should identify the electrician and licence number, inspection date, findings and repairs or actions taken. A copy must be supplied within seven days of a renter's written request.</p>
        </div>
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h3 className="font-bold">Official guidance</h3>
          <div className="mt-3 flex flex-col items-start gap-3 text-sm">
            <a className="text-primary underline underline-offset-4" href="https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/gas-electrical-and-water-safety-standards/rental-providers-gas-and-electrical-safety" target="_blank" rel="noopener noreferrer">Consumer Affairs Victoria — rental electrical safety</a>
            <a className="text-primary underline underline-offset-4" href="https://www.consumer.vic.gov.au/housing/renting/new-changes-to-the-rental-laws" target="_blank" rel="noopener noreferrer">Consumer Affairs Victoria — changes to rental laws</a>
            <a className="text-primary underline underline-offset-4" href="https://www.energysafe.vic.gov.au/industry-guidance/electrical/electricians-toolkit/residential-tenancy" target="_blank" rel="noopener noreferrer">Energy Safe Victoria — residential tenancy checks</a>
          </div>
        </div>
      </section>
    </>
  );
}
