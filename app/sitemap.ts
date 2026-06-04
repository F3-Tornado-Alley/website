import type { MetadataRoute } from "next";
import { cities } from "./locations/data";

export const dynamic = "force-static";

const BASE = "https://tornadoalley.f3nation.com";

// Static routes -> [path, changeFrequency, priority]. Trailing slashes match
// the trailingSlash: true config so sitemap URLs equal the canonical URLs.
const STATIC: [string, MetadataRoute.Sitemap[number]["changeFrequency"], number][] = [
  ["/", "weekly", 1.0],
  ["/locations/", "weekly", 0.9],
  ["/getting-started/", "monthly", 0.9],
  ["/resources/", "monthly", 0.7],
  ["/contact-us/", "monthly", 0.6],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC.map(([path, changeFrequency, priority]) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const cityEntries = cities.map((c) => ({
    url: `${BASE}/locations/${c.slug}/`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...cityEntries];
}
