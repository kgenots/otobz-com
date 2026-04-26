import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSaasProduct, isPlaceholderFormId, saasProducts, tallyEmbedSrc } from "@/lib/saas-config";
import { DEFAULT_LOCALE, isLocale, t, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return Object.keys(saasProducts).map((product) => ({ product }));
}

export default async function SaasProductPage({
  params,
}: {
  params: Promise<{ locale: string; product: string }>;
}) {
  const { locale: raw, product } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const config = getSaasProduct(product);
  if (!config) notFound();
  const placeholder = isPlaceholderFormId(config.formId);

  return (
    <main>
      <Header locale={locale} />
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">SaaS</span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101114]">
            {config.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5741d8] font-medium">{config.subtitle}</p>
          <p className="mt-4 text-sm sm:text-base text-[#686b82] leading-relaxed max-w-2xl">
            {config.description}
          </p>

          <div className="mt-6 rounded-xl border border-[#dedee5] bg-[#fafafa] px-4 py-3 text-xs sm:text-sm text-[#686b82] leading-relaxed">
            {t("saas.disclaimer", locale)}
          </div>

          <div className="mt-10">
            {placeholder ? (
              <div className="rounded-xl border border-dashed border-[#7132f5]/40 bg-[#7132f5]/5 px-6 py-12 text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-[#5b1ecf]">
                  {t("saas.placeholder.title", locale)}
                </h2>
                <p className="mt-3 text-sm text-[#686b82] max-w-md mx-auto">
                  {t("saas.placeholder.body", locale)}
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-[#dedee5] overflow-hidden bg-white">
                <iframe
                  src={tallyEmbedSrc(config.formId)}
                  loading="lazy"
                  width="100%"
                  height="600"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title={`${config.title} waitlist`}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
