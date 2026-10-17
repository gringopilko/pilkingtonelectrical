import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { getAllSuburbs } from "@/lib/suburbs";
import { guides } from "@/lib/guides";

const BASE_URL = "https://pilkingtonelectrical.com.au";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/suburbs", changefreq: "monthly", priority: "0.6" },
          { path: "/faqs", changefreq: "monthly", priority: "0.6" },
          { path: "/guides", changefreq: "monthly", priority: "0.6" },
          ...guides.map((g) => ({
            path: `/guides/${g.slug}`,
            lastmod: g.updated,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/guarantee", changefreq: "yearly", priority: "0.4" },
          { path: "/privacy", changefreq: "yearly", priority: "0.2" },
          { path: "/terms", changefreq: "yearly", priority: "0.2" },
          { path: "/terms-of-trade", changefreq: "yearly", priority: "0.3" },
          ...services.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...getAllSuburbs().map((s) => ({
            path: `/suburbs/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
