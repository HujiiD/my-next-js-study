import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Metadata } from 'next';
import Image from 'next/image';

// SEO対策：ページのメタデータを設定
export const metadata: Metadata = {
  title: '旅行記ブログ | My Travel Blog',
  description: '東南アジアや様々な国での旅行の記録を共有するブログです。',
};

// Postの型定義を修正
interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    thumbnailUrl?: string; // 修正点1
  };
}

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // thumbnailUrlを読み込むように修正
    return {
      slug,
      frontmatter: {
        title: matterResult.data.title,
        date: matterResult.data.date,
        thumbnailUrl: matterResult.data.thumbnailUrl, // 修正点2
      },
    };
  });

  return posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
};

export default function HomePage() {
  const posts = getPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">旅行記ブログ</h1>
        <p className="text-gray-500">東南アジアを中心に旅した記録。</p>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            
            {/* --- サムネイル表示部分 --- */}
            {post.frontmatter.thumbnailUrl && (
              <div className="relative h-56 w-full">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.frontmatter.thumbnailUrl}
                    alt={post.frontmatter.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
            )}
            {/* --- ここまで --- */}
            
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.frontmatter.date}</p>
              <h2 className="text-2xl font-bold mb-4">
                <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                  {post.frontmatter.title}
                </Link>
              </h2>
              <Link href={`/blog/${post.slug}`} className="font-semibold text-blue-600 hover:underline">
                続きを読む →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}