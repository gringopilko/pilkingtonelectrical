import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { guides } from "@/lib/guides";

const url = "https://pilkingtonelectrical.com.au/guides";
const description =
  "Plain-English electrical guides for Victorian homeowners, landlords and property managers, with links to the official sources.";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Victorian Electrical Guides | Pilkington Electrical" },
      { name: "description", content: description },
      { property: "og:title", content: "Victorian Electrical Guides | Pilkington Electrical" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pilkingtonelectrical.com.au/" },
            { "@type": "ListItem", position: 2, name: "Guides", item: url },
          ],
        }),
      },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Electrical Guides</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Plain-English guides for homeowners, landlords and property managers, with links to the official sources so you can check the detail yourself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              to="/guides/$slug"
              params={{ slug: g.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Updated {g.updatedLabel}</p>
              <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight">{g.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{g.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                Read the guide
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
