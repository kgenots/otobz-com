import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AgentCard } from "@/components/Agents";
import { activePersonas } from "@/data/agents";
import { DEFAULT_LOCALE, isLocale, t, type Locale } from "@/lib/i18n";

export default async function AgentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const list = activePersonas();
  return (
    <main>
      <Header locale={locale} />
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">
            {t("agents.label", locale)}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101114]">
            {t("agents.page.title", locale)}
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#686b82] leading-relaxed max-w-2xl">
            {t("agents.page.intro", locale)}
          </p>
          <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <AgentCard key={p.slug} persona={p} locale={locale} href={`/${locale}/agents/${p.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
