import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Pilkington Electrical" },
      {
        name: "description",
        content:
          "Pilkington Electrical is a sole-trader licensed electrician based in Elwood, serving South East Melbourne. No subcontractors, no call centres.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            About Pilkington Electrical
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A licensed sole-trader electrician based in Elwood, serving homes, body corporates and
            businesses across South East Melbourne.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Why I work this way</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I'm a sole trader, which means when you call, you speak directly to the person doing the
              job — not a call centre, not a subcontractor, not whoever's rostered on that day. The
              person who quotes the work is the person who shows up and does it.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That matters most when things go wrong — a fault that's hard to trace, a job that turns
              out bigger than expected, a body corporate that needs clear communication with the
              strata manager, not just a job number. You get consistency, accountability, and someone
              who actually remembers your property the next time you call.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold tracking-tight md:text-3xl">Licensed & Insured</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pilkington Electrical operates under REC 30450, fully licensed and insured for domestic
              and commercial electrical work across Victoria.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold tracking-tight">What you get</h3>
            <div className="mt-6 flex flex-col gap-4">
              {[
                { label: "No subcontractors", desc: "The person who quotes is the person who does the work" },
                { label: "Upfront pricing", desc: "No hidden fees or surprises on the invoice" },
                { label: "Licensed & insured", desc: "REC 30450 — full compliance, every job" },
                { label: "Local", desc: "Based in Elwood, covering South East Melbourne" },
                { label: "Tidy worksite", desc: "Cleaned up properly, every time" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-bold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
              <a href="tel:0466270949" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            View all services
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
