/**
 * The short version of every service: name, address and one-line description.
 * The menu, footer, quote form and site-wide search data use this small list,
 * so they don't need to download every service page's full text.
 * Edit a service's title or short description here. Everything else lives in services.ts.
 */
export interface ServiceBrief {
  slug: string;
  title: string;
  shortDesc: string;
}

export const serviceList: ServiceBrief[] = [
  {
    slug: "electrical-safety-inspections",
    title: "Electrical Safety Inspections",
    shortDesc: "Periodic electrical safety checks for rental properties, sale, or peace of mind.",
  },
  {
    slug: "test-and-tag",
    title: "Test and Tag Melbourne",
    shortDesc: "Portable appliance and RCD testing with clear records for Melbourne businesses.",
  },
  {
    slug: "switchboards",
    title: "Switchboard Upgrades & Repairs",
    shortDesc: "Old fuse box or tripping switchboard? Upgrade to a modern, compliant board.",
  },
  {
    slug: "body-corporate",
    title: "Body Corporate & Strata Electrical",
    shortDesc: "A dependable trade partner for strata and body corporate common area electrical.",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property Managers",
    shortDesc: "Honest repairs, upgrade options and same day visits for agents, property managers and their owners.",
  },
  {
    slug: "safety-switches",
    title: "Safety Switches",
    shortDesc: "RCD safety switch installation and testing to protect your home and family.",
  },
  {
    slug: "fault-finding",
    title: "Fault Finding & Repairs",
    shortDesc: "Flickering lights, dead outlets, or unexplained tripping, found and fixed properly.",
  },
  {
    slug: "emergency-electrical",
    title: "Emergency Electrician",
    shortDesc: "Urgent fault finding, make-safe work and electrical repairs across Bayside and South East Melbourne.",
  },
  {
    slug: "rewiring-extensions",
    title: "Rewiring & Extensions",
    shortDesc: "Full or partial house rewires, new circuits for renovations and extensions.",
  },
  {
    slug: "wall-chasing",
    title: "Wall Chasing & Concealed Wiring",
    shortDesc: "Brick, concrete and masonry chasing with cables in conduit wherever possible, for a clean, built-in finish.",
  },
  {
    slug: "commercial-electrician",
    title: "Commercial Electrician",
    shortDesc: "Reliable electrical trade partner for businesses, offices and retail fit-outs.",
  },
  {
    slug: "hot-water",
    title: "Electrical Hot Water Services",
    shortDesc: "Installation and repair of electric hot water systems.",
  },
  {
    slug: "lighting",
    title: "Energy Efficient Lighting",
    shortDesc: "LED upgrades, downlights and outdoor lighting that cut your power bill.",
  },
  {
    slug: "power-points",
    title: "Power Points & USB Wall Sockets",
    shortDesc: "Additional power points, USB outlets and switch upgrades.",
  },
  {
    slug: "light-switches",
    title: "Light Switches & Dimmers",
    shortDesc: "Light switch replacements, dimmers and matching finishes for your home or business.",
  },
  {
    slug: "ceiling-fans",
    title: "Ceiling Fan Installation",
    shortDesc: "Supply and installation of ceiling fans, or new wiring for your own fan.",
  },
  {
    slug: "smoke-alarms",
    title: "Smoke Alarms",
    shortDesc: "Compliant smoke alarm installation, testing and replacement.",
  },
  {
    slug: "ev-charger-install",
    title: "EV Charger Installation",
    shortDesc: "Home EV charger supply and installation, done safely and to standard.",
  },
];
