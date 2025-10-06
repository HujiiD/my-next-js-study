// StatCardコンポーネントを別途作成すると管理が楽になります
const StatCard = ({ title, value, description }: { title: string; value: string; description: string }) => (
  <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] rounded-lg p-6">
    <h3 className="text-sm font-medium text-gray-400">{title}</h3>
    <p className="text-4xl font-bold font-mono mt-2">{value}</p>
    <p className="text-xs text-gray-500 mt-1">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="訪問国数" value="15" description="アジア、ヨーロッパ" />
        <StatCard title="旅の日数" value="289" description="2024年1月1日から" />
        <StatCard title="総消費予算 (USD)" value="$8,540" description="予算達成率 95%" />
        <StatCard title="総節約額 (USD)" value="$1,230" description="前月比 +$150" />
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">最新の記事</h3>
        {/* ここに最新記事の一覧を表示するロジックを追加 */}
        <div className="p-4 border border-[var(--border-color)] rounded-lg">
          <p className="text-gray-500">最新記事はまだありません。</p>
        </div>
      </div>
    </div>
  );
}