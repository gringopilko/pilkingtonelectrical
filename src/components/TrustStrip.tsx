import { useEffect, useState } from "react";
import { ShieldCheck, Star, Phone } from "lucide-react";
import { getReviews } from "@/lib/reviews-server";

interface Rating {
  rating: number;
  count: number;
}

export function TrustStrip() {
  const [google, setGoogle] = useState<Rating | null>(null);

  // Live Google rating from the same cached source as the reviews section.
  // If it can't be loaded the rating is simply left out, so it never shows a stale number.
  useEffect(() => {
    let cancelled = false;
    getReviews()
      .then((d: any) => {
        if (!cancelled && d?.rating && d?.userRatingCount) {
          setGoogle({ rating: d.rating, count: d.userRatingCount });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-xs font-medium sm:gap-x-8 sm:text-[13px]">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
          <span className="sm:hidden">Licensed REC 30450</span>
          <span className="hidden sm:inline">Licensed electrician REC 30450</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
          <span className="sm:hidden">$5M insured</span>
          <span className="hidden sm:inline">$5 million public liability</span>
        </span>
        {google && (
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" aria-hidden="true" />
            {google.rating.toFixed(1)} on Google
            <span className="hidden sm:inline">({google.count} reviews)</span>
          </span>
        )}
        <a href="tel:0466270949" className="hidden items-center gap-1.5 hover:underline md:inline-flex">
          <Phone className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
          0466 270 949
        </a>
      </div>
    </div>
  );
}
