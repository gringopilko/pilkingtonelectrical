import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/services";
import { guides, getGuide } from "@/lib/guides";

import { pageTitle } from "@/lib/seo";
export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `https://pilkingtonelectrical.com.au/guides/${loaderData.slug}`;
    const title = pageTitle(loaderData.seoTitle);
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: loaderData.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.metaDescription,
            datePublished: loaderData.updated,
            dateModified: loaderData.updated,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "Pilkington Electrical", url: "https://pilkingtonelectrical.com.au" },
            publisher: { "@type": "Organization", name: "Pilkington Electrical", url: "https://pilkingtonelectrical.com.au" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pilkingtonelectrical.com.au/" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://pilkingtonelectrical.com.au/guides" },
              { "@type": "ListItem", position: 3, name: loaderData.shortTitle, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const guide = Route.useLoaderData();
  const related = guide.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <div className="reading-progress" aria-hidden="true" />
      <article>
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
            <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/guides" className="hover:text-foreground">Guides</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{guide.shortTitle}</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{guide.title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">Updated {guide.updatedLabel}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{guide.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-12">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold tracking-tight">At a glance</h2>
            <ul className="mt-4 space-y-3">
              {guide.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {guide.sections.length > 3 && (
            <nav aria-label="On this page" className="mt-8 rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">On this page</p>
              <ol className="mt-3 space-y-1.5">
                {guide.sections.map((sec, n) => (
                  <li key={sec.heading}>
                    <a href={`#${slugify(sec.heading)}`} className="group flex items-baseline gap-3 text-sm font-semibold text-foreground hover:text-primary">
                      <span className="w-5 shrink-0 text-xs font-bold text-primary">{String(n + 1).padStart(2, "0")}</span>
                      <span className="group-hover:underline">{sec.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {guide.sections.map((sec) => (
            <div key={sec.heading} id={slugify(sec.heading)} className="mt-10 scroll-mt-28">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{sec.heading}</h2>
              {sec.paragraphs?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
              ))}
              {sec.bullets && (
                <ul className="mt-4 space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold tracking-tight">Official sources</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {guide.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              This guide is general information only and was last checked against these sources on {guide.updatedLabel}. Rules can change, so check the official guidance for your situation.
            </p>
          </div>
        </section>
      </article>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-xl font-bold tracking-tight">Related services</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {s.title}
              </Link>
            ))}
          </div>
          {otherGuides.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold tracking-tight">More guides</h2>
              <div className="mt-4 flex flex-col gap-2">
                {otherGuides.map((g) => (
                  <Link
                    key={g.slug}
                    to="/guides/$slug"
                    params={{ slug: g.slug }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {g.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section id="quote" className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Need an electrician for this?</h2>
          <p className="mt-3 text-muted-foreground">
            Call me or fill in the form and I'll get back to you promptly.
          </p>
          <a
            href="tel:0466270949"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            0466 270 949
          </a>
          <QuoteForm defaultService={guide.relatedServices[0]} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
