import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personas } from "@/data/agents";
import { isStale, pnlSnapshot, formatDelta } from "@/lib/pnl";
import { DEFAULT_LOCALE, isLocale, t, type Locale } from "@/lib/i18n";

export default async function PnlPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const stale = isStale();
  const delta = pnlSnapshot.delta_pct_vs_prev_month;
  const deltaColor = delta > 0 ? "text-[#026b3f]" : delta < 0 ? "text-[#a3261c]" : "text-[#101114]";

  const contributionEntries = personas
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      pct: pnlSnapshot.agent_contribution_pct[p.slug] ?? 0,
    }))
    .filter((e) => e.pct > 0)
    .sort((a, b) => b.pct - a.pct);

  return (
    <main>
      <Header locale={locale} />
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {stale && (
            <div className="mb-6 rounded-xl border border-[#5b1ecf]/30 bg-[#7132f5]/8 px-4 py-3 text-sm text-[#5b1ecf]">
              {t("pnl.staleBanner", locale)}
            </div>
          )}
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">
            {pnlSnapshot.month}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101114]">
            {t("pnl.page.title", locale)}
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#686b82] leading-relaxed max-w-2xl">
            {t("pnl.page.intro", locale)}
          </p>

          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9497a9]">
              {t("pnl.section.delta", locale)}
            </h2>
            <div className={`mt-3 text-5xl sm:text-6xl font-bold tracking-tight ${deltaColor}`}>
              {formatDelta(delta)}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9497a9]">
              {t("pnl.section.contribution", locale)}
            </h2>
            <div className="mt-4 space-y-3">
              {contributionEntries.map((e) => (
                <div key={e.slug}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[#101114]">{e.name}</span>
                    <span className="text-[#686b82] tabular-nums">{e.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-[#dedee5] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#7132f5]"
                      style={{ width: `${Math.max(0, Math.min(100, e.pct))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9497a9]">
              {t("pnl.section.activity", locale)}
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-4">
                <dt className="text-xs text-[#9497a9]">{t("pnl.activity.posts", locale)}</dt>
                <dd className="mt-1 text-2xl font-bold text-[#101114] tabular-nums">
                  {pnlSnapshot.activity_counts.posts_published}
                </dd>
              </div>
              <div className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-4">
                <dt className="text-xs text-[#9497a9]">{t("pnl.activity.trades", locale)}</dt>
                <dd className="mt-1 text-2xl font-bold text-[#101114] tabular-nums">
                  {pnlSnapshot.activity_counts.trades_executed}
                </dd>
              </div>
              <div className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-4">
                <dt className="text-xs text-[#9497a9]">{t("pnl.activity.leads", locale)}</dt>
                <dd className="mt-1 text-2xl font-bold text-[#101114] tabular-nums">
                  {pnlSnapshot.activity_counts.leads_captured}
                </dd>
              </div>
            </dl>
          </section>

          <p className="mt-12 text-xs text-[#9497a9]">
            {t("pnl.lastUpdated", locale)}: {pnlSnapshot.last_updated}
          </p>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
