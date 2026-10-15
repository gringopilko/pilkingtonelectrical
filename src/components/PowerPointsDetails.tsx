import { ArrowRight, Check } from "lucide-react";
import { WiringStyleGallery } from "@/components/WiringStyleGallery";

const inclusions = [
  [
    "Kitchen & renovation upgrades",
    "Coordinate outlets and switches with cabinetry, splashbacks and interior finishes, with convenient bench and appliance positions.",
  ],
  [
    "TV & entertainment areas",
    "Plan outlets for wall-mounted TVs, entertainment units and home theatre equipment to keep connections convenient and discreet.",
  ],
  [
    "Appliance outlets & circuits",
    "Choose appropriate outlets and dedicated circuits where required for larger appliances, after assessing the electrical load.",
  ],
  [
    "Surface-mounted installations",
    "Explore neatly installed surface fittings and ducting where concealed wiring isn't feasible or would involve extensive building work.",
  ],
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
    "Can I replace white power points with black ones?",
    "Yes. I'll help you compare suitable black fittings and finishes, including options that complement dark splashbacks and cabinetry.",
  ],
  [
    "Can you install USB-C power points?",
    "Yes. We can compare USB-C and combined USB-A / USB-C options to suit your devices, charging needs and budget.",
  ],
  [
    "Can you replace all the power points in my house?",
    "Yes. I can quote multiple replacements together and help coordinate switches and outlets throughout your home.",
  ],
  [
    "Can you add a power point to brick or concrete?",
    "In many cases, yes. It depends on wall construction and wiring access. Surface-mounted outlets or neat ducting may be practical where concealed wiring isn't feasible.",
  ],
  [
    "Do I need a new electrical circuit?",
    "Not necessarily. I'll assess the condition, capacity and protection of your existing circuit and the intended load, and explain any circuit or switchboard work required before proceeding.",
  ],
  [
    "Do you supply the power points?",
    "Yes. I can source suitable fittings from electrical wholesalers. If you've selected a product yourself, send a photo or product link so I can check its availability and suitability before installation.",
  ],
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

      <WiringStyleGallery />
      <p className="mt-6 text-sm text-muted-foreground">Updating your lighting controls too? <a href="/services/light-switches" className="font-semibold text-primary underline underline-offset-4">Explore matching light switches and dimmers</a>.</p>

      <section id="power-point-inclusions" className="mt-16 scroll-mt-28">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Power where you need it
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          One extra socket or a refresh throughout the property. I install and replace power points
          for homes, offices, commercial and rental properties across Bayside and South East
          Melbourne.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {inclusions.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6">
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

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Renovating? Finish the details</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Replacing yellowed switches and outlets can help bring a new kitchen, bathroom or living
            area together. We can match fittings to cabinetry and splashbacks, coordinate switches
            throughout the property, and plan USB charging beside beds and desks. Bathroom placement
            needs to suit the location and applicable electrical requirements.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Practical options for older homes
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Older Melbourne homes often have fewer outlets than today's households need. I'll assess
            your circuits and wiring access and discuss concealed wiring or surface ducting. If
            extra wiring, circuit protection or switchboard work is needed, I'll explain the options
            before proceeding.
          </p>
        </article>
      </section>
      <section className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Straightforward advice & upfront pricing
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Not every room needs designer fittings. Tell me your budget and I'll compare affordable
          options with premium alternatives. Pricing depends on the fitting, wiring access, wall
          construction, circuit capacity and number of outlets. Replacing an existing fitting is
          generally simpler than adding a new outlet in a difficult location. You'll get a clear
          quote before work starts.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Expect neat, careful installation, respect for your home and the appropriate electrical
          safety documentation. Based in Hampton East, servicing Bayside and South East Melbourne.
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
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card px-6">
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


