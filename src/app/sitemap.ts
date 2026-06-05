import type { MetadataRoute } from "next";
import { locationSlugs } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aj-schluesseldienst.de";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/schluesselnotdienst`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/leistungen/tueroeffnung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/auto-oeffnung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/leistungen/tresoroeffnung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Location-Seiten: altona + winterhude (eigene Dateien) + datengetrieben aus locations.ts
  const locationPageSlugs = ["altona", "winterhude", ...locationSlugs];
  const locationPages: MetadataRoute.Sitemap = locationPageSlugs.map((slug) => ({
    url: `${baseUrl}/hamburg-${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages];
}
