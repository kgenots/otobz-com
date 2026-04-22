import HeaderNav from "@/components/HeaderNav";
import type { Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#dedee5]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={`/${locale}`} className="text-xl font-bold tracking-tight text-[#101114]">OTOBZ</a>
        <HeaderNav locale={locale} />
      </div>
    </header>
  );
}
