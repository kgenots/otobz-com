import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, isLocale, t, type Locale } from "@/lib/i18n";

const BASE = "https://otobz.com";

const OG_LOCALE: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
  es: "es_ES",
  de: "de_DE",
  it: "it_IT",
  fr: "fr_FR",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const title = t("hero.title1", locale).replace(/\n/g, " ");
  const description = t("hero.description", locale).replace(/\n/g, " ");
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${BASE}/${l}`])
  ) as Record<string, string>;
  languages["x-default"] = `${BASE}/ko`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      url: `${BASE}/${locale}`,
      title,
      description,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <>{children}</>;
}
