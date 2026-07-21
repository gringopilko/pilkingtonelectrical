import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes — Pilkington Electrical operates under REC 30450, fully licensed and insured for domestic and commercial electrical work across Victoria.",
  },
  {
    q: "Do you use subcontractors?",
    a: "No. I'm a sole trader — the person who quotes your job is the person who does the work, every time.",
  },
  {
    q: "What areas do you service?",
    a: "Based in Elwood, covering South East Melbourne including St Kilda, Brighton, Caulfield, Hampton, Bentleigh, Malvern, Glen Iris, Camberwell and South Yarra. See the Suburbs page for the full list — if you're nearby but not listed, get in touch anyway.",
  },
  {
    q: "Do you provide upfront pricing?",
    a: "Yes. I'll assess the job and give you a clear price before any work starts — no surprises on the invoice.",
  },
  {
    q: "Can you work with body corporates and strata managers?",
    a: "Yes — this is a core part of my work. I provide clear, itemised invoicing suited to committee approval, and communicate directly with the strata manager.",
  },
  {
    q: "Do you handle emergency call-outs?",
    a: "Yes. For loss of power, tripped boards, or anything that feels unsafe, call and I'll get to you as quickly as possible.",
  },
  {
    q: "How quickly can you quote a job?",
    a: "Send details through the contact form or call directly — most quotes are turned around promptly, often same day.",
  },
];

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
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">Didn't find what you're after? Call or send an enquiry directly.</p>
          
            href="tel:0466270949"
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
