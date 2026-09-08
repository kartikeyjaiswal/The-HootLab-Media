import type { MetadataRoute } from "next";

// Required for `output: export`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://thehootlabmedia.com/sitemap.xml",
  };
}
