import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Header from "./header";
import Footer from "./footer";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kirill-Lotin tarjimon",
  description:
    "Matnni kirill alifbosidan lotin alifbosiga va lotin alifbosidan kirill alifbosiga o'tkazish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={twMerge(dm_sans.className, "flex flex-col")}>
        <Header />
        {children}
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
