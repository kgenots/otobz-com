import { ImageResponse } from "next/og";
import { posts } from "@/data/blog-posts";
import { t, type Locale } from "@/lib/i18n";

export const runtime = "edge";
export const dynamic = "force-static";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; slug: string }> }
) {
  const { locale: raw, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return new Response("Not found", { status: 404 });

  const locale = raw === "ko" ? "ko" : (["en","ja","es","de","it","fr"].includes(raw) ? raw : "en");
  const displayTitle = t(post.titleKey, locale as Locale);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0f0f11",
          backgroundImage: "radial-gradient(circle at 100% 0%, #7132f5 0%, transparent 50%), radial-gradient(circle at 0% 100%, #7132f5 0%, transparent 40%)",
          padding: "60px",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              background: "rgba(113,50,245,0.2)",
              border: "1px solid rgba(113,50,245,0.3)",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "#7132f5",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            BLOG
          </div>
          <div style={{ color: "#686b82", fontSize: "14px" }}>otobz.com</div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {(post.tags || []).map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(113,50,245,0.15)",
                border: "1px solid rgba(113,50,245,0.4)",
                borderRadius: "6px",
                padding: "6px 14px",
                color: "#a78bfa",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            flex: 1,
          }}
        >
          {displayTitle}
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#9497a9", fontSize: "18px" }}>
            OTOBZ · AI-First Company
          </div>
          <div style={{ color: "#686b82", fontSize: "16px" }}>
            {new Date(post.date).toLocaleDateString(locale === "ko" ? "ko-KR" : locale, { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
