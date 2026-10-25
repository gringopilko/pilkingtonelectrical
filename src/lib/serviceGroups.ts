import { services } from "@/lib/services";

type Service = (typeof services)[number];

interface GroupDef {
  title: string;
  slugs: string[];
}

const defined: GroupDef[] = [
  {
    title: "Homes",
    slugs: [
      "fault-finding",
      "switchboards",
      "safety-switches",
      "rewiring-extensions",
      "wall-chasing",
      "lighting",
      "power-points",
      "light-switches",
      "ceiling-fans",
      "hot-water",
      "ev-charger-install",
    ],
  },
  {
    title: "Rentals & Property",
    slugs: ["electrical-safety-inspections", "real-estate", "body-corporate", "smoke-alarms"],
  },
  {
    title: "Business",
    slugs: ["test-and-tag", "commercial-electrician", "emergency-electrical"],
  },
];

export interface ServiceGroup {
  title: string;
  items: Service[];
}

/** Groups for the menu and footer. Any service not placed above still appears, under "More". */
export function getServiceGroups(): ServiceGroup[] {
  const placed = new Set(defined.flatMap((g) => g.slugs));
  const rest = services.filter((s) => !placed.has(s.slug)).map((s) => s.slug);
  const all = rest.length ? [...defined, { title: "More", slugs: rest }] : defined;
  return all.map((g) => ({
    title: g.title,
    items: g.slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is Service => Boolean(s)),
  }));
}
