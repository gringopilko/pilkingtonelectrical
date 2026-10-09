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
    file: "staircase-wall-light-led.webp",
    alt: "LED cove lighting and a round wall light above a staircase",
    width: 800,
    height: 1067,
    services: ["lighting"],
  },
  {
    file: "bedroom-ring-fan-light-warm.webp",
    alt: "Low profile ceiling fan with built in light in a bedroom",
    width: 800,
    height: 600,
    services: ["ceiling-fans"],
  },
  {
    file: "kitchen-led-lighting-angle.webp",
    alt: "Kitchen with concealed LED lighting along the shelf above the splashback and benchtop",
    width: 573,
    height: 573,
    services: ["lighting"],
  },
  {
    file: "landing-round-wall-lights.webp",
    alt: "Round wall lights on an upstairs landing and hallway",
    width: 800,
    height: 600,
    services: ["lighting"],
  },
  {
    file: "bedroom-white-ceiling-fan.webp",
    alt: "White ceiling fan with light in a bedroom with a raked ceiling",
    width: 800,
    height: 1067,
    services: ["ceiling-fans"],
  },
  {
    file: "hallway-ceiling-light.webp",
    alt: "Flush mount ceiling light with an exposed globe in a hallway",
    width: 800,
    height: 1067,
    services: ["lighting"],
  },
  {
    file: "bedroom-ring-fan-light-window.webp",
    alt: "Low profile ceiling fan with built in light above a bedroom window",
    width: 800,
    height: 600,
    services: ["ceiling-fans"],
  },
  {
    file: "four-lamp-heat-light.webp",
    alt: "Four lamp heat light installed in a bathroom ceiling",
    width: 800,
    height: 600,
    services: [],
  },
  {
    file: "two-lamp-heat-light-panel.webp",
    alt: "Ceiling light panel above a two lamp heat light",
    width: 800,
    height: 600,
    services: [],
  },
];
