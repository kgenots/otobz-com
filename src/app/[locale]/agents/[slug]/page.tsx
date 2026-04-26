import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPersona, personas } from "@/data/agents";
import { DEFAULT_LOCALE, isLocale, t, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return personas.map((p) => ({ slug: p.slug }));
}

function initials(name: string): string {
  return name.slice(0, 2).toUpperCase();
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const persona = getPersona(slug);
  if (!persona) notFound();
  return (
    <main>
      <Header locale={locale} />
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href={`/${locale}/agents`}
            className="inline-flex items-center text-sm text-[#686b82] hover:text-[#7132f5] transition-colors"
          >
            {t("agents.detail.back", locale)}
          </a>
          <div className="mt-6 flex items-center gap-4">
            {persona.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={persona.avatar} alt={persona.name} className="size-16 rounded-full object-cover" />
            ) : (
              <div className="size-16 rounded-full bg-[#7132f5]/16 flex items-center justify-center text-xl font-bold text-[#5b1ecf]">
                {initials(persona.name)}
              </div>
            )}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101114]">
                {persona.name}
              </h1>
              <p className="mt-1 text-sm text-[#9497a9]">{persona.role}</p>
            </div>
          </div>
          <p className="mt-8 text-base text-[#101114] leading-relaxed">
            {t(persona.descriptionKey, locale)}
          </p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#9497a9]">
                {t("agents.detail.role", locale)}
              </dt>
              <dd className="mt-2 text-sm text-[#101114]">{persona.role}</dd>
            </div>
            <div className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#9497a9]">
                {t("agents.detail.cron", locale)}
              </dt>
              <dd className="mt-2 text-sm font-mono text-[#5741d8]">{persona.cron_id}</dd>
            </div>
            <div className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#9497a9]">
                {t("agents.detail.status", locale)}
              </dt>
              <dd className="mt-2 text-sm">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    persona.status === "active"
                      ? "bg-[#149e61]/16 text-[#026b3f]"
                      : "bg-[#686b82]/12 text-[#484b5e]"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      persona.status === "active" ? "bg-[#149e61]" : "bg-[#9497a9]"
                    }`}
                  />
                  {t(`agents.status.${persona.status}`, locale)}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
