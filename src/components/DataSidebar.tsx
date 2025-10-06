// これはダミーのグラフコンポーネントです
const BudgetChartPlaceholder = () => (
  <div className="w-full h-40 bg-[rgba(0,122,204,0.1)] border-2 border-dashed border-[var(--accent)] rounded-lg flex items-center justify-center">
    <p className="text-sm font-mono text-[var(--accent)]">予算グラフ</p>
  </div>
);


const DataSidebar = () => {
  return (
    <aside className="space-y-6">
      {/* 要点セクション */}
      <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] rounded-lg p-4">
        <h3 className="font-bold font-mono mb-3 text-[var(--accent)]">要点 (Key Points)</h3>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>ポイント1：詳細な説明</li>
          <li>ポイント2：詳細な説明</li>
          <li>ポイント3：詳細な説明</li>
        </ul>
      </div>

      {/* 予算セクション */}
      <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] rounded-lg p-4">
        <h3 className="font-bold font-mono mb-3 text-[var(--accent)]">予算の内訳</h3>
        <BudgetChartPlaceholder />
        <div className="text-xs font-mono mt-3 space-y-1">
            <p>食費: $300</p>
            <p>交通費: $150</p>
            <p>宿泊費: $400</p>
        </div>
      </div>
    </aside>
  );
};

export default DataSidebar;