import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://vividmindgames.com/sitemap.xml",
    host: "https://vividmindgames.com",
  };
}
