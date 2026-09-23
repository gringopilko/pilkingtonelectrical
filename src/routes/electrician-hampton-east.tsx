import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Send, Shield, CheckCircle2, ChevronDown, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import logoImg from "@/assets/pilkington-logo-icon.webp";
import { services } from "@/lib/services";

const landingFaqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. Pilkington Electrical operates under REC 30450, fully licensed and insured for residential and commercial electrical work across Victoria.",
  },
  {
    q: "Will you be the one doing the work?",
    a: "Yes. I'm a sole trader, so the person who quotes your job is the person who turns up and does the work, every time.",
  },
  {
    q: "Do you provide upfront pricing?",
    a: "Yes. I'll assess the job in person or over the phone and give you a clear, itemised price before any work starts.",
  },
  {
    q: "How quickly can you quote a job?",
    a: "Send details through the form below or call directly, and I'll turn most quotes around promptly, often the same day.",
  },
];

const serviceAreas = [
  "Hampton East", "Hampton", "Moorabbin", "Bentleigh", "Bentleigh East",
  "Brighton", "Brighton East", "Cheltenham", "Beaumaris", "Black Rock",
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left text-base font-bold text-foreground"
        aria-expanded={open}
      >
        {q}
        <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

function ElectricianHamptonEast() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal header - logo + phone only, no nav links, no exit paths */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Pilkington Electrical" width={40} height={49} className="h-9 w-auto object-contain" />
            <span className="text-base font-extrabold tracking-tight text-foreground">
              Pilkington <span className="text-primary">Electrical</span>
            </span>
          </div>
          <a href="tel:0466270949" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">
            <Phone className="h-4 w-4" />
            0466 270 949
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-brand-dark px-6 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Fully Licensed &amp; Insured, REC 30450
          </div>
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
            Electrician Hampton East &amp; Bayside
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Sole trader electrician handling every job personally, from quote to completion. Switchboards, fault finding, rewiring, EV chargers and more, done right the first time.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:0466270949" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">
              <Phone className="h-4 w-4" />
              Call Shane Now
            </a>
            <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
              <Send className="h-4 w-4" />
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
          <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Licensed &amp; Insured (REC 30450)</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Owner-Operated, Every Job</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Upfront, Itemised Pricing</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Based in Hampton East</div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Electrical Services in Hampton East &amp; Bayside
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="flex items-center gap-2 rounded-lg border border-border bg-card p-4 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {s.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Testimonials />
        </div>
      </section>

      {/* Areas serviced */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">Areas Serviced</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {serviceAreas.map((suburb) => (
              <span key={suburb} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {suburb}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Plus the surrounding Bayside and South East Melbourne suburbs. Get in touch if yours isn't listed.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">Common Questions</h2>
          <div className="mt-8">
            {landingFaqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground">Request a Free Quote</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">Tell me about the job and I'll get back to you promptly.</p>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/electrician-hampton-east")({
  head: () => ({
    meta: [
      { title: "Electrician Hampton East & Bayside | Pilkington Electrical" },
      {
        name: "description",
        content: "Licensed electrician servicing Hampton East, Bentleigh, Brighton, Moorabbin and Bayside. Direct contact with Shane, no call centres. Call 0466 270 949.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ElectricianHamptonEast,
});
