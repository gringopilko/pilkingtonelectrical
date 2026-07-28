import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes — Pilkington Electrical operates under REC 30450, fully licensed and insured for residential and commercial electrical work across Victoria. That covers everything from a single power point to a full switchboard upgrade, so you're covered whether it's a small job or a larger one.",
  },
  {
    q: "Do you use subcontractors?",
    a: "No. I'm a sole trader, which means the person who quotes your job is the person who turns up and does the work, every time. There's no handoff to a subcontractor or whoever's rostered on that day — you deal with one person from the first call through to the finished job.",
  },
  {
    q: "What areas do you service?",
    a: "Based in Elwood, covering South East Melbourne including St Kilda, Brighton, Caulfield, Hampton, Bentleigh, Malvern, Glen Iris, Camberwell and South Yarra. See the Suburbs page for the full list — if you're nearby but not listed, get in touch anyway.",
    linkTo: "/suburbs",
    linkText: "Suburbs page",
  },
  {
    q: "Do you provide upfront pricing?",
    a: "Yes. I'll assess the job in person or over the phone and give you a clear, itemised price before any work starts — no surprises on the invoice and no billing by the hour after you've already said yes.",
  },
  {
    q: "Can you work with body corporates and strata managers?",
    a: "Yes — this is a core part of my work and a growing focus for the business. I provide clear, itemised invoicing suited to committee approval, communicate directly with the strata manager rather than a building contact, and I'm comfortable quoting common-area and multi-unit electrical work. See the Body Corporate & Strata Electrical page for more detail.",
    linkTo: "/services/body-corporate",
    linkText: "Body Corporate & Strata Electrical page",
  },
  {
    q: "Do you handle emergency call-outs?",
    a: "Yes. For loss of power, a tripped board that won't reset, or anything that feels unsafe, call and I'll get to you as quickly as I can. See the Emergency Electrical page for what's covered.",
    linkTo: "/services/emergency-electrical",
    linkText: "Emergency Electrical page",
  },
  {
    q: "How quickly can you quote a job?",
    a: "Send details through the contact form or call directly, and I'll turn most quotes around promptly — often the same day. For straightforward jobs like a power point or safety switch, I can often give a price over the phone.",
  },
  {
    q: "Do I need a safety switch in my home?",
    a: "Victorian regulations require safety switches on power and lighting circuits in most homes, and they're commonly checked at point of sale or for rental compliance. If you're not sure whether yours are up to standard, I can check what's fitted and install compliant safety switches. See the Safety Switches page for details.",
    linkTo: "/services/safety-switches",
    linkText: "Safety Switches page",
  },
  {
    q: "Are smoke alarms compulsory in Victorian rental properties?",
    a: "Yes — Victorian rental properties must have compliant, interconnected smoke alarms, and owners are required to keep them tested and up to standard. I install, test and replace smoke alarms to meet current requirements. See the Smoke Alarms page for more.",
    linkTo: "/services/smoke-alarms",
    linkText: "Smoke Alarms page",
  },
  {
    q: "Can you install EV chargers in apartment buildings or strata properties?",
    a: "Yes — EV charger installs in shared buildings usually need owners corporation approval and careful load management so the building's supply isn't overloaded. I handle the installation and can coordinate directly with the strata manager on the approval side. See the EV Charger Installation page for details.",
    linkTo: "/services/ev-charger-install",
    linkText: "EV Charger Installation page",
  },
];

function renderAnswer(faq: (typeof faqs)[number]) {
  if (!faq.linkTo || !faq.linkText) return faq.a;
  const parts = faq.a.split(faq.linkText);
  return (
    <>
      {parts[0]}
      <Link to={faq.linkTo} className="font-semibold text-primary hover:underline">
        {faq.linkText}
      </Link>
      {parts[1]}
    </>
  );
}

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Common questions about Pilkington Electrical — licensing, service areas, pricing, and working with body corporates across South East Melbourne.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Common questions about how Pilkington Electrical works.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-lg border border-border bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{renderAnswer(faq)}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">Didn't find what you're after? Call or send an enquiry directly.</p>
          <a href="tel:0466270949"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
