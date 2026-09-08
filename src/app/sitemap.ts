import type { MetadataRoute } from "next";

// Required for `output: export`.
export const dynamic = "force-static";

const BASE = "https://thehootlabmedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/onboarding", "/contact"];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
