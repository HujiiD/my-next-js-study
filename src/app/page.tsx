import Link from 'next/link';
import type { Metadata } from 'next';

// SEO対策：ページのメタデータを設定
export const metadata: Metadata = {
  title: 'ブログへようこそ！ | My Next.js Blog',
  description: 'Next.js, Vercel, Dockerなどの技術について学ぶブログです。Web開発の学習記録を共有します。',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="text-center p-10 border border-gray-700 rounded-xl shadow-2xl bg-gray-800/50 backdrop-blur-sm max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Welcome to My Blog!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Next.jsとVercelで構築した技術ブログです。
        </p>
        <Link 
          href="/blog" 
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          記事一覧へ進む
        </Link>
      </div>
    </main>
  );
}