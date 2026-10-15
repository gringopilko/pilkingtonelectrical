import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronRight, Phone, ShieldCheck } from "lucide-react";

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
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Who I Work With</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">Work done properly, whatever the property</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Homes, rentals, apartment buildings and workplaces. Pick the one that fits.
          </p>
        </div>

        <div role="tablist" aria-label="Who I work with" className="mb-6 grid grid-cols-2 gap-2 sm:inline-flex sm:rounded-full sm:bg-muted sm:p-1">
          {audiences.map((a, i) => (
            <button
              key={a.id}
              role="tab"
              id={`aud-tab-${a.id}`}
              aria-selected={i === active}
              aria-controls={`aud-panel-${a.id}`}
              onClick={() => setActive(i)}
              className={`flex min-h-11 items-center justify-center rounded-xl border px-2 py-2 text-center text-sm font-bold leading-tight transition-all sm:rounded-full sm:border-transparent sm:px-6 ${
                i === active
                  ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "border-border bg-background text-muted-foreground hover:text-foreground sm:bg-transparent"
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
            className={`overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-slate-900/5 ${i === active ? "grid md:grid-cols-2" : "hidden"}`}
          >
            <div className="order-2 flex flex-col justify-center p-6 sm:p-8 md:order-1 md:p-12">
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{a.heading}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground md:text-lg">{a.text}</p>
              <ul className="mt-6 space-y-3">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-medium md:text-base">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:0466270949"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  0466 270 949
                </a>
                <Link
                  {...(a.slug ? { to: "/services/$slug" as const, params: { slug: a.slug } } : { to: "/services" as const })}
                  className="inline-flex items-center gap-1 rounded-xl border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {a.linkLabel}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative order-1 aspect-[16/10] md:order-2 md:aspect-auto md:min-h-[440px]">
              <img
                src={`/img/${a.image.file}`}
                alt={a.image.alt}
                width={a.image.width}
                height={a.image.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: a.image.focus }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-md backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                Licensed electrician, REC 30450
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
