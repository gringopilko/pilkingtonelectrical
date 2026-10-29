import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";
import { MAX_PHOTO_BYTES, PHOTO_KEEP_DAYS, PHOTO_TYPES } from "@/lib/quote-photos";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

const ALLOWED_ORIGIN = /^https:\/\/(www\.)?pilkingtonelectrical\.com\.au$|^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

/** Receives one photo from the quote form and stores it privately for 90 days. */
export const Route = createFileRoute("/api/quote-photo")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const origin = request.headers.get("origin");
        if (origin && !ALLOWED_ORIGIN.test(origin)) return json({ error: "Not allowed" }, 403);

        const type = (request.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
        const ext = PHOTO_TYPES[type];
        if (!ext) return json({ error: "Only photos can be uploaded" }, 415);

        const declared = Number(request.headers.get("content-length") || "0");
        if (declared > MAX_PHOTO_BYTES) return json({ error: "Photo is too large" }, 413);
        const body = await request.arrayBuffer();
        if (body.byteLength === 0 || body.byteLength > MAX_PHOTO_BYTES) return json({ error: "Photo is too large" }, 413);

        const id = `${new Date().toISOString().slice(0, 10)}-${crypto.randomUUID()}.${ext}`;
        await env.QUOTE_PHOTOS.put(id, body, { expirationTtl: PHOTO_KEEP_DAYS * 24 * 60 * 60, metadata: { type } });
        return json({ url: `https://pilkingtonelectrical.com.au/api/quote-photo/${id}` });
      },
    },
  },
});
