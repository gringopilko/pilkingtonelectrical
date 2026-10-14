import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServiceTiles } from "@/components/ServiceTiles";
import { getServiceGroups } from "@/lib/serviceGroups";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Bayside & South East Melbourne" },
      {
        name: "description",
        content:
          "Full range of licensed electrical services across South East Melbourne: switchboards, rewiring, lighting, EV chargers, body corporate work and more.",
      },
      { property: "og:title", content: "Electrical Services in Bayside & South East Melbourne" },
      { property: "og:description", content: "Full range of licensed electrical services across South East Melbourne: switchboards, rewiring, lighting, EV chargers, body corporate work and more." },
      { property: "og:url", content: "https://pilkingtonelectrical.com.au/services" },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilkingtonelectrical.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Electrical", "item": "https://pilkingtonelectrical.com.au/services" },
          ],
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">Electrical Services</h1>
          <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
            Licensed electrical work for homes, body corporates and businesses across South East Melbourne.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-12 md:gap-16">
          {getServiceGroups().map((group) => (
            <div key={group.title}>
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-border pb-3">
                <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{group.title}</h2>
                <span className="text-xs font-medium text-muted-foreground">{group.items.length} services</span>
              </div>
              <ServiceTiles slugs={group.items.map((s) => s.slug)} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
