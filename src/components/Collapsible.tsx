import { useEffect, useRef, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * A tap-to-open section. The content stays in the page (so search engines read it),
 * and a link to #id opens it automatically.
 */
export function Collapsible({ id, title, className = "", children }: { id?: string; title: ReactNode; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!id) return;
    const openIfTargeted = () => {
      if (window.location.hash === `#${id}` && ref.current) ref.current.open = true;
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    return () => window.removeEventListener("hashchange", openIfTargeted);
  }, [id]);

  return (
    <details ref={ref} id={id} className="group mt-4 scroll-mt-28 rounded-2xl border border-border bg-card transition-shadow open:bg-background open:shadow-lg open:shadow-slate-900/5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        <h2 className="text-lg font-extrabold leading-snug tracking-tight md:text-2xl">{title}</h2>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-180">
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </span>
      </summary>
      <div className={`px-5 pb-6 sm:px-6 sm:pb-8 ${className}`}>{children}</div>
    </details>
  );
}
