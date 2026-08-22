import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/lib/site";

/** Every page, listed once. The home page ranks above the rest. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: new URL(path, siteUrl).href,
    lastModified,
    changeFrequency: path === "/events" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
