import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AdultSite - 高品質な動画コンテンツ",
  description: "最新のアニメーション、実写、3D作品を楽しめるアダルトサイト。安全で快適な視聴体験を提供いたします。",
  keywords: "アダルト, 動画, アニメ, 実写, 3D, エンターテイメント",
  authors: [{ name: "AdultSite Team" }],
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#667eea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="rating" content="adult" />
        <meta name="classification" content="adult" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
