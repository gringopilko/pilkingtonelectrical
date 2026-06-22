import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  Wrench,
  ChevronRight,
  Check,
  Clock,
  Award,
  Menu,
  X,
  Loader2,
} from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";
import logoImg from "@/assets/pilkington-logo-icon.png";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pilkington Electrical | Domestic & Commercial Electrician Melbourne" },
      {
        name: "description",
        content:
          "Pilkington Electrical — licensed electrician covering South East Melbourne & Elwood. Domestic rewires, fault finding, switchboards & more.",
      },
      {
        property: "og:title",
        content: "Pilkington Electrical | Licensed Electrician Melbourne",
      },
      {
        property: "og:description",
        content:
          "Licensed electrician covering South East Melbourne & Elwood. Domestic rewires, fault finding, switchboards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center gap-3">
  <img
  src={logoImg}
  alt="Pilkington Electrical"
  width={49}
  height={60}
  className="h-10 w-auto object-contain md:h-12"
/>
  <span className="text-lg font-extrabold tracking-tight text-foreground md:text-xl">
    Pilkington <span className="text-primary">Electrical</span>
  </span>
</a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {["Services", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </button>
            ))}
            <a
              href="tel:0466270949"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" />
              0466 270 949
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {["Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:0466270949"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                0466 270 949
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Licensed electrician working on electrical panel"
            className="h-full w-full object-cover"
          />
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
            Licensed electrician serving homes, body corporates and real estate
            agents across South East Melbourne. From rewires to switchboard
            upgrades — done right the first time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:0466270949"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
            >
              Services
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Elwood &amp; South East Melbourne
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Prompt, On-Time Service
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Quality Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Services</h2>
            <p className="mt-4 text-muted-foreground">
              Domestic and commercial work — from full house rewires to
              ongoing maintenance for body corporates and real estate agents.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Zap className="h-8 w-8" />}
              title="Domestic Rewires & Installations"
              description="Full and partial house rewires, new lighting circuits, power points, and appliance circuits. Clean, tidy work with minimal disruption."
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8" />}
              title="Fault Finding & Repairs"
              description="Intermittent tripping, flickering lights, dead outlets — diagnosing the root cause and fixing it properly, not just patching over it."
            />
            <ServiceCard
              icon={<Shield className="h-8 w-8" />}
              title="Switchboards & Safety Switches"
              description="Upgrade old fuse boxes to modern safety switch boards. Protect your home and family with compliant, up-to-date electrical infrastructure."
            />
            <ServiceCard
              icon={<Award className="h-8 w-8" />}
              title="Commercial, Body Corporate & Real Estate"
              description="Reliable trade partner for property managers and body corporates. Fast call-outs, compliance work, common-area lighting, and tenant fit-outs — invoiced cleanly."
            />
          </div>
        </div>
      </section>

      {/* About / Why Choose Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Why Choose Pilkington Electrical?
            </h2>
            <p className="mt-4 text-muted-foreground">
              I'm a sole trader, which means when you call, you speak directly to
              the person doing the job. No subcontractors, no call centres —
              just honest, reliable electrical work from a licensed
              professional who takes pride in every connection.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Licensed & Insured", desc: "Full compliance & peace of mind" },
                { label: "Upfront Pricing", desc: "No hidden fees or surprises" },
                { label: "Local & Reliable", desc: "South East Melbourne based" },
                { label: "Tidy Worksite", desc: "I clean up after every job" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Check className="h-4 w-4" />
                    <span className="font-bold">{item.label}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold tracking-tight">Service Areas</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Based in Elwood, covering:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Elwood", "St Kilda", "Brighton", "Caulfield", "Hampton",
                "Bentleigh", "Malvern", "Glen Iris", "Camberwell", "South Yarra",
              ].map((suburb) => (
                <span
                  key={suburb}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {suburb}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              If you're nearby but not listed, still get in touch — chances
              are I cover your area too.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Need electrical work? Call, text, or email — I respond quickly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              label="Phone"
              value="0466 270 949"
              href="tel:0466270949"
              description="Call or text anytime"
            />
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              label="Email"
              value="contact@pilkingtonelectrical.com.au"
              href="mailto:contact@pilkingtonelectrical.com.au"
              description="Send job details & photos"
            />
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              label="Location"
              value="Elwood, VIC"
              href="#"
              description="Serving South East Melbourne"
            />
          </div>

          {/* Quote Form */}
          <div className="mt-12 rounded-xl border border-border bg-background p-8 md:p-12">
            <h3 className="text-center text-xl font-bold tracking-tight">
              Request a Free Quote
            </h3>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
              Fill in the form and I'll get back to you promptly. If you'd like
              to include photos of the job, feel free to email directly:{" "}
              <a href="mailto:contact@pilkingtonelectrical.com.au" className="text-primary hover:underline">
                contact@pilkingtonelectrical.com.au
              </a>
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <img src={logoImg} alt="Pilkington Electrical" width={58} height={72} className="h-[72px] w-auto" />
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Pilkington Electrical. Licensed
              electrician. REC 30450. South East Melbourne. ABN 16 937 824 485.
            </p>
            <a
              href="tel:0466270949"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              0466 270 949
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon, title, description,
}: {
  icon: React.ReactNode; title: string; description: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">{icon}</div>
      <h3 className="mt-4 text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function ContactCard({
  icon, label, value, href, description,
}: {
  icon: React.ReactNode; label: string; value: string; href: string; description: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <span className="mt-4 text-sm font-semibold text-muted-foreground">{label}</span>
      <span className="mt-1 text-lg font-bold tracking-tight">{value}</span>
      <span className="mt-1 text-xs text-muted-foreground">{description}</span>
    </a>
  );
}

function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const inputClass =
    "rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!name.trim() || !phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'e16f3311-c329-4de2-a6f4-a49b368d309d',
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim() || 'Not provided',
    message: message.trim() || 'No message provided',
    subject: 'New Quote Request - Pilkington Electrical',
  }),
});
const data = await response.json();
if (!data.success) throw new Error('Failed to send');
      setDone(true);
      toast.success("Quote request sent! Shane will be in touch shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error(
        "Couldn't send your request. Please call 0466 270 949 or email contact@pilkingtonelectrical.com.au."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </div>
        <p className="text-lg font-bold">Request received</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — I'll be in touch on {phone || "the number you provided"} as soon as possible.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        required
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        maxLength={30}
        required
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Email address (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        className={`${inputClass} md:col-span-2`}
      />
      
<textarea
  placeholder="Tell me about the job..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={2000}
        rows={4}
        className={`${inputClass} md:col-span-2`}
      />
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
            
Sending...
            </>
          ) : (
            "Send Request"
          )}
        </button>
      </div>
    </form>
  );
}
