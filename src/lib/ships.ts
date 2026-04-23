import { readFileSync } from "node:fs";
import { join } from "node:path";

export type ShipEntry = {
  date: string;
  raw: string;
  prefix: string;
  subject: string;
  repo: string | null;
  repoUrl: string | null;
  summaryKo: string | null;
  summaryEn: string | null;
};

export type ShipDay = {
  date: string;
  entries: ShipEntry[];
};

const ALLOWED_PREFIXES = new Set([
  "feat",
  "launch",
  "fix",
  "chore",
  "infra",
  "docs",
  "refactor",
]);

const SUMMARY_PREFIXES = new Set(["feat", "launch"]);

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const BULLET_RE = /^- `(?<raw>.+?)`(?:\s+—\s+\[(?<repo>[^\]]+)\]\((?<repoUrl>[^)]+)\))?\s*$/;
const SUMMARY_RE = /^\s{2,}-\s+summary_(?<lang>ko|en):\s*(?<text>.+?)\s*$/;
const PREFIX_RE = /^(?<prefix>[a-z]+)(?:\([^)]+\))?:\s*(?<subject>.+)$/;

export class ShipsParseError extends Error {
  constructor(message: string, public line?: number) {
    super(line != null ? `${message} (line ${line})` : message);
    this.name = "ShipsParseError";
  }
}

export function parseShipsMarkdown(md: string): ShipDay[] {
  const lines = md.split("\n");
  const days: ShipDay[] = [];
  let currentDay: ShipDay | null = null;
  let currentEntry: ShipEntry | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip until we see the first H2 (preamble / rules)
    if (days.length === 0 && !trimmed.startsWith("## ")) {
      continue;
    }

    if (trimmed === "") {
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const date = trimmed.slice(3).trim();
      if (!DATE_RE.test(date)) {
        throw new ShipsParseError(`Invalid date heading "${date}"`, i + 1);
      }
      currentDay = { date, entries: [] };
      days.push(currentDay);
      currentEntry = null;
      continue;
    }

    const bulletMatch = line.match(BULLET_RE);
    if (bulletMatch) {
      if (!currentDay) {
        throw new ShipsParseError("Bullet appeared before any date heading", i + 1);
      }
      const raw = bulletMatch.groups!.raw;
      const prefixMatch = raw.match(PREFIX_RE);
      if (!prefixMatch) {
        throw new ShipsParseError(`Bullet missing conventional-commit prefix: "${raw}"`, i + 1);
      }
      const prefix = prefixMatch.groups!.prefix;
      const subject = prefixMatch.groups!.subject;
      if (!ALLOWED_PREFIXES.has(prefix)) {
        throw new ShipsParseError(`Disallowed prefix "${prefix}" in "${raw}"`, i + 1);
      }
      currentEntry = {
        date: currentDay.date,
        raw,
        prefix,
        subject,
        repo: bulletMatch.groups!.repo ?? null,
        repoUrl: bulletMatch.groups!.repoUrl ?? null,
        summaryKo: null,
        summaryEn: null,
      };
      currentDay.entries.push(currentEntry);
      continue;
    }

    const summaryMatch = line.match(SUMMARY_RE);
    if (summaryMatch) {
      if (!currentEntry) {
        throw new ShipsParseError("Summary line without a parent bullet", i + 1);
      }
      if (!SUMMARY_PREFIXES.has(currentEntry.prefix)) {
        throw new ShipsParseError(
          `Summary attached to non-allowlisted prefix "${currentEntry.prefix}"`,
          i + 1,
        );
      }
      const lang = summaryMatch.groups!.lang;
      const text = summaryMatch.groups!.text;
      if (lang === "ko") currentEntry.summaryKo = text;
      else currentEntry.summaryEn = text;
      continue;
    }
  }

  return days;
}

let cached: ShipDay[] | null = null;

export function getShips(): ShipDay[] {
  if (cached) return cached;
  const path = join(process.cwd(), "src", "data", "ships.md");
  const md = readFileSync(path, "utf8");
  cached = parseShipsMarkdown(md);
  return cached;
}

export function summaryFor(entry: ShipEntry, locale: string): string | null {
  if (locale === "ko") return entry.summaryKo ?? entry.summaryEn;
  if (locale === "en") return entry.summaryEn ?? entry.summaryKo;
  // Other locales: prefer en then ko, else null (caller renders raw subject)
  return entry.summaryEn ?? entry.summaryKo;
}
