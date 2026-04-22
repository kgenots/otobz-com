"use client";

import { useState, useEffect, useCallback } from "react";

const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
];

function useLocale() {
  const [locale, setLocale] = useState<string>("ko");
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "NEXT_LOCALE") {
        setLocale(decodeURIComponent(value));
        return;
      }
    }
    // fallback to browser locale
    const navLocale = navigator.language.slice(0, 2);
    if (LANGUAGES.find((l) => l.code === navLocale)) {
      setLocale(navLocale);
    }
  }, []);
  return { locale, setLocale };
}

export default function HeaderNav() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  const changeLocale = useCallback(
    (code: string) => {
      document.cookie = `NEXT_LOCALE=${encodeURIComponent(code)}; path=/; max-age=31536000`;
      setLocale(code);
      // Next.js i18n: reload the page with new locale
      window.location.href = `/${code}${window.location.pathname}`;
    },
    [setLocale]
  );

  const t = useCallback(
    (key: string) => {
      const map: Record<string, Record<string, string>> = {
        agents: {
          ko: "에이전트", en: "Agents", ja: "エージェント", es: "Agentes",
          de: "Agenten", it: "Agenti", fr: "Agents",
        },
        services: {
          ko: "서비스", en: "Services", ja: "サービス", es: "Servicios",
          de: "Services", it: "Servizi", fr: "Services",
        },
        blog: {
          ko: "블로그", en: "Blog", ja: "ブログ", es: "Blog",
          de: "Blog", it: "Blog", fr: "Blog",
        },
      };
      return (map[key]?.[locale] ?? map[key]?.en ?? key) as string;
    },
    [locale]
  );

  return (
    <nav className="flex items-center gap-6 text-sm text-[#686b82]">
      <a href="/" className="hover:text-[#101114] transition-colors">{t("agents")}</a>
      <a href="#service" className="hover:text-[#101114] transition-colors">{t("services")}</a>
      <a href="/blog" className="hover:text-[#101114] transition-colors">{t("blog")}</a>
      <a href="https://trip.otobz.com" target="_blank" className="text-[#7132f5] hover:text-[#5741d8] transition-colors">
        trip.otobz.com →
      </a>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-[#686b82] hover:text-[#101114] transition-colors"
          aria-label="Change language"
        >
          <span className="font-medium">{LANGUAGES.find((l) => l.code === locale)?.label}</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute right-0 mt-2 w-40 rounded-lg border border-[#dedee5] bg-white shadow-lg z-50 py-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLocale(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#7132f5]/5 transition-colors ${
                    locale === lang.code ? "text-[#7132f5] font-semibold" : "text-[#686b82]"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
