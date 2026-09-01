import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.APP_URL || "https://nftcunion.com").replace(/\/$/, "");
  return { rules: { userAgent: "*", allow: "/", disallow: ["/admin/", "/dashboard/", "/api/", "/pin", "/verify", "/reset-password"] }, sitemap: `${baseUrl}/sitemap.xml`, host: baseUrl };
}
