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
  "Albert Park": {
    localIntro: "Working on Albert Park's Victorian terrace and semi-detached housing near St Vincent Gardens and Bridport Street, much of it under heritage overlay, with electrical work that respects the age and character of the property.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard upgrades respecting heritage features", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  "Middle Park": {
    localIntro: "Servicing Middle Park's well-preserved Victorian and Edwardian terraces around Armstrong Street and Canterbury Road, one of Melbourne's strictest heritage-conservation areas, with electrical work suited to the character of the property.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard upgrades respecting heritage features", "Renovation and extension circuits", "Fault finding and repairs"],
  },
  "South Melbourne": {
    localIntro: "Covering South Melbourne's wide, leafy streets of Victorian homes and apartment buildings around Clarendon Street, including properties near the South Melbourne Market.",
    commonJobs: ["Period-home rewiring and fault finding", "Apartment and flat electrical work", "Switchboard and safety-switch upgrades", "Renovation and extension circuits"],
  },
  "Port Melbourne": {
    localIntro: "Working across Port Melbourne's mix of single-fronted Victorian timber worker's cottages and large-scale new apartment developments near Bay Street, two very different housing types that both come through regularly.",
    commonJobs: ["Period-home rewiring and fault finding", "Apartment and flat electrical work", "Switchboard and safety-switch upgrades", "New-build electrical for apartments"],
  },
  Windsor: {
    localIntro: "Working across Windsor's diverse mix of Victorian terrace housing, semi-detached cottages and growing apartment stock around Chapel Street, with electrical work suited to the suburb's older, mostly rental-occupied properties.",
    commonJobs: ["Rental compliance electrical checks", "Period-home rewiring and fault finding", "Apartment and flat electrical work", "Switchboard and safety-switch upgrades"],
  },
  Prahran: {
    localIntro: "Servicing Prahran's mix of restored historic homes and modern apartments around Chapel Street and Greville Street, including properties in and around the Prahran Market precinct.",
    commonJobs: ["Period-home rewiring and fault finding", "Apartment and flat electrical work", "Switchboard and safety-switch upgrades", "Rental compliance electrical checks"],
  },
  "South Yarra": {
    localIntro: "Covering South Yarra's mix of period terrace homes near Fawkner Park and Darling Street, and the denser apartment stock around Toorak Road and Chapel Street, one of Melbourne's more prestigious addresses.",
    commonJobs: ["Period-home rewiring and fault finding", "Apartment and flat electrical work", "Switchboard and safety-switch upgrades", "Renovation and extension circuits"],
  },
  "St Kilda East": {
    localIntro: "Working across St Kilda East's mix of 1960s flats, Victorian-era terraces and medium-density apartments near Carlisle Street and Alma Park, with electrical work suited to both older buildings and more recent developments.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Apartment and flat electrical work", "Fault finding and repairs", "Rental compliance electrical checks"],
  },
  "St Kilda West": {
    localIntro: "Servicing St Kilda West's quieter, tightly held pocket near the bay, where townhouses, low-rise apartments and character homes make up some of the area's most established real estate.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Character-home rewiring and fault finding", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  Balaclava: {
    localIntro: "Covering Balaclava's period homes and semi-detached cottages around Carlisle Street, including the late-1870s terrace housing typical of the area, with electrical work that respects the age of the property.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Rental compliance electrical checks"],
  },
  Caulfield: {
    localIntro: "Working around Caulfield's mix of homes near the racecourse and Monash University's Caulfield campus, with switchboard upgrades and general electrical work for the area's established housing stock.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Fault finding and repairs", "Rental compliance electrical checks", "Lighting and power-point installation"],
  },
  "Caulfield North": {
    localIntro: "Servicing Caulfield North's tree-lined streets and period homes around Caulfield Park and Hawthorn Road, where heritage character is common and electrical work needs a careful approach.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard upgrades respecting heritage features", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  "Caulfield South": {
    localIntro: "Covering Caulfield South's period-style family homes around Princes Park, with switchboard upgrades and rewiring for the area's predominantly established detached housing.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Fault finding and repairs"],
  },
  Mentone: {
    localIntro: "Working on Mentone's character homes near Charman Road and the Mentone Beach foreshore, where original features like high ceilings and picture rails are common, alongside newer builds further from the beachside strip.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  Mordialloc: {
    localIntro: "Servicing Mordialloc's mix of mid-century houses, character cottages and newer townhouses near Main Street and Mordialloc Creek, with switchboard upgrades and rewiring that respect the age of the property.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Fault finding and repairs", "New-build electrical for townhouses"],
  },
  Malvern: {
    localIntro: "Working across Malvern's grand Victorian and Edwardian homes around Glenferrie Road and High Street, where much of the housing stock is heritage-listed and electrical work needs a careful, considered approach.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard upgrades respecting heritage features", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  "Glen Iris": {
    localIntro: "Covering Glen Iris's mix of period homes, townhouses and apartments either side of Gardiners Creek, from older character properties near High Street to newer builds throughout the suburb.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Renovation and extension circuits", "New-build electrical for townhouses and apartments"],
  },
  Camberwell: {
    localIntro: "Servicing Camberwell's grand period homes around Camberwell Junction and Burke Road, much of it brick housing from the early twentieth century, with careful electrical work that suits the character of the property.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard upgrades for older brick homes", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  "Dingley Village": {
    localIntro: "Servicing Dingley Village's family homes, mostly built from the 1970s onward around quiet court-style streets near the Dingley Village Neighbourhood Centre, with straightforward switchboard and general electrical work for established family properties.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Fault finding and repairs", "Lighting and power-point installation"],
  },
  Murrumbeena: {
    localIntro: "Working in Murrumbeena's village-feel pocket around the heritage-listed Murrumbeena Village Precinct, a small, well-connected suburb where character homes sit alongside more recent development.",
    commonJobs: ["Period-home rewiring and fault finding", "Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Lighting and power-point installation"],
  },
  Clayton: {
    localIntro: "Covering Clayton's mix of 1960s homes and student/rental housing around Monash University and Clayton Road, where a high proportion of properties are rentals needing regular compliance electrical work.",
    commonJobs: ["Rental compliance electrical checks", "Switchboard and safety-switch upgrades", "Shared-housing and rental electrical work", "Fault finding and repairs"],
  },
  "Clayton South": {
    localIntro: "Servicing Clayton South's family homes near the sandbelt golf courses and Westall, a mix of established properties and newer development close to Monash Medical Centre and the university precinct.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Renovation and extension circuits", "Rental compliance electrical checks", "Fault finding and repairs"],
  },
  Clarinda: {
    localIntro: "Working across Clarinda's established family homes near Clarinda Shopping Village, with switchboard upgrades and general electrical work for the suburb's mostly mid-to-late-twentieth-century housing stock.",
    commonJobs: ["Switchboard and safety-switch upgrades", "Fault finding and repairs", "Renovation and extension circuits", "Lighting and power-point installation"],
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
  Springvale: {
    localIntro: "Servicing Springvale's diverse housing mix, with a significant proportion of rental properties and established homes close to the Monash Freeway and the suburb's busy shopping precinct.",
    commonJobs: ["Rental compliance electrical checks", "Switchboard and safety-switch upgrades", "Fault finding and repairs", "Lighting and power-point installation"],
  },
  "Noble Park": {
    localIntro: "Working across Noble Park's mix of houses and apartments, a notably diverse residential and commercial area where around a third of homes are apartments, roughly double the Melbourne average.",
    commonJobs: ["Apartment and flat electrical work", "Rental compliance electrical checks", "Switchboard and safety-switch upgrades", "Fault finding and repairs"],
  },
  Keysborough: {
    localIntro: "Covering Keysborough's mix of established 1960s-90s housing in the north and newer estates like Elmswood and Somerfield further south, near Tatterson Park and the Keysborough Golf Club.",
    commonJobs: ["Switchboard and safety-switch upgrades", "New-build electrical for newer estates", "Renovation and extension circuits", "Fault finding and repairs"],
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
