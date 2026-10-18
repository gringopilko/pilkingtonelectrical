import { useState } from "react";

/** Drag to compare a before and after photo of the same job. Images should be the same size and angle. */
export function BeforeAfter({
  before,
  after,
  alt,
  width = 1200,
  height = 900,
}: {
  before: string;
  after: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: `${width} / ${height}` }}>
      <img src={after} alt={`After: ${alt}`} width={width} height={height} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <img
        src={before}
        alt={`Before: ${alt}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" style={{ left: `${pos}%` }} aria-hidden="true" />
      <span
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900 shadow-lg"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        &#8596;
      </span>
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">Before</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">After</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
