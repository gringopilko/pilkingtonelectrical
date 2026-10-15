import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, Phone } from "lucide-react";

interface Audience {
  id: string;
  label: string;
  heading: string;
  text: string;
  bullets: string[];
  image: { file: string; width: number; height: number; focus: string; alt: string };
  slug?: string;
  linkLabel: string;
}

const audiences: Audience[] = [
  {
    id: "homes",
    label: "Homes",
    heading: "Electrical work for your home",
    text: "From a tripping switch to a full upgrade, I'll find the real cause, explain your options in plain language and quote the job clearly before any work starts.",
    bullets: [
      "Fault finding and repairs",
      "Switchboard and safety switch upgrades",
      "Lighting, power points and ceiling fans",
    ],
    image: { file: "homes-circuit-breakers.webp", width: 728, height: 484, focus: "50% 50%", alt: "Close up of circuit breakers and wiring inside a switchboard" },
    linkLabel: "See all services",
  },
  {
    id: "landlords",
    label: "Landlords & agents",
    heading: "Rental safety and repairs, made easy",
    text: "Safety checks, repairs and upgrades for rental properties, with clear records for you and sensible options for the owner's budget.",
    bullets: [
      "Electrical safety checks and smoke alarm checks",
      "The cheapest option, plus a better path where it makes sense",
      "Several properties in one building on the same day",
    ],
    image: { file: "electrical-inspection-report-apartment.webp", width: 1600, height: 800, focus: "40% 50%", alt: "Electrical inspection report and test tools on a bench in a rental property" },
    slug: "real-estate",
    linkLabel: "Real estate & property managers",
  },
  {
    id: "body-corporate",
    label: "Body corporate",
    heading: "Common property, looked after",
    text: "Common area lighting, shared circuits, switchboards and emergency lighting, with clear quotes and reports your committee can use.",
    bullets: [
      "Common area lighting and shared circuits",
      "Switchboard and emergency lighting upkeep",
      "Quotes and reports a committee can approve",
    ],
    image: { file: "body-corporate.webp", width: 1600, height: 649, focus: "68% 50%", alt: "Electrician working at the electrical cabinet of an apartment building" },
    slug: "body-corporate",
    linkLabel: "Body corporate & strata",
  },
  {
    id: "business",
    label: "Business",
    heading: "Reliable power for your workplace",
    text: "Test and tag, fault finding, lighting and power for offices, shops and workplaces, with clear records and written quotes.",
    bullets: [
      "Test and tag with clear records",
      "Fault finding and repairs",
      "Commercial lighting and power",
    ],
    image: { file: "commercial-electrician.webp", width: 1600, height: 640, focus: "92% 50%", alt: "Electrician installing track lighting in a modern office" },
    slug: "commercial-electrician",
    linkLabel: "Commercial electrician",
  },
];

export function AudiencePanels() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Who I Work With</h2>
          <p className="mt-4 text-muted-foreground">
            Homes, rentals, apartment buildings and workplaces. Pick the one that fits.
          </p>
        </div>

        <div role="tablist" aria-label="Who I work with" className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {audiences.map((a, i) => (
            <button
              key={a.id}
              role="tab"
              id={`aud-tab-${a.id}`}
              aria-selected={i === active}
              aria-controls={`aud-panel-${a.id}`}
              onClick={() => setActive(i)}
              className={`flex min-h-11 items-center justify-center rounded-xl border px-2 py-2 text-center text-sm font-bold leading-tight transition-colors sm:rounded-full sm:px-5 ${
                i === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        {/* Every panel stays in the page (hidden, not removed) so all the text can be read by search engines. */}
        {audiences.map((a, i) => (
          <div
            key={a.id}
            role="tabpanel"
            id={`aud-panel-${a.id}`}
            aria-labelledby={`aud-tab-${a.id}`}
            hidden={i !== active}
            className={`items-center gap-8 md:grid-cols-2 md:gap-12 ${i === active ? "grid" : "hidden"}`}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-extrabold tracking-tight">{a.heading}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a.text}</p>
              <ul className="mt-5 space-y-2">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:0466270949"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-brand-dark"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  0466 270 949
                </a>
                {a.slug ? (
                  <Link
                    to="/services/$slug"
                    params={{ slug: a.slug }}
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {a.linkLabel}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {a.linkLabel}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>

            <div className="order-1 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-brand-dark md:order-2 md:aspect-[4/3]">
              <img
                src={`/img/${a.image.file}`}
                alt={a.image.alt}
                width={a.image.width}
                height={a.image.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: a.image.focus }}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
