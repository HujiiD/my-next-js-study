import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ブログ記事の型定義
interface Post {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}

// 投稿を取得する関数
const getPosts = (): Post[] => {
  // postsディレクトリのパスを取得
  const postsDirectory = path.join(process.cwd(), 'posts');
  // ディレクトリ内の全ファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    // ファイル名から`.md`拡張子を取り除き、slugとして使用
    const slug = fileName.replace(/\.md$/, '');

    // Markdownファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matterでfront-matterをパース
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
    };
  });

  // 日付の新しい順に記事をソート
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA; // 降順
  });
};


// ブログ一覧ページのコンポーネント
export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">ブログ記事一覧</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">{post.frontmatter.title}</h2>
              <p className="text-gray-600 mt-1">{post.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}