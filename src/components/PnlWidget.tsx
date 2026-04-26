import { t, type Locale } from "@/lib/i18n";
import { activePersonas } from "@/data/agents";
import { isStale, pnlSnapshot, formatDelta } from "@/lib/pnl";

export default function PnlWidget({ locale }: { locale: Locale }) {
  if (isStale()) return null;
  const count = activePersonas().length;
  const delta = formatDelta(pnlSnapshot.delta_pct_vs_prev_month);
  const text = t("pnl.widget.summary", locale)
    .replace("{count}", String(count))
    .replace("{delta}", delta);
  return (
    <a
      href={`/${locale}/pnl`}
      className="inline-flex items-center gap-2 rounded-full border border-[#dedee5] bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm text-[#686b82] hover:border-[#7132f5]/30 hover:text-[#101114] transition-colors"
    >
      <span className="size-1.5 rounded-full bg-[#7132f5]" />
      {text}
      <span className="text-[#7132f5]" aria-hidden="true">→</span>
    </a>
  );
}
