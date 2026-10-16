import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Phone } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { GuideLinks } from "@/components/GuideLinks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shane Pilkington | Licensed Electrician, Hampton East" },
      {
        name: "description",
        content:
          "Pilkington Electrical is a licensed electrician based in Hampton East, serving South East Melbourne. You deal directly with Shane from quote to completion.",
      },
      { property: "og:title", content: "About Shane Pilkington | Licensed Electrician, Hampton East" },
      { property: "og:description", content: "Pilkington Electrical is a licensed electrician based in Hampton East, serving South East Melbourne. You deal directly with Shane from quote to completion." },
      { property: "og:url", content: "https://pilkingtonelectrical.com.au/about" },
      { property: "og:image", content: "https://pilkingtonelectrical.com.au/og-image-clean.png" },
      { name: "twitter:image", content: "https://pilkingtonelectrical.com.au/og-image-clean.png" },
    ],
    links: [{ rel: "canonical", href: "https://pilkingtonelectrical.com.au/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pilkingtonelectrical.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://pilkingtonelectrical.com.au/about" },
          ],
        }),
      },
    ],
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
            A licensed electrician based in Hampton East, serving homes, body corporates and
            businesses across South East Melbourne.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { big: "REC 30450", small: "Registered Electrical Contractor" },
            { big: "$5 million", small: "Public liability cover" },
            { big: "10+ years", small: "On the tools since 2015" },
            { big: "Hampton East", small: "Serving Bayside and South East" },
          ].map((s) => (
            <div key={s.big} className="bg-background px-5 py-6 text-center">
              <p className="text-lg font-extrabold tracking-tight text-primary sm:text-xl">{s.big}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.small}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-5 md:gap-14 md:py-20">
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">My story</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">From the trading floor to the switchboard</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                My career didn't start with a toolbox. It started in finance, analysing listed companies and writing research, where every number had to be right and every detail had to stand up to scrutiny.
              </p>
              <p>
                Then I traded the desk for a few years chasing an endless winter. I worked ski patrol in the Canadian Rockies, on avalanche control and search and rescue, followed by seasons in New Zealand and a stint behind a busy London bar. Those years taught me to stay calm when things go wrong, and to look after the people around me.
              </p>
              <p>
                Through all of it, one thing kept pulling me back: a fascination with science, physics and the work of Nikola Tesla. I wanted to truly understand electricity, not just use it. So I came home and became an electrician.
              </p>
              <p>
                Near the end of my apprenticeship I thought I knew it all. I told an older tradesman a job couldn't be done, and he looked at me and said, "We're tradesmen. We can do anything." It knocked the ego right out of me, and it has stuck with me ever since. If there's a way to do a job properly, I'll find it.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-primary pl-5">
              <p className="text-lg font-bold leading-snug text-foreground md:text-xl">
                Three things matter most in my work: safety, workmanship and honesty.
              </p>
              <p className="mt-3 text-sm font-bold text-foreground">Shane</p>
            </blockquote>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">The road here</p>
            <ol className="relative mt-6 space-y-7 border-l-2 border-primary/25 pl-6">
              {[
                { when: "The early years", what: "Finance and equities research" },
                { when: "The winters", what: "Ski patrol, avalanche control and search and rescue in Canada, then New Zealand and London" },
                { when: "2015", what: "Started my electrical apprenticeship" },
                { when: "2019", what: "Qualified as an A-grade electrician" },
                { when: "2020", what: "Became a Registered Electrical Contractor, REC 30450. When COVID hit, I went back into large-scale construction: hospitals, correctional facilities, apartments, schools and office buildings" },
                { when: "June 2026", what: "Started Pilkington Electrical" },
                { when: "Today", what: "Looking after homes, rentals and buildings across Bayside and South East Melbourne" },
              ].map((step) => (
                <li key={step.when} className="relative">
                  <span className="absolute -left-[33px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-card" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{step.when}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-foreground">{step.what}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Why I work this way</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When you call, you speak directly to the person doing the
              job. The
              person who quotes the work is the person who shows up and does it.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That matters most when things go wrong: a fault that's hard to trace, a job that turns
              out bigger than expected, or a body corporate that needs clear communication with the
              strata manager, not just a job number. You get consistency, accountability, and someone
              who actually remembers your property the next time you call.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold tracking-tight md:text-3xl">My background</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I started my apprenticeship in late 2015 and qualified in 2019, and spent the years since
              working across large-scale commercial and institutional builds: hospitals, correctional
              facilities, and multi-storey apartment developments. That's where I learned to work to a
              standard where mistakes aren't an option: compliance, documentation, and getting it right
              the first time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pilkington Electrical is a new business, but it's backed by more than a decade of hands-on
              experience. I bring that same commercial-grade discipline to residential jobs and body
              corporate work across Bayside, which is part of why strata managers and owners
              corporations find it straightforward to work with me.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold tracking-tight md:text-3xl">Licensed & Insured</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pilkington Electrical operates under REC 30450, fully licensed and insured with $5 million public liability cover, for residential
              and commercial electrical work across Victoria.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold tracking-tight">What you get</h3>
            <div className="mt-6 flex flex-col gap-4">
              {[
                { label: "One point of contact", desc: "The person who quotes is the person who does the work" },
                { label: "Upfront pricing", desc: "No hidden fees or surprises on the invoice" },
                { label: "Licensed & insured", desc: "REC 30450, full compliance, every job" },
                { label: "Local", desc: "Based in Hampton East, covering South East Melbourne" },
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

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <GuideLinks heading="Guides for owners, landlords and businesses" />
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">Request a Free Quote</h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">Tell me what you need and I'll get back to you promptly.</p>
          <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
