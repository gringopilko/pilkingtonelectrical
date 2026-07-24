import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getReviews } from "@/lib/reviews-server";

interface Review {
  authorName: string;
  authorPhoto: string | null;
  rating: number;
  text: string;
  relativeTime: string;
}

interface ReviewsPayload {
  rating: number | null;
  userRatingCount: number | null;
  reviews: Review[];
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-border text-border"}`} />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getReviews()
      .then((json: any) => { if (!cancelled) setData(json); })
      .catch(() => { if (!cancelled) setError(true); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  if (loading || error || !data || !data.reviews?.length) {
    return null;
  }

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <StarRow rating={Math.round(data.rating ?? 5)} />
            <span className="text-sm font-medium text-muted-foreground">{data.rating?.toFixed(1)} from {data.userRatingCount} Google reviews</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">What Our Customers Say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {data.reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="flex flex-col rounded-xl border border-border bg-background p-6">
              <StarRow rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{review.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                {review.authorPhoto ? (
                  <img src={review.authorPhoto} alt={review.authorName} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{review.authorName.charAt(0)}</div>
                )}
                <div>
                  <p className="text-sm font-bold tracking-tight">{review.authorName}</p>
                  <p className="text-xs text-muted-foreground">{review.relativeTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/review" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark">Leave Us a Review</a>
        </div>
      </div>
    </section>
  );
}
