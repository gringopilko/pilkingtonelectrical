import { WordReveal } from "@/components/WordReveal";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";
import { workPhotos, type WorkPhoto } from "@/lib/workPhotos";

interface WorkGalleryProps {
  photos?: WorkPhoto[];
  compact?: boolean;
}

export function WorkGallery({ photos = workPhotos, compact = false }: WorkGalleryProps) {
  // Homepage shows two full rows on desktop (and four on phones) so no photo sits alone.
  const shown = compact ? photos : photos.slice(0, 8);
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  if (shown.length === 0) return null;
  const current = open === null ? null : shown[open];

  const gridClass = compact
    ? "flex flex-wrap justify-center gap-3 md:gap-4 [&>*]:basis-[calc(50%-0.375rem)] md:[&>*]:basis-[calc(33.333%-0.667rem)]"
    : "grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4";

  return (
    <section className={`border-t border-border bg-card ${compact ? "" : "hgal"}`}>
      <div className={`mx-auto px-6 ${compact ? "max-w-5xl py-16" : "hgal-sticky max-w-7xl py-16 md:py-24"}`}>
        <div className={`${compact ? "mb-6" : "mb-10"} flex flex-wrap items-end justify-between gap-4`}>
          <div className="max-w-2xl">
            {!compact && <p className="text-xs font-bold uppercase tracking-wider text-primary">Recent work</p>}
            <h2 className={compact ? "text-2xl font-extrabold tracking-tight md:text-3xl" : "mt-2 text-3xl font-extrabold tracking-tight md:text-4xl"}>
              {compact ? "Recent Work" : <WordReveal text="Jobs I've done lately" />}
            </h2>
            {!compact && <p className="mt-4 text-muted-foreground md:text-lg">Lighting, fans and kitchen work from recent jobs. Tap a photo to see it bigger.</p>}
          </div>
          {!compact && (
            <a
              href="https://www.instagram.com/pilkingtonelectrical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              More on Instagram
            </a>
          )}
        </div>

        <div className={`${gridClass} ${compact ? "" : "hgal-track"}`}>
          {shown.map((p, i) => (
            <button
              key={p.file}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View photo: ${p.caption}`}
              className="group relative aspect-square shrink-0 grow-0 overflow-hidden rounded-2xl border border-border bg-background text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={`/work/${p.file}`}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                style={p.focus ? { objectPosition: p.focus } : undefined}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-3 pb-2.5 pt-8 text-xs font-bold text-white sm:px-4 sm:pb-3 sm:text-sm">
                {p.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <img
            src={`/work/${current.file}`}
            alt={current.alt}
            className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-center text-sm font-bold text-white">{current.caption}</p>
          {shown.length > 1 && (
            <div className="mt-4 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs font-medium text-white/70">{(open ?? 0) + 1} / {shown.length}</span>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
