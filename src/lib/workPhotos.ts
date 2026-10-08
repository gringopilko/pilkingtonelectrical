export interface WorkPhoto {
  file: string;
  alt: string;
  width: number;
  height: number;
  /** Service slugs this photo is also shown on (it always appears in the homepage gallery). */
  services: string[];
}

export const workPhotos: WorkPhoto[] = [
  {
    file: "kitchen-led-lighting-front.webp",
    alt: "Warm LED strip lighting under a floating shelf above a stone splashback in a renovated kitchen",
    width: 573,
    height: 573,
    services: ["lighting"],
  },
  {
    file: "staircase-led-cove-lighting.webp",
    alt: "LED cove lighting and a round wall light above a staircase",
    width: 540,
    height: 584,
    services: ["lighting"],
  },
  {
    file: "bedroom-ceiling-fan-cove-lighting.webp",
    alt: "Low profile ceiling fan with built in light and LED cove lighting around the ceiling edge",
    width: 605,
    height: 584,
    services: ["lighting", "ceiling-fans"],
  },
  {
    file: "kitchen-led-lighting-angle.webp",
    alt: "Kitchen with concealed LED lighting along the shelf above the splashback and benchtop",
    width: 573,
    height: 573,
    services: ["lighting"],
  },
  {
    file: "hallway-round-wall-lights.webp",
    alt: "Round wall lights on an upstairs landing and hallway",
    width: 661,
    height: 714,
    services: ["lighting"],
  },
  {
    file: "white-ceiling-fan-bedroom.webp",
    alt: "White ceiling fan with light installed in a bedroom with a raked ceiling",
    width: 661,
    height: 812,
    services: ["ceiling-fans"],
  },
  {
    file: "hallway-flush-mount-light.webp",
    alt: "Flush mount ceiling light with an exposed globe in a hallway",
    width: 479,
    height: 714,
    services: ["lighting"],
  },
  {
    file: "bathroom-four-lamp-heat-light.webp",
    alt: "Four lamp heat light installed in a bathroom ceiling",
    width: 611,
    height: 410,
    services: [],
  },
  {
    file: "ceiling-light-panel-heat-light.webp",
    alt: "Ceiling light panel above a two lamp heat light",
    width: 535,
    height: 410,
    services: [],
  },
  {
    file: "white-ceiling-fan-closeup.webp",
    alt: "Close up of a white ceiling fan with an integrated LED light",
    width: 479,
    height: 812,
    services: ["ceiling-fans"],
  },
  {
    file: "bedroom-ceiling-fan-light.webp",
    alt: "Ceiling fan with light fitted in a bedroom",
    width: 1154,
    height: 526,
    services: ["ceiling-fans"],
  },
];
