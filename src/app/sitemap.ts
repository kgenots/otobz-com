import type { MetadataRoute } from "next";
import { posts } from "@/data/blog-posts";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n";

const BASE = "https://otobz.com";

function alternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const loc of LOCALES) out[loc] = `${BASE}/${loc}${path}`;
  out["x-default"] = `${BASE}/${DEFAULT_LOCALE}${path}`;
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const loc of LOCALES) {
    entries.push({
      url: `${BASE}/${loc}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: loc === DEFAULT_LOCALE ? 1.0 : 0.8,
      alternates: { languages: alternates("") },
    });
    entries.push({
      url: `${BASE}/${loc}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
      alternates: { languages: alternates("/blog") },
    });
    for (const p of posts) {
      entries.push({
        url: `${BASE}/${loc}/blog/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: alternates(`/blog/${p.slug}`) },
      });
    }
  }

  return entries;
}
