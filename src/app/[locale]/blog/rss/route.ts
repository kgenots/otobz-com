import { posts } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";
import { redirect } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: raw } = await params;
  const locale: Locale = ["ko","en","ja","es","de","it","fr"].includes(raw) ? raw as Locale : "ko";
  const BASE = "https://otobz.com";

  const items = posts
    .filter(p => p.sections.length > 0)
    .map((post) => {
      const title = t(post.titleKey, locale);
      const excerpt = t(post.excerptKey, locale);
      const heading = t(post.sections[0].headingKey, locale);
      return `
<item>
  <title>${title}</title>
  <link>${BASE}/${locale}/blog/${post.slug}</link>
  <description>${excerpt}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <guid>${BASE}/${locale}/blog/${post.slug}</guid>
</item>`.trim();
    }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OTOBZ Blog</title>
    <link>${BASE}/${locale}/blog</link>
    <description>OTOBZ · AI-First Company</description>
    <language>${locale}</language>
    <atom:link href="${BASE}/${locale}/blog/rss" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
