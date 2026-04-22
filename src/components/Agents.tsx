import { getLocale, t } from "@/lib/i18n";

const AGENTS = [
  { key: "main", name: "메인 에이전트", descKey: "agent1.desc" },
  { key: "quant", name: "트레이더", descKey: "agent2.desc" },
  { key: "observer", name: "관측자", descKey: "agent3.desc" },
];

export default function Agents() {
  const locale = getLocale();
  return (
    <section id="agents" className="py-20 px-6 border-t border-[#dedee5]">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">{t("agents.label", locale)}</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#101114] whitespace-pre-line">
          {t("agents.title", locale)}
        </h2>
        <p className="mt-4 text-[#686b82] leading-relaxed">{t("agents.subtitle", locale)}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {AGENTS.map((a) => (
            <div key={a.key} className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#149e61]" />
                <h3 className="font-semibold text-[#101114]">{a.name}</h3>
              </div>
              <p className="mt-3 text-sm text-[#686b82] leading-relaxed">{t(a.descKey, locale)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
