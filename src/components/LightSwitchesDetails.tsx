import { ArrowRight, Check } from "lucide-react";
import { WiringStyleGallery, DimmerStyleGallery } from "@/components/WiringStyleGallery";

const inclusions = [
  ["Replacement light switches", "Replace worn, damaged or yellowed switches, with the wiring and existing installation checked before work proceeds."],
  ["Matching switches & power points", "Coordinate fittings throughout a room or renovation using ranges from Clipsal, Hager, HPM and Legrand / BTicino."],
  ["Single & multi-gang switches", "Choose a practical layout for one light or several lighting groups, with the number of mechanisms suited to the room."],
  ["Two-way & intermediate switching", "Control lighting from more than one position, such as a hallway, staircase or bedroom, subject to suitable wiring."],
  ["Dimmer installation & replacement", "Choose a dimmer that suits the lamps, drivers and load. I can investigate flickering, buzzing and unreliable dimming."],
  ["Switch relocation & additional positions", "Move a switch to a more convenient position or explore an additional control point, with cable routes and wall repairs agreed in the quote."],
  ["Smart lighting controls", "Discuss compatible smart switches and controls. Wiring, neutral requirements, connectivity and the equipment being controlled determine the options."],
  ["Testing & electrical safety documentation", "Complete the required testing and provide the appropriate electrical safety documentation for the installation work."],
];
const faqs = [
  ["Can you match my existing switches?", "Send a clear photo of the fitting and any brand or model details. I will check the range and finish. For discontinued products, we can compare a suitable alternative or update nearby switches and outlets together."],
  ["Can I have black or decorative switches?", "Yes. We can compare simple white, black, metallic and decorative options, including Legrand / BTicino Living Now. Finish availability varies by range and switch configuration."],
  ["Can you replace every switch in my home?", "Yes. I can quote a coordinated update, check each existing position and help choose a range that suits your style and budget."],
  ["Will any dimmer work with my LED lights?", "No. The dimmer must be compatible with the lamps or drivers and their load. Send the light and dimmer details where possible so I can assess a suitable combination."],
  ["Can I switch the same light from two places?", "Often, yes. Two-way switching depends on the existing wiring and access for new cables. I will inspect the installation and explain the options before quoting."],
  ["Can you supply the switches?", "Yes. I can source suitable fittings, or check a product you have selected. The quote will confirm the complete switch, mechanisms, finish and installation."],
  ["How much does it cost?", "Cost depends on the range, number of switches, mechanisms, wiring access and any relocation or dimming work. You will receive a clear quote before work starts."],
];

export function LightSwitchesDetails() {
  return <>
    <nav aria-label="Light switch page sections" className="mb-12 flex flex-wrap gap-2">
      {[["Choose Your Style", "choose-your-style"], ["Dimmers & Smart Controls", "dimmer-options"], ["What's Included", "light-switch-inclusions"], ["How It Works", "light-switch-process"], ["FAQs", "light-switch-faqs"]].map(([label, id]) => <a key={id} href={`#${id}`} className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{label}</a>)}
    </nav>
    <WiringStyleGallery lightSwitches />
    <DimmerStyleGallery />
    <section id="light-switch-inclusions" className="mt-16 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Lighting Controls That Suit Your Home</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">From one replacement switch to a coordinated update throughout your property, I install and replace light switches for homes, rentals and businesses across Bayside and South East Melbourne.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{inclusions.map(([title, text]) => <article key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="flex items-start gap-3 font-bold"><Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
    </section>
    <section className="mt-16 grid gap-6 md:grid-cols-2">
      <article className="rounded-2xl border border-border bg-card p-6 md:p-8"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Renovating? Finish the Details</h2><p className="mt-4 leading-relaxed text-muted-foreground">Match your light switches to your new power points, cabinetry and interior finishes. We can compare affordable fittings and designer alternatives, and plan convenient control positions before the walls are finished.</p><a href="/services/power-points" className="mt-5 inline-block font-semibold text-primary underline underline-offset-4">Explore matching power points</a></article>
      <article className="rounded-2xl border border-border bg-card p-6 md:p-8"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Better Dimming & Everyday Control</h2><p className="mt-4 leading-relaxed text-muted-foreground">A good-looking switch also needs to work properly with your lighting. I will check dimmer compatibility, switching arrangements and the existing wiring, then explain any additional work required.</p></article>
    </section>
    <section className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Straightforward Advice & Upfront Pricing</h2><p className="mt-4 leading-relaxed text-muted-foreground">Tell me your budget, preferred finish and how many switches you would like changed. Pricing depends on the fittings and mechanisms, existing wiring and access. Relocating a switch can involve additional cabling and wall repairs, which will be explained in the quote.</p><a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">Discuss Your Switches <ArrowRight aria-hidden="true" className="h-4 w-4" /></a></section>
    <section id="light-switch-process" className="mt-16 scroll-mt-28"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">From First Idea to Finished Installation</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{[["Tell me what you need", "Send your suburb, photos and the number of switches, along with any dimming or relocation requests."], ["Compare the options", "We will discuss suitable ranges, configurations and wiring requirements, with a clear quote before you commit."], ["Install & test", "I will arrange a suitable time, install the fittings and complete the required testing and documentation."]].map(([title, text], i) => <article key={title}><span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">0{i + 1}</span><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></section>
    <section id="light-switch-faqs" className="mt-16 scroll-mt-28"><h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Your Light Switch Questions, Answered</h2><div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card px-6">{faqs.map(([question, answer]) => <details key={question} className="py-5"><summary className="cursor-pointer font-bold marker:text-primary">{question}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></section>
  </>;
}
