import { Phone } from "lucide-react";
import { Collapsible } from "@/components/Collapsible";

const jobs = [
  ["Power or lighting faults", "Loss of power to your property or individual circuits, dead outlets and lighting faults. Street-wide outages should be reported to your electricity distributor."],
  ["Safety switches that keep tripping", "A circuit breaker or RCD that trips repeatedly or will not reset needs proper investigation. I can trace the fault and identify the repair needed."],
  ["Burning smells, sparks or damaged fittings", "Overheated outlets, damaged switches and exposed wiring need urgent attention. Keep clear of the affected area; call 000 for smoke, fire or immediate danger."],
  ["Water near electrical equipment", "Leaks through lights, wet outlets and storm damage can create electrical hazards. Keep away from affected equipment and arrange an electrical assessment before using it again."],
  ["Electric hot water faults", "Investigation of electrical supply and component faults affecting electric hot water systems. Plumbing faults or specialist system repairs may require another trade."],
  ["Urgent faults in rentals or common areas", "Help for homeowners, property managers, tenants and owners corporations with urgent electrical faults. Let me know who can authorise work and provide access."],
];

const faqs = [
  ["How quickly can you attend?", "Call with your suburb and a description of the fault. I will confirm my availability and an estimated arrival time before arranging a visit. Timing depends on my location, existing jobs and the nature of the problem."],
  ["Are you available after hours?", "Call to check current availability for evening, weekend or public holiday work. Pilkington Electrical is an owner-operated business, so attendance depends on availability. If I cannot attend, you will need to arrange another available electrician for urgent help."],
  ["What does an emergency call-out cost?", "I will explain the applicable call-out charge and rates before you book, including any after-hours charges. Parts and additional repairs depend on the fault and will be discussed before proceeding."],
  ["Can every fault be fixed on the first visit?", "Some faults can be repaired during the visit. Others need replacement parts, more investigation or another trade. The first priority is to assess the hazard and make the affected installation safe, with clear advice on any further work."],
  ["What if the whole street has lost power?", "Contact your electricity distributor or check its outage information. Network faults are handled by the distributor. If neighbouring properties have power and yours does not, call to discuss whether an electrician is needed."],
];

export function EmergencyElectricalDetails() {
  return (
    <>
      <nav aria-label="Emergency electrical page sections" className="mb-10 flex flex-wrap gap-2">
        {[["Safety advice", "emergency-safety"], ["Common faults", "emergency-jobs"], ["How it works", "emergency-process"], ["FAQs", "emergency-faqs"]].map(([label, id]) => <a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{label}</a>)}
      </nav>

      <section id="emergency-safety" className="scroll-mt-28 rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What to Do in an Electrical Emergency</h2>
        <ul className="mt-5 space-y-3 pl-5 text-muted-foreground list-disc">
          <li>For smoke, fire, serious injury or immediate danger, move to safety and call <a href="tel:000" className="font-bold text-foreground underline">000</a>.</li>
          <li>Keep people away from damaged wiring, sparking fittings and wet electrical equipment. Do not touch or attempt repairs.</li>
          <li>Only turn off power if it is safe to reach and operate the main switch. Do not approach a wet, damaged, smoking or sparking switchboard.</li>
          <li>For shocks or tingles from taps or appliances, or unusually dull lights and partial supply, contact your electricity distributor immediately. Avoid touching metal surfaces or the switchboard.</li>
          <li>Do not repeatedly reset a tripping switch. Use a torch during an outage and leave affected equipment out of service until checked.</li>
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Turning off the main switch does not guarantee all equipment is safe, particularly where solar or batteries are installed. Treat damaged electrical equipment as live.</p>
        <a href="https://www.energysafe.vic.gov.au/community-safety/what-do-power-outage" className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4">Energy Safe Victoria: power outage and electrical safety advice</a>
      </section>

      <Collapsible id="emergency-jobs" title={<>Common Electrical Emergencies I Can Help With</>} className="">
        
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {jobs.map(([title, text]) => <article key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-bold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </Collapsible>

      <Collapsible id="emergency-process" title={<>One Electrician. Clear Communication. Practical Next Steps.</>} className="">
        
        <p className="mt-4 leading-relaxed text-muted-foreground">I'm Shane, your local licensed A-Grade electrician. You deal directly with me from your first call through to the work, with straightforward advice and pricing explained before the visit.</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[["Call & describe the fault", "Tell me your suburb, what has happened and whether there is any visible damage. I will confirm availability, estimated timing and the applicable charges."], ["Assess & make safe", "I investigate the fault and prioritise safety. Where practical, repairs can be completed during the visit; otherwise the affected circuit or equipment may need to remain isolated."], ["Explain the next steps", "I explain what was found, any remaining limitations and the repair options. Additional work is agreed before proceeding, with electrical safety certification where required."]].map(([title, text], i) => <li key={title} className="rounded-2xl border border-border bg-card p-6"><p className="text-sm font-bold text-primary">0{i + 1}</p><h3 className="mt-3 font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></li>)}
        </ol>
      </Collapsible>

      <div className="mt-12 rounded-xl bg-primary p-6 text-primary-foreground md:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Need Urgent Electrical Help?</h2>
        <p className="mt-3 leading-relaxed">Call to discuss the fault and check availability across Bayside and South East Melbourne. For an active emergency, please phone rather than submitting the quote form.</p>
        <a href="tel:0466270949" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-foreground"><Phone className="h-4 w-4" />Call Shane: 0466 270 949</a>
      </div>

      <section id="emergency-faqs" className="mt-14 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-border bg-card p-5"><summary className="cursor-pointer font-bold">{question}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div>
      </section>
    </>
  );
}
