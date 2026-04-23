import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShipList from "@/components/ShipList";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function ShipsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return (
    <main>
      <Header locale={locale} />
      <ShipList locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
