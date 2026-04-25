import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { posts } from "@/data/blog-posts";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

// markdown filesystem: 새 글 추가 시 즉시 반영 (재빌드 없이 SSR)
export const dynamic = "force-dynamic";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return (
    <main>
      <Header locale={locale} />
      <Suspense fallback={null}>
        <BlogList locale={locale} posts={posts} />
      </Suspense>
      <Footer locale={locale} />
    </main>
  );
}
