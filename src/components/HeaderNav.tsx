"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, t, type Locale } from "@/lib/i18n";

const LABELS: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  fr: "Français",
};

function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split("/");
  if (parts.length >= 2 && (LOCALES as readonly string[]).includes(parts[1])) {
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  }
  return `/${next}${pathname}`;
}

export default function HeaderNav({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (next: Locale) => {
    document.cookie = `NEXT_LOCALE=${encodeURIComponent(next)}; path=/; max-age=31536000`;
    router.push(swapLocale(pathname, next));
    setOpen(false);
  };

  return (
    <nav className="flex items-center gap-6 text-sm text-[#686b82]">
      <a href={`/${locale}#agents`} className="hover:text-[#101114] transition-colors">{t("nav.agents", locale)}</a>
      <a href={`/${locale}#service`} className="hover:text-[#101114] transition-colors">{t("nav.services", locale)}</a>
      <a href={`/${locale}/blog`} className="hover:text-[#101114] transition-colors">{t("nav.blog", locale)}</a>
      <a href="https://trip.otobz.com" target="_blank" className="text-[#7132f5] hover:text-[#5741d8] transition-colors">
        trip.otobz.com →
      </a>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-[#686b82] hover:text-[#101114] transition-colors"
          aria-label="Change language"
        >
          <span className="font-medium">{LABELS[locale]}</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute right-0 mt-2 w-40 rounded-lg border border-[#dedee5] bg-white shadow-lg z-50 py-1">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  onClick={() => changeLocale(code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#7132f5]/5 transition-colors ${
                    locale === code ? "text-[#7132f5] font-semibold" : "text-[#686b82]"
                  }`}
                >
                  {LABELS[code]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
