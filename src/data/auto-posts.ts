/**
 * Auto-generated company blog posts (markdown-driven).
 *
 * 정적 i18n 키 시스템 (legacy posts) 과 별도. agent 가 작성한 markdown 파일을
 * 빌드 시 읽어 Post 타입으로 변환. 한국어 우선·다른 locale 빈 fallback.
 *
 * Source: process.env.AUTO_BLOG_DIR (default: /data/otobz-blog)
 *
 * Markdown frontmatter 형식:
 *   ---
 *   slug: weekly-2026-04-25
 *   title: 이번 주 OTOBZ 운영 기록
 *   excerpt: 한 줄 요약
 *   date: 2026-04-25
 *   tags: [weekly, ops]
 *   image: https://...  (optional)
 *   ---
 *   본문 markdown (h2 ##, paragraph 빈 줄 분리)
 */

import fs from "fs";
import path from "path";
import type { Post, PostSection } from "./blog-posts";

const AUTO_DIR = process.env.AUTO_BLOG_DIR || "/data/otobz-blog";

const FM_RE = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

function parseFrontmatter(raw: string): { fm: Record<string, string | string[]>; body: string } {
  const m = raw.match(FM_RE);
  if (!m) return { fm: {}, body: raw };
  const [, fmText, body] = m;
  const fm: Record<string, string | string[]> = {};
  for (const line of fmText.split("\n")) {
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const k = line.slice(0, idx).trim();
    const v = line.slice(idx + 1).trim();
    if (!k) continue;
    if (v.startsWith("[") && v.endsWith("]")) {
      fm[k] = v.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    } else {
      fm[k] = v.replace(/^["']|["']$/g, "");
    }
  }
  return { fm, body: body.trim() };
}

function bodyToSections(body: string, slug: string): PostSection[] {
  // ## heading 또는 # heading 으로 split. 빈 줄 = paragraph 분리.
  const lines = body.split("\n");
  const sections: PostSection[] = [];
  let curHeading: string | null = null;
  let curParas: string[] = [];
  let buf: string[] = [];

  function flushPara() {
    const text = buf.join(" ").trim();
    if (text) curParas.push(text);
    buf = [];
  }
  function flushSection() {
    flushPara();
    if (curParas.length > 0) {
      sections.push({
        headingKey: curHeading || `auto.${slug}.intro`,
        paragraphKeys: curParas,
      });
    }
    curParas = [];
  }

  for (const line of lines) {
    if (/^##\s/.test(line)) {
      flushSection();
      curHeading = line.replace(/^##\s+/, "").trim();
    } else if (/^#\s/.test(line)) {
      flushSection();
      curHeading = line.replace(/^#\s+/, "").trim();
    } else if (line.trim() === "") {
      flushPara();
    } else {
      buf.push(line);
    }
  }
  flushSection();

  if (sections.length === 0) {
    sections.push({ headingKey: `auto.${slug}.intro`, paragraphKeys: [body] });
  }
  return sections;
}

export function loadAutoPosts(): Post[] {
  if (!fs.existsSync(AUTO_DIR)) return [];
  let files: string[] = [];
  try {
    files = fs.readdirSync(AUTO_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
  const posts: Post[] = [];
  for (const f of files) {
    try {
      const raw = fs.readFileSync(path.join(AUTO_DIR, f), "utf-8");
      const { fm, body } = parseFrontmatter(raw);
      const slug = String(fm.slug || f.replace(/\.md$/, ""));
      const title = String(fm.title || slug);
      const excerpt = String(fm.excerpt || body.slice(0, 150));
      const date = String(fm.date || new Date().toISOString().slice(0, 10));
      const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [String(fm.tags)] : []);
      const image = fm.image ? String(fm.image) : undefined;

      posts.push({
        slug,
        titleKey: `__inline:${title}`,
        excerptKey: `__inline:${excerpt}`,
        date,
        image,
        tags,
        sections: bodyToSections(body, slug),
        // markdown 본문은 inline 으로 보관. i18n 거치지 않고 t() 가 __inline: 접두사 인식
        // 또는 별도 처리 (BlogPost 컴포넌트에서)
      });
    } catch {
      continue;
    }
  }
  // date desc 정렬
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}
