export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  metaDescription: string;
  intro: string;
  heroSubtitle?: string;
  seoTitle?: string;
  pageTitle?: string;
  included: string[];
  body: string[];
  /** Optional headed cards shown instead of plain paragraphs. */
  sections?: { title: string; text: string }[];
  /** Optional banner shown under the page heading. Files live in public/img. */
  image?: { file: string; alt: string; width: number; height: number };
}

export const services: Service[] = [
  {
    slug: "electrical-safety-inspections",
    title: "Electrical Safety Inspections",
    shortDesc: "Periodic electrical safety checks for rental properties, sale, or peace of mind.",
    metaDescription: "Electrical safety inspections across South East Melbourne. Rental compliance checks, pre-sale inspections, landlord servicing. Licensed electrician.",
    intro: "Thorough electrical safety checks for rental properties, landlords and property managers across Bayside and South-East Melbourne. Inspection, testing and a clear written report from your licensed electrician, with a clear quote before you book. Ask about combining your check with smoke alarm servicing.",
    included: [
      "Switchboard & safety switch (RCD) testing",
      "Visible wiring condition check",
      "Power point & switch condition check",
      "Written inspection report for your records",
      "Rental/tenancy compliance checks (2-year cycle)",
      "Pre-sale electrical inspections",
      "Can be booked alongside a smoke alarm check (checked annually under the same regulations)",
    ],
    body: [
      "Landlords and property managers often need this done on a regular cycle for rental compliance. I can set that up as a standing arrangement so it's one less thing to remember each cycle.",
      "Selling or buying a property? A pre-sale inspection gives you a clear report of any issues before they come up in someone else's building inspection.",
      "Every inspection gets a proper price based on the property and scope. Get in touch and I'll quote it directly rather than guessing at a number that doesn't fit your situation.",
    ],
    image: {
      file: "electrical-inspection-report-apartment.webp",
      alt: "Electrical inspection report on a clipboard beside a smoke alarm and electrician's tools in a modern apartment",
      width: 1600,
      height: 800,
    },
  },
  {
    slug: "test-and-tag",
    title: "Test and Tag Melbourne",
    shortDesc: "Portable appliance and RCD testing with clear records for Melbourne businesses.",
    metaDescription: "Test and tag across Bayside and South East Melbourne. Appliance and RCD testing, clear reports and retest schedules from a licensed electrician. Free quotes.",
    heroSubtitle: "Keep Your Workplace Safe, Tested & Properly Documented",
    intro: "Professional inspection and testing of appliances, leads, power boards and safety switches across Bayside and South East Melbourne. Pilkington Electrical helps you identify electrical faults, maintain clear testing records and plan appropriate retesting, with services carried out by a licensed A-Grade electrician.",
    included: [
      "Visual inspection of equipment, plugs and cords",
      "Portable appliance testing: Class I and Class II equipment",
      "Extension leads, power boards and portable tools",
      "Office, kitchen and workplace appliances",
      "Portable and fixed RCD testing, as agreed in your quote",
      "Test tags on equipment that passes; failed items clearly identified",
      "Equipment register and written test results",
      "Recommended retest dates for your equipment and environment"
    ],
    body: [
      "Testing is carried out in accordance with AS/NZS 3760:2022 where applicable. The scope and testing schedule are agreed for your workplace, including any additional requirements for construction equipment."
    ],
    sections: [
      {
        "title": "Portable Appliance Testing & Tagging",
        "text": "Damaged plugs, worn insulation and loose connections can create serious hazards. Each item is visually inspected before the appropriate electrical tests are performed. This covers everyday equipment such as monitors, printers, chargers, kettles, extension leads and portable tools."
      },
      {
        "title": "RCD & Safety Switch Testing",
        "text": "RCDs disconnect power when they detect an imbalance in current that may indicate leakage to earth. I can carry out push-button checks and instrument testing of operating times for portable and fixed RCDs, where applicable. Results are recorded, and any concerns are explained. We will agree on access and any power interruptions before testing."
      },
      {
        "title": "Clear Reports & Equipment Records",
        "text": "Receive an equipment register and written test results so you can track what was tested, the outcome and recommended retest dates. These records support your electrical safety maintenance program and make it easier to respond to requests from facility managers, contractors or insurers."
      },
      {
        "title": "An Appropriate Retesting Schedule",
        "text": "Testing frequency depends on the equipment, how it is used and the environment. Moisture, dust, heat, frequent movement and mechanical wear can increase risk. I will recommend intervals suited to your workplace. Construction sites have additional requirements; include any site rules when requesting a quote."
      },
      {
        "title": "Offices, Retail & Hospitality",
        "text": "Testing for offices, shops, cafés and other businesses, covering accessible appliances, leads, chargers and power boards. We can plan the visit around your operations where possible and agree on which equipment needs to be disconnected."
      },
      {
        "title": "Trades, Workshops & Managed Properties",
        "text": "Testing for portable tools, leads and equipment in workshops and small warehouses, plus shared facilities managed by property managers and owners corporations. Tell me how and where equipment is used so the quote reflects the scope and operating conditions."
      },
      {
        "title": "If an Item Fails Testing",
        "text": "Failed equipment is clearly identified and should be removed from service until repaired and successfully retested, or replaced. I will explain the issue and your options. As a licensed electrician, I can also investigate related electrical faults and quote suitable repairs separately before proceeding."
      },
      {
        "title": "Direct Service & Upfront Pricing",
        "text": "Deal directly with a local A-Grade electrician from your first enquiry through to completion. Your quote is based on the number and type of items, site access and any RCD testing required, with a clear scope and price before work starts."
      }
    ],
    image: {
      "file": "test-and-tag.webp",
      "alt": "Portable appliance tester beside a tagged power lead and tools on an office desk",
      "width": 1600,
      "height": 646
    },
  },
  {
    slug: "switchboards",
    title: "Switchboard Upgrades & Repairs",
    shortDesc: "Old fuse box or tripping switchboard? Upgrade to a modern, compliant board.",
    metaDescription: "Switchboard upgrades, repairs and replacements across South East Melbourne. Licensed electrician, upfront pricing. Call Pilkington Electrical.",
    intro: "Modern circuit protection, reliable repairs and switchboard upgrades for homes and rental properties across Bayside and South-East Melbourne. Get clear advice from your licensed electrician and an upfront quote tailored to your property.",
    included: [
      "Switchboard upgrades (fuses to safety switches)",
      "New switchboard installation",
      "Switchboard repairs & fault diagnosis",
      "Safety switch (RCD) installation",
      "Compliance upgrades for sale/lease",
      "Circuit breaker replacement",
    ],
    body: [
      "Old ceramic fuses don't offer the same protection as a modern safety switch. If your board still has fuse wire rather than switches, or if it's tripping without an obvious cause, that's a sign it's time for an upgrade.",
      "I'll assess your existing board, explain exactly what's needed and why, and give you an upfront price before any work starts, with no surprises on the invoice.",
    ],
    image: {
      file: "switchboards.webp",
      alt: "Electrician working on a residential switchboard",
      width: 1600,
      height: 640,
    },
  },
  {
    slug: "body-corporate",
    title: "Body Corporate & Strata Electrical",
    heroSubtitle: "Shared-property maintenance, with clear communication at every step.",
    pageTitle: "Body Corporate & Strata Electrician Melbourne",
    shortDesc: "A dependable trade partner for strata and body corporate common area electrical.",
    metaDescription: "Body corporate and strata electrician in Bayside and South East Melbourne. Common-area lighting, fault finding, maintenance and clear committee reporting.",
    intro: "I help owners corporations, committees and property managers look after common-area electrical systems across Bayside and South East Melbourne. From a failed stairwell light to planned upgrades, you'll get practical advice, an agreed scope and reporting that makes sense for committee approval.",
    included: [
      "Common area lighting & repairs",
      "Carpark & stairwell electrical",
      "Compliance & safety switch checks",
      "Fault finding for shared services",
      "Scheduled maintenance arrangements",
      "Clear, itemised invoicing for committees",
    ],
    body: [
      "Body corporate work has its own pace: approvals, committee sign-off, clear scope before work starts. I keep communication direct with the strata manager and provide invoicing that's straightforward to bring to a committee.",
    ],
    image: {
      file: "body-corporate.webp",
      alt: "Apartment building and electrician working on a shared switchboard",
      width: 1600,
      height: 649,
    },
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property Managers",
    heroSubtitle: "Helpful to your team. Respectful of tenants. Mindful of owners' budgets.",
    pageTitle: "Electrician for Real Estate & Property Managers Melbourne",
    shortDesc: "Honest repairs, upgrade options and same day visits for agents, property managers and their owners.",
    metaDescription: "Electrical repairs, rental safety checks and maintenance for real estate agents in Bayside and South East Melbourne. Helpful advice, tenant-friendly visits and clear pricing.",
    intro: "I'm here to build long term relationships with real estate agents and property managers, based on understanding what you and your owners actually need. Whether it's a single repair, a compliance check or a building full of small jobs, I'm happy to help.",
    included: [
      "Repairs and fault finding for rental properties",
      "The cheapest option, always offered",
      "Upgrade paths that save owners money over time",
      "Save money on call outs by visiting several properties in one building on the same day",
      "Electrical safety inspections and smoke alarm checks",
      "Quotes with one clear GST inclusive total",
      "A call from me before anything goes over the quote",
    ],
    body: [],
    sections: [
      {
        title: "Fix the cause, not just the symptom",
        text: "A quick patch is sometimes the cheapest fix on the day, but it often means the same fault comes back a few months later. That's another call out, another bill and another message from the tenant. I'd rather find the real cause of a problem and talk you through the options.",
      },
      {
        title: "An affordable repair, plus a better path",
        text: "I'll offer the most affordable safe option and, where it makes sense, a second path that may reduce costs over time, such as updating ageing lighting to modern LED fittings. I'll explain the trade-off and let the owner decide.",
      },
      {
        title: "Several properties, one visit",
        text: "If you manage several properties in the same building, we can group agreed jobs into one visit where access and timing allow. I'll discuss any call-out savings when quoting.",
      },
      {
        title: "Ideas are welcome",
        text: "I'm always happy to find the cheapest path for your owners. If you have any ideas on how to make things easier or cheaper, I'd like to hear them. The goal is a relationship that works well for everyone.",
      },
    ],
    image: {
      file: "real-estate-keys.webp",
      alt: "House keys at an open doorway, illustrating rental property access and tenancy handover",
      width: 1600,
      height: 800,
    },
  },
  {
    slug: "safety-switches",
    title: "Safety Switches",
    shortDesc: "RCD safety switch installation and testing to protect your home and family.",
    metaDescription: "Safety switch (RCD) installation and testing across South East Melbourne. Licensed electrician, same-day quotes.",
    intro: "A safety switch (RCD) is one of the cheapest, most effective pieces of protection in your home, cutting power in milliseconds if there's a fault. Many older homes still don't have one fitted.",
    included: [
      "Safety switch installation",
      "Testing existing safety switches",
      "Multiple circuit protection",
      "Compliance certification",
      "Nuisance tripping diagnosis",
    ],
    body: [
      "If your home was built before the mid-1990s, there's a good chance it isn't fitted with a safety switch on every circuit. It's a straightforward job with a real safety impact.",
      "If your safety switch is tripping randomly, that's usually a sign of a fault elsewhere in the circuit. I'll track down the actual cause rather than just resetting it.",
    ],
    image: {
      file: "safety-switches.webp",
      alt: "Safety switches in a switchboard being tested by an electrician",
      width: 960,
      height: 640,
    },
  },
  {
    slug: "fault-finding",
    title: "Fault Finding & Repairs",
    heroSubtitle: "Careful testing. Clear answers. Practical repairs.",
    pageTitle: "Electrical Fault Finding & Repairs Melbourne",
    shortDesc: "Flickering lights, dead outlets, or unexplained tripping, found and fixed properly.",
    metaDescription: "Electrical fault finding and repairs across South East Melbourne. Diagnosing the real cause, not just patching symptoms. Licensed electrician.",
    intro: "Tripping circuits, flickering lights or power that disappears can be frustrating and worrying. I'll listen to what's happening, investigate the cause and explain the repair options clearly, so you know what needs attention and what the next step will cost.",
    included: [
      "Circuit tracing & fault diagnosis",
      "Flickering or dimming lights",
      "Dead power points or switches",
      "Intermittent tripping",
      "Burning smells or warm switches (urgent)",
      "Pre-purchase electrical inspections",
    ],
    body: [
      "Electrical faults rarely show up exactly where the problem is. A tripping circuit at one end of the house can be caused by a fault somewhere else entirely, so proper fault finding means testing systematically, not guessing.",
      "If something feels off, such as warm switches, a burning smell, or repeated tripping, treat it as urgent and get it looked at before it becomes a bigger problem.",
    ],
    image: {
      file: "fault-finding.webp",
      alt: "Electrician using a multimeter to diagnose a switchboard fault",
      width: 1600,
      height: 716,
    },
  },
  {
    slug: "emergency-electrical",
    title: "Emergency Electrician",
    heroSubtitle: "Urgent Electrical Faults. Direct Help From Your Local Electrician.",
    shortDesc: "Urgent fault finding, make-safe work and electrical repairs across Bayside and South East Melbourne.",
    metaDescription: "Emergency electrician for loss of power and urgent electrical faults across South East Melbourne. Call Pilkington Electrical.",
    intro: "Lost power, a safety switch that will not reset, or a damaged electrical fitting? Call Pilkington Electrical for urgent fault finding and repairs across Bayside and South East Melbourne. You will speak directly with Shane, a licensed A-Grade electrician, who will confirm availability, estimated arrival time and charges before arranging a visit.",
    included: [
      "Total loss of power",
      "Switchboard that won't reset",
      "Burning smells or sparking",
      "Storm & water damage",
      "Exposed or damaged wiring",
    ],
    body: [
      "If you've lost power, first check whether it's just your property or the whole street, as that changes what's actually needed. Call and I'll help you figure out the next step immediately.",
      "For anything involving sparking, burning smells, or exposed wiring, stay clear of the area and call straight away.",
    ],
    image: {
      file: "emergency-electrical.webp",
      alt: "Electrician investigating a switchboard fault by torchlight",
      width: 1600,
      height: 640,
    },
  },
  {
    slug: "rewiring-extensions",
    title: "Rewiring & Extensions",
    shortDesc: "Full or partial house rewires, new circuits for renovations and extensions.",
    metaDescription: "Residential rewiring and extension wiring across South East Melbourne. Full and partial rewires, new circuits. Licensed electrician.",
    intro: "Whether you're renovating, extending, or your home's wiring is simply past its use-by date, I handle full and partial rewires with minimal disruption to your day-to-day.",
    included: [
      "Full house rewires",
      "Partial rewires (room by room)",
      "New circuits for extensions",
      "Renovation electrical fit-outs",
      "Old wiring replacement (VIR, cloth-covered)",
      "New power & lighting circuits",
    ],
    body: [
      "Homes with wiring from the 1970s or earlier are often due for a rewire, particularly if you're renovating anyway, since it's far easier to do before walls are closed up again.",
      "I plan the work to keep disruption manageable, and clean up properly at the end of every job.",
    ],
    image: {
      file: "rewiring-extensions.webp",
      alt: "Electrician installing wiring during a home renovation",
      width: 1600,
      height: 640,
    },
  },
  {
    slug: "commercial-electrician",
    title: "Commercial Electrician",
    heroSubtitle: "We design practical electrical layouts and estimate the work before you commit.",
    pageTitle: "Commercial Electrical Planning, Estimates & Installation",
    shortDesc: "Reliable electrical trade partner for businesses, offices and retail fit-outs.",
    metaDescription: "Commercial electrical layout design, cost estimates, fit-outs and maintenance in Bayside and South East Melbourne. Practical advice from a licensed electrician.",
    intro: "Planning a fit-out or upgrading a workplace? I can help design a practical lighting and power layout, estimate the electrical scope and discuss options for your budget. From initial planning through installation, you'll have one clear point of contact.",
    included: [
      "Office & retail fit-outs",
      "Electrical layout planning & cost estimates",
      "Commercial lighting",
      "Data & power point installation",
      "Compliance & test-and-tag",
      "Ongoing maintenance contracts",
      "Fast call-outs for businesses",
    ],
    body: [
      "I invoice cleanly and work around your business hours where possible, so electrical work doesn't mean lost trading time.",
      "For ongoing sites, such as offices, retail tenancies or small commercial buildings, I can also set up a standing maintenance arrangement rather than starting from scratch each time something comes up.",
    ],
    sections: [
  {
    "title": "Design around how you work",
    "text": "Send your plans, equipment requirements and ideas. I'll discuss lighting, power point positions, circuits and access, and help develop a practical electrical layout suited to the space."
  },
  {
    "title": "Estimate early. Quote a clear scope.",
    "text": "An early estimate helps you plan a budget; a final quote depends on the agreed scope, site access and supply capacity. I'll identify assumptions, allowances and any further information needed so you can compare options."
  },
  {
    "title": "Coordinate installation and disruption",
    "text": "We agree access, shutdowns and timing with your business or builder. I'll explain what can be staged and discuss work outside trading hours where practical and available."
  },
  {
    "title": "Know when specialist design is needed",
    "text": "Some projects need an electrical engineer, lighting designer, surveyor or other specialist. I'll identify those requirements and coordinate the electrical installation scope, rather than treating an early layout as a complete engineering design."
  }
],
    image: {
      file: "commercial-electrician.webp",
      alt: "Electrician installing track lighting in a modern commercial office",
      width: 1600,
      height: 640,
    },
  },
  {
    slug: "hot-water",
    title: "Electrical Hot Water Services",
    shortDesc: "Installation and repair of electric hot water systems.",
    metaDescription: "Electric hot water system installation and repairs across South East Melbourne. Licensed electrician.",
    intro: "No hot water is never convenient. I install and repair electric hot water systems, and can talk you through the right option if you're replacing an old unit.",
    included: [
      "Electric hot water system installation",
      "Hot water system repairs",
      "System replacement (like-for-like or upgrade)",
      "Circuit & switchboard compatibility checks",
    ],
    body: [
      "If your hot water system has failed, I can usually assess and quote quickly, including whether your existing circuit can handle a straight swap or needs upgrading.",
    ],
    image: {
      file: "hot-water.webp",
      alt: "Electric hot water system and electrical connections outside a home",
      width: 1600,
      height: 640,
    },
  },
  {
    slug: "lighting",
    title: "Energy Efficient Lighting",
    shortDesc: "LED upgrades, downlights and outdoor lighting that cut your power bill.",
    metaDescription: "Energy efficient LED lighting installation across South East Melbourne. Downlights, outdoor & security lighting. Licensed electrician.",
    intro: "Switching to LED lighting is one of the simplest ways to cut your power bill while improving how a space looks and feels, inside and out.",
    included: [
      "LED downlight installation & upgrades",
      "Outdoor & garden lighting",
      "Security & sensor lighting",
      "Old halogen downlight replacement",
      "Dimmer installation",
    ],
    body: [
      "Old halogen downlights run hot and use significantly more power than LED equivalents. Swapping them over is usually a same-day job with an immediate difference on your next bill.",
    ],
  },
  {
    slug: "power-points",
    title: "Power Points & USB Wall Sockets",
    pageTitle: "Power Point Installation & USB Wall Sockets Melbourne",
    seoTitle: "Power Point Installation Melbourne | USB Power Points & Upgrades",
    heroSubtitle: "More power where you need it, with styles to suit your home and budget.",
    shortDesc: "Additional power points, USB outlets and switch upgrades.",
    metaDescription: "Power points, USB wall sockets and switch upgrades across South East Melbourne. Explore Clipsal, Hager, HPM and Legrand styles to suit your home and budget.",
    intro: "Get power where you need it, with a finish you love. I install additional power points, USB wall sockets and matching switches — from affordable everyday fittings to designer ranges for your home or office.",
    included: [
      "Additional power point installation",
      "USB wall socket upgrades",
      "Outdoor & weatherproof power points",
      "Switch replacement & upgrades",
      "Double-adaptor overload fixes",
    ],
    body: [
      "If you're relying on power boards and double adaptors in every room, it's usually a sign you need more outlets, both for convenience and for safety.",
    ],
    image: {
      file: "power-points.webp",
      alt: "Black double power point on a dark splashback in a modern kitchen",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "light-switches",
    title: "Light Switches & Dimmers",
    shortDesc: "Light switch replacements, dimmers and matching finishes for your home or business.",
    metaDescription: "Light switch and dimmer installation in Bayside and South East Melbourne. Clipsal, Hager, HPM and Legrand / BTicino. Licensed electrician, upfront quotes.",
    heroSubtitle: "Your Lighting. Your Style. Your Control.",
    intro: "Replace worn switches, add compatible dimmers or coordinate a fresh look throughout your home. Pilkington Electrical installs and upgrades light switches across Bayside and South East Melbourne, with options to match your power points, interior finishes and budget.",
    included: ["Light switch replacements", "Dimmer installation and replacement", "Two-way and multi-gang switching", "Matching switches and power points", "Legrand / BTicino Living Now and other suitable ranges"],
    body: [],
  },
  {
    slug: "ceiling-fans",
    title: "Ceiling Fan Installation",
    shortDesc: "Supply and installation of ceiling fans, or new wiring for your own fan.",
    metaDescription: "Ceiling fan installation across South East Melbourne. Supply and install, or wiring for your own fan. Licensed electrician.",
    intro: "Ceiling fans are a cost-effective way to keep rooms comfortable year-round. I can supply and install, or wire up a fan you've already bought.",
    included: [
      "Ceiling fan installation (supply & install, or install-only)",
      "Fan replacement",
      "New wiring/bracing for fan points",
      "Remote & wall-control fan switches",
    ],
    body: [
      "If a room doesn't already have a fan-rated ceiling point, I can install the bracing and wiring needed to support one properly, not just hang it off a light fitting.",
    ],
  },
  {
    slug: "smoke-alarms",
    title: "Smoke Alarms",
    heroSubtitle: "Understand your options. Keep your alarms working.",
    pageTitle: "Smoke Alarm Installation & Servicing Melbourne",
    image: { file: "smoke-alarm-ceiling.webp", alt: "Clipsal smoke alarm installed on a home ceiling", width: 875, height: 656 },
    shortDesc: "Compliant smoke alarm installation, testing and replacement.",
    metaDescription: "Smoke alarm installation, servicing and rental checks in Bayside and South East Melbourne. Compare hardwired, battery and interconnected alarms with a licensed electrician.",
    intro: "All Victorian homes must have working smoke alarms. I assess your property, install suitable alarms and discuss photoelectric and interconnected options, with hard-wiring where required. Rental properties need annual smoke alarm safety checks.",
    included: [
      "Smoke alarm installation",
      "Interconnected alarm systems",
      "Battery & unit replacement",
      "Compliance checks for sale/lease",
      "Landlord compliance servicing",
    ],
    body: [
      "If you're selling, leasing, or simply unsure when your smoke alarms were last checked, it's a quick job to get them assessed and brought up to current standards.",
    ],
  },
  {
    slug: "ev-charger-install",
    title: "EV Charger Installation",
    pageTitle: "EV Charger Installation in Bayside & South East Melbourne",
    heroSubtitle: "Charging that suits your car, your home and your budget.",
    image: { file: "evnex-home-charger.webp", alt: "Evnex home EV charger mounted on an exterior wall beside garden plants", width: 1249, height: 1245 },
    shortDesc: "Home EV charger supply and installation, done safely and to standard.",
    metaDescription: "EV charger installation across South East Melbourne. Home charging points installed safely and to compliance standards. Licensed electrician.",
    intro: "Not sure which charger you need? I'll assess your electrical supply, discuss how you drive and quote a practical setup before work begins. Based in Hampton East, I help homeowners, property managers and businesses plan charging with clear advice and straightforward communication.",
    included: [
      "Home EV charger installation",
      "Switchboard capacity assessment",
      "Dedicated circuit installation",
      "Compliance & safety certification",
      "Apartment/body corporate EV consultations",
    ],
    body: [
      "A proper EV charger install starts with checking whether your existing switchboard and supply can handle the extra load. Sometimes an upgrade is needed alongside the charger itself, and I'll tell you upfront if that's the case.",
    ],
  },
];
