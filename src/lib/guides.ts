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
      "What the two-yearly check involves, what changed on 13 October 2026, who can do it and which records to keep.",
    updated: "2026-10-14",
    updatedLabel: "14 October 2026",
    intro:
      "Since 13 October 2026, every Victorian rental property needs an electrical safety check at least once every two years, whether the rental agreement started before or after 29 March 2021. Here is what the rules say, who can do the check and what records to keep.",
    keyPoints: [
      "An electrical safety check is required at least once every 2 years, carried out by a licensed electrician.",
      "Since 13 October 2026 this applies to all Victorian rental agreements, not only those that started after 29 March 2021.",
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
        heading: "What changed on 13 October 2026",
        paragraphs: [
          "Before 13 October 2026, the two-yearly requirement applied to rental agreements entered into after 29 March 2021. Owners with older agreements were encouraged, but not required, to have periodic electrical checks.",
          "Since 13 October 2026 the requirement covers all rental agreements. If you manage older tenancies and cannot find a check on record, book one now rather than waiting for the next lease event.",
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
  {
    slug: "safety-switches-victorian-homes-rentals",
    title: "Safety Switches in Victorian Homes and Rentals: Testing, Rules and Upgrades",
    shortTitle: "Safety switches (RCDs)",
    seoTitle: "Safety Switch Rules and Testing in Victoria",
    metaDescription:
      "How safety switches work, how to test yours, what the Victorian rental minimum standard requires and when to call a licensed electrician.",
    summary:
      "What a safety switch does, how to test it, what rental properties must have and when a switchboard upgrade is needed.",
    updated: "2026-10-14",
    updatedLabel: "14 October 2026",
    intro:
      "A safety switch cuts the power in a fraction of a second when it detects a fault that could shock someone. Energy Safe Victoria asks households to test theirs every year, and rental properties have needed them since 29 March 2023. Here is how to test yours, what the rules require and when to call an electrician.",
    keyPoints: [
      "A safety switch monitors the flow of electricity in a circuit and turns the power off when it detects a problem that could be a risk to people.",
      "Energy Safe Victoria recommends testing safety switches every year, whether you own or rent.",
      "Since 29 March 2023, Victorian rental properties covered by the minimum standards need a modern switchboard with circuit breakers and safety switches.",
      "Safety switches are also called residual current devices (RCDs, RCCBs or RCBOs).",
      "Fitting or replacing them is work for a licensed electrician, and a switchboard replacement must be inspected before it is energised.",
    ],
    sections: [
      {
        heading: "What a safety switch does",
        paragraphs: [
          "Energy Safe Victoria describes a safety switch as a device that monitors the flow of electricity through a circuit and turns the power off when it detects a problem that could put someone at risk, before an incident occurs.",
          "Safety switches are correctly known as residual current devices, and you may see them labelled RCD, RCCB or RCBO on the switchboard. A circuit breaker protects the wiring from overload. A safety switch protects people from electric shock. They do different jobs, so a switchboard with only circuit breakers or old fuses is not the same protection.",
        ],
      },
      {
        heading: "How to test your safety switches",
        bullets: [
          "Find the safety switches on your switchboard. Each has a test button, usually marked T.",
          "Press the test button. The switch should trip and the power to the circuits it protects should go off.",
          "Switch it back on to reset it.",
          "If the power does not go off when you press the button, the safety switch may have failed and should be checked by a licensed electrician.",
        ],
        paragraphs: [
          "Energy Safe Victoria's Test Reset Protect campaign recommends doing this every year. Testing cuts power to the lights and appliances on that circuit, so save any work on computers first and turn off sensitive equipment.",
        ],
      },
      {
        heading: "What rental properties must have",
        paragraphs: [
          "Energy Safe Victoria advises that under the Residential Tenancies Regulations 2021, rental property switchboards must be fitted with safety switches. The requirement applies to properties covered by the minimum standards from 29 March 2023.",
          "Safety switches are one part of the two-yearly electrical safety check that now applies to all Victorian rentals. A rental provider who is not sure what is on the switchboard should have it checked rather than assume.",
        ],
      },
      {
        heading: "Older homes and owner occupied homes",
        paragraphs: [
          "Energy Safe Victoria notes that many older properties have not been fitted with safety switches, and says households without them should engage a licensed electrician to install them. The test advice applies whether you own your home or rent.",
          "Common signs of an older board are ceramic fuses, a board with no safety switch at all, or a safety switch that protects only some of the circuits. A licensed electrician can check which circuits are protected and what an upgrade would involve.",
        ],
      },
      {
        heading: "When a switchboard replacement is needed",
        paragraphs: [
          "If the board is old, damaged or has no room for modern protective devices, replacing the switchboard may be the right fix. Under Victorian law this is prescribed electrical work for a licensed electrician.",
          "Energy Safe Victoria says a switchboard replacement is classed as high risk and must be inspected by an independent licensed electrical inspector before it is energised. In practice that means planning the inspection before the work starts, and it is why the power may stay off for a short time after the new board is installed.",
        ],
      },
      {
        heading: "Where I can help",
        paragraphs: [
          "I can test and assess safety switches, add or replace them, and quote a switchboard upgrade where the board needs it. For rentals I can include safety switch testing in the electrical safety check, so owners and agents get one written report covering the board.",
        ],
      },
    ],
    sources: [
      { label: "Energy Safe Victoria: test your safety switches every year", url: "https://energysafe.vic.gov.au/media-centre/news/energy-safe-urges-victorians-test-safety-switches-protect-lives-and-property" },
      { label: "Energy Safe Victoria: ensuring power until inspection", url: "https://esv.vic.gov.au/industry-guidance/electrical/frequently-asked-questions/ensuring-power-until-inspection" },
      { label: "Energy Safe Victoria: residential tenancy changes for electricians", url: "https://www.energysafe.vic.gov.au/industry-guidance/electrical/electricians-toolkit/residential-tenancy" },
    ],
    relatedServices: ["safety-switches", "switchboards", "electrical-safety-inspections", "real-estate"],
  },
  {
    slug: "test-and-tag-victoria-how-often",
    title: "Test and Tag in Victoria: How Often and What the Law Says",
    shortTitle: "Test and tag: how often",
    seoTitle: "Test and Tag in Victoria: How Often?",
    metaDescription:
      "How often test and tag is needed in Victoria, what the law says, what AS/NZS 3760 covers and what records a workplace should keep.",
    summary:
      "There is no single fixed interval in Victorian law. What employers must do, how AS/NZS 3760 is used and what records to keep.",
    updated: "2026-10-14",
    updatedLabel: "14 October 2026",
    intro:
      "Victorian law does not set one fixed test and tag interval for every workplace. Employers have a general duty to keep electrical equipment safe, and WorkSafe Victoria points to AS/NZS 3760 for recommended timeframes. Here is how that works in practice and what to keep on file.",
    keyPoints: [
      "WorkSafe Victoria says regular testing and tagging is needed to find faults and deterioration that cannot be seen by eye.",
      "How often depends on the type of equipment, where it is used and how it is used.",
      "For recommended timeframes, WorkSafe Victoria refers employers to AS/NZS 3760, the standard for in-service inspection and testing of electrical equipment.",
      "Employers should keep records of their electrical safety maintenance program, including testing and tagging.",
      "The person testing needs to be competent. A licensed electrician can also repair faults found during testing.",
    ],
    sections: [
      {
        heading: "Who decides the interval",
        paragraphs: [
          "There is no single government timetable that applies to every workplace. Employers in Victoria have a duty under the Occupational Health and Safety Act 2004 to provide a safe working environment, and keeping portable electrical equipment safe is part of that duty.",
          "WorkSafe Victoria says the nature and frequency of inspection and testing depends on factors such as the type of electrical equipment, the operating environment and how the equipment is used. For detailed recommended timeframes, it points employers to AS/NZS 3760.",
        ],
      },
      {
        heading: "What AS/NZS 3760 is",
        paragraphs: [
          "AS/NZS 3760 is the Australian and New Zealand standard for in-service safety inspection and testing of electrical equipment. It sets out how equipment is inspected and tested, and recommends testing intervals for different types of equipment and environments.",
          "The Victorian Trades Hall Council OHS Reps site describes the standard's table as running from every 3 months for high use, high risk or hire equipment, up to 5 years for equipment that is not open to abuse or cord flexing. In practice, a harsher environment or heavily used equipment is tested more often than low risk equipment in a quiet office. The right schedule for your workplace is worked out from the equipment and how it is used, not taken from a single number.",
        ],
      },
      {
        heading: "Typical intervals by environment",
        paragraphs: [
          "AS/NZS 3760:2022 gives indicative testing intervals by environment. These are a starting point, with a tolerance of about two weeks either side. They can be varied after a documented risk assessment, so equipment that is used harder, moved often or damaged easily may need testing sooner.",
        ],
        bullets: [
          "Every 3 months: construction, building, demolition and mining sites (also covered by AS/NZS 3012), and hired or leased equipment.",
          "Every 6 months: factories, warehouses and production or manufacturing workshops, and commercial cleaning equipment.",
          "Every 12 months: equipment whose cords are flexed in normal use, open to abuse or used in a hostile environment, such as equipment that is moved often.",
          "Every 2 years: residential-type areas such as hotels, motels, boarding houses and hostels.",
          "Every 5 years: equipment that is not flexed, abused or in a hostile environment, such as fixed office equipment like computers.",
        ],
      },
      {
        heading: "Why testing finds more than a visual check",
        paragraphs: [
          "WorkSafe Victoria notes that regular testing and tagging is needed to detect electrical faults and deterioration that cannot be found by visual inspection. A cord can look fine and still have a failing earth connection or damaged insulation inside.",
          "Equipment can also be damaged between test dates, so staff should know to stop using anything with a damaged plug, cord or casing and report it.",
        ],
      },
      {
        heading: "Who can do the testing",
        paragraphs: [
          "WorkSafe Victoria says employers should consider who is able to inspect and test electrical equipment, for example someone who is suitably trained or a licensed electrician. It also notes that some people are only competent to do a pass or fail test, while a licensed electrician can also repair defects found during testing.",
          "I'm a licensed electrician (REC 30450), so faults found during testing can be assessed and fixed under the same quote, where you want that.",
        ],
      },
      {
        heading: "Records to keep",
        bullets: [
          "A register of the equipment tested.",
          "Test results, including anything that failed and what was done about it.",
          "The date of the last test and the recommended retest date.",
          "Any repairs or replacements made after a failed test.",
        ],
        paragraphs: [
          "WorkSafe Victoria advises employers to keep records of their electrical safety maintenance programs, including testing and tagging. Good records are also the quickest way to show an inspector, insurer or client that the program is being followed.",
        ],
      },
      {
        heading: "Safety switches are part of the picture",
        paragraphs: [
          "Safety switches (RCDs) protect people from electric shock and need testing too. Portable and fixed RCDs can be included in a test and tag visit, as agreed in the quote.",
        ],
      },
    ],
    sources: [
      { label: "WorkSafe Victoria: electrical safety (archived guidance, May 2023)", url: "https://www.worksafe.vic.gov.au/archived-electrical-safety-may-2023" },
      { label: "Victorian Trades Hall Council OHS Reps: electrical equipment laws and guidelines", url: "https://www.ohsrep.org.au/electrical_equipment" },
    ],
    relatedServices: ["test-and-tag", "safety-switches", "commercial-electrician", "body-corporate"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
