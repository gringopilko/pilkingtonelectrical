import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Zap, Shield, Wrench, ChevronRight, Check, Clock, Award } from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustBadges } from "@/components/TrustBadges";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pilkington Electrical | Domestic & Commercial Electrician Melbourne" },
      {
        name: "description",
        content:
          "Pilkington Electrical — licensed electrician covering South East Melbourne & Elwood. Domestic rewires, fault finding, switchboards & more.",
      },
      { property: "og:title", content: "Pilkington Electrical | Licensed Electrician Melbourne" },
      {
        property: "og:description",
        content: "Licensed electrician covering South East Melbourne & Elwood. Domestic rewires, fault finding, switchboards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/" }],
  }),
  component: Index,
});

const featuredServices = [
  { slug: "switchboards", icon: <Shield className="h-8 w-8" />, title: "Switchboards & Safety Switches", description: "Upgrade old fuse boxes to modern safety switch boards. Protect your home and family with compliant, up-to-date electrical infrastructure." },
  { slug: "rewiring-extensions", icon: <Zap className="h-8 w-8" />, title: "Domestic Rewires & Installations", description: "Full and partial house rewires, new lighting circuits, power points, and appliance circuits. Clean, tidy work with minimal disruption." },
  { slug: "fault-finding", icon: <Wrench className="h-8 w-8" />, title: "Fault Finding & Repairs", description: "Intermittent tripping, flickering lights, dead outlets — diagnosing the root cause and fixing it properly, not just patching over it." },
  { slug: "body-corporate", icon: <Award className="h-8 w-8" />, title: "Body Corporate & Strata", description: "Reliable trade partner for property and strata managers. Fast call-outs, compliance work, common-area lighting, and tenant fit-outs — invoiced cleanly." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Licensed electrician working on electrical panel" className="h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-white/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 md:py-32 lg:py-40">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Shield className="h-3.5 w-3.5" />
            Fully Licensed &amp; Insured
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Domestic &amp; Commercial
            <br />
            <span className="text-primary">Electrical You Can Trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Licensed electrician serving homes, body corporates and real estate agents across South East Melbourne. From rewires to switchboard upgrades — done right the first time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0466270949" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent">
              Services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Elwood &amp; South East Melbourne</div>
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
              Domestic and commercial work — from full house rewires to ongoing maintenance for body corporates and real estate agents.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">{s.icon}</div>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              View all 13 services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why Choose Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Why Choose Pilkington Electrical?</h2>
            <p className="mt-4 text-muted-foreground">
              I'm a sole trader, which means when you call, you speak directly to the person doing the job. No subcontractors, no call centres — just honest, reliable electrical work from a licensed professional who takes pride in every connection.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Licensed & Insured", desc: "Full compliance & peace of mind" },
                { label: "Upfront Pricing", desc: "No hidden fees or surprises" },
                { label: "Local & Reliable", desc: "South East Melbourne based" },
                { label: "Tidy Worksite", desc: "I clean up after every job" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Check className="h-4 w-4" />
                    <span className="font-bold">{item.label}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              More about Pilkington Electrical
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold tracking-tight">Service Areas</h3>
            <p className="mt-2 text-sm text-muted-foreground">Based in Elwood, covering:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Elwood", "St Kilda", "Brighton", "Caulfield", "Hampton", "Bentleigh", "Malvern", "Glen Iris", "Camberwell", "South Yarra"].map((suburb) => (
                <span key={suburb} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">{suburb}</span>
              ))}
            </div>
            <Link to="/suburbs" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
              View all suburbs
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
            <p className="mt-4 text-muted-foreground">Need electrical work? Call, text, or email — I respond quickly.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ContactCard icon={<Phone className="h-6 w-6" />} label="Phone" value="0466 270 949" href="tel:0466270949" description="Call or text anytime" />
            <ContactCard icon={<Mail className="h-6 w-6" />} label="Email" value="contact@pilkingtonelectrical.com.au" href="mailto:contact@pilkingtonelectrical.com.au" description="Send job details & photos" />
            <ContactCard icon={<MapPin className="h-6 w-6" />} label="Location" value="Elwood, VIC" href="#" description="Serving South East Melbourne" />
          </div>

          <div className="mt-12 rounded-xl border border-border bg-background p-8 md:p-12">
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
    <a href={href} className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{icon}</div>
      <span className="mt-4 text-sm font-semibold text-muted-foreground">{label}</span>
      <span className="mt-1 text-lg font-bold tracking-tight">{value}</span>
      <span className="mt-1 text-xs text-muted-foreground">{description}</span>
    </a>
  );
}
