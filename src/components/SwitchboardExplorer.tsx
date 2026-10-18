import { useState } from "react";
import { MousePointerClick } from "lucide-react";

type Kind = "main" | "spd" | "afdd" | "rcbo";

interface Device {
  id: string;
  kind: Kind;
  circuit: string;
  rating: string;
  wide?: boolean;
  title: string;
  detail: string;
}

const kindText: Record<Kind, string> = {
  main: "Turns off the power to the whole switchboard at once. It usually has a red toggle so it can be found fast in an emergency.",
  spd: "Limits voltage spikes from lightning or the network to help protect TVs, computers and appliances. It is rated by the surge it can handle, not in amps like a breaker.",
  afdd: "An arc fault detection device combined with an RCBO. It watches for dangerous arcing from damaged cables or loose connections, as well as overloads and earth leakage.",
  rcbo: "A circuit breaker and safety switch in one. It protects this circuit from overload and protects people from electric shock. A fault here only turns off this circuit.",
};

const devices: Device[] = [
  { id: "main", kind: "main", circuit: "MAIN", rating: "63A", wide: true, title: "Main switch, usually 63 A or 80 A", detail: "Sized to match the home's supply." },
  { id: "spd", kind: "spd", circuit: "SURGE", rating: "40kA", title: "Surge protection device", detail: "The window shows green when it is working and red when it needs replacing." },
  { id: "beds", kind: "afdd", circuit: "BEDS", rating: "C16", title: "AFDD and RCBO, usually 16 A", detail: "Fitted to bedroom power circuits, where people sleep." },
  { id: "lights", kind: "rcbo", circuit: "LIGHTS", rating: "C10", title: "RCBO, usually 10 A: lights", detail: "Lighting circuits draw little current, so they use a smaller rating." },
  { id: "power", kind: "rcbo", circuit: "POWER", rating: "C20", title: "RCBO, usually 20 A: power points", detail: "General power point circuits for the kitchen, living areas and laundry." },
  { id: "oven", kind: "rcbo", circuit: "OVEN", rating: "C32", title: "RCBO, usually 32 A: oven or cooktop", detail: "Cooking appliances draw a lot of current, so they get their own larger circuit." },
  { id: "hws", kind: "rcbo", circuit: "HWS", rating: "C20", title: "RCBO, usually 20 A: hot water", detail: "Electric storage hot water, often on an off-peak supply." },
  { id: "ac", kind: "rcbo", circuit: "A/C", rating: "C20", title: "RCBO, usually 20 to 32 A: air conditioner", detail: "The rating depends on the size of the unit." },
];

const typeTag: Record<Kind, string> = { main: "MAIN SW", spd: "SPD", afdd: "AFDD", rcbo: "RCBO" };

function Module({ d, selected }: { d: Device; selected: boolean }) {
  return (
    <span className={`flex h-44 w-full flex-col items-center justify-between rounded-md bg-gradient-to-b from-white to-slate-100 px-1 py-2 ring-1 transition sm:h-48 ${selected ? "ring-2 ring-primary shadow-lg shadow-primary/30" : "ring-slate-300"}`}>
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-slate-400" />
        {d.wide && <span className="h-2.5 w-2.5 rounded-full bg-slate-300 ring-1 ring-slate-400" />}
      </span>
      <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-white">{d.rating}</span>
      {d.kind === "spd" ? (
        <span className="h-7 w-[58%] rounded-sm bg-green-500/85 ring-1 ring-green-700/40" aria-hidden="true" />
      ) : (
        <span className={`flex h-9 w-[58%] max-w-10 flex-col items-center rounded-sm pt-1 shadow-inner ${d.kind === "main" ? "bg-red-500" : "bg-slate-600"}`} aria-hidden="true">
          <span className="h-1 w-3 rounded-full bg-white/70" />
        </span>
      )}
      <span className="flex h-4 items-center" aria-hidden="true">
        {d.kind === "rcbo" && <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[9px] font-extrabold text-white">T</span>}
        {d.kind === "afdd" && (
          <span className="flex gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[9px] font-extrabold text-white">T</span>
            <span className="h-4 w-4 rounded-sm bg-amber-400" />
          </span>
        )}
      </span>
      <span className="text-[8px] font-extrabold tracking-wide text-primary">{typeTag[d.kind]}</span>
      <span className="w-full truncate rounded-sm bg-white px-0.5 py-0.5 text-center text-[9px] font-extrabold tracking-wide text-slate-700 ring-1 ring-slate-200">{d.circuit}</span>
    </span>
  );
}

export function SwitchboardExplorer() {
  const [selected, setSelected] = useState("main");
  const d = devices.find((x) => x.id === selected) ?? devices[0];

  return (
    <div className="rounded-2xl bg-slate-900 p-4 text-white sm:p-6">
      <div className="flex items-center gap-2 text-sm font-bold text-sky-300">
        <MousePointerClick className="h-4 w-4" aria-hidden="true" />
        Tap a device to see what it does
      </div>

      <div className="mt-4 rounded-xl bg-slate-200 p-2.5 sm:p-4">
        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-9 sm:gap-1">
          {devices.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setSelected(x.id)}
              aria-pressed={selected === x.id}
              aria-label={x.title}
              className={`rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${x.wide ? "col-span-2" : ""}`}
            >
              <Module d={x} selected={selected === x.id} />
            </button>
          ))}
        </div>
        <div className="mt-2 h-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" aria-hidden="true" />
      </div>

      <ul className="mt-4 grid gap-2 text-xs text-white/80 sm:grid-cols-3 sm:text-sm">
        <li className="flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-primary text-[10px] font-extrabold text-white" aria-hidden="true">T</span>
          Test button: press it to check the safety switch trips
        </li>
        <li className="flex items-center gap-2">
          <span className="h-5 w-5 shrink-0 rounded-sm bg-amber-400" aria-hidden="true" />
          Arc fault test button on the AFDD
        </li>
        <li className="flex items-center gap-2">
          <span className="h-5 w-5 shrink-0 rounded-sm bg-green-500" aria-hidden="true" />
          Surge window: green is working, red means replace
        </li>
      </ul>

      <div className="mt-4 rounded-xl bg-white/10 p-4 ring-1 ring-white/10" aria-live="polite">
        <p className="text-lg font-extrabold tracking-tight">{d.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/80">{kindText[d.kind]}</p>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-sky-300">{d.detail}</p>
      </div>
      <p className="mt-3 text-xs text-white/55">Ratings shown are typical for a home. C means the breaker is a C curve, the standard type for household circuits. Your board may differ.</p>
    </div>
  );
}
