import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const canonicalHostMiddleware = createMiddleware().server(({ request, next }) => {
  const url = new URL(request.url);
  const isWww = url.hostname === "www.pilkingtonelectrical.com.au";
  const isHttp = url.protocol === "http:";

  if (!isWww && !isHttp) {
    return next();
  }

  // Covers all three non-canonical variants in one pass:
  // http(s)://www.* and http://pilkingtonelectrical.com.au (no www, but unencrypted)
  url.hostname = "pilkingtonelectrical.com.au";
  url.protocol = "https:";
  return Response.redirect(url.toString(), 301);
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  functionMiddleware: [],
  requestMiddleware: [canonicalHostMiddleware, errorMiddleware],
}));
