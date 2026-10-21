import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

const CACHE_KEY = "google-reviews-v3";

/** Genuine Google reviews pinned to the top, copied word for word from the Google Business Profile. */
const PINNED_REVIEWS = [
  {
    authorName: "Luke Lalor",
    authorPhoto: null,
    rating: 5,
    text: "Shane was amazing he looked after my mother and made her very comfortable and was punctual and very affordable.\nHighly recommend him\nThanks for looking after my mum Shane.\nLuke and Gina",
    relativeTime: "October 2026",
    publishTime: "2026-10-20T00:00:00Z",
  },
];
const CACHE_TTL_SECONDS = 60 * 60 * 6;

export const getReviews = createServerFn({ method: "GET" }).handler(async () => {
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
    // Google returns up to five reviews it picks as most relevant; show the newest first
    reviews: (data.reviews ?? [])
      .map((r: any) => ({
        authorName: r.authorAttribution?.displayName ?? "Google user",
        authorPhoto: r.authorAttribution?.photoUri ?? null,
        rating: r.rating,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? "",
      }))
      .sort((a: { publishTime: string }, b: { publishTime: string }) => (b.publishTime || "").localeCompare(a.publishTime || "")),
    fetchedAt: new Date().toISOString(),
  };

  const pinnedNames = new Set(PINNED_REVIEWS.map((r) => r.authorName.toLowerCase()));
  payload.reviews = [...PINNED_REVIEWS, ...payload.reviews.filter((r: { authorName: string }) => !pinnedNames.has(r.authorName.toLowerCase()))];

  await env.REVIEWS_CACHE.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL_SECONDS });

  return payload;
});
