import { t, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[#dedee5] py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-[#7132f5]/5 border border-[#7132f5]/10 p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-[#101114]">{t("newsletter.title", locale)}</h3>
          <p className="mt-2 text-sm text-[#686b82]">{t("newsletter.description", locale)}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("newsletter.placeholder", locale)}
              className="flex-1 rounded-lg border border-[#dedee5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7132f5]/30"
            />
            <a
              href="mailto:contact@otobz.com"
              className="inline-flex items-center justify-center rounded-lg bg-[#7132f5] px-5 py-2 text-sm font-medium text-white hover:bg-[#5741d8] transition-colors"
            >
              {t("newsletter.submit", locale)}
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9497a9]">
          <div>{t("footer.copyright", locale)}</div>
          <div className="flex gap-4">
            <a href="https://trip.otobz.com" target="_blank" className="hover:text-[#101114] transition-colors">trip</a>
            <a href={`/${locale}/blog`} className="hover:text-[#101114] transition-colors">{t("blog.title", locale)}</a>
            <a href={`/${locale}/blog/rss`} className="hover:text-[#101114] transition-colors" title="RSS">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
