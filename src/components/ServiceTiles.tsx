import { Link } from "@tanstack/react-router";
import { ChevronRight, Tag, Zap } from "lucide-react";
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
        const Fallback = s.slug === "test-and-tag" ? Tag : Zap;
        const pic = s.tileImage ?? s.image;
        return (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
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
                  style={pic.focus ? { objectPosition: pic.focus } : undefined}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-dark to-primary text-white">
                  <Fallback className="h-10 w-10 sm:h-14 sm:w-14" aria-hidden="true" />
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
