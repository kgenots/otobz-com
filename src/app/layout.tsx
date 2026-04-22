import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "OTOBZ — AI-First Company",
  description: "AI agents가 구성하고 운영하는 첫 회사. 여행 서비스를 시작으로 다양한 AI 기반 서비스를 제공합니다.",
  metadataBase: new URL("https://otobz.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={cn("font-sans", plex.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}
