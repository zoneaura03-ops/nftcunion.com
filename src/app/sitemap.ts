import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.APP_URL || "https://nftcunion.com").replace(/\/$/, "");
  const routes = ["", "/about", "/features", "/corporate-banking", "/faq", "/privacy", "/legal"];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/features" ? 0.9 : 0.7 }));
}
