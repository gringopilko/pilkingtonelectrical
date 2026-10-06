export const suburbGroups = [
  {
    area: "Inner Bayside",
    blurb: "Elwood and the surrounding beachside suburbs, a mix of character homes, apartment blocks and busy commercial strips close to the city.",
    suburbs: ["Elwood", "St Kilda", "St Kilda East", "St Kilda West", "Balaclava", "Windsor", "Prahran", "South Yarra", "Albert Park", "Middle Park", "South Melbourne", "Port Melbourne"],
  },
  {
    area: "Bayside",
    blurb: "South along the bay through Brighton and Hampton East, where I'm based, down to Beaumaris. Heritage homes, newer builds, and apartment buildings with body corporate electrical needs.",
    suburbs: ["Brighton", "Brighton East", "Hampton", "Hampton East", "Black Rock", "Beaumaris", "Mentone", "Mordialloc"],
  },
  {
    area: "Stonnington & Boroondara",
    blurb: "Established, leafy suburbs with a mix of period homes and townhouse developments. Common jobs here include rewires and switchboard upgrades in older housing stock.",
    suburbs: ["Malvern", "Malvern East", "Glen Iris", "Camberwell", "Caulfield", "Caulfield North", "Caulfield South"],
  },
  {
    area: "South East",
    blurb: "Bentleigh through to Keysborough, a broad mix of family homes, townhouses and light commercial properties.",
    suburbs: [
      "Bentleigh", "Bentleigh East", "Moorabbin", "Cheltenham", "Dingley Village",
      "Murrumbeena", "Oakleigh", "Clayton", "Clayton South", "Clarinda",
      "Springvale", "Noble Park", "Keysborough",
    ],
  },
  {
    area: "Outer South East & Bay",
    blurb: "Aspendale down to Carrum Downs, coastal and outer suburban properties, including newer builds.",
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
    localIntro: "Pilkington Electrical services Bentleigh houses, units and renovation projects, with tidy workmanship and compliant electrical upgrades delivered personally, start to finish.",
    commonJobs: ["Renovation and extension wiring", "Switchboards and safety switches", "Lighting, fans and power points", "Fault finding and repairs"],
  },
  "Bentleigh East": {
    localIntro: "Covering Bentleigh East's established family homes around GESAC and the Yarra Yarra Golf Club, through to the newer medium-density townhouses going up along Centre Road and East Boundary Road as the area continues to develop.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Renovation and extension circuits for family homes", "New-build electrical for townhouse developments", "Fault finding and repairs"],
  },
  "Brighton East": {
    localIntro: "Working on Brighton East's Art Deco and period Victorian homes around Hawthorn Road and Dendy Park, where original character features are common and electrical work needs to respect the age of the property.",
    commonJobs: ["Period and Art Deco home rewiring", "Switchboard upgrades for older homes", "Renovation and extension electrical", "Lighting and power-point installation"],
  },
  Cheltenham: {
    localIntro: "Servicing Cheltenham's mix of character homes near Charman Road and newer family builds further out, close to Southland and the sandbelt golf courses, with the area continuing to grow as the Suburban Rail Loop development progresses.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Fault finding and repairs", "Lighting and power-point installation"],
  },
  "Black Rock": {
    localIntro: "Covering Black Rock from the Victorian and Edwardian homes near the Beach Road and Half Moon Bay end, through to the mid-century houses and newer apartment developments further from the coast.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Coastal-property electrical (corrosion-aware fittings)", "Renovation and extension circuits"],
  },
  Oakleigh: {
    localIntro: "Working across Oakleigh's mix of Federation-era weatherboards near Atherton Road and the newer townhouse and apartment developments that have grown up around Eaton Mall and the station, with switchboard upgrades and rewiring for older homes alongside new-build electrical for recent builds.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard upgrades for older weatherboards", "New-build electrical for townhouses and apartments", "Lighting and power-point installation"],
  },
  Beaumaris: {
    localIntro: "Servicing Beaumaris, including the suburb's well-known collection of mid-century modern homes around the Concourse and the coast. Careful, respectful electrical work in houses where original character matters, alongside standard upgrades for newer builds.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Electrical work in heritage mid-century homes", "Renovation and extension circuits", "Lighting and outdoor electrical"],
  },
  "Malvern East": {
    localIntro: "Servicing Malvern East's period homes and renovated properties, from Edwardian and Californian bungalow rewiring through to switchboard upgrades for newer townhouse developments near Wattletree Road.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Lighting and power-point installation"],
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
