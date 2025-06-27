import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casualwebgames.xyz"),
  title: "Play free Casual Web Games on any device|No Install,No Signup",
  description: "CasualWebGames is The best place to enjoy free, high-quality browser games — Play Freely. Pure Joy.",
  icons: {
    icon: "/favicon.ico",        // 如果是 png，用 "/favicon.png"
    shortcut: "/favicon.ico",    // 可选，用于 Safari
    apple: "/favicon.ico",       // iOS 图标（可自定义尺寸）
  },
  openGraph: {
    title: "CasualWebGames - Play Freely. Pure Joy",
    description: "Play instantly in your browser. All for free,no install, no signup,just pure entertainment!",
    url: "https://www.casualwebgames.xyz", // 替换为你实际域名
    siteName: "CasualWebGames",
    images: [
      {
        url: "/og-cover.png", // 你准备的预览图，放在 public 目录
        width: 1200,
        height: 630,
        alt: "CasualWebGames - logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Play free Casual Web Games on any device|No Install,No Signup",
    description: "CasualWebGames is The best place to enjoy free, high-quality browser games — easy, fast, and fun.",
    images: [
      {
        url:"/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "CasualWebGames - logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <head>
        {/* ✅ 加入 Google Analytics 的两个 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RMERFFD70J" // ⬅️ 替换为你的 GA 测量 ID
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RMERFFD70J');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
