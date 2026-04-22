import { posts } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";

function formatDate(dateStr: string, locale: Locale) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : locale, { year: "numeric", month: "long" });
}

export default function BlogSection({ locale }: { locale: Locale }) {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-[#dedee5]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#101114]">{t("blog.title", locale)}</h2>
          <a href={`/${locale}/blog`} className="text-xs sm:text-sm text-[#7132f5] hover:text-[#5741d8] transition-colors">
            {t("blog.readMore", locale)}
          </a>
        </div>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {latest.map((post) => (
            <a
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group rounded-xl border border-[#dedee5] p-4 sm:p-6 hover:border-[#7132f5]/30 transition-all"
            >
              <div className="text-xs text-[#9497a9]">{formatDate(post.date, locale)}</div>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-[#101114] group-hover:text-[#7132f5] transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#686b82] leading-relaxed">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
