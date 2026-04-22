import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { t, DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return {
    title: `${t("contact.title", locale)} — OTOBZ`,
    description: t("contact.excerpt", locale),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;

  return (
    <main>
      <Header locale={locale} />
      <section className="py-20 px-6 pt-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#101114]">
            {t("contact.title", locale)}
          </h1>
          <p className="mt-4 text-lg text-[#686b82] leading-relaxed">
            {t("contact.excerpt", locale)}
          </p>
          <div className="mt-12 space-y-8">
            <div className="rounded-2xl bg-[#7132f5]/5 border border-[#7132f5]/10 p-8">
              <h2 className="text-xl font-bold text-[#101114] mb-4">{t("contact.whatWeDo", locale)}</h2>
              <ul className="space-y-3 text-[#686b82]">
                <li>
                  <span className="font-medium text-[#101114]">AI 인프라 구축</span> — K3s, agent architecture, autonomous ops
                </li>
                <li>
                  <span className="font-medium text-[#101114]">AI agent 운영</span> — OpenClaw, cron jobs, multi-agent orchestration
                </li>
                <li>
                  <span className="font-medium text-[#101114]">비용 최적화</span> — Local AI + cloud API hybrid, cost reduction strategies
                </li>
              </ul>
            </div>
            <div>
              <a
                href="mailto:contact@otobz.com"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7132f5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors"
              >
                {t("contact.email", locale)}
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="rounded-2xl border border-[#dedee5] p-8 bg-[#fafafa]">
              <h3 className="font-semibold text-[#101114] mb-2">{t("contact.alternative", locale)}</h3>
              <p className="text-sm text-[#686b82]">
                {t("contact.alternativeText", locale)}
              </p>
              <a
                href="https://trip.otobz.com"
                target="_blank"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#7132f5] hover:text-[#5741d8] transition-colors"
              >
                trip.otobz.com →
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
