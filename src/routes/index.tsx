import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Zap, Shield, Wrench, ChevronRight, Check, Clock, Award, ClipboardCheck, Tag } from "lucide-react";
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
import { suburbGroups } from "@/lib/suburbs";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrician Bayside & South East Melbourne | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Licensed electrician (REC 30450) in Hampton East, serving Bayside and South East Melbourne. Rental safety checks, test and tag, switchboards and fault finding.",
      },
      { property: "og:title", content: "Electrician Bayside & South East Melbourne | Pilkington Electrical" },
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
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImg}
            className="h-full w-full object-cover"
          >
            <source src="/melbourne-hero-compact.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-6 py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Fully Licensed &amp; Insured
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Residential &amp; Commercial
            <br />
            <span className="text-primary">Electrical You Can Trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Licensed electrician serving homes, body corporates and real estate agents across South East Melbourne. From rewires to switchboard upgrades, done right the first time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0466270949" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
              Services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-white/85">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Hampton East &amp; South East Melbourne</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Prompt, On-Time Service</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Quality Guaranteed</div>
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

      <BrandsWeUse />

      <AudiencePanels />

      {/* About / Why Choose Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Why Choose Pilkington Electrical?</h2>
            <p className="mt-4 text-muted-foreground">
              I'm a sole trader, which means when you call, you speak directly to the person doing the job. Honest, reliable electrical work from a licensed professional who takes pride in every connection.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              More about Pilkington Electrical
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Licensed & Insured", desc: "Full compliance & peace of mind" },
              { label: "Upfront Pricing", desc: "No hidden fees or surprises" },
              { label: "Local & Reliable", desc: "South East Melbourne based" },
              { label: "Tidy Worksite", desc: "I clean up after every job" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Check className="h-4 w-4" />
                  <span className="font-bold">{item.label}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkGallery />

      <Testimonials />

      {/* Service Areas: full list */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Areas We Service</h2>
            <p className="mt-4 text-muted-foreground">
              Based in Hampton East, covering Bayside, Stonnington, Boroondara and the greater South East Melbourne region.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {suburbGroups.map((group) => (
              <div key={group.area}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">{group.area}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.suburbs.map((suburb) => (
                    <span key={suburb} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{suburb}</span>
                  ))}
                </div>
              </div>
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

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ContactCard icon={<Phone className="h-6 w-6" />} label="Phone" value="0466 270 949" href="tel:0466270949" description="Call or text anytime" />
            <ContactCard icon={<Mail className="h-6 w-6" />} label="Email" value="contact@pilkingtonelectrical.com.au" href="mailto:contact@pilkingtonelectrical.com.au" description="Send job details & photos" />
            <ContactCard icon={<MapPin className="h-6 w-6" />} label="Location" value="Hampton East, VIC" href="https://www.google.com/maps/search/?api=1&query=Hampton+East+VIC+Australia" description="Serving South East Melbourne" />
          </div>

          <div id="quote" className="mt-12 scroll-mt-24 rounded-xl border border-border bg-background p-8 md:p-12">
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

function ContactCard({ icon, label, value, href, description }: { icon: React.ReactNode; label: string; value: string; href: string; description: string }) {
  return (
    <a href={href} className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{icon}</div>
      <span className="mt-4 text-sm font-semibold text-muted-foreground">{label}</span>{" "}
      <span className="mt-1 text-lg font-bold tracking-tight">{value}</span>{" "}
      <span className="mt-1 text-xs text-muted-foreground">{description}</span>
    </a>
  );
}
