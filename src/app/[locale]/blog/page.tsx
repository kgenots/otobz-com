import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

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
        <BlogList locale={locale} />
      </Suspense>
      <Footer locale={locale} />
    </main>
  );
}
