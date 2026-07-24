import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

interface Review {
  authorName: string
  authorPhoto: string | null
  rating: number
  text: string
  relativeTime: string
}

interface ReviewsPayload {
  rating: number | null
  userRatingCount: number | null
  reviews: Review[]
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? 'fill-cyan-500 text-cyan-500' : 'fill-slate-200 text-slate-200'} />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [data, setData] = useState<ReviewsPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('/api/reviews')
      .then((res) => { if (!res.ok) throw new Error('Failed to load reviews'); return res.json() })
      .then((json) => { if (!cancelled) setData(json) })
      .catch(() => { if (!cancelled) setError(true) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  if (loading || error || !data || !data.reviews?.length) {
    return null
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <StarRow rating={Math.round(data.rating ?? 5)} />
            <span className="text-sm font-medium text-slate-600">{data.rating?.toFixed(1)} from {data.userRatingCount} Google reviews</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What our customers say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {data.reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <StarRow rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">"{review.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                {review.authorPhoto ? (
                  <img src={review.authorPhoto} alt={review.authorName} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">{review.authorName.charAt(0)}</div>
                )}
                <div>
                  <p className="text-sm font-medium text-slate-900">{review.authorName}</p>
                  <p className="text-xs text-slate-500">{review.relativeTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/review" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600">Leave us a review</a>
        </div>
      </div>
    </section>
  )
}
