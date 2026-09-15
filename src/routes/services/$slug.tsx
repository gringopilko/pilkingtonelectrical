import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, Phone, ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `https://pilkingtonelectrical.com.au/services/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | Pilkington Electrical` },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: `${loaderData.title} | Pilkington Electrical` },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "website" },
      ],
      links: [
        { rel: "canonical", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": loaderData.title,
            "name": loaderData.title,
            "description": loaderData.metaDescription,
            "url": url,
            "provider": {
              "@type": "ElectricalContractor",
              "name": "Pilkington Electrical",
              "telephone": "+61466270949",
              "url": "https://pilkingtonelectrical.com.au",
            },
            "areaServed": {
              "@type": "Place",
              "name": "South East Melbourne",
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
              { "@type": "ListItem", "position": 2, "name": "Electrical", "item": "https://pilkingtonelectrical.com.au/services" },
              { "@type": "ListItem", "position": 3, "name": loaderData.title, "item": url },
            ],
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-foreground">Electrical</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{service.title}</span>
          </div>
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0466270949"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a href="#quote"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What's Included</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {service.included.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        {service.body.map((para, i) => (
          <p key={i} className="mt-6 leading-relaxed text-muted-foreground">
            {para}
          </p>
        ))}

        <p className="mt-6 leading-relaxed text-muted-foreground">
          All work is carried out personally by{" "}
          <Link to="/about" className="font-semibold text-primary hover:underline">
            a licensed sole-trader electrician
          </Link>{" "}
          — no subcontractors, so the person who quotes the job is the person who turns up and does it.
        </p>
      </section>

      <section id="quote" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Get a Quote for {service.title}
            </h2>
            <p className="mt-4 text-muted-foreground">Fill in the form and I'll get back to you promptly.</p>
          </div>
          <div className="mt-12 rounded-xl border border-border bg-background p-8 md:p-12">
            <QuoteForm defaultMessage={`Enquiry: ${service.title}`} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
