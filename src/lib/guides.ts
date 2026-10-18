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
        heading: "Safety switch (RCD) testing intervals",
        paragraphs: [
          "Safety switches (RCDs) protect people from electric shock and have their own testing schedule. There are two kinds of test. The push-button test is the quick test of the test button. The operating time test uses a tester to confirm the device trips fast enough.",
          "For office type work, WorkSafe Queensland publishes these maximum intervals, and notes that longer intervals may apply under AS/NZS 3760. Factories, workshops and harsher environments are tested more often.",
        ],
        bullets: [
          "Fixed safety switch, push-button test: every 6 months.",
          "Fixed safety switch, operating time test: every 2 years.",
          "Portable safety switch, push-button test: every 3 months.",
          "Portable safety switch, operating time test: every 2 years.",
        ],
      },
      {
        heading: "Keeping it simple on site",
        paragraphs: [
          "Anyone can do a regular visual check for frayed cords, cracked casings and burnt plugs, and should take damaged items out of use straight away. The formal electrical test and tag is done by a competent person, and I can include fixed and portable safety switch testing in the same visit.",
          "If an office shares space with a workshop, warehouse or commercial kitchen, those areas follow the shorter intervals for their environment, not the office ones.",
        ],
      },
    ],
    sources: [
      { label: "WorkSafe Victoria: electrical safety (archived guidance, May 2023)", url: "https://www.worksafe.vic.gov.au/archived-electrical-safety-may-2023" },
      { label: "Victorian Trades Hall Council OHS Reps: electrical equipment laws and guidelines", url: "https://www.ohsrep.org.au/electrical_equipment" },
      { label: "WorkSafe Queensland: testing and tagging of electrical equipment (maximum intervals)", url: "https://www.worksafe.qld.gov.au/safety-and-prevention/hazards/electricity/electrical-products-and-equipment/testing-and-tagging-electrical-equipment" },
    ],
    relatedServices: ["test-and-tag", "safety-switches", "commercial-electrician", "body-corporate"],
  },
  {
    slug: "safety-switch-keeps-tripping",
    title: "Why Does My Safety Switch Keep Tripping? A Step by Step Check",
    shortTitle: "Safety switch keeps tripping",
    seoTitle: "Why Does My Safety Switch Keep Tripping?",
    metaDescription:
      "A safety switch that keeps tripping is protecting you. How to find the cause safely, what you can check yourself and when to call an electrician.",
    summary:
      "How to find what is tripping your safety switch, the common causes, and when it is time to call an electrician.",
    updated: "2026-10-16",
    updatedLabel: "16 October 2026",
    intro:
      "A tripping safety switch is annoying, but it is doing its job. It has detected electricity leaking where it should not and cut the power in a fraction of a second. The cause is usually a faulty appliance, water getting into an outdoor fitting, or damaged wiring. Here is how to narrow it down safely.",
    keyPoints: [
      "A safety switch trips when it detects current leaking to earth. It is protecting you, so never hold it on or bypass it.",
      "The most common cause is a faulty appliance, which you can usually find yourself by unplugging everything and testing one item at a time.",
      "Tripping after rain points to water in an outdoor light, power point or garden fitting.",
      "If it trips with everything unplugged, the fault is in the fixed wiring or a hard-wired appliance and needs an electrician.",
      "A burning smell, scorch marks or a tingle from a tap or appliance means turn off the main switch and call straight away.",
    ],
    sections: [
      {
        heading: "Safety switch or circuit breaker?",
        paragraphs: [
          "Safety switches, also called RCDs or RCBOs, usually have a test button marked T or Test. Circuit breakers do not. A circuit breaker trips when a circuit is overloaded or short circuited, for example when too many heaters run on one circuit. A safety switch trips when it detects current leaking to earth, which can happen through a damaged appliance, water or a person.",
        ],
      },
      {
        heading: "Step by step: find the cause",
        bullets: [
          "Unplug everything on the circuits that lost power. Pull the plugs out, as switching off at the power point is not enough.",
          "Reset the safety switch by pushing it back up to on.",
          "If it stays on, plug appliances back in one at a time and switch each one on. When the safety switch trips again, you have found the faulty appliance.",
          "Leave that appliance unplugged and have it repaired or replaced before using it again.",
          "If the safety switch trips again with everything unplugged, stop there. The fault is in the fixed wiring, a light fitting or a hard-wired appliance such as an oven, hot water unit or air conditioner, and needs an electrician.",
        ],
      },
      {
        heading: "Common causes",
        bullets: [
          "Faulty appliances, often kettles, toasters, washing machines, fridges and heaters.",
          "Water in outdoor lights, power points and garden lighting, especially after rain.",
          "Cables damaged by screws, nails or rodents.",
          "Old wiring with insulation that has broken down over time.",
          "A failing hot water element or oven element.",
          "Several appliances each leaking a little, which adds up enough to trip the switch.",
          "Circuits that share a neutral, which modern safety switches pick up, often straight after a switchboard upgrade.",
          "Occasionally, the safety switch itself has failed.",
        ],
      },
      {
        heading: "If it only trips sometimes",
        paragraphs: [
          "Intermittent tripping is the hardest kind to track down. Keep a note of when it happens: after rain, overnight when the hot water heats, when a particular appliance runs, or at random. Those notes save a lot of time when the circuits are tested.",
        ],
      },
      {
        heading: "What not to do",
        bullets: [
          "Do not hold the switch on, tape it up or try to bypass it.",
          "Do not keep resetting it over and over. If it trips straight away, there is a fault to find.",
          "Do not open the switchboard, power points or appliances to look for the problem.",
        ],
      },
      {
        heading: "When to call an electrician",
        bullets: [
          "It trips with nothing plugged in.",
          "It trips straight after you reset it.",
          "It trips whenever it rains.",
          "It trips at random and you cannot link it to an appliance.",
          "There is a burning smell, scorch marks or a tingle from a tap or appliance. Turn off the main switch first, then call.",
        ],
      },
      {
        heading: "Where I can help",
        paragraphs: [
          "I test each circuit with an insulation resistance tester to find where current is leaking, then repair the fault or explain the options before any further work. If your switchboard has only one or two safety switches for the whole home, I can also talk you through upgrading to a safety switch on every circuit, so one fault does not black out the whole house.",
        ],
      },
    ],
    sources: [
      { label: "Energy Safe Victoria: test your safety switches every year", url: "https://energysafe.vic.gov.au/media-centre/news/energy-safe-urges-victorians-test-safety-switches-protect-lives-and-property" },
    ],
    relatedServices: ["fault-finding", "safety-switches", "switchboards"],
  },
  {
    slug: "signs-switchboard-needs-upgrading",
    title: "Signs Your Switchboard Needs Upgrading",
    shortTitle: "Signs your switchboard needs upgrading",
    seoTitle: "Signs Your Switchboard Needs Upgrading",
    metaDescription:
      "Old fuses, no safety switches, scorch marks or a board that keeps tripping? The signs your switchboard needs upgrading, and what an upgrade involves.",
    summary:
      "The warning signs of an old or overloaded switchboard, what the rules say for rentals, and what an upgrade involves.",
    updated: "2026-10-16",
    updatedLabel: "16 October 2026",
    intro:
      "Your switchboard is where every circuit in your home is controlled and protected. Many homes around Bayside still have boards installed decades ago, long before today's appliances, solar panels and EV chargers. Here are the signs it is time for an upgrade, and what one involves.",
    keyPoints: [
      "Old ceramic fuses and boards without safety switches give little or no protection against electric shock.",
      "Scorch marks, buzzing, a burning smell or a warm board are warning signs to act on quickly.",
      "Victorian rentals must have circuit breakers and safety switches protecting the power and lighting circuits.",
      "Older boards can have a backing panel that contains asbestos, which must be handled by a licensed removalist.",
      "Adding solar, a battery, an EV charger or a heat pump often means the board needs more space or capacity.",
    ],
    sections: [
      {
        heading: "Warning signs",
        bullets: [
          "Ceramic fuses that are rewired with fuse wire when they blow.",
          "No safety switches, or only one or two covering the whole house.",
          "Fuses blowing or breakers tripping regularly.",
          "Scorch marks, melted plastic, a burning smell, buzzing or crackling.",
          "A switchboard that feels warm to touch.",
          "Lights that flicker or dim when appliances start.",
          "No spare room for new circuits.",
          "Loose or broken parts, or an old timber or fibre backing panel.",
        ],
        paragraphs: [
          "If you notice scorch marks, a burning smell or buzzing, turn off the main switch if it is safe to do so and call an electrician.",
        ],
      },
      {
        heading: "Fuses, circuit breakers and safety switches",
        paragraphs: [
          "Old fuses and circuit breakers protect the cables from overheating. Neither protects people from electric shock. That is the job of a safety switch, which detects current leaking to earth and cuts the power in a fraction of a second. A modern board has both, and the best setup is a combined breaker and safety switch on every circuit, so a fault only turns off its own circuit.",
        ],
      },
      {
        heading: "Rental properties",
        paragraphs: [
          "Victorian rental properties must have the power outlets and lighting circuits connected to circuit breakers and safety switches. A board that only has fuses, or circuits without safety switch protection, needs an upgrade to meet the standard.",
        ],
      },
      {
        heading: "Asbestos in older switchboards",
        paragraphs: [
          "Older switchboards often have a backing panel that may contain asbestos. It is generally safe if left alone, but it must not be drilled, cut or broken. When a board like this is replaced, the panel needs to be removed by someone licensed to handle asbestos. I will tell you if your board needs this and what is involved before any work starts.",
        ],
      },
      {
        heading: "Planning for solar, batteries and EV chargers",
        paragraphs: [
          "New circuits need space on the board, and big loads like EV chargers and heat pumps need enough capacity in your supply. Upgrading the board before adding them means everything is protected properly, labelled clearly and ready for what you add next.",
        ],
      },
      {
        heading: "What an upgrade involves",
        bullets: [
          "Assessing your existing board, circuits and supply.",
          "A new switchboard with a main switch and protection for every circuit.",
          "Type A safety switches, ideally a combined breaker and safety switch on each circuit.",
          "Surge protection, and arc fault devices on bedroom and living area circuits where recommended.",
          "Every circuit clearly labelled, with room to grow.",
          "Full testing, and a certificate of electrical safety.",
        ],
      },
      {
        heading: "Where I can help",
        paragraphs: [
          "I offer switchboard upgrades at different levels to suit your budget, and always recommend a premium board such as Hager onekonekt or Clipsal MAX9 for the best protection and room for the future. Every option is done properly, tested and certified.",
        ],
      },
    ],
    sources: [
      { label: "Consumer Affairs Victoria: rental providers, gas and electrical safety", url: "https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/gas-electrical-and-water-safety-standards/rental-providers-gas-and-electrical-safety" },
      { label: "Energy Safe Victoria: test your safety switches every year", url: "https://energysafe.vic.gov.au/media-centre/news/energy-safe-urges-victorians-test-safety-switches-protect-lives-and-property" },
    ],
    relatedServices: ["switchboards", "safety-switches", "electrical-safety-inspections"],
  },
  {
    slug: "ev-charging-apartment-buildings-victoria",
    title: "EV Charging in Apartment Buildings: A Guide for Victorian Owners Corporations",
    shortTitle: "EV charging in apartment buildings",
    seoTitle: "EV Charging in Victorian Apartment Buildings",
    metaDescription:
      "How Victorian owners corporations can plan EV charging: approvals, building capacity, charging options, load management and billing, in plain English.",
    summary:
      "How owners corporations can plan EV charging fairly: approvals, building capacity, the main options and how costs are shared.",
    updated: "2026-10-16",
    updatedLabel: "16 October 2026",
    intro:
      "More apartment owners are buying electric vehicles, and most want to charge at home. In a shared building that means working through approvals, the building's electrical capacity and how the costs are shared. In August 2026 the Victorian Government published an EV-ready guide for owners corporations. This page sums up the practical side.",
    keyPoints: [
      "Charging work that touches common property, such as switchboards, cable trays or the car park, needs owners corporation approval.",
      "The Victorian Government recommends owners corporations agree an EV strategy, so decisions are fair and consistent.",
      "The building's spare electrical capacity decides how many chargers can run at once, which is why load management matters.",
      "Apartment charging is typically around 7 kW, which comfortably covers daily driving overnight.",
      "An EV-ready backbone, paid for once, makes it cheaper and simpler for each owner to connect later.",
    ],
    sections: [
      {
        heading: "Start with an EV strategy",
        paragraphs: [
          "The Victorian Government's guide recommends that owners corporations agree an EV strategy: an agreed approach to deciding when and how EV charging is provided. It helps the committee handle requests consistently, rather than deciding each one from scratch.",
          "A short survey of owners is a good first step. It shows how many already have an EV, how many plan to buy one and what they drive each week, which tells you how much charging the building really needs.",
        ],
      },
      {
        heading: "Approvals and sharing the costs",
        paragraphs: [
          "Any charging work that uses common property, including the main switchboard, cable trays and shared car park walls, needs approval from the owners corporation. The guide suggests costs generally follow who benefits: shared infrastructure that serves everyone can be shared, while an owner's own charger and connection is paid for by that owner.",
        ],
      },
      {
        heading: "Check the building's capacity",
        paragraphs: [
          "Before chargers go in, an electrician should assess the building's maximum demand: how much power the building uses at its busiest and how much is left over. If capacity is tight, load management lets many chargers share what is available, slowing charging slightly at peak times instead of needing an expensive supply upgrade.",
        ],
      },
      {
        heading: "Three common options",
        bullets: [
          "One owner, one charger: a dedicated circuit from the owner's supply to their car space, approved by the owners corporation and paid for by the owner.",
          "EV-ready building: the owners corporation installs a dedicated EV board and a cable backbone through the car park once, and each owner connects a charger to it when they need one.",
          "Shared charging: networked chargers in common bays, with access by app or RFID card and each user billed for the energy they use.",
        ],
      },
      {
        heading: "Charger features worth insisting on",
        bullets: [
          "OCPP, the open standard that lets chargers work with different management software, so the building is not locked into one brand.",
          "Load management across the whole building.",
          "Access control by RFID card or app.",
          "Metering for each user, so energy can be billed or recovered fairly.",
          "Type 2 connectors, the standard for AC charging in Australia.",
        ],
      },
      {
        heading: "Where I can help",
        paragraphs: [
          "I can assess your building's capacity, talk your committee through the options and install everything from a single owner's charger to a full EV-ready backbone with load management. See my EV charger installation page for the systems I recommend for apartments.",
        ],
      },
    ],
    sources: [
      { label: "Victorian Government: EV-ready buildings", url: "https://www.energy.vic.gov.au/renewable-energy/zero-emission-vehicles/ev-ready-buildings" },
      { label: "Victorian Government: EV-ready guide for owners corporations (August 2026)", url: "https://www.energy.vic.gov.au/__data/assets/pdf_file/0028/750565/EV-ready-guide-for-owners-corporations.pdf" },
    ],
    relatedServices: ["ev-charger-install", "body-corporate"],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
