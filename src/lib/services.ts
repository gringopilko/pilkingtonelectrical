export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  metaDescription: string;
  intro: string;
  included: string[];
  body: string[];
}

export const services: Service[] = [
  {
    slug: "switchboards",
    title: "Switchboard Upgrades & Repairs",
    shortDesc: "Old fuse box or tripping switchboard? Upgrade to a modern, compliant board.",
    metaDescription: "Switchboard upgrades, repairs and replacements across South East Melbourne. Licensed electrician, upfront pricing. Call Pilkington Electrical.",
    intro: "Your switchboard is the heart of your home's electrical safety. If it's still running on an old fuse box, tripping repeatedly, or hasn't been assessed in years, it's worth having it checked properly.",
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
  },
  {
    slug: "fault-finding",
    title: "Fault Finding & Repairs",
    shortDesc: "Flickering lights, dead outlets, or unexplained tripping, found and fixed properly.",
    metaDescription: "Electrical fault finding and repairs across South East Melbourne. Diagnosing the real cause, not just patching symptoms. Licensed electrician.",
    intro: "Intermittent faults are frustrating: power that drops out, lights that flicker, an outlet that's suddenly dead. I diagnose the actual cause rather than guessing or replacing parts until something works.",
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
  },
  {
    slug: "emergency-electrical",
    title: "Emergency Electrical",
    shortDesc: "Loss of power or an urgent electrical fault? Fast response across South East Melbourne.",
    metaDescription: "Emergency electrician for loss of power and urgent electrical faults across South East Melbourne. Call Pilkington Electrical.",
    intro: "Complete loss of power, a tripped board that won't reset, or anything that feels unsafe: call straight away. I'll talk you through what to check immediately and get to you as fast as possible.",
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
  },
  {
    slug: "commercial-electrician",
    title: "Commercial Electrician",
    shortDesc: "Reliable electrical trade partner for businesses, offices and retail fit-outs.",
    metaDescription: "Commercial electrician serving businesses across South East Melbourne. Fit-outs, maintenance, compliance work. Licensed and insured.",
    intro: "Downtime costs businesses money. I work with offices, retail spaces and commercial tenants to keep electrical systems running and get fit-out work done properly and on time.",
    included: [
      "Office & retail fit-outs",
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
    shortDesc: "Additional power points, USB outlets and switch upgrades.",
    metaDescription: "Power point and USB wall socket installation across South East Melbourne. Licensed electrician, upfront pricing.",
    intro: "Never enough power points? I install additional outlets, USB wall sockets, and can update old switches throughout your home or office.",
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
    shortDesc: "Compliant smoke alarm installation, testing and replacement.",
    metaDescription: "Smoke alarm installation, testing and replacement across South East Melbourne. Compliance-focused, licensed electrician.",
    intro: "Victorian regulations require interconnected, photoelectric smoke alarms in most homes. I install and service smoke alarms to make sure your property is properly compliant.",
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
    shortDesc: "Home EV charger supply and installation, done safely and to standard.",
    metaDescription: "EV charger installation across South East Melbourne. Home charging points installed safely and to compliance standards. Licensed electrician.",
    intro: "Charging at home is the easiest way to live with an EV. I install home EV charging points properly, assessing your switchboard's capacity first, not just bolting a charger to the wall.",
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
  {
    slug: "body-corporate",
    title: "Body Corporate & Strata Electrical",
    shortDesc: "A dependable trade partner for strata and body corporate common area electrical.",
    metaDescription: "Electrical services for body corporates and strata managers across South East Melbourne. Common area lighting, compliance, fast call-outs.",
    intro: "I work directly with strata and body corporate managers as a reliable trade partner: fast call-outs, clear communication, and invoicing that makes sense for committee approval.",
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
  },
  {
    slug: "electrical-safety-inspections",
    title: "Electrical Safety Inspections",
    shortDesc: "Periodic electrical safety checks for rental properties, sale, or peace of mind.",
    metaDescription: "Electrical safety inspections across South East Melbourne. Rental compliance checks, pre-sale inspections, landlord servicing. Licensed electrician.",
    intro: "Under Victoria's Residential Tenancies Regulations 2021, rental providers must have an electrical safety check carried out every 2 years by a licensed electrician, with a written record of the check kept and made available to renters on request. I carry out these checks properly and give you a clear report for your records.",
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
  },
  {
    slug: "test-and-tag",
    title: "Test and Tag",
    shortDesc: "Portable appliance testing and RCD testing for offices, retail, and small businesses.",
    metaDescription: "Test and tag services across South East Melbourne. Portable appliance testing and RCD safety switch testing to AS/NZS 3760:2022. Licensed electrician.",
    intro: "AS/NZS 3760:2022 sets the standard for in-service testing of portable electrical equipment — the appliances, leads and power boards that plug into a wall. Keeping on top of it is part of an employer's general workplace safety obligations, and it's straightforward to build into a regular routine so it's never something you have to think twice about.",
    included: [
      "Portable appliance testing & tagging (Class I & Class II)",
      "RCD / safety switch testing",
      "Visual inspection of cords, plugs & power boards",
      "Compliant tags — test date, retest date, pass/fail, on every item",
      "Written report for your records",
      "Recommended retest schedule based on your environment",
      "Suits offices, retail, small warehouses & rental properties",
    ],
    body: [
      "How often testing is needed depends on the environment — more frequent for construction sites and workshops, less frequent for a typical office. I'll recommend a schedule that fits your actual risk level rather than a one-size-fits-all interval.",
      "Every item gets a compliant tag on the spot, and you get a written report you can hand to an auditor, insurer, or landlord without a second thought.",
      "Get in touch with the number of items and the type of workplace, and I'll quote it properly rather than guessing at a number that doesn't fit your situation.",
    ],
  },
];
