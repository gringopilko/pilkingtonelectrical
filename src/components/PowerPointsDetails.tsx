import { ArrowRight, Check, Plug, Palette, Usb, Sun } from "lucide-react";
import clipsalLogo from "@/assets/clipsal-logo.webp";
import hagerLogo from "@/assets/hager-logo.webp";
import hpmLogo from "@/assets/hpm-logo.webp";

const styles = [
  {
    title: "Simple & affordable",
    label: "Keep it practical",
    icon: Plug,
    text: "A clean white finish and reliable everyday power. If you just want the most affordable suitable option, I'll happily quote that.",
    detail: "Ideal for rentals, spare rooms & budget-conscious upgrades",
  },
  {
    title: "Modern & understated",
    label: "A fresh finish",
    icon: Palette,
    text: "Explore slim profiles, black or white finishes and matching light switches for a consistent look throughout your home.",
    detail: "Ideal for kitchens, renovations & contemporary interiors",
  },
  {
    title: "Designer details",
    label: "Make it your own",
    icon: Sun,
    text: "Looking for something specific? We can explore decorative finishes and premium ranges to complement your cabinetry, fittings and walls.",
    detail: "Ideal for feature spaces & a coordinated whole-home finish",
  },
  {
    title: "Built-in USB charging",
    label: "Everyday convenience",
    icon: Usb,
    text: "Combine power outlets with USB-A or USB-C charging. I'll help compare charging output and device compatibility as well as the appearance.",
    detail: "Ideal for bedsides, kitchen benches & home offices",
  },
];
const inclusions = [
  [
    "Additional power points",
    "Put outlets where you actually use them: beside the bed, behind the TV, at your desk or along the kitchen bench.",
  ],
  [
    "Single-to-double upgrades",
    "Replace single outlets with doubles where the existing wiring and circuit are suitable.",
  ],
  [
    "USB wall sockets",
    "Add convenient charging for phones and tablets with a suitable combination power point.",
  ],
  [
    "Outdoor & weatherproof outlets",
    "Choose an outlet suitable for the location and exposure, whether it's a deck, garage or outdoor entertaining area.",
  ],
  [
    "Replacement outlets & switches",
    "Replace worn or damaged fittings, or update power points and light switches together for a matching finish.",
  ],
  [
    "Testing & a tidy finish",
    "Check the existing circuit, complete the required electrical testing and explain any further work needed before proceeding.",
  ],
];
const faqs = [
  [
    "Can you match my existing power points?",
    "I'll check the brand, range and finish and look for a suitable match. If the range is discontinued, we can compare alternatives or update nearby switches and outlets together.",
  ],
  [
    "Can I choose the cheapest option?",
    "Absolutely. Tell me your budget and I'll quote an affordable, suitable fitting. You don't need a premium range to get a neat, practical result.",
  ],
  [
    "Does a USB-C socket fast-charge every device?",
    "Charging speed depends on the outlet's output, supported charging protocols, your cable and your device. I'll help choose an option that suits what you want to charge.",
  ],
  [
    "Can you install a power point anywhere?",
    "Placement depends on wiring access, the wall construction, circuit capacity and the location. Send photos and your preferred position so I can advise on a practical option.",
  ],
  [
    "How much does installation cost?",
    "The price depends on the fitting, number of outlets, cable route and existing installation. I'll explain the scope and provide an upfront quote, including any additional circuit work or wall repairs where applicable.",
  ],
];

export function PowerPointsDetails() {
  return (
    <>
      <nav aria-label="Power point page sections" className="mb-12 flex flex-wrap gap-2">
        {[
          ["Choose Your Style", "choose-your-style"],
          ["What's Included", "power-point-inclusions"],
          ["How It Works", "power-point-process"],
          ["FAQs", "power-point-faqs"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      <section id="choose-your-style" className="scroll-mt-28">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          Your home. Your style. Your budget.
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          Choose Your Style
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Power points don't have to be an afterthought. From a simple white outlet to a finish that
          ties the whole room together, I'll help you find the right balance of appearance,
          functionality and price.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {styles.map(({ title, label, icon: Icon, text, detail }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  {label}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <p className="mt-6 border-t border-border pt-4 text-xs font-medium leading-relaxed text-muted-foreground">
                {detail}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h3 className="text-xl font-bold tracking-tight">Let's find the perfect fit</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I'm happy to explore ranges from Clipsal, Hager, HPM and other brands with you. Bring a
            photo, a finish you love or simply a budget, and we'll work through the options.
            Available colours, features and pricing vary by range.
          </p>
          <div
            className="mt-6 flex flex-wrap items-center gap-8"
            aria-label="Brands we can explore"
          >
            {[
              ["Clipsal", clipsalLogo],
              ["Hager", hagerLogo],
              ["HPM", hpmLogo],
            ].map(([name, src]) => (
              <img
                key={name}
                src={src}
                alt={name}
                loading="lazy"
                className="h-8 w-24 object-contain"
              />
            ))}
          </div>
          <a
            href="#quote"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Discuss Your Style & Budget <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="power-point-inclusions" className="mt-16 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Power where you need it
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          One extra socket or a refresh throughout the property — I install and replace power points
          for homes, offices and rental properties across South East Melbourne.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inclusions.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-start gap-3 font-bold">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          If you're relying on extension leads and power boards in every room, better outlet
          placement can make daily life much easier. I'll also assess the circuit: adding more
          sockets doesn't increase the amount of power it can safely supply.
        </p>
      </section>

      <section id="power-point-process" className="mt-16 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          From first idea to finished installation
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            [
              "Tell me what you need",
              "Send your suburb, photos and the number of outlets you'd like. Include a preferred style or budget if you have one.",
            ],
            [
              "Compare the options",
              "We'll discuss placement, suitable fittings and wiring access. I'll explain the work and quote before you commit.",
            ],
            [
              "Install & test",
              "I'll arrange a suitable time, complete the installation and testing, and provide the required electrical safety documentation.",
            ],
          ].map(([title, text], index) => (
            <article key={title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="power-point-faqs" className="mt-16 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Your power point questions, answered
        </h2>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card px-6">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer font-bold marker:text-primary">{question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
