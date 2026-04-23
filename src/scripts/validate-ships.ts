import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseShipsMarkdown, ShipsParseError } from "../lib/ships.js";

function main() {
  const path = join(process.cwd(), "src", "data", "ships.md");
  let md: string;
  try {
    md = readFileSync(path, "utf8");
  } catch (err) {
    console.error(`[validate-ships] Cannot read ${path}:`, err);
    process.exit(1);
  }

  let days;
  try {
    days = parseShipsMarkdown(md);
  } catch (err) {
    if (err instanceof ShipsParseError) {
      console.error(`[validate-ships] PARSE FAILED: ${err.message}`);
    } else {
      console.error(`[validate-ships] UNEXPECTED ERROR:`, err);
    }
    process.exit(1);
  }

  if (days.length === 0) {
    console.error("[validate-ships] No date sections found. ships.md must contain at least one `## YYYY-MM-DD` heading.");
    process.exit(1);
  }

  let entryCount = 0;
  for (const day of days) {
    if (day.entries.length === 0) {
      console.error(`[validate-ships] Date section ${day.date} has zero entries.`);
      process.exit(1);
    }
    entryCount += day.entries.length;
  }

  console.log(`[validate-ships] OK — ${days.length} day(s), ${entryCount} entry/ies.`);
}

main();
