import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** A public site: crawl all of it, and point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
