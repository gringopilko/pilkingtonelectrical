import { useState } from "react";

type Mode = "grid" | "designer";

const gridLights = [70, 200, 330, 460, 590, 720];

/** Lit-room illustration that switches between an even downlight grid and designer-style lighting. */
export function LightingDesignerDemo() {
  const [mode, setMode] = useState<Mode>("designer");
  const grid = mode === "grid";

  return (
    <div className="mt-5 overflow-hidden rounded-2xl bg-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-4 sm:px-5">
        <p className="text-sm font-bold text-white">See the difference</p>
        <div className="inline-flex rounded-full bg-white/10 p-1" role="group" aria-label="Lighting style">
          {(
            [
              ["grid", "Traditional grid"],
              ["designer", "Designer style"],
            ] as const
          ).map(([m, label]) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm ${mode === m ? "bg-primary text-primary-foreground" : "text-white/75 hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 800 400" className="mt-3 block h-auto w-full" role="img" aria-label={grid ? "A room lit by an even grid of six downlights" : "The same room lit by four placed lights over the bench, artwork and reading corner"}>
        <defs>
          <linearGradient id="ld-cone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd89a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffd89a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ld-cone-strong" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe2b0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffd89a" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="ld-pool" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ffd89a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffd89a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ld-art" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>

        {/* Room */}
        <rect x="0" y="0" width="800" height="400" fill="#0b1324" />
        <rect x="0" y="0" width="800" height="28" fill="#111c33" />
        <rect x="0" y="352" width="800" height="48" fill="#0f1a2e" />

        {/* Ambient wash for the grid */}
        <rect x="0" y="28" width="800" height="324" fill="#ffd89a" className="transition-opacity duration-700" opacity={grid ? 0.07 : 0} />

        {/* Furniture */}
        <rect x="60" y="270" width="220" height="82" rx="4" fill="#1e293b" />
        <rect x="50" y="262" width="240" height="10" rx="3" fill="#334155" />
        <rect x="358" y="128" width="114" height="84" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="4" />
        <rect x="364" y="134" width="102" height="72" fill="url(#ld-art)" className="transition-opacity duration-700" opacity={grid ? 0.35 : 0.95} />
        <rect x="560" y="258" width="190" height="44" rx="10" fill="#1e293b" />
        <rect x="550" y="292" width="210" height="52" rx="10" fill="#273449" />

        {/* Traditional grid */}
        <g className="transition-opacity duration-700" opacity={grid ? 1 : 0}>
          {gridLights.map((x) => (
            <g key={x}>
              <polygon points={`${x - 7},28 ${x + 7},28 ${x + 85},352 ${x - 85},352`} fill="url(#ld-cone)" />
              <ellipse cx={x} cy="356" rx="90" ry="12" fill="url(#ld-pool)" />
              <ellipse cx={x} cy="29" rx="9" ry="3" fill="#fff4dc" />
            </g>
          ))}
        </g>

        {/* Designer style */}
        <g className="transition-opacity duration-700" opacity={grid ? 0 : 1}>
          {[120, 220].map((x) => (
            <g key={x}>
              <polygon points={`${x - 6},28 ${x + 6},28 ${x + 42},262 ${x - 42},262`} fill="url(#ld-cone-strong)" />
              <ellipse cx={x} cy="264" rx="48" ry="6" fill="url(#ld-pool)" />
              <ellipse cx={x} cy="29" rx="8" ry="3" fill="#fff4dc" />
            </g>
          ))}
          <polygon points="408,28 422,28 488,214 342,214" fill="url(#ld-cone-strong)" />
          <ellipse cx="415" cy="29" rx="8" ry="3" fill="#fff4dc" />
          <polygon points="664,28 676,28 726,292 614,292" fill="url(#ld-cone-strong)" />
          <ellipse cx="670" cy="296" rx="70" ry="10" fill="url(#ld-pool)" />
          <ellipse cx="670" cy="29" rx="8" ry="3" fill="#fff4dc" />
          {[
            [170, 248, "Over the bench"],
            [415, 236, "Feature wall"],
            [655, 246, "Reading corner"],
          ].map(([x, y, t]) => (
            <g key={t as string}>
              <rect x={(x as number) - 62} y={(y as number) - 15} width="124" height="22" rx="11" fill="#0b1324" opacity="0.85" />
              <text x={x} y={(y as number) + 1} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="inherit">
                {t}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <p className="px-4 pb-4 pt-3 text-sm leading-relaxed text-white/75 sm:px-5">
        {grid
          ? "Six downlights spread evenly: bright everywhere, but flat, with the same light on the floor as on the things you want to see."
          : "Four lights placed with purpose: light where you work, read and look, with the rest of the room left softer. Often fewer fittings, too."}
      </p>
    </div>
  );
}
