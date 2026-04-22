import { Post } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";

function formatDate(dateStr: string, locale: Locale) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : locale, { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost({ post, locale }: { post: Post; locale: Locale }) {
  return (
    <article className="py-20 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <a href={`/${locale}/blog`} className="text-sm text-[#7132f5] hover:text-[#5741d8] transition-colors">
          {t("blog.back", locale)}
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#9497a9]">
          <time>{formatDate(post.date, locale)}</time>
          {post.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-[#7132f5]/10 px-2.5 py-0.5 text-[#7132f5] font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#101114]">{post.title}</h1>
        <div className="mt-8 space-y-6">
          {post.paragraphs.map((p, i) => (
            <p key={i} className="text-[#101114] leading-relaxed">
              {post.headings && i < post.headings.length && (
                <span className="block text-2xl font-bold text-[#7132f5] mb-2">
                  {post.headings[i]}
                </span>
              )}
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
