import Link from "next/link";
import { t, type Locale } from "@/lib/i18n";
import { activePersonas, type Persona } from "@/data/agents";

function initials(name: string): string {
  return name.slice(0, 2).toUpperCase();
}

export function AgentCard({ persona, locale, href }: { persona: Persona; locale: Locale; href?: string }) {
  const inner = (
    <>
      <div className="flex items-center gap-3">
        {persona.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={persona.avatar} alt={persona.name} className="size-10 rounded-full object-cover" />
        ) : (
          <div className="size-10 rounded-full bg-[#7132f5]/16 flex items-center justify-center text-sm font-semibold text-[#5b1ecf]">
            {initials(persona.name)}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full ${persona.status === "active" ? "bg-[#149e61]" : "bg-[#9497a9]"}`}
            />
            <h3 className="font-semibold text-sm sm:text-base text-[#101114] truncate">{persona.name}</h3>
          </div>
          <p className="text-xs text-[#9497a9] mt-0.5">{persona.role}</p>
        </div>
      </div>
      <p className="text-sm text-[#686b82] leading-relaxed">{t(persona.descriptionKey, locale)}</p>
    </>
  );
  const baseClass = "rounded-xl border border-[#dedee5] bg-[#fafafa] p-4 sm:p-5 flex flex-col gap-3";
  if (href) {
    return (
      <Link href={href} className={`${baseClass} hover:border-[#7132f5]/30 hover:shadow-sm transition-all`}>
        {inner}
      </Link>
    );
  }
  return <div className={baseClass}>{inner}</div>;
}

export default function Agents({ locale }: { locale: Locale }) {
  const list = activePersonas();
  return (
    <section id="agents" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-[#dedee5]">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">{t("agents.label", locale)}</span>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101114] whitespace-pre-line">
          {t("agents.title", locale)}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#686b82] leading-relaxed">{t("agents.subtitle", locale)}</p>
        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <AgentCard key={p.slug} persona={p} locale={locale} href={`/${locale}/agents/${p.slug}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
