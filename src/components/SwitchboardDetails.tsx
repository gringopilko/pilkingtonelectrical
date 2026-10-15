import { Check, ArrowRight } from "lucide-react";
import { Collapsible } from "@/components/Collapsible";

const inclusions = [
  ["Assess the existing switchboard", "Check the board's condition, circuit protection, earthing and available space, then explain whether a repair, partial upgrade or full replacement is appropriate."],
  ["Modern circuit protection", "Replace outdated protection with suitable circuit breakers and RCD safety switches or RCBOs, based on the installation and agreed scope."],
  ["Switchboard repairs & replacement", "Repair faulty components or replace an ageing switchboard where needed, with the work clearly itemised before you approve it."],
  ["Testing & circuit identification", "Complete the required electrical testing, check protective devices and clearly identify circuits so the finished board is straightforward to use."],
  ["Certification & inspection", "Provide the required Certificate of Electrical Safety and arrange an independent licensed electrical inspector where the work requires it."],
  ["Plan for future electrical needs", "Discuss additional circuits, renovations and future appliances. Where useful, allow space for later upgrades without assuming your supply capacity is sufficient."],
];
const faqs = [
  ["Do I need a completely new switchboard?", "Not always. Some boards can be repaired or upgraded with suitable protection; others need replacement because of their condition, design or lack of space. I'll assess yours and explain the practical options."],
  ["What is the difference between a circuit breaker, RCD and RCBO?", "A circuit breaker protects against overloads and short circuits. An RCD safety switch detects leakage current and disconnects the circuit to reduce electric shock risk. An RCBO combines both functions in one device."],
  ["Does a tripping safety switch mean the switchboard is faulty?", "Not necessarily. The cause may be an appliance, moisture, damaged wiring or another fault in the circuit. I diagnose the cause before recommending replacement components."],
  ["Will the power be off, and for how long?", "Switchboard work requires a planned interruption to power. The duration depends on the job and any faults found. I'll discuss timing before booking and coordinate any required inspection. Where inspection is required before reconnection, power stays off until that inspection is completed."],
  ["Does my rental property need safety switches?", "Victorian rental requirements include circuit breaker and RCD protection for power outlets and lighting circuits. I'll check the existing arrangement and explain the work needed. The official guidance linked below provides further details."],
  ["What if the upgrade reveals existing wiring faults?", "New safety switches can reveal faults that older protection did not detect. I'll explain the findings and quote additional repairs before proceeding. Unsafe circuits may need to remain isolated until repaired."],
  ["What happens if the old board contains asbestos?", "Some older switchboard panels may contain asbestos. If suspected materials are found, specialist assessment or removal may be needed. I'll discuss the required arrangements and costs before that work proceeds."],
  ["Do I need a subscription or safety inspection package first?", "No subscription is required to enquire about a switchboard upgrade. Send a clear photo and the property details to start the conversation; an on-site assessment may be needed to confirm the final scope and price."],
];

export function SwitchboardDetails() {
  return (
    <>
      <nav aria-label="Switchboard page sections" className="mb-12 flex flex-wrap gap-2">
        {[["About", "about-switchboards"], ["What's Included", "switchboard-inclusions"], ["Pricing", "switchboard-pricing"], ["FAQs", "switchboard-faqs"], ["Request a Quote", "quote"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{label}</a>
        ))}
      </nav>
      <section id="about-switchboards" className="scroll-mt-28">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Switchboard upgrades across Bayside & South-East Melbourne</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">Safer protection starts at your switchboard</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">Your switchboard distributes power throughout the property and houses the devices that protect its circuits. Ageing fuse boards, damaged components and missing safety switches are good reasons to have it assessed by a licensed electrician.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">I'm Shane, your electrician from the first enquiry through to the finished job. I'll explain the condition of your board, offer a suitable repair or upgrade, and provide a clear price before work begins.</p>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-bold">Is your rental switchboard compliant?</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Victorian rental properties require circuit breaker and RCD safety switch protection for power outlets and lighting circuits. An RCBO combines these functions. I'll assess the existing protection and explain whether upgrades or a replacement board are needed.</p>
          <a href="https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/gas-electrical-and-water-safety-standards/rental-providers-gas-and-electrical-safety" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline underline-offset-4">Read Consumer Affairs Victoria's electrical safety requirements</a>
        </div>
      </section>
      <Collapsible id="switchboard-inclusions" title={<>What's included in your switchboard service</>} className="">
        
        <p className="mt-4 leading-relaxed text-muted-foreground">Every board is different. Your quote sets out the work and components required for your property.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inclusions.map(([title, text]) => <article key={title} className="rounded-2xl border border-border bg-card p-6"><Check className="mb-3 h-8 w-8 rounded-lg bg-primary/10 p-1.5 text-primary" /><h3 className="font-bold tracking-tight">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </Collapsible>
      <Collapsible title={<>A clear plan from assessment to completion</>} className="">
        
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[["01", "Assess & quote", "Share a photo and property details. I'll confirm what's needed and provide an itemised quote, with an on-site assessment where required."], ["02", "Schedule & upgrade", "We agree access and the planned power interruption. I complete the agreed work and arrange any required independent inspection."], ["03", "Test & hand over", "Testing and any required inspection are completed before reconnection. You receive the relevant certification and an explanation of your upgraded board." ]].map(([n, title, text]) => <article key={n} className="rounded-2xl border border-border bg-card p-6"><p className="text-sm font-bold text-primary">{n}</p><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </Collapsible>
      <Collapsible id="switchboard-pricing" title={<>Upfront pricing for your property</>} className="">
        
        <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Switchboard upgrades & repairs</p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight">An itemised quote. One clear total.</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">Pricing depends on the board's condition, number of circuits, supply type, required protection and any associated work. I'll provide a GST-inclusive total and clearly identify the allowance for certification and any required inspector's fees.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Single-phase and multi-phase boards are assessed individually. If you manage several properties, get in touch to discuss coordinated visits and pricing for the combined scope.</p>
          <a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">Request a Switchboard Quote <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-bold">What can affect the final scope?</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Existing wiring or appliance faults, earthing repairs, supply changes and suspected asbestos may require additional work. A different-sized board can also expose areas needing patching or painting; these finishes are excluded unless specifically included in your quote. I'll explain any changes and agree costs with you before extra work starts.</p>
        </div>
      </Collapsible>
      <section id="switchboard-faqs" className="mt-14 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map(([q, a]) => <details key={q} className="rounded-2xl border border-border bg-card px-6 py-5"><summary className="cursor-pointer font-bold focus-visible:outline-2 focus-visible:outline-primary">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}
        </div>
        <a href="https://www.energysafe.vic.gov.au/industry-guidance/electrical/frequently-asked-questions/ensuring-power-until-inspection" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-primary underline underline-offset-4">Energy Safe Victoria: inspection before reconnection</a>
      </section>
    </>
  );
}
