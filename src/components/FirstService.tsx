import { t, type Locale } from "@/lib/i18n";

export default function FirstService({ locale }: { locale: Locale }) {
  return (
    <section id="service" className="py-20 px-6 border-t border-[#dedee5]">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">{t("service.label", locale)}</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#101114]">{t("service.title", locale)}</h2>
            <p className="mt-4 text-[#686b82] leading-relaxed">{t("service.desc", locale)}</p>
            <a
              href="https://trip.otobz.com"
              target="_blank"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#7132f5] hover:text-[#5741d8] transition-colors"
            >
              trip.otobz.com
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="rounded-xl border border-[#dedee5] bg-gradient-to-br from-[#7132f5]/5 to-[#7132f5]/10 p-6">
            <div className="text-5xl font-bold text-[#7132f5]">1+</div>
            <div className="mt-2 text-sm text-[#686b82]">{t("service.running", locale)}</div>
            <div
              className="mt-6 text-xs text-[#9497a9] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("service.coming", locale) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
