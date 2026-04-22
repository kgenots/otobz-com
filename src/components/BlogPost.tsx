import { posts, type Post } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";

function formatDate(dateStr: string, locale: Locale) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : locale, { year: "numeric", month: "long", day: "numeric" });
}

function getRelatedPosts(post: Post, count: number = 3): Post[] {
  const postTags = new Set(post.tags || []);
  const scored = posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const match = (p.tags || []).filter((t) => postTags.has(t)).length;
      return { post: p, score: match };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, count);
  return scored.map((s) => s.post);
}

export default function BlogPost({ post, locale }: { post: Post; locale: Locale }) {
  const related = getRelatedPosts(post);

  return (
    <article className="py-20 px-6 pt-32">
      <div className="max-w-5xl mx-auto">
        <a href={`/${locale}/blog`} className="text-sm text-[#7132f5] hover:text-[#5741d8] transition-colors">
          {t("blog.back", locale)}
        </a>
        {post.image && (
          <img
            src={post.image}
            alt=""
            className="mt-6 w-full h-64 sm:h-80 rounded-xl object-cover"
          />
        )}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#9497a9]">
          <time>{formatDate(post.date, locale)}</time>
          {post.tags?.map((tag) => (
            <a
              key={tag}
              href={`/${locale}/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full bg-[#7132f5]/10 px-2.5 py-0.5 text-[#7132f5] font-medium hover:bg-[#7132f5]/20 transition-colors cursor-pointer"
            >
              {tag}
            </a>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#101114]">
          {t(post.titleKey, locale)}
        </h1>
        <div className="mt-8 space-y-10">
          {post.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-[#7132f5] mb-4">
                {t(section.headingKey, locale)}
              </h2>
              <div className="space-y-6">
                {section.paragraphKeys.map((key, i) => {
                  const text = t(key, locale);
                  const lines = text.split("\n");
                  const firstLine = lines[0];
                  const isTable = firstLine.startsWith("|") && lines.length > 1;

                  if (isTable) {
                    const rows = lines.filter(l => l.includes("|") && !/^[\s|\-:]+$/.test(l));
                    const headerCells = rows[0].split("|").filter(c => c.trim()).map(c => c.trim());
                    const dataRows = rows.slice(1).map(r => r.split("|").filter(c => c.trim()).map(c => c.trim()));
                    return (
                      <div key={i} className="overflow-x-auto">
                        <table className="min-w-full border border-[#dedee5] rounded-lg text-sm">
                          <thead>
                            <tr className="bg-[#fafafa]">
                              {headerCells.map((h, j) => (
                                <th key={j} className="px-4 py-2 border border-[#dedee5] text-left font-semibold text-[#101114]">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-4 py-2 border border-[#dedee5] text-[#101114]">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  return (
                    <p key={i} className="text-[#101114] leading-relaxed">
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Related posts */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#101114] mb-6">{t("blog.related", locale)}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r, i) => (
              <a
                key={r.slug}
                href={`/${locale}/blog/${r.slug}`}
                className="group rounded-xl border border-[#dedee5] p-5 hover:border-[#7132f5]/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-[#9497a9]">
                  <time>{formatDate(r.date, locale)}</time>
                  {r.tags?.slice(0, 1).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#7132f5]/10 px-2 py-0.5 text-[#7132f5]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="mt-2 font-semibold text-[#101114] group-hover:text-[#7132f5] transition-colors">
                  {t(r.titleKey, locale)}
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 rounded-2xl bg-[#7132f5]/5 border border-[#7132f5]/10 p-8 text-center">
          <h3 className="text-lg font-bold text-[#101114]">{t("newsletter.title", locale)}</h3>
          <p className="mt-2 text-sm text-[#686b82]">{t("newsletter.description", locale)}</p>
          <a
            href={`/${locale}/contact`}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#7132f5] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors"
          >
            {t("newsletter.submit", locale)}
          </a>
        </div>

        {/* Trip CTA */}
        <div className="mt-6 rounded-2xl bg-[#7132f5]/5 border border-[#7132f5]/10 p-8 text-center">
          <p className="text-lg font-semibold text-[#101114]">{t("blog.cta.text", locale)}</p>
          <a
            href="https://trip.otobz.com"
            target="_blank"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#7132f5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors"
          >
            {t("blog.cta.button", locale)}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
