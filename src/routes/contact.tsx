import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactCard } from "@/components/ContactCard";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pilkington Electrical | Licensed Electrician Melbourne" },
      {
        name: "description",
        content:
          "Get in touch with Pilkington Electrical, a licensed electrician serving South East Melbourne. Call, text, or request a free quote.",
      },
      { property: "og:title", content: "Contact Pilkington Electrical | Licensed Electrician Melbourne" },
      { property: "og:description", content: "Get in touch with Pilkington Electrical, a licensed electrician serving South East Melbourne. Call, text, or request a free quote." },
      { property: "og:url", content: "https://pilkingtonelectrical.com.au/contact" },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilkingtonelectrical.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://pilkingtonelectrical.com.au/contact" },
          ],
        }),
      },
    ],
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
            Need electrical work? Call, text, or email and I'll respond quickly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <ContactCard icon={<Phone className="h-6 w-6" />} label="Phone" value="0466 270 949" href="tel:0466270949" description="Call or text anytime" highlight />
          <ContactCard icon={<Mail className="h-6 w-6" />} label="Email" value={<>contact@<wbr />pilkingtonelectrical.com.au</>} href="mailto:contact@pilkingtonelectrical.com.au" description="Send job details & photos" />
          <ContactCard icon={<MapPin className="h-6 w-6" />} label="Location" value="Hampton East, VIC" href="https://www.google.com/maps/search/?api=1&query=Hampton+East+VIC+Australia" description="Serving South East Melbourne" />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-5 sm:p-8 md:p-12">
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
