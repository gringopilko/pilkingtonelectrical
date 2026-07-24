import { createServerFn } from "@tanstack/react-start";

const CACHE_KEY = "google-reviews";
const CACHE_TTL_SECONDS = 60 * 60 * 24;

export const getReviews = createServerFn({ method: "GET" }).handler(async ({ request }: any) => {
  const env = request?.context?.cloudflare?.env;

  if (!env?.REVIEWS_CACHE) {
    return { rating: null, userRatingCount: null, reviews: [] };
  }

  const cached = await env.REVIEWS_CACHE.get(CACHE_KEY, "json");
  if (cached) return cached;

  const placesRes = await fetch(`https://places.googleapis.com/v1/places/${env.GOOGLE_PLACE_ID}?fields=displayName,rating,userRatingCount,reviews`, { headers: { "X-Goog-Api-Key": env.GOOGLE_PLACES_API_KEY } });

  if (!placesRes.ok) {
    return { rating: null, userRatingCount: null, reviews: [] };
  }

  const data: any = await placesRes.json();

  const payload = {
    rating: data.rating ?? null,
    userRatingCount: data.userRatingCount ?? null,
    reviews: (data.reviews ?? []).map((r: any) => ({
      authorName: r.authorAttribution?.displayName ?? "Google user",
      authorPhoto: r.authorAttribution?.photoUri ?? null,
      rating: r.rating,
      text: r.text?.text ?? "",
      relativeTime: r.relativePublishTimeDescription ?? "",
    })),
    fetchedAt: new Date().toISOString(),
  };

  await env.REVIEWS_CACHE.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL_SECONDS });

  return payload;
});
