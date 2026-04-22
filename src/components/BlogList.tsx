import { posts } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";

function formatDate(dateStr: string, locale: Locale) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : locale, { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogList({ locale }: { locale: Locale }) {
  return (
    <section className="py-20 px-6 pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-[#101114]">{t("blog.title", locale)}</h1>
        <p className="mt-4 text-lg text-[#686b82] max-w-xl">{t("blog.description", locale)}</p>
        <div className="mt-12 grid gap-8">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group rounded-xl border border-[#dedee5] p-8 hover:border-[#7132f5]/30 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#9497a9]">
                {formatDate(post.date, locale)}
                {post.tags?.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#7132f5]/10 px-2.5 py-0.5 text-[#7132f5] font-medium">
                    {tag}
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
