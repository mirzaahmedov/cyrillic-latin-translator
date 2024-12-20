import "./globals.css";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import Footer from "./components/footer";
import Header from "./components/header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Kirill-Lotin tarjimon | Кирил-Лотин таржимон",
  description:
    "Matnni kirill alifbosidan lotin alifbosiga va lotin alifbosidan kirill alifbosiga o'tkazish. Матнни кирил алифбосидан лотин алифбосига ва лотин алифбосидан кирил алифбосига ўтказиш",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={twMerge(inter.className, "flex flex-col")}>
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER ? (
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}
          />
        ) : null}
      </body>
    </html>
  );
}
