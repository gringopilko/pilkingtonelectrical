export const suburbGroups = [
  {
    area: "Inner Bayside",
    blurb: "Elwood and the surrounding beachside suburbs — a mix of character homes, apartment blocks and busy commercial strips close to the city.",
    suburbs: ["Elwood", "St Kilda", "St Kilda East", "St Kilda West", "Balaclava", "Windsor", "Prahran", "South Yarra", "Albert Park", "Middle Park", "South Melbourne", "Port Melbourne"],
  },
  {
    area: "Bayside",
    blurb: "South along the bay through Brighton and Hampton East, where I'm based, down to Beaumaris — heritage homes, newer builds, and apartment buildings with body corporate electrical needs.",
    suburbs: ["Brighton", "Brighton East", "Hampton", "Hampton East", "Black Rock", "Beaumaris", "Mentone", "Mordialloc"],
  },
  {
    area: "Stonnington & Boroondara",
    blurb: "Established, leafy suburbs with a mix of period homes and townhouse developments — common jobs here include rewires and switchboard upgrades in older housing stock.",
    suburbs: ["Malvern", "Malvern East", "Glen Iris", "Camberwell", "Caulfield", "Caulfield North", "Caulfield South"],
  },
  {
    area: "South East",
    blurb: "Bentleigh through to Keysborough — a broad mix of family homes, townhouses and light commercial properties.",
    suburbs: [
      "Bentleigh", "Bentleigh East", "Moorabbin", "Cheltenham", "Dingley Village",
      "Murrumbeena", "Oakleigh", "Clayton", "Clayton South", "Clarinda",
      "Springvale", "Noble Park", "Keysborough",
    ],
  },
  {
    area: "Outer South East & Bay",
    blurb: "Aspendale down to Carrum Downs — coastal and outer suburban properties, including newer builds.",
    suburbs: [
      "Aspendale", "Aspendale Gardens", "Braeside", "Waterways", "Bangholme",
      "Patterson Lakes", "Seaford", "Carrum Downs",
    ],
  },
];

export function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export interface SuburbEntry {
  name: string;
  slug: string;
  area: string;
  blurb: string;
  neighbours: string[];
  localIntro?: string;
  commonJobs?: string[];
}

const suburbDetails: Record<string, Pick<SuburbEntry, "localIntro" | "commonJobs">> = {
  "Hampton East": {
    localIntro: "Based locally in Hampton East, Pilkington Electrical provides direct, owner-operated service for houses, townhouses, units and local businesses throughout 3188 and nearby Bayside suburbs.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Fault finding and electrical repairs", "Lighting, power points and ceiling fans", "EV charger and dedicated circuit installation"],
  },
  Hampton: {
    localIntro: "Servicing Hampton homes, apartments and small businesses from nearby Hampton East, with straightforward communication directly from the electrician completing the work.",
    commonJobs: ["Switchboard and RCBO upgrades", "Renovation wiring and new circuits", "Lighting and power-point installation", "Smoke alarms and electrical maintenance"],
  },
  Moorabbin: {
    localIntro: "Providing residential and small commercial electrical work across Moorabbin, from repairs and upgrades in established homes to maintenance for local businesses and property managers.",
    commonJobs: ["Electrical fault finding", "Commercial and real-estate maintenance", "Switchboard upgrades", "Lighting and dedicated appliance circuits"],
  },
  Bentleigh: {
    localIntro: "Pilkington Electrical services Bentleigh houses, units and renovation projects, with tidy workmanship and compliant electrical upgrades delivered by a local sole trader.",
    commonJobs: ["Renovation and extension wiring", "Switchboards and safety switches", "Lighting, fans and power points", "Fault finding and repairs"],
  },
  Brighton: {
    localIntro: "Providing careful residential electrical work and property maintenance throughout Brighton, including established homes, apartments and renovation projects.",
    commonJobs: ["Lighting and architectural upgrades", "Switchboard and RCBO upgrades", "Rewiring and renovation circuits", "Body corporate and real-estate maintenance"],
  },
  Elwood: {
    localIntro: "Continuing to service Elwood after relocating the business base to Hampton East, including older homes, apartments, body corporate common areas and local businesses.",
    commonJobs: ["Older-home fault finding and rewiring", "Apartment and body corporate maintenance", "Switchboard and safety-switch upgrades", "Lighting and power-point installation"],
  },
  "St Kilda": {
    localIntro: "Servicing St Kilda apartments, character homes, commercial premises and body corporate properties with reliable repairs, upgrades and ongoing electrical maintenance.",
    commonJobs: ["Apartment and body corporate maintenance", "Fault finding and urgent repairs", "Switchboard and RCBO upgrades", "Lighting and commercial electrical work"],
  },
};

export function getAllSuburbs(): SuburbEntry[] {
  return suburbGroups.flatMap((group) =>
    group.suburbs.map((name) => ({
      name,
      slug: slugify(name),
      area: group.area,
      blurb: group.blurb,
      neighbours: group.suburbs.filter((s) => s !== name),
      ...suburbDetails[name],
    })),
  );
}

export function getSuburbBySlug(slug: string): SuburbEntry | undefined {
  return getAllSuburbs().find((s) => s.slug === slug);
}
