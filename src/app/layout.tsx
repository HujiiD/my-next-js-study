import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Headerコンポーネントをインポート
import Footer from "@/components/Footer"; // Footerコンポーネントをインポート

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ブログのタイトルをコンセプトに合わせて変更
  title: "The Ledger - A Data-Driven Travel Log",
  description: "実績とデータで旅を記録するブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* flexを使ってフッターをページ下部に固定する */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

// globals.cssで設定したフォント変数をtailwind.config.jsで使えるように設定も忘れずに行ってください
// tailwind.config.ts
// fontFamily: {
//   sans: ['var(--font-geist-sans)'],
//   mono: ['var(--font-geist-mono)'],
// },