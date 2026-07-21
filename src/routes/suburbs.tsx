import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

const suburbs = [
  "Elwood", "St Kilda", "St Kilda East", "Balaclava", "Brighton", "Brighton East",
  "Caulfield", "Caulfield North", "Caulfield South", "Hampton", "Hampton East",
  "Bentleigh", "Bentleigh East", "Malvern", "Malvern East", "Glen Iris",
  "Camberwell", "South Yarra", "Prahran", "Windsor",
];

export const Route = createFileRoute("/suburbs")({
  head: () => ({
    meta: [
      { title: "Suburbs We Service | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Pilkington Electrical services Elwood, St Kilda, Brighton, Caulfield, Bentleigh, Malvern and surrounding South East Melbourne suburbs.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/suburbs" }],
  }),
  component: Suburbs,
});

function Suburbs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Suburbs We Service
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Based in Elwood, covering homes, body corporates and businesses across South East
            Melbourne. Don't see your suburb listed? Get in touch anyway — chances are I still cover it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {suburbs.map((suburb) => (
            <div
              key={suburb}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3"
            >
              <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm font-medium">{suburb}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">
            Just outside these suburbs? Call and ask — service area boundaries aren't always exact.
          </p>
          
            <a href="tel:0466270949" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Request a Free Quote</h2>
            <p className="mt-4 text-muted-foreground">Fill in the form and I'll get back to you promptly.</p>
          </div>
          <div className="mt-12 rounded-xl border border-border bg-background p-8 md:p-12">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
