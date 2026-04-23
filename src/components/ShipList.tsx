import { getShips, summaryFor, type ShipEntry } from "@/lib/ships";
import { t, type Locale } from "@/lib/i18n";

function formatDate(dateStr: string, locale: Locale): string {
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function EntryRow({ entry, locale }: { entry: ShipEntry; locale: Locale }) {
  const summary = summaryFor(entry, locale);
  const prefixColor =
    entry.prefix === "launch" || entry.prefix === "feat"
      ? "bg-[rgba(133,91,251,0.16)] text-[#5b1ecf]"
      : "bg-[#fafafa] text-[#686b82]";

  return (
    <li className="py-4 border-b border-[#dedee5] last:border-b-0">
      <div className="flex items-start gap-3 flex-wrap">
        <span
          className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${prefixColor}`}
        >
          {entry.prefix}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] text-[#101114] leading-snug break-words">
            {entry.subject}
          </p>
          {summary ? (
            <p className="mt-1 text-sm text-[#686b82] leading-relaxed">
              {summary}
            </p>
          ) : null}
          {entry.repo && entry.repoUrl ? (
            <a
              href={entry.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-[#7132f5] hover:underline"
            >
              {entry.repo}
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default function ShipList({ locale }: { locale: Locale }) {
  const days = getShips();

  if (days.length === 0) {
    return (
      <section className="py-20 px-6 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-[#101114]">
            {t("ships.title", locale)}
          </h1>
          <p className="mt-6 text-lg text-[#686b82]">{t("ships.empty", locale)}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-[#101114]">
          {t("ships.title", locale)}
        </h1>
        <p className="mt-3 text-base text-[#686b82]">
          {t("ships.description", locale)}
        </p>

        <div className="mt-10 space-y-10">
          {days.map((day) => (
            <div key={day.date}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9497a9]">
                {formatDate(day.date, locale)}
              </h2>
              <ul className="mt-3 bg-white rounded-xl border border-[#dedee5] px-5">
                {day.entries.map((entry, idx) => (
                  <EntryRow key={`${day.date}-${idx}`} entry={entry} locale={locale} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
