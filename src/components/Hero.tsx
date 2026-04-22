import { t, type Locale } from "@/lib/i18n";

function ServiceCard({
  href,
  titleKey,
  descKey,
  locale,
}: {
  href: string;
  titleKey: string;
  descKey: string;
  locale: Locale;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group rounded-xl border border-[#dedee5] p-5 hover:border-[#7132f5]/30 hover:shadow-sm transition-all flex flex-col gap-2"
    >
      <div className="text-2xl">🌍</div>
      <h3 className="font-semibold text-[#101114] group-hover:text-[#7132f5] transition-colors">
        {t(titleKey, locale)}
      </h3>
      <p className="text-sm text-[#686b82] leading-relaxed">{t(descKey, locale)}</p>
    </a>
  );
}

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7132f5]/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #7132f5 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            {t("hero.status", locale)}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#101114] whitespace-pre-line">
          {t("hero.title1", locale)}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#686b82] max-w-xl leading-relaxed whitespace-pre-line">
          {t("hero.description", locale)}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="https://trip.otobz.com"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#7132f5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors shadow-lg shadow-[#7132f5]/20"
          >
            {t("hero.cta", locale)}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={`/${locale}/blog`}
            className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#dedee5] bg-white px-6 py-3 text-sm font-semibold text-[#686b82] hover:border-[#7132f5]/30 hover:text-[#101114] transition-colors"
          >
            {t("hero.ctaBlog", locale)}
          </a>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <ServiceCard
            href="https://trip.otobz.com"
            titleKey="hero.service.trip.title"
            descKey="hero.service.trip.desc"
            locale={locale}
          />
          <ServiceCard
            href={`/${locale}/blog`}
            titleKey="hero.service.blog.title"
            descKey="hero.service.blog.desc"
            locale={locale}
          />
        </div>

        {/* Footer stats */}
        <div className="mt-12 sm:mt-16 flex flex-wrap gap-8 sm:gap-12">
          <div>
            <div className="text-2xl font-bold text-[#101114]">{t("hero.stats.posts", locale)}</div>
            <div className="mt-1 text-xs text-[#9497a9]">{t("hero.stats.postsLabel", locale)}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#101114]">{t("hero.stats.locales", locale)}</div>
            <div className="mt-1 text-xs text-[#9497a9]">{t("hero.stats.localesLabel", locale)}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#101114]">{t("hero.stats.uptime", locale)}</div>
            <div className="mt-1 text-xs text-[#9497a9]">{t("hero.stats.uptimeLabel", locale)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
