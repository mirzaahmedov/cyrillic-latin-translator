import "./globals.css";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

// import Footer from "./footer";
// import Header from "./header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kirill-Lotin tarjimon | Кирилл-Лотин таржимон",
  description:
    "Matnni kirill alifbosidan lotin alifbosiga va lotin alifbosidan kirill alifbosiga o'tkazish. Матнни кирилл алифбосидан лотин алифбосига ва лотин алифбосидан кирилл алифбосига ўтказиш",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={twMerge(inter.className, "flex flex-col")}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
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
