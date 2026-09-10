import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, MapPin, ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { getSuburbBySlug, slugify } from "@/lib/suburbs";
import { services } from "@/lib/services";

export const Route = createFileRoute("/suburbs/$slug")({
  loader: ({ params }) => {
    const suburb = getSuburbBySlug(params.slug);
    if (!suburb) throw notFound();
    return suburb;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `https://pilkingtonelectrical.com.au/suburbs/${loaderData.slug}`;
    const title = `Electrician in ${loaderData.name}, VIC | Pilkington Electrical`;
    const description = `Licensed electrician servicing ${loaderData.name} — switchboards, fault finding, lighting, rewiring and more across Melbourne's ${loaderData.area} area. Call 0466 270 949.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Residential and commercial electrician",
            "name": `Electrician services in ${loaderData.name}`,
            "description": description,
            "url": url,
            "provider": {
              "@type": "ElectricalContractor",
              "name": "Pilkington Electrical",
              "telephone": "+61466270949",
              "url": "https://pilkingtonelectrical.com.au",
            },
            "areaServed": {
              "@type": "Place",
              "name": `${loaderData.name}, VIC`,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilkingtonelectrical.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Suburbs", "item": "https://pilkingtonelectrical.com.au/suburbs" },
              { "@type": "ListItem", "position": 3, "name": loaderData.name, "item": url },
            ],
          }),
        },
      ],
    };
  },
  component: SuburbPage,
});

function SuburbPage() {
  const suburb = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <nav className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/suburbs" className="hover:text-primary">Suburbs</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{suburb.name}</span>
          </nav>
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Electrician in {suburb.name}, VIC
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Licensed residential and commercial electrical work in {suburb.name}, part of Melbourne's {suburb.area} area. {suburb.blurb}
          </p>
          <a
            href="tel:0466270949"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" />
            Call 0466 270 949
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Electrical services in {suburb.name}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="font-bold tracking-tight">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>

      {suburb.neighbours.length > 0 && (
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-xl font-bold tracking-tight">Also servicing nearby</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {suburb.neighbours.map((n) => (
                <Link
                  key={n}
                  to="/suburbs/$slug"
                  params={{ slug: slugify(n) }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {n}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Request a Free Quote</h2>
            <p className="mt-4 text-muted-foreground">Servicing {suburb.name} — fill in the form and I'll get back to you promptly.</p>
          </div>
          <div id="quote" className="mt-12 scroll-mt-24 rounded-xl border border-border bg-background p-8 md:p-12">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
