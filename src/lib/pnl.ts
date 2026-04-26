import snapshot from "@/data/pnl-snapshot.json";

export type PnlSnapshot = {
  month: string;
  delta_pct_vs_prev_month: number;
  agent_contribution_pct: Record<string, number>;
  activity_counts: {
    posts_published: number;
    trades_executed: number;
    leads_captured: number;
  };
  last_updated: string;
};

export const pnlSnapshot: PnlSnapshot = {
  month: snapshot.month,
  delta_pct_vs_prev_month: snapshot.delta_pct_vs_prev_month,
  agent_contribution_pct: snapshot.agent_contribution_pct,
  activity_counts: snapshot.activity_counts,
  last_updated: snapshot.last_updated,
};

const STALE_DAYS = 35;

export function isStale(snap: PnlSnapshot = pnlSnapshot, now: Date = new Date()): boolean {
  const last = new Date(snap.last_updated + "T00:00:00Z").getTime();
  if (Number.isNaN(last)) return true;
  const ageDays = (now.getTime() - last) / (1000 * 60 * 60 * 24);
  return ageDays > STALE_DAYS;
}

export function formatDelta(pct: number): string {
  if (pct === 0) return "±0%";
  const sign = pct > 0 ? "+" : "";
  return `${sign}${pct}%`;
}
