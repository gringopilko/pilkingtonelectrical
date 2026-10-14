import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, Phone, ChevronRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/services";
import { WorkGallery } from "@/components/WorkGallery";
import { SwitchboardDetails } from "@/components/SwitchboardDetails";
import { EmergencyHeroVideo } from "@/components/EmergencyHeroVideo";
import { EmergencyElectricalDetails } from "@/components/EmergencyElectricalDetails";
import { ElectricalSafetyDetails } from "@/components/ElectricalSafetyDetails";
import { LightSwitchesDetails } from "@/components/LightSwitchesDetails";
import { PowerPointsDetails } from "@/components/PowerPointsDetails";
import { SmokeAlarmDetails } from "@/components/SmokeAlarmDetails";
import { FaultFindingDetails } from "@/components/FaultFindingDetails";
import { BodyCorporateDetails } from "@/components/BodyCorporateDetails";
import { RealEstateDetails } from "@/components/RealEstateDetails";
import { EVChargerDetails } from "@/components/EVChargerDetails";
import { CommercialHeroVideo } from "@/components/CommercialHeroVideo";
import { workPhotos } from "@/lib/workPhotos";
import { guides } from "@/lib/guides";

import { pageTitle } from "@/lib/seo";
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
        { title: pageTitle(loaderData.seoTitle ?? loaderData.title) },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: pageTitle(loaderData.seoTitle ?? loaderData.title) },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        ...(loaderData.image ? [
          { property: "og:image", content: `https://pilkingtonelectrical.com.au/img/${loaderData.image.file}` },
          { property: "og:image:width", content: String(loaderData.image.width) },
          { property: "og:image:height", content: String(loaderData.image.height) },
          { property: "og:image:type", content: "image/webp" },
          { name: "twitter:image", content: `https://pilkingtonelectrical.com.au/img/${loaderData.image.file}` },
        ] : []),
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
  const relatedSlugs: Record<string, string[]> = {
    "power-points": ["rewiring-extensions", "switchboards", "safety-switches", "lighting", "fault-finding", "commercial-electrician"],
    "smoke-alarms": ["electrical-safety-inspections", "real-estate", "body-corporate", "safety-switches"],
    "ev-charger-install": ["switchboards", "safety-switches", "body-corporate", "commercial-electrician"],
    "lighting": ["ceiling-fans", "power-points", "rewiring-extensions", "commercial-electrician"],
    "fault-finding": ["emergency-electrical", "switchboards", "safety-switches", "electrical-safety-inspections"],
    "body-corporate": ["lighting", "switchboards", "smoke-alarms", "test-and-tag", "ev-charger-install", "real-estate"],
    "real-estate": ["electrical-safety-inspections", "smoke-alarms", "fault-finding", "switchboards", "body-corporate", "lighting"],
    "commercial-electrician": ["test-and-tag", "lighting", "switchboards", "power-points", "body-corporate", "fault-finding"],
  };
  const preferredSlugs = relatedSlugs[service.slug];
  const otherServices = preferredSlugs
    ? preferredSlugs.flatMap((slug) => services.filter((item) => item.slug === slug))
    : services.filter((item) => item.slug !== service.slug).slice(0, 6);
  const servicePhotos = workPhotos.filter((p) => p.services.includes(service.slug));
  const relatedGuides = guides.filter((g) => g.relatedServices.includes(service.slug));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="border-b border-border bg-card">
        <div className={`mx-auto ${service.slug === "commercial-electrician" ? "max-w-7xl" : "max-w-5xl"} px-6 py-16 md:py-20`}>
          <div className={service.slug === "commercial-electrician" ? "grid items-center gap-10 lg:grid-cols-2" : service.slug === "power-points" || service.tileImage ? "grid items-center gap-10 md:grid-cols-2" : ""}>
          <div>
          <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-foreground">Electrical</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{service.title}</span>
          </div>
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            {service.pageTitle ?? service.title}
          </h1>
          {service.heroSubtitle && (
            <h2 className="mt-5 max-w-2xl text-xl font-bold tracking-tight md:text-2xl">{service.heroSubtitle}</h2>
          )}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0466270949"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" />
              {service.slug === "emergency-electrical" ? "Call Shane: 0466 270 949" : "Call Now"}
            </a>
            <a href="#quote"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
            >
              {service.slug === "test-and-tag" ? "Request a Free Quote" : service.slug === "emergency-electrical" ? "Non-Urgent Enquiry" : "Request a Quote"}
            </a>
          </div>
          </div>
          {service.slug === "commercial-electrician" && <CommercialHeroVideo />}
          {service.slug === "power-points" && service.image && (
            <img src={`/img/${service.image.file}`} alt={service.image.alt} width={service.image.width} height={service.image.height} decoding="async" className="aspect-[4/3] w-full rounded-2xl border border-border object-cover" />
          )}
          {service.tileImage && (
            <img
              src={`/img/${service.tileImage.file}`}
              alt={service.tileImage.alt ?? service.title}
              width={service.tileImage.width}
              height={service.tileImage.height}
              decoding="async"
              style={service.tileImage.focus ? { objectPosition: service.tileImage.focus } : undefined}
              className="aspect-[16/10] w-full rounded-2xl border border-border object-cover md:aspect-[4/3]"
            />
          )}
          </div>
        </div>
      </section>

      {service.slug === "emergency-electrical" ? <EmergencyHeroVideo /> : service.slug !== "commercial-electrician" && service.slug !== "power-points" && !service.tileImage && service.image && (
        <div className="mx-auto max-w-5xl px-6 pt-12">
          <img
            src={`/img/${service.image.file}`}
            alt={service.image.alt}
            width={service.image.width}
            height={service.image.height}
            decoding="async"
            className={service.slug === "ev-charger-install" ? "mx-auto h-auto max-h-[540px] w-auto max-w-full rounded-xl border border-border object-contain" : "h-auto w-full rounded-xl border border-border"}
          />
        </div>
      )}

      <section className="mx-auto max-w-5xl px-6 py-16">
        {service.slug === "ev-charger-install" ? <EVChargerDetails /> : service.slug === "smoke-alarms" ? <SmokeAlarmDetails /> : service.slug === "fault-finding" ? <FaultFindingDetails /> : service.slug === "body-corporate" ? <BodyCorporateDetails /> : service.slug === "real-estate" ? <RealEstateDetails /> : service.slug === "power-points" ? <PowerPointsDetails /> : service.slug === "light-switches" ? <LightSwitchesDetails /> : service.slug === "electrical-safety-inspections" ? <ElectricalSafetyDetails /> : service.slug === "switchboards" ? <SwitchboardDetails /> : service.slug === "emergency-electrical" ? <EmergencyElectricalDetails /> : (
          <>
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What's Included</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {service.included.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 sm:p-4">
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

        {service.sections && service.sections.length > 0 && (
          <>
            <h2 className="mt-14 text-2xl font-extrabold tracking-tight md:text-3xl">{service.slug === "test-and-tag" ? "Professional Test & Tag for Your Business" : "How I Work"}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.sections.map((sec) => (
                <div key={sec.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-bold tracking-tight">{sec.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sec.text}</p>
                </div>
              ))}
            </div>
          </>
        )}

          </>
        )}

        {service.slug === "test-and-tag" && (
          <div className="mt-10 rounded-xl border border-primary/20 bg-accent p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Make Electrical Testing One Less Thing to Worry About</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Get your equipment checked, your results documented and your next testing dates planned. A test tag records the result at the time of testing; continue checking equipment for damage before use and remove unsafe items from service.</p>
            <a href="#quote" className="mt-5 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">Request a Free Test & Tag Quote</a>
          </div>
        )}
        <div className="mt-10 rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Licensed, Insured & Accountable</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Licensed electrician, REC 30450",
              "Fully insured with $5 million public liability cover",
              "Upfront pricing with no surprises on the invoice",
              "The same electrician from first call to finished job",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {servicePhotos.length > 0 && <WorkGallery photos={servicePhotos} compact />}

      {otherServices.length > 0 && (
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-xl font-bold tracking-tight">Related Services</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-xl font-bold tracking-tight">Helpful Guides</h2>
            <div className="mt-4 flex flex-col gap-2">
              {relatedGuides.map((g) => (
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
          </div>
        </section>
      )}

      <section id="quote" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {service.slug === "emergency-electrical" ? "Non-Urgent Electrical Enquiries" : `Get a Quote for ${service.title}`}
            </h2>
            <p className="mt-4 text-muted-foreground">{service.slug === "ev-charger-install" ? "Tell me your suburb, vehicle model, parking location and any charger you are considering. Photos of the closed switchboard and proposed charger position are helpful. You do not need to choose a charger before getting in touch." : service.slug === "test-and-tag" ? "Include your suburb, workplace type, approximate number of items, any RCD testing required and preferred timing. I'll get back to you with a clear quote." : service.slug === "emergency-electrical" ? "For urgent faults, call 0466 270 949 to check availability. Use this form for follow-up repairs or general enquiries; it is not monitored as an emergency service." : service.slug === "power-points" ? "Tell me your suburb, how many outlets you need, and any style or budget preferences. Photos of the existing fittings and proposed locations are helpful. Already found a Clipsal, Hager, HPM or Legrand fitting you like? Send a product link and I can look into it." : "Fill in the form and I'll get back to you promptly."}</p>
          </div>
          <div className="mt-12 rounded-xl border border-border bg-background p-8 md:p-12">
            <QuoteForm key={service.slug} defaultService={service.slug} defaultMessage={service.slug === "ev-charger-install" ? "EV charger enquiry\nSuburb: \nVehicle model: \nHome / rental / shared parking / workplace: \nPreferred charger location: \nCharger model (if known): \nPreferred timing: " : service.slug === "power-points" ? "Power point enquiry\nSuburb: \nNumber of outlets: \nNew outlets or replacements: \nPreferred style / brand: \nBudget: " : service.slug === "test-and-tag" ? "Test & Tag enquiry\nSuburb: \nWorkplace type: \nApproximate number of items: \nRCD testing required: \nPreferred timing: " : `Enquiry: ${service.title}`} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
