/** Suburb names by area. Kept separate from the per-suburb page text so the menu and site-wide data stay small. */
export const suburbGroups = [
  {
    area: "Inner Bayside",
    blurb: "Elwood and the surrounding beachside suburbs through to the Melbourne CBD, a mix of character homes, apartment blocks, offices and busy commercial strips.",
    suburbs: ["Melbourne CBD", "Elwood", "St Kilda", "St Kilda East", "St Kilda West", "Balaclava", "Windsor", "Prahran", "South Yarra", "Albert Park", "Middle Park", "South Melbourne", "Port Melbourne"],
  },
  {
    area: "Bayside",
    blurb: "South along the bay through Brighton and Hampton East, where I'm based, down to Beaumaris. Heritage homes, newer builds, and apartment buildings with body corporate electrical needs.",
    suburbs: ["Brighton", "Brighton East", "Hampton", "Hampton East", "Black Rock", "Beaumaris", "Mentone", "Mordialloc"],
  },
  {
    area: "Stonnington & Boroondara",
    blurb: "Established, leafy suburbs with a mix of period homes and townhouse developments. Common jobs here include rewires and switchboard upgrades in older housing stock.",
    suburbs: ["Toorak", "Malvern", "Malvern East", "Glen Iris", "Camberwell", "Hawthorn", "Caulfield", "Caulfield North", "Caulfield South"],
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

/** Postcode for each suburb (used on suburb pages and in search data). */
export const suburbPostcodes: Record<string, string> = {
  "Melbourne CBD": "3000",
  "Elwood": "3184",
  "St Kilda": "3182",
  "St Kilda East": "3183",
  "St Kilda West": "3182",
  "Balaclava": "3183",
  "Windsor": "3181",
  "Prahran": "3181",
  "South Yarra": "3141",
  "Albert Park": "3206",
  "Middle Park": "3206",
  "South Melbourne": "3205",
  "Port Melbourne": "3207",
  "Brighton": "3186",
  "Brighton East": "3187",
  "Hampton": "3188",
  "Hampton East": "3188",
  "Black Rock": "3193",
  "Beaumaris": "3193",
  "Mentone": "3194",
  "Mordialloc": "3195",
  "Toorak": "3142",
  "Malvern": "3144",
  "Malvern East": "3145",
  "Glen Iris": "3146",
  "Camberwell": "3124",
  "Hawthorn": "3122",
  "Caulfield": "3162",
  "Caulfield North": "3161",
  "Caulfield South": "3162",
  "Bentleigh": "3204",
  "Bentleigh East": "3165",
  "Moorabbin": "3189",
  "Cheltenham": "3192",
  "Dingley Village": "3172",
  "Murrumbeena": "3163",
  "Oakleigh": "3166",
  "Clayton": "3168",
  "Clayton South": "3169",
  "Clarinda": "3169",
  "Springvale": "3171",
  "Noble Park": "3174",
  "Keysborough": "3173",
  "Aspendale": "3195",
  "Aspendale Gardens": "3195",
  "Braeside": "3195",
  "Waterways": "3195",
  "Bangholme": "3175",
  "Patterson Lakes": "3197",
  "Seaford": "3198",
  "Carrum Downs": "3201",
};
