import { Link } from "@tanstack/react-router";
import { BookOpen, ChevronRight } from "lucide-react";
import { guides } from "@/lib/guides";

export function GuideLinks({ heading = "Helpful guides", slugs }: { heading?: string; slugs?: string[] }) {
  const list = slugs ? guides.filter((g) => slugs.includes(g.slug)) : guides;
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{heading}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {list.map((g) => (
          <Link
            key={g.slug}
            to="/guides/$slug"
            params={{ slug: g.slug }}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold leading-snug tracking-tight">{g.shortTitle}</p>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{g.summary}</p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
