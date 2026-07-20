import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Electrical Services | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Full range of licensed electrical services across South East Melbourne — switchboards, rewiring, lighting, EV chargers, body corporate work and more.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/services" }],
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <h2 className="text-lg font-bold tracking-tight">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.shortDesc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
