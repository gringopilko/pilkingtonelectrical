import { useId, type CSSProperties, type ReactNode } from "react";

/** Plain-English meanings for trade jargon, shown when a customer taps the word. */
export const GLOSSARY: Record<string, string> = {
  RCBO: "A circuit breaker and safety switch in one device, protecting a single circuit. A fault only turns off that circuit.",
  RCD: "Residual current device, the proper name for a safety switch. It cuts the power in a fraction of a second if current leaks to earth.",
  RCCB: "A safety switch that protects a group of circuits from electric shock, but not from overloads.",
  MCB: "Miniature circuit breaker. It protects cables from overloads and short circuits, but not people from shocks.",
  AFDD: "Arc fault detection device. It detects dangerous sparking from damaged cables or loose connections, which can start fires.",
  SPD: "Surge protection device. It limits voltage spikes from lightning or the network to protect your appliances.",
  COES: "Certificate of Electrical Safety. The legal certificate I issue in Victoria to confirm the work is safe and compliant.",
  "Type A": "A safety switch that detects AC and pulsating DC leakage from modern electronics. The standard choice for homes.",
  OCPP: "An open standard that lets EV chargers work with different management software, so you are not locked into one brand.",
  busbar: "A solid metal bar that feeds power along a row of devices in a switchboard, instead of separate cables.",
  noggin: "A short piece of timber fixed between wall studs or ceiling joists, often used to mount fittings.",
  sarking: "The protective membrane under roof sheets that keeps out dust, moisture and insects.",
  "load management": "Technology that shares the available power between EV chargers or appliances so the supply is never overloaded.",
  "maximum demand": "The most power a building draws at its busiest time. It decides how much spare capacity is left.",
  GPO: "General purpose outlet, the trade name for a power point.",
};

const PATTERN = /\b(RCBOs?|RCDs?|RCCBs?|MCBs?|AFDDs?|SPDs?|COES|Type A|OCPP|busbars?|noggins?|sarking|load management|maximum demand|GPOs?)\b/gi;

function keyFor(match: string): string | null {
  if (/^type a$/i.test(match)) return match === "Type A" ? "Type A" : null;
  const upper = match.toUpperCase();
  for (const k of ["RCBO", "RCCB", "RCD", "MCB", "AFDD", "SPD", "COES", "OCPP", "GPO"]) {
    if (upper === k || upper === `${k}S`) return match === match.toUpperCase() || match.endsWith("s") ? k : null;
  }
  const lower = match.toLowerCase().replace(/s$/, "");
  if (lower === "busbar" || lower === "noggin" || lower === "sarking") return lower;
  if (match.toLowerCase() === "load management") return "load management";
  if (match.toLowerCase() === "maximum demand") return "maximum demand";
  return null;
}

/** A word with a dotted underline. Tapping it opens a small bubble explaining it. */
export function Term({ term, children }: { term: string; children?: ReactNode }) {
  const raw = useId();
  const id = `term${raw.replace(/[^a-zA-Z0-9]/g, "")}`;
  const meaning = GLOSSARY[term];
  if (!meaning) return <>{children ?? term}</>;
  return (
    <>
      <button type="button" popoverTarget={id} className="term" style={{ anchorName: `--${id}` } as CSSProperties} aria-describedby={id}>
        {children ?? term}
      </button>
      <span id={id} popover="auto" role="tooltip" className="term-pop" style={{ positionAnchor: `--${id}` } as CSSProperties}>
        <strong>{term.charAt(0).toUpperCase() + term.slice(1)}:</strong> {meaning}
      </span>
    </>
  );
}

/**
 * Renders text with the first mention of each jargon term made tappable.
 * Pass the same `seen` set to several blocks so a term is only explained once per section.
 */
export function Glossed({ text, seen }: { text: string; seen?: Set<string> }) {
  const used = seen ?? new Set<string>();
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(PATTERN)) {
    const key = keyFor(m[0]);
    if (!key || used.has(key)) continue;
    used.add(key);
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    out.push(
      <Term key={`${key}-${start}`} term={key}>
        {m[0]}
      </Term>,
    );
    last = start + m[0].length;
  }
  if (out.length === 0) return <>{text}</>;
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
