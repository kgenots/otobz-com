"use client";

import { useState } from "react";
import { posts } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";

function formatDate(dateStr: string, locale: Locale) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : locale, { year: "numeric", month: "long", day: "numeric" });
}

const ALL_TAGS = [...new Set(posts.flatMap((p) => p.tags || []))];

export default function BlogList({ locale }: { locale: Locale }) {
  const [tag, setTag] = useState<string | null>(null);
  const filtered = tag ? posts.filter((p) => p.tags?.includes(tag)) : posts;

  return (
    <section className="py-20 px-6 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-[#101114]">{t("blog.title", locale)}</h1>
        <p className="mt-4 text-lg text-[#686b82] max-w-xl">{t("blog.description", locale)}</p>

        {/* Tag filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setTag(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              !tag
                ? "bg-[#7132f5] text-white"
                : "bg-[#fafafa] text-[#686b82] hover:bg-[#dedee5]"
            }`}
          >
            {t("blog.all", locale)}
          </button>
          {ALL_TAGS.map((tagLabel) => (
            <button
              key={tagLabel}
              onClick={() => setTag(tagLabel)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                tag === tagLabel
                  ? "bg-[#7132f5] text-white"
                  : "bg-[#fafafa] text-[#686b82] hover:bg-[#dedee5]"
              }`}
            >
              {tagLabel}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="mt-8 grid gap-8">
          {[...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
            <a
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group rounded-xl border border-[#dedee5] p-8 hover:border-[#7132f5]/30 hover:shadow-sm transition-all"
            >
              {post.image && (
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-center gap-3 text-xs text-[#9497a9] mt-4">
                <time>{formatDate(post.date, locale)}</time>
                {post.tags?.map((tagLabel) => (
                  <span key={tagLabel} className="rounded-full bg-[#7132f5]/10 px-2.5 py-0.5 text-[#7132f5] font-medium">
                    {tagLabel}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-2xl font-bold text-[#101114] group-hover:text-[#7132f5] transition-colors">
                {t(post.titleKey, locale)}
              </h2>
              <p className="mt-3 text-[#686b82] leading-relaxed">{t(post.excerptKey, locale)}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#7132f5] group-hover:text-[#5741d8] transition-colors">
                {t("blog.readMore", locale)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
