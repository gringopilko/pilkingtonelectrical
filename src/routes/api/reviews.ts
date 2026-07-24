import { createServerFileRoute } from '@tanstack/react-start/server'

const CACHE_KEY = 'google-reviews'
const CACHE_TTL_SECONDS = 60 * 60 * 24

export const ServerRoute = createServerFileRoute('/api/reviews').methods({
  GET: async ({ request, context }) => {
    const env = (context as any)?.cloudflare?.env as {
      REVIEWS_CACHE: KVNamespace
      GOOGLE_PLACES_API_KEY: string
      GOOGLE_PLACE_ID: string
    }

    if (!env?.REVIEWS_CACHE) {
      return new Response(JSON.stringify({ error: 'Reviews cache not configured' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }

    try {
      const cached = await env.REVIEWS_CACHE.get(CACHE_KEY, 'json')
      if (cached) {
        return new Response(JSON.stringify(cached), { headers: { 'Content-Type': 'application/json' } })
      }

      const placesRes = await fetch(`https://places.googleapis.com/v1/places/${env.GOOGLE_PLACE_ID}?fields=displayName,rating,userRatingCount,reviews`, { headers: { 'X-Goog-Api-Key': env.GOOGLE_PLACES_API_KEY } })

      if (!placesRes.ok) {
        throw new Error(`Places API error: ${placesRes.status}`)
      }

      const data: any = await placesRes.json()

      const payload = {
        rating: data.rating ?? null,
        userRatingCount: data.userRatingCount ?? null,
        reviews: (data.reviews ?? []).map((r: any) => ({
          authorName: r.authorAttribution?.displayName ?? 'Google user',
          authorPhoto: r.authorAttribution?.photoUri ?? null,
          rating: r.rating,
          text: r.text?.text ?? '',
          relativeTime: r.relativePublishTimeDescription ?? '',
        })),
        fetchedAt: new Date().toISOString(),
      }

      await env.REVIEWS_CACHE.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL_SECONDS })

      return new Response(JSON.stringify(payload), { headers: { 'Content-Type': 'application/json' } })
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Failed to fetch reviews', details: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  },
})
