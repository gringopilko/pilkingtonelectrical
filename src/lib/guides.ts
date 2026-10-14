export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  /** ISO date, used in the page's structured data. */
  updated: string;
  updatedLabel: string;
  intro: string;
  keyPoints: string[];
  sections: GuideSection[];
  sources: { label: string; url: string }[];
  /** Service slugs shown as related services, and where this guide is linked from. */
  relatedServices: string[];
}

export const guides: Guide[] = [
  {
    slug: "electrical-safety-checks-victorian-rentals",
    title: "Electrical Safety Checks for Victorian Rentals (From 13 October 2026)",
    shortTitle: "Rental electrical safety checks",
    seoTitle: "Victorian Rental Electrical Safety Checks 2026",
    metaDescription:
      "Two-yearly electrical safety checks apply to all Victorian rentals from 13 October 2026. What they cover, who can do them and what records to keep.",
    summary:
      "What the two-yearly check involves, what changes on 13 October 2026, who can do it and which records to keep.",
    updated: "2026-10-14",
    updatedLabel: "14 October 2026",
    intro:
      "From 13 October 2026, every Victorian rental property needs an electrical safety check at least once every two years, whether the rental agreement started before or after 29 March 2021. Here is what the rules say, who can do the check and what records to keep.",
    keyPoints: [
      "An electrical safety check is required at least once every 2 years, carried out by a licensed electrician.",
      "From 13 October 2026 this applies to all Victorian rental agreements, not only those that started after 29 March 2021.",
      "Rental providers must keep records of the checks and be able to show them.",
      "Gas safety checks are separate and need a licensed or registered gasfitter.",
      "Annual smoke alarm checks are a separate requirement.",
    ],
    sections: [
      {
        heading: "What the rules require",
        paragraphs: [
          "Consumer Affairs Victoria says a rental provider must have the electrical installations and fittings in a rental property checked by a licensed electrician at least once every 2 years. Energy Safe Victoria describes this as a check of the switchboards, wiring and fittings in the premises.",
          "If a check has not been done in the last two years when a renter moves in, the rental provider must arrange one as soon as practicable.",
        ],
      },
      {
        heading: "What changes on 13 October 2026",
        paragraphs: [
          "Until now, the two-yearly requirement applied to rental agreements entered into after 29 March 2021. Owners with older agreements were encouraged, but not required, to have periodic electrical checks.",
          "From 13 October 2026 the requirement extends to all rental agreements. If you manage older tenancies and cannot find a check on record, it is worth booking one now rather than waiting for the next lease event.",
        ],
      },
      {
        heading: "Who can do the check",
        paragraphs: [
          "The check must be carried out by a licensed or registered electrician. Consumer Affairs Victoria notes that electricians must be licensed with Energy Safe Victoria as Registered Electrical Contractors.",
          "I'm a Registered Electrical Contractor (REC 30450) and I'm happy to do rental electrical safety checks for owners, agents and property managers.",
        ],
      },
      {
        heading: "Records to keep",
        bullets: [
          "Rental providers must keep records of electrical safety checks and be able to show them.",
          "Records can be kept by the landlord, proprietor or real estate agent, and must be shown if a tenant or resident asks.",
          "Tenants Victoria notes that before a new rental agreement is signed, the rental provider must tell the renter the date of the last gas and electrical safety checks and any outstanding recommendations.",
        ],
        paragraphs: ["Keep each report with the property file so it can be found quickly."],
      },
      {
        heading: "If the check finds a problem",
        paragraphs: [
          "If a check shows that repairs are needed to make the property safe, Energy Safe Victoria says the rental provider should engage a Registered Electrical Contractor, or a licensed electrician employed by one, to do the work.",
          "When I do a check I give the owner or agent a written report. Any repairs, replacements or upgrades are quoted separately, so the owner can approve what they want before further work starts.",
        ],
      },
      {
        heading: "Gas and smoke alarms are separate",
        paragraphs: [
          "Gas safety checks must be done by a licensed or registered gasfitter, so they are not part of an electrician's check. Annual smoke alarm checks are also required for all rentals. These are separate checks with different intervals, so replacing an alarm does not replace the electrical safety check.",
        ],
      },
    ],
    sources: [
      { label: "Consumer Affairs Victoria: new changes to the rental laws", url: "https://www.consumer.vic.gov.au/housing/renting/new-changes-to-the-rental-laws" },
      { label: "Consumer Affairs Victoria: rental providers, gas and electrical safety", url: "https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/gas-electrical-and-water-safety-standards/rental-providers-gas-and-electrical-safety" },
      { label: "Energy Safe Victoria: residential tenancy changes for electricians", url: "https://www.energysafe.vic.gov.au/industry-guidance/electrical/electricians-toolkit/residential-tenancy" },
      { label: "Energy Safe Victoria: residential property safety checks", url: "https://www.energysafe.vic.gov.au/community-safety/energy-safety-guides/home-safety/tenants-and-renting-laws" },
      { label: "Tenants Victoria: safety requirements", url: "https://tenantsvic.org.au/explore-topics/during-your-tenancy/safety-requirements/" },
    ],
    relatedServices: ["electrical-safety-inspections", "real-estate", "smoke-alarms"],
  },
  {
    slug: "smoke-alarms-victorian-rentals",
    title: "Smoke Alarms in Victorian Rentals: Annual Checks and Who Does What",
    shortTitle: "Smoke alarms in rentals",
    seoTitle: "Smoke Alarm Rules for Victorian Rentals",
    metaDescription:
      "Annual smoke alarm checks apply to all Victorian rentals. What owners, agents and renters each need to do, and where an electrician can help.",
    summary:
      "Annual checks, urgent repairs and what owners, agents and renters each need to do, plus where an electrician can help.",
    updated: "2026-10-14",
    updatedLabel: "14 October 2026",
    intro:
      "Since 25 November 2025, annual smoke alarm safety checks have been mandatory for all Victorian rental properties. Here is what owners, agents and renters each need to do, and where an electrician can help.",
    keyPoints: [
      "Annual smoke alarm checks are mandatory for all rental agreements, whether they started before, on or after 29 March 2021.",
      "Rental providers and their agents arrange the annual check, and must make sure alarms are properly installed and working.",
      "A broken or faulty smoke alarm is an urgent repair.",
      "Renters must not tamper with alarms and should report faults straight away.",
      "Smoke alarms are compulsory in all Victorian homes, including houses, units, flats and townhouses.",
    ],
    sections: [
      {
        heading: "What the rules require",
        paragraphs: [
          "Smoke alarms are compulsory in all Victorian residential properties, and rental providers must make sure they are properly installed and working. Since 25 November 2025, rental providers and their agents must also arrange an annual smoke alarm safety check for all rental agreements.",
          "On or before the start of a rental agreement, the rental provider must give the renter written information about their obligation not to tamper with smoke alarms and to report any that are not working.",
        ],
      },
      {
        heading: "What renters should do",
        bullets: [
          "Never remove, cover or disable an alarm.",
          "Report a faulty or non-working alarm to the rental provider or property manager straight away.",
          "Broken or faulty alarms are urgent repairs under Victoria's rental laws.",
        ],
      },
      {
        heading: "Going beyond the minimum",
        paragraphs: [
          "The CFA recommends smoke alarms in every bedroom and living area, in addition to the minimum legal requirements. Fire Rescue Victoria recommends interconnecting alarms throughout a home, so that all of them sound when one is triggered.",
          "Alarms with a long-life battery, which the CFA says lasts up to 10 years, remove the need for the yearly battery swap.",
        ],
      },
      {
        heading: "Where an electrician can help",
        paragraphs: [
          "Hardwired and interconnected alarms are connected to the home's mains wiring, so installing or replacing them is work for a licensed electrician. Alarms also have a limited life, and the replacement date is usually marked on the alarm or in its instructions.",
          "I can test, service and replace alarms, assess hardwired and interconnected options, and quote the annual check together with the electrical safety check so access only needs to be arranged once.",
        ],
      },
      {
        heading: "Smoke alarm checks and electrical safety checks",
        paragraphs: [
          "The annual smoke alarm check and the two-yearly electrical safety check are separate requirements with different intervals. They can be done on the same visit to save arranging access twice, but one does not replace the other.",
        ],
      },
    ],
    sources: [
      { label: "Consumer Affairs Victoria: smoke alarms and fire safety", url: "https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/keeping-the-property-safe/smoke-alarms-and-fire-safety" },
      { label: "Consumer Affairs Victoria: new changes to the rental laws", url: "https://www.consumer.vic.gov.au/housing/renting/new-changes-to-the-rental-laws" },
      { label: "Fire Rescue Victoria: renters urged to know their smoke alarm rights", url: "https://www.frv.vic.gov.au/renters-urged-know-their-smoke-alarm-rights" },
    ],
    relatedServices: ["smoke-alarms", "electrical-safety-inspections", "real-estate"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
