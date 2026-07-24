import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

const CACHE_KEY = "google-reviews";
const CACHE_TTL_SECONDS = 60 * 60 * 24;

export const getReviews = createServerFn({ method: "GET" }).handler(async () => {
  const kv = (env as any).REVIEWS_CACHE;
  const apiKey = (env as any).GOOGLE_PLACES_API_KEY;
  const placeId = (env as any).GOOGLE_PLACE_ID;

  const cached = await kv.get(CACHE_KEY, "json");
  if (cached) return cached;

  const placesRes = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews`, { headers: { "X-Goog-Api-Key": apiKey } });

  if (!placesRes.ok) {
    throw new Error(`Places API error: ${placesRes.status}`);
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

  await kv.put(CACHE_KEY, JSON.stringify(payload), { expirationTtl: CACHE_TTL_SECONDS });

  return payload;
});
