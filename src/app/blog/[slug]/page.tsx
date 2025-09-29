import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'posts');

// すべての投稿のslugを取得し、静的パスを生成する
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

// slugに基づいて特定の投稿の内容を取得する関数
async function getPostContent(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // ファイルが存在しない場合は404ページを表示
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matterでfront-matterをパース
  const matterResult = matter(fileContents);

  // remarkを使ってMarkdownをHTMLに変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    frontmatter: matterResult.data,
  };
}

// ページコンポーネント
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostContent(params.slug);

  return (
    <article className="prose lg:prose-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{post.frontmatter.title}</h1>
      <p className="text-gray-600 mb-8">{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

// (任意) Tailwind Typographyプラグインのインストール
// 上記コードのスタイルを適用するには、以下のコマンドでプラグインをインストールしてください。
// npm install -D @tailwindcss/typography
// そして、tailwind.config.ts の plugins に require('@tailwindcss/typography') を追加します。