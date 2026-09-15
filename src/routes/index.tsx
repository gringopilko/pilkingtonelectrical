import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MapPin, ShieldCheck, MessageSquare, Check } from "lucide-react";
import heroImg from "@/assets/hero-electrician-poster.jpg";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import { BrandsWeUse } from "@/components/BrandsWeUse";
import { services } from "@/lib/services";
import { slugify } from "@/lib/suburbs";

const title = "Electrician Hampton East & Bayside | Pilkington Electrical";
const description =
  "Your local Hampton East electrician for switchboards, lighting, fault finding and property maintenance across Bayside. Speak directly with Shane. Free quotes.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "https://pilkingtonelectrical.com.au/" },
      { rel: "preload", as: "image", href: heroImg },
    ],
  }),
  component: Index,
});

const localAreas = [
  "Hampton East",
  "Hampton",
  "Brighton",
  "Brighton East",
  "Moorabbin",
  "Bentleigh",
  "Bentleigh East",
  "Cheltenham",
  "Elwood",
  "St Kilda",
];
const featured = [
  "fault-finding",
  "switchboards",
  "lighting",
  "power-points",
  "body-corporate",
  "rewiring-extensions",
];
const questions = [
  [
    "Where are you based?",
    "I'm based in Hampton East and travel to homes and businesses throughout Bayside and Melbourne's south-east. I still look after customers in Elwood and St Kilda following the move.",
  ],
  [
    "Will I deal with the electrician doing the work?",
    "Yes. I'm Shane, the owner and electrician behind Pilkington Electrical. You'll speak directly with me about the job, the quote and the work itself. No call centres or subcontractors.",
  ],
  [
    "Can I get a quote before work starts?",
    "Yes. Tell me what you need, your suburb and any useful job details. I offer free quotes and will explain the scope and pricing before you decide to proceed. Fault diagnosis may require an on-site visit; contact me to discuss the job.",
  ],
  [
    "Do you work with real estate agents and body corporates?",
    "Yes. I handle electrical repairs, common-area lighting, switchboard work and ongoing maintenance for property managers, owners corporations and small businesses.",
  ],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main id="main-content">
        <section className="home-hero relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-24">
            <div>
              <p className="eyebrow !text-sky-300">
                <MapPin size={15} /> Hampton East · Bayside · South-east Melbourne
              </p>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Hampton East electrician.
                <br />
                <span className="text-sky-300">A personal approach.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                I'm Shane. From a power point that needs fixing to a switchboard upgrade, I make
                electrical work straightforward for homes, businesses and property managers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:0466270949" className="action-primary">
                  <Phone size={18} /> Call Shane · 0466 270 949
                </a>
                <a href="#quote" className="action-ghost">
                  Request a free quote <ArrowUpRight size={18} />
                </a>
              </div>
              <p className="mt-5 text-sm text-slate-300">
                No call centres. No subcontractors. Just your electrician.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15">
              <img
                src={heroImg}
                width={1280}
                height={720}
                fetchPriority="high"
                alt=""
                className="h-[290px] w-full object-cover sm:h-[370px] lg:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-2xl border border-white/20 bg-slate-950/80 p-5 text-white backdrop-blur">
                <ShieldCheck className="shrink-0 text-sky-300" size={30} />
                <div>
                  <p className="font-bold">Licensed. Insured. Owner-operated.</p>
                  <p className="mt-1 text-sm text-slate-300">Electrical Contractor · REC 30450</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="border-b border-border bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-6 text-sm font-semibold md:grid-cols-4">
            {[
              "Direct contact with Shane",
              "Clear, upfront quotes",
              "Homes & small businesses",
              "Based in Hampton East",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check size={17} className="shrink-0 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <section id="services" className="section-wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Practical help. Quality work.</p>
              <h2 className="section-title">What can I help you with?</h2>
              <p className="section-copy">
                Repairs, upgrades and maintenance from a local electrician who takes care of the
                details.
              </p>
            </div>
            <Link to="/services" className="text-link">
              All electrical services <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured
              .map((slug) => services.find((s) => s.slug === slug))
              .filter((s): s is (typeof services)[number] => Boolean(s))
              .map((s, index) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="service-tile group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    <ArrowUpRight size={22} className="text-primary" />
                  </div>
                  <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.shortDesc}
                  </p>
                </Link>
              ))}
          </div>
        </section>
        <section className="bg-slate-950 text-white">
          <div className="section-wrap grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow !text-sky-300">A small business. A real person.</p>
              <h2 className="section-title">
                The person you call
                <br />
                is the person who turns up.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                When you contact Pilkington Electrical, you deal with me from the first conversation
                to the finished job. I'll explain the options, agree on the work and leave things
                tidy.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-bold text-sky-300"
              >
                Meet Shane <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Tell me about the job",
                  "Call, text or send a quote request with your suburb and what you need.",
                ],
                [
                  "02",
                  "Agree on a plan",
                  "We'll discuss the scope, arrange a visit if needed and confirm pricing.",
                ],
                [
                  "03",
                  "Get the work sorted",
                  "Careful electrical work, straightforward communication and a tidy finish.",
                ],
                [
                  "04",
                  "Keep a local contact",
                  "One familiar electrician for future repairs, upgrades and maintenance.",
                ],
              ].map(([n, t, d]) => (
                <div key={n} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <span className="text-sm font-bold text-sky-300">{n}</span>
                  <h3 className="mt-4 font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-wrap grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">
              <MapPin size={15} /> Your neighbourhood electrician
            </p>
            <h2 className="section-title">
              Hampton East based.
              <br />
              Bayside and beyond.
            </h2>
            <p className="section-copy">
              Looking for an electrician nearby? I service Hampton East and surrounding suburbs,
              plus the Elwood and St Kilda customers who've supported the business from the start.
            </p>
            <Link to="/suburbs" className="text-link mt-6">
              Explore all service areas <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="area-panel rounded-3xl border border-border p-7">
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-primary">
              Local electrical services
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {localAreas.map((name) => (
                <Link
                  key={name}
                  to="/suburbs/$slug"
                  params={{ slug: slugify(name) }}
                  className="flex items-center justify-between rounded-xl border border-border bg-white p-4 text-sm font-semibold transition-colors hover:border-primary"
                >
                  {name}
                  <ArrowUpRight size={16} className="text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-12">
            <div className="max-w-2xl">
              <p className="eyebrow">For property professionals</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                A reliable electrical contact for your properties.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Real estate maintenance, body corporate common areas and small-business electrical
                work. Send through the property details and scope so we can organise the next step.
              </p>
            </div>
            <Link
              to="/services/$slug"
              params={{ slug: "body-corporate" }}
              className="action-primary mt-6 shrink-0 md:mt-0"
            >
              Property services <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <Testimonials />
        <BrandsWeUse />
        <section className="section-wrap grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Before you book</p>
            <h2 className="section-title">A few helpful answers.</h2>
            <Link to="/faqs" className="text-link mt-6">
              More questions answered <ArrowUpRight size={18} />
            </Link>
          </div>
          <div>
            {questions.map(([q, a]) => (
              <details key={q} className="faq-item">
                <summary>{q}</summary>
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="quote" className="scroll-mt-24 border-t border-border bg-slate-50">
          <div className="section-wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Let's get it sorted</p>
              <h2 className="section-title">
                Tell me what
                <br />
                you need done.
              </h2>
              <p className="section-copy">
                Leave your details and I'll get back to you to discuss the job. For a more immediate
                conversation, give me a call.
              </p>
              <a
                href="tel:0466270949"
                className="mt-8 flex items-center gap-3 text-2xl font-extrabold text-primary"
              >
                <Phone size={24} />
                0466 270 949
              </a>
              <a href="sms:0466270949" className="text-link mt-5">
                <MessageSquare size={18} />
                Prefer to text? Message Shane
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                Photos help explain the job. You can text them or email{" "}
                <a
                  className="break-all underline"
                  href="mailto:contact@pilkingtonelectrical.com.au"
                >
                  contact@pilkingtonelectrical.com.au
                </a>
                .
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-xl shadow-slate-200/40 md:p-9">
              <h3 className="text-xl font-bold">Request a free quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No obligation. Your details go directly to Shane.
              </p>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
