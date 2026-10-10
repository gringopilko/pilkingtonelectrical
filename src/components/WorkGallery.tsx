import { Instagram } from "lucide-react";
import { workPhotos, type WorkPhoto } from "@/lib/workPhotos";

interface WorkGalleryProps {
  photos?: WorkPhoto[];
  compact?: boolean;
}

export function WorkGallery({ photos = workPhotos, compact = false }: WorkGalleryProps) {
  if (photos.length === 0) return null;

  // Uniform square tiles. Rows wrap and centre, so a short last row never looks lopsided.
  const gridClass = compact ? "gap-3 md:gap-4" : "gap-3 lg:gap-4";
  const tileClass = compact
    ? "basis-[calc(50%-0.375rem)] md:basis-[calc(33.333%-0.667rem)]"
    : "basis-[calc(50%-0.375rem)] lg:basis-[calc(25%-0.75rem)]";

  return (
    <section className="border-t border-border bg-card">
      <div className={`mx-auto px-6 ${compact ? "max-w-5xl py-16" : "max-w-7xl py-20"}`}>
        <div className={`${compact ? "mb-6" : "mb-10"} max-w-2xl`}>
          <h2 className={compact ? "text-xl font-bold tracking-tight" : "text-3xl font-extrabold tracking-tight md:text-4xl"}>
            Recent Work
          </h2>
          {!compact && (
            <p className="mt-4 text-muted-foreground">
              A few recent lighting, fan and kitchen jobs.
            </p>
          )}
        </div>
        <div className={`flex flex-wrap justify-center ${gridClass}`}>
          {photos.map((p) => (
            <div key={p.file} className={`${tileClass} aspect-square shrink-0 grow-0 overflow-hidden rounded-lg border border-border bg-background`}>
              <img
                src={`/work/${p.file}`}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                style={p.focus ? { objectPosition: p.focus } : undefined}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {!compact && (
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/pilkingtonelectrical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              See more recent jobs on Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
