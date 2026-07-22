import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Get in touch with Pilkington Electrical — licensed electrician serving South East Melbourne. Call, text, or request a free quote.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">Get In Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Need electrical work? Call, text, or email — I respond quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <ContactCard icon={<Phone className="h-6 w-6" />} label="Phone" value="0466 270 949" href="tel:0466270949" description="Call or text anytime" />
          <ContactCard icon={<Mail className="h-6 w-6" />} label="Email" value="contact@pilkingtonelectrical.com.au" href="mailto:contact@pilkingtonelectrical.com.au" description="Send job details & photos" />
          <ContactCard icon={<MapPin className="h-6 w-6" />} label="Location" value="Elwood, VIC" href="#" description="Serving South East Melbourne" />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-center text-xl font-bold tracking-tight">Request a Free Quote</h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
            Fill in the form and I'll get back to you promptly. If you'd like to include photos of the
            job, feel free to email directly:{" "}
            <a href="mailto:contact@pilkingtonelectrical.com.au" className="text-primary hover:underline">
              contact@pilkingtonelectrical.com.au
            </a>
          </p>
          <QuoteForm />
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
      <span className="mt-4 text-sm font-semibold text-muted-foreground">{label}</span>{" "}
      <span className="mt-1 text-lg font-bold tracking-tight">{value}</span>{" "}
      <span className="mt-1 text-xs text-muted-foreground">{description}</span>
    </a>
  );
}
