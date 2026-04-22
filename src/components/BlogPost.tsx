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
                    const rows = lines.filter(l => l.includes("|"));
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
      </div>
    </article>
  );
}
