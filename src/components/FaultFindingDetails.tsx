const issues = [
  ["Circuits that keep tripping", "A safety switch, circuit breaker or combined device can trip for different reasons. I test the affected circuit and equipment to distinguish leakage, overloads, short circuits and other faults."],
  ["Flickering or dimming lights", "A lamp, driver, dimmer, connection or supply issue may be involved. Tell me whether it affects one fitting or several rooms, and when it happens."],
  ["Dead power points and switches", "I trace the affected supply, inspect the fitting and test the circuit before recommending a repair or replacement."],
  ["Buzzing, heat or burning smells", "Unusual heat, discolouration, crackling or a burning smell needs prompt attention. Stop using the affected equipment and call to discuss making it safe."],
  ["Power that comes and goes", "Intermittent faults can be difficult to reproduce. Your description of the timing, weather and appliances in use helps me plan the investigation."],
  ["Faults after leaks or renovations", "Water, damaged cabling or disturbed connections can affect electrical safety. Don't use wet or visibly damaged electrical equipment; arrange an assessment."],
];
const questions = [
  ["Is a safety switch the same as a circuit breaker?", "No. A safety switch responds to current leakage that may present a shock risk; a circuit breaker protects against overloads and short circuits. Some devices combine both functions. The type of device and test results help identify why it is tripping."],
  ["Can you find a fault that isn't happening during the visit?", "I can investigate, but some intermittent faults need monitoring or a return visit. Note when it occurs and what was running. Photos or a short video can help if taken without approaching damaged equipment."],
  ["Does a tripping circuit mean I need a new switchboard?", "Not necessarily. An appliance, fitting, cable or protective device may be responsible. I'll explain the findings and separate necessary repairs from optional upgrades."],
  ["How long will diagnosis take, and what will it cost?", "A localised fault may be straightforward; hidden wiring, several circuits or an intermittent problem can take longer. I'll explain the initial investigation scope and pricing, then contact you before proceeding beyond the agreed work."],
  ["Can you repair it on the same visit?", "Where the fault is found, parts are available and the repair is authorised, I can often complete it during the visit. If further work is needed, I'll explain the options and what can safely remain in use."],
  ["Can I keep resetting the switch?", "Repeated tripping needs investigation. Don't keep resetting it or bypass the protection. Don't remove switchboard covers, touch wiring or attempt repairs. Call a licensed electrician if the device won't reset or the fault returns."],
];

export function FaultFindingDetails() {
  return <>
    <nav aria-label="Fault finding page sections" className="mb-10 flex flex-wrap gap-2">{[["Common faults","common-faults"],["What to expect","fault-process"],["Helpful information","fault-information"],["FAQs","fault-faqs"]].map(([label,id])=><a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">{label}</a>)}</nav>
    <section id="common-faults" className="scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">You don't need to know what's wrong. That's my job.</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Losing power or dealing with a fault that keeps returning can be stressful. Describe what you've noticed in your own words. I'll listen, investigate systematically and explain the findings without expecting you to understand electrical jargon.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{issues.map(([title,text])=><article key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    </section>
    <aside className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-slate-900">
      <h2 className="text-lg font-bold">When it needs urgent attention</h2>
      <p className="mt-3 text-sm leading-relaxed">For fire, smoke or immediate danger, move to safety and call 000. Keep away from damaged or wet electrical equipment. For a burning smell, unusual heat or repeated tripping, stop using the affected equipment and call Shane on <a href="tel:0466270949" className="font-semibold underline">0466 270 949</a> to check availability. An online enquiry is not an emergency response service.</p>
    </aside>
    <section id="fault-process" className="mt-14 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A careful diagnosis, then a clear decision</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{[["01","Understand the problem","I'll ask what is affected, how often it happens and whether there are any immediate safety concerns. We agree the investigation scope before testing."],["02","Inspect and test","I assess accessible fittings and use appropriate electrical tests to trace the fault. Where needed, I isolate unsafe equipment or circuits and explain the effect on your property."],["03","Explain and repair","You'll hear what I found, the practical repair options and the cost. I seek approval for extra work, test completed repairs and provide the required electrical safety documentation."]].map(([n,title,text])=><article key={n} className="rounded-2xl border border-border bg-card p-6"><p className="text-sm font-bold text-primary">{n}</p><h3 className="mt-3 font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    </section>
    <section id="fault-information" className="mt-14 scroll-mt-28 rounded-2xl border border-border bg-card p-6 md:p-8">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">A few details can make the visit more useful</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">Send your suburb, affected rooms or equipment, when the fault began and whether it follows rain or a particular appliance being used. Mention recent work, any previous repairs, and whether neighbouring properties have also lost power. A wider outage may need your electricity distributor rather than a repair inside your home.</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">You don't need to open anything or carry out your own tests. Clear access to the switchboard and affected fittings helps. For rentals or managed buildings, include the authorised contact and access arrangements.</p>
      <a href="https://www.energysafe.vic.gov.au/community-safety/what-do-power-outage" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline">Energy Safe Victoria: power outages and safety</a>
    </section>
    <section id="fault-faqs" className="mt-14 scroll-mt-28"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Questions are welcome</h2><div className="mt-5 space-y-3">{questions.map(([q,a])=><details key={q} className="rounded-2xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div><a href="https://www.energysafe.vic.gov.au/community-safety/energy-safety-guides/home-safety/household-wiring" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline">Energy Safe Victoria: safety switches and circuit protection</a></section>
  </>;
}
