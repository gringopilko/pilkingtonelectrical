import { Instagram } from "lucide-react";
import { workPhotos, type WorkPhoto } from "@/lib/workPhotos";

interface WorkGalleryProps {
  photos?: WorkPhoto[];
  compact?: boolean;
}

export function WorkGallery({ photos = workPhotos, compact = false }: WorkGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <section className={`border-t border-border ${compact ? "bg-card" : "bg-background"}`}>
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
        <div className="columns-2 gap-3 md:columns-3 md:gap-4">
          {photos.map((p) => (
            <img
              key={p.file}
              src={`/work/${p.file}`}
              alt={p.alt}
              width={p.width}
              height={p.height}
              loading="lazy"
              decoding="async"
              className="mb-3 block h-auto w-full break-inside-avoid rounded-lg border border-border md:mb-4"
            />
          ))}
        </div>
        {!compact && (
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/pilkingtonelectrical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
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
