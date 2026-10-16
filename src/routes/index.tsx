import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Zap, Shield, Wrench, ChevronRight, Check, Clock, Award, ClipboardCheck, Tag, ShieldCheck, ReceiptText, Sparkles, ChevronDown, BookOpen } from "lucide-react";
import heroImg from "@/assets/hero-electrician-poster.jpg";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBadges } from "@/components/TrustBadges";
import { BrandsWeUse } from "@/components/BrandsWeUse";
import { Testimonials } from "@/components/Testimonials";
import { WorkGallery } from "@/components/WorkGallery";
import { ServiceTiles } from "@/components/ServiceTiles";
import { AudiencePanels } from "@/components/AudiencePanels";
import { ContactCard } from "@/components/ContactCard";
import { HeroBackground } from "@/components/HeroBackground";
import { suburbGroups, slugify } from "@/lib/suburbs";
import { services } from "@/lib/services";
import { guides } from "@/lib/guides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrician Bayside & SE Melbourne | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Licensed electrician (REC 30450) in Hampton East, serving Bayside and South East Melbourne. Rental safety checks, test and tag, switchboards and fault finding.",
      },
      { property: "og:title", content: "Electrician Bayside & SE Melbourne | Pilkington Electrical" },
      {
        property: "og:description",
        content: "Licensed electrician (REC 30450) in Hampton East, serving Bayside and South East Melbourne. Rental safety checks, test and tag, switchboards and fault finding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[70vh]">
        <HeroBackground poster={heroImg} video="/melbourne-hero-compact.mp4" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-6 py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Licensed Electrician &middot; REC 30450
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Bayside &amp; South East Melbourne
            <br />
            <span className="text-primary">Electrician You Can Trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Licensed electrician for homes, rentals, body corporates and businesses across Bayside and South East Melbourne. Rental safety checks, test and tag, switchboards and fault finding, done right the first time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0466270949" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark">
              <Phone className="h-4 w-4" />
              Call 0466 270 949
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900">
              Get a free quote
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: MapPin, text: "Based in Hampton East" },
              { icon: Clock, text: "Prompt, on-time service" },
              { icon: Award, text: "Quality guaranteed" },
            ].map((b) => (
              <div key={b.text} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                <b.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services Section */}
      <section id="services" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Services</h2>
            <p className="mt-4 text-muted-foreground">
              Residential and commercial work, from fault finding and switchboard upgrades to ongoing maintenance for{" "}
              <Link to="/services/$slug" params={{ slug: "body-corporate" }} className="font-semibold text-primary hover:underline">
                body corporates
              </Link>{" "}
              and{" "}
              <Link to="/services/$slug" params={{ slug: "real-estate" }} className="font-semibold text-primary hover:underline">
                real estate agents
              </Link>
              .
            </p>
          </div>

          <ServiceTiles
            slugs={["electrical-safety-inspections", "test-and-tag", "switchboards", "body-corporate", "real-estate", "fault-finding"]}
          />

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              View all {services.length} services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WorkGallery />

      <BrandsWeUse />

      <AudiencePanels />

      {/* About / Why Choose Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-brand-dark shadow-2xl shadow-primary/10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 p-6 sm:p-10 md:grid-cols-5 md:items-center md:gap-14 md:p-14">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Why choose me</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">Why Choose Pilkington Electrical?</h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                I'm a sole trader, which means when you call, you speak directly to the person doing the job. Honest, reliable electrical work from a licensed electrician with more than a decade on the tools.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-slate-900">
                  Get a free quote
                </a>
                <Link to="/about" className="inline-flex items-center gap-1 rounded-2xl border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
                  More about me
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:col-span-3">
              {[
                { icon: ShieldCheck, label: "Licensed & Insured", desc: "REC 30450 and $5M public liability" },
                { icon: ReceiptText, label: "Upfront Pricing", desc: "A clear quote before work starts" },
                { icon: MapPin, label: "Local & Reliable", desc: "Based in Hampton East" },
                { icon: Sparkles, label: "Tidy Worksite", desc: "I clean up after every job" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-white/[0.11] sm:p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-base font-bold leading-snug text-white sm:text-lg">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">How it works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Simple from first call to finished job</h2>
          </div>
          <ol className="relative grid gap-4 md:grid-cols-4 md:gap-6">
            <span className="absolute left-6 right-[24%] top-6 hidden h-px bg-border md:block" aria-hidden="true" />
            {[
              { t: "Get in touch", d: "Call, text or send the form with your suburb and what you need. Photos help." },
              { t: "We talk it through", d: "I confirm the details and arrange a visit if the job needs one." },
              { t: "Clear quote", d: "You get a written quote with the scope and price before any work starts." },
              { t: "Job done properly", d: "Work completed, tested and cleaned up, with the paperwork you need." },
            ].map((x, i) => (
              <li key={x.t} className="relative flex gap-4 rounded-2xl border border-border bg-background p-5 md:flex-col md:gap-0 md:border-0 md:bg-transparent md:p-0">
                <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground shadow-lg shadow-primary/25 ring-8 ring-card">{i + 1}</span>
                <div className="md:mt-5">
                  <p className="text-lg font-bold tracking-tight">{x.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />
      {/* Guides */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Helpful Guides</h2>
            <p className="mt-4 text-muted-foreground">Plain-English answers to common questions, with links to the official Victorian sources.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:flex-col sm:items-start sm:p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-snug tracking-tight">{g.shortTitle}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{g.summary}</p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 sm:hidden" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas: full list */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Areas We Service</h2>
            <p className="mt-4 text-muted-foreground">
              Based in Hampton East, covering Bayside, Stonnington, Boroondara and the greater South East Melbourne region.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suburbGroups.map((group) => (
              <details key={group.area} className="group rounded-2xl border border-border bg-card shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {group.area}
                  </h3>
                  <span className="flex shrink-0 items-center gap-2 text-xs font-medium text-muted-foreground">
                    {group.suburbs.length} suburbs
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </span>
                </summary>
                <div className="flex flex-wrap gap-2 px-5 pb-5">
                  {group.suburbs.map((suburb) => (
                    <Link key={suburb} to="/suburbs/$slug" params={{ slug: slugify(suburb) }} className="rounded-full bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 ring-1 ring-border transition-colors hover:text-primary hover:ring-primary/50">{suburb}</Link>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/suburbs" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              View full suburbs page
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">Need electrical work? Call, text, or email and I'll respond quickly.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <ContactCard icon={<Phone className="h-6 w-6" />} label="Phone" value="0466 270 949" href="tel:0466270949" description="Call or text anytime" highlight />
            <ContactCard icon={<Mail className="h-6 w-6" />} label="Email" value={<>contact@<wbr />pilkingtonelectrical.com.au</>} href="mailto:contact@pilkingtonelectrical.com.au" description="Send job details & photos" />
            <ContactCard icon={<MapPin className="h-6 w-6" />} label="Location" value="Hampton East, VIC" href="https://www.google.com/maps/search/?api=1&query=Hampton+East+VIC+Australia" description="Serving South East Melbourne" />
          </div>

          <div id="quote" className="mt-12 scroll-mt-24 rounded-2xl border border-border bg-background p-5 sm:p-8 md:p-12">
            <h3 className="text-center text-xl font-bold tracking-tight">Request a Free Quote</h3>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
              Fill in the form and I'll get back to you promptly. If you'd like to include photos of the job, feel free to email directly:{" "}
              <a href="mailto:contact@pilkingtonelectrical.com.au" className="text-primary hover:underline">contact@pilkingtonelectrical.com.au</a>
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
