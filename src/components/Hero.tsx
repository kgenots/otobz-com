import { t, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #7132f5 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-5xl mx-auto relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#101114] whitespace-pre-line">
          {t("hero.title1", locale)}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#686b82] max-w-xl leading-relaxed whitespace-pre-line">
          {t("hero.description", locale)}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="https://trip.otobz.com"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#7132f5] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors"
          >
            {t("hero.cta", locale)}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
