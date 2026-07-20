// trigger redeploy
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react"; 
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
  meta: [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Pilkington Electrical | Domestic & Commercial Electrician Melbourne" },
    { name: "description", content: "Licensed electrician serving homes, body corporates & real estate agents across South East Melbourne. Rewires, fault finding, switchboards." },
    { name: "author", content: "Pilkington Electrical" },
    { property: "og:title", content: "Pilkington Electrical | Domestic & Commercial Electrician Melbourne" },
    { property: "og:description", content: "Licensed electrician serving homes, body corporates & real estate agents across South East Melbourne. Rewires, fault finding, switchboards." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://pilkingtonelectrical.com.au/" },
    { property: "og:site_name", content: "Pilkington Electrical" },
    { property: "og:image", content: "https://pilkingtonelectrical.com.au/og-image.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Pilkington Electrical | Domestic & Commercial Electrician Melbourne" },
    { name: "twitter:description", content: "Licensed electrician serving homes, body corporates & real estate agents across South East Melbourne. Rewires, fault finding, switchboards." },
    { name: "twitter:image", content: "https://pilkingtonelectrical.com.au/og-image.jpg" },
  ],
  links: [
    { rel: "canonical", href: "https://pilkingtonelectrical.com.au/" },
    { rel: "stylesheet", href: appCss },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  ],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ElectricalContractor",
        "name": "Pilkington Electrical",
        "url": "https://pilkingtonelectrical.com.au",
        "logo": "https://pilkingtonelectrical.com.au/og-image.jpg",
        "image": "https://pilkingtonelectrical.com.au/og-image.jpg",
        "telephone": "+61466270949",
        "email": "contact@pilkingtonelectrical.com.au",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Elwood",
          "addressLocality": "Elwood",
          "addressRegion": "VIC",
          "postalCode": "3184",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -37.8729,
          "longitude": 144.9842
        },
        "areaServed": [
          "Elwood", "St Kilda", "Brighton", "Caulfield", "Hampton",
          "Bentleigh", "Malvern", "Glen Iris", "Camberwell", "South Yarra"
        ],
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "06:30",
            "closes": "18:00"
          }
        ]
      })
    }
  ],
}),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
