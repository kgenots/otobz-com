import { t, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#101114] whitespace-pre-line">
          {t("hero.title1", locale)}
        </h1>
        <p className="mt-6 text-lg text-[#686b82] max-w-xl leading-relaxed whitespace-pre-line">
          {t("hero.description", locale)}
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="https://trip.otobz.com"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-[12px] bg-[#7132f5] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors"
          >
            {t("hero.cta", locale)}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
