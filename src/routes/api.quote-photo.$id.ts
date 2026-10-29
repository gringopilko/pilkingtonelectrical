import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";
import { PHOTO_ID_PATTERN } from "@/lib/quote-photos";

/** Shows a quote photo from its private link. Links are long random addresses and expire after 90 days. */
export const Route = createFileRoute("/api/quote-photo/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = params.id;
        if (!PHOTO_ID_PATTERN.test(id)) return new Response("Not found", { status: 404 });
        const { value, metadata } = await env.QUOTE_PHOTOS.getWithMetadata<{ type?: string }>(id, "arrayBuffer");
        if (!value) return new Response("This photo has expired or does not exist.", { status: 404 });
        return new Response(value, {
          headers: {
            "content-type": metadata?.type || "image/jpeg",
            "content-disposition": `inline; filename="${id}"`,
            "cache-control": "private, max-age=3600",
            "x-robots-tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});
