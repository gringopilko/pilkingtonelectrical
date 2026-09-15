import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const canonicalHostMiddleware = createMiddleware().server(({ request, next }) => {
  const url = new URL(request.url);
  const canonicalHost = url.hostname === "www.pilkingtonelectrical.com.au";
  const canonicalContact = url.pathname === "/Contact";
  const canonicalProtocol =
    url.hostname === "pilkingtonelectrical.com.au" && url.protocol === "http:";
  if (!canonicalHost && !canonicalContact && !canonicalProtocol) {
    return next();
  }
  if (canonicalHost || canonicalProtocol) {
    url.hostname = "pilkingtonelectrical.com.au";
    url.protocol = "https:";
  }
  if (canonicalContact) url.pathname = "/contact";
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
