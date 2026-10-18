import { useState } from "react";
import { MousePointerClick } from "lucide-react";

type Kind = "main" | "spd" | "afdd" | "rcbo";

const modules: { id: string; kind: Kind; label: string; width: number }[] = [
  { id: "main", kind: "main", label: "MAIN", width: 2 },
  { id: "spd", kind: "spd", label: "SURGE", width: 1 },
  { id: "afdd", kind: "afdd", label: "BEDS", width: 1 },
  { id: "lights", kind: "rcbo", label: "LIGHTS", width: 1 },
  { id: "power", kind: "rcbo", label: "POWER", width: 1 },
  { id: "oven", kind: "rcbo", label: "OVEN", width: 1 },
  { id: "hws", kind: "rcbo", label: "HWS", width: 1 },
  { id: "ac", kind: "rcbo", label: "A/C", width: 1 },
];

const info: Record<Kind, { title: string; text: string }> = {
  main: {
    title: "Main switch",
    text: "Turns off the power to the whole switchboard at once. It usually has a red toggle so it can be found fast in an emergency.",
  },
  spd: {
    title: "Surge protection",
    text: "Limits voltage spikes from lightning or the network to help protect your TV, computers and appliances. The window shows when it needs replacing.",
  },
  afdd: {
    title: "Arc fault detection device",
    text: "Watches for dangerous arcing from damaged cables or loose connections, which can start a fire without tripping anything else. Recommended for bedroom and living area circuits.",
  },
  rcbo: {
    title: "RCBO: breaker and safety switch in one",
    text: "Protects one circuit from overload and protects people from electric shock. If this circuit has a fault, only this circuit turns off and the rest of the home stays on.",
  },
};

function Module({ kind, label, selected }: { kind: Kind; label: string; selected: boolean }) {
  const toggle = kind === "main" ? "bg-red-500" : "bg-slate-600";
  return (
    <span className={`flex h-36 w-full flex-col items-center justify-between rounded-md bg-gradient-to-b from-white to-slate-100 py-2 ring-1 transition sm:h-44 ${selected ? "ring-2 ring-primary shadow-lg shadow-primary/30" : "ring-slate-300"}`}>
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-slate-400" />
        {kind === "main" && <span className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-slate-400" />}
      </span>
      <span className="text-[8px] font-extrabold tracking-wide text-slate-500 sm:text-[9px]">{label}</span>
      {kind === "spd" ? (
        <span className="h-6 w-[60%] rounded-sm bg-green-500/80 ring-1 ring-green-700/40" aria-hidden="true" />
      ) : (
        <span className={`flex h-9 w-[64%] flex-col items-center justify-start rounded-sm ${toggle} pt-1 shadow-inner sm:h-11`} aria-hidden="true">
          <span className="h-1 w-3 rounded-full bg-white/70" />
        </span>
      )}
      {kind === "rcbo" && <span className="h-3 w-3 rounded-sm bg-primary text-[7px] font-bold leading-3 text-white" aria-hidden="true">T</span>}
      {kind === "afdd" && <span className="h-3 w-3 rounded-sm bg-amber-400" aria-hidden="true" />}
      {(kind === "main" || kind === "spd") && <span className="h-3" aria-hidden="true" />}
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-slate-400" />
        {kind === "main" && <span className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-slate-400" />}
      </span>
    </span>
  );
}

export function SwitchboardExplorer() {
  const [selected, setSelected] = useState("main");
  const current = modules.find((m) => m.id === selected) ?? modules[0];
  const detail = info[current.kind];

  return (
    <div className="rounded-2xl bg-slate-900 p-4 text-white sm:p-6">
      <div className="flex items-center gap-2 text-sm font-bold text-sky-300">
        <MousePointerClick className="h-4 w-4" aria-hidden="true" />
        Tap a device to see what it does
      </div>

      <div className="mt-4 overflow-x-auto pb-1">
        <div className="mx-auto w-fit rounded-xl bg-slate-200 p-3 [--mod:36px] sm:p-4 sm:[--mod:54px]">
          <div className="relative">
            <span className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded bg-slate-400/70" aria-hidden="true" />
            <div className="relative flex gap-0.5">
              {modules.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelected(m.id)}
                  aria-pressed={selected === m.id}
                  aria-label={`${info[m.kind].title}${m.kind === "rcbo" ? `, ${m.label.toLowerCase()} circuit` : ""}`}
                  style={{ width: `calc(var(--mod) * ${m.width})` }}
                  className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  <Module kind={m.kind} label={m.label} selected={selected === m.id} />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2 h-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white/10 p-4 ring-1 ring-white/10" aria-live="polite">
        <p className="text-lg font-extrabold tracking-tight">{detail.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{detail.text}</p>
      </div>
    </div>
  );
}
