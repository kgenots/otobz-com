import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import FirstService from "@/components/FirstService";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return (
    <main>
      <Header locale={locale} />
      <Hero locale={locale} />
      <Agents locale={locale} />
      <FirstService locale={locale} />
      <BlogSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
