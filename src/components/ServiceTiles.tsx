import { Link } from "@tanstack/react-router";
import { ChevronRight, Tag, Zap, Lightbulb, ToggleRight, Fan, Building2, type LucideIcon } from "lucide-react";
import { services } from "@/lib/services";

interface ServiceTilesProps {
  slugs: string[];
}

export function ServiceTiles({ slugs }: ServiceTilesProps) {
  const items = slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
      {items.map((s) => {
        const fallbackIcons: Record<string, LucideIcon> = { "test-and-tag": Tag, lighting: Lightbulb, "light-switches": ToggleRight, "ceiling-fans": Fan, "commercial-electrician": Building2 };
        const Fallback = fallbackIcons[s.slug] ?? Zap;
        const pic = s.tileImage ?? s.image;
        return (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="aspect-[4/3] overflow-hidden bg-brand-dark sm:aspect-[16/10]">
              {pic ? (
                <img
                  src={`/img/${pic.file}`}
                  alt=""
                  width={pic.width}
                  height={pic.height}
                  loading="lazy"
                  decoding="async"
                  style={{ ...(pic.focus ? { objectPosition: pic.focus } : {}), viewTransitionName: `svc-${s.slug}` }}
                  className="h-full w-full bg-gradient-to-br from-sky-100 via-sky-50 to-sky-300 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-brand-dark to-primary text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden="true" />
                  <Fallback className="relative h-10 w-10 opacity-90 transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14" strokeWidth={1.5} aria-hidden="true" />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-3 sm:p-5">
              <h3 className="text-sm font-bold leading-snug tracking-tight sm:text-lg">{s.title}</h3>
              <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-muted-foreground sm:block">{s.shortDesc}</p>
              <span className="mt-3 hidden items-center gap-1 text-sm font-bold text-primary sm:inline-flex">
                Learn more
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
