export interface WorkPhoto {
  file: string;
  alt: string;
  /** Short label shown on the photo. */
  caption: string;
  width: number;
  height: number;
  /** CSS object-position used when the photo is cropped to a square tile. */
  focus?: string;
  /** Service slugs this photo is also shown on (it always appears in the homepage gallery). */
  services: string[];
}

export const workPhotos: WorkPhoto[] = [
  {
    file: "kitchen-led-lighting-front.webp",
    alt: "Warm LED strip lighting under a floating shelf above a stone splashback in a renovated kitchen",
    caption: "Kitchen LED strip lighting",
    width: 573,
    height: 573,
    services: ["lighting"],
  },
  {
    file: "staircase-wall-light-led.webp",
    alt: "LED cove lighting and a round wall light above a staircase",
    caption: "Staircase LED and wall light",
    width: 800,
    height: 1067,
    focus: "50% 30%",
    services: ["lighting"],
  },
  {
    file: "bedroom-ring-fan-light-warm.webp",
    alt: "Low profile ceiling fan with built in light in a bedroom",
    caption: "Bedroom fan with light",
    width: 800,
    height: 600,
    focus: "70% 50%",
    services: ["ceiling-fans"],
  },
  {
    file: "landing-round-wall-lights.webp",
    alt: "Round wall lights on an upstairs landing and hallway",
    caption: "Landing wall lights",
    width: 800,
    height: 600,
    services: ["lighting"],
  },
  {
    file: "bedroom-white-ceiling-fan.webp",
    alt: "White ceiling fan with light in a bedroom with a raked ceiling",
    caption: "Ceiling fan, raked ceiling",
    width: 800,
    height: 1067,
    focus: "50% 20%",
    services: ["ceiling-fans"],
  },
  {
    file: "hallway-ceiling-light.webp",
    alt: "Flush mount ceiling light with an exposed globe in a hallway",
    caption: "Hallway ceiling light",
    width: 800,
    height: 1067,
    focus: "50% 30%",
    services: ["lighting"],
  },
  {
    file: "bedroom-ring-fan-light-window.webp",
    alt: "Low profile ceiling fan with built in light above a bedroom window",
    caption: "Fan and light above a window",
    width: 800,
    height: 600,
    focus: "45% 50%",
    services: ["ceiling-fans"],
  },
  {
    file: "four-lamp-heat-light.webp",
    alt: "Four lamp heat light installed in a bathroom ceiling",
    caption: "Bathroom heat light",
    width: 800,
    height: 600,
    services: [],
  },
  {
    file: "two-lamp-heat-light-panel.webp",
    alt: "Ceiling light panel above a two lamp heat light",
    caption: "Light panel and heat light",
    width: 800,
    height: 600,
    focus: "85% 50%",
    services: [],
  },
  {
    file: "kitchen-led-lighting-angle.webp",
    alt: "Kitchen with concealed LED lighting along the shelf above the splashback and benchtop",
    caption: "Kitchen shelf lighting",
    width: 573,
    height: 573,
    services: ["lighting"],
  },
];
