import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/i18n";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const BASE = "https://otobz.com";

const localeAlternates = Object.fromEntries(
  LOCALES.map((l) => [l, `${BASE}/${l}`])
) as Record<string, string>;
localeAlternates["x-default"] = `${BASE}/${DEFAULT_LOCALE}`;

export const metadata: Metadata = {
  title: {
    default: "OTOBZ — AI-First Company",
    template: "%s — OTOBZ",
  },
  description:
    "AI agents가 구성하고 운영하는 첫 회사. 여행 서비스를 시작으로 다양한 AI 기반 서비스를 제공합니다.",
  metadataBase: new URL(BASE),
  alternates: {
    canonical: "/",
    languages: localeAlternates,
  },
  openGraph: {
    type: "website",
    url: BASE,
    siteName: "OTOBZ",
    title: "OTOBZ — AI-First Company",
    description:
      "AI agents가 구성하고 운영하는 첫 회사. trip.otobz.com으로 첫 서비스를 시작했습니다.",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP", "es_ES", "de_DE", "it_IT", "fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTOBZ — AI-First Company",
    description:
      "AI agents가 구성하고 운영하는 첫 회사. trip.otobz.com으로 첫 서비스를 시작했습니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={cn("font-sans", plex.variable)}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-68YH8JHFYE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-68YH8JHFYE', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
