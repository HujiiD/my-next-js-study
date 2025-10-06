import DataSidebar from "@/components/DataSidebar";

export default function PostPage() {
  // ここで、slugに基づいてMarkdownファイルなどから記事データを取得します

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* メインコンテンツ (左側) */}
      <article className="lg:col-span-2">
        <h1 className="text-4xl font-bold mb-4">記事のタイトル</h1>
        <p className="text-sm text-gray-400 mb-8">公開日: 2025-10-06</p>
        
        <div className="prose prose-invert max-w-none">
          {/* proseクラスはTailwind Typographyプラグインによるもので、記事の可読性を高めます */}
          <p>
            これは記事の本文です。データと事実に基づいた詳細な旅行記がここに記述されます。
            数字 <span className="font-mono bg-[rgba(255,255,255,0.1)] px-1 rounded">1,234,567</span> や
            コードスニペット <code className="font-mono bg-[rgba(255,255,255,0.1)] px-1 rounded">const example = true;</code>
            などは自動的に等幅フォントになります。
          </p>
          <p>
            さらに文章が続きます...
          </p>
        </div>
      </article>

      {/* データ・サイドバー (右側) */}
      <div className="lg:col-span-1">
        <DataSidebar />
      </div>
    </div>
  );
}