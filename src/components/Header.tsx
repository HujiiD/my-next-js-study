import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b border-[var(--border-color)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold font-mono text-[var(--accent)]">
            The Ledger
          </h1>
        </Link>
        <nav>
          <ul className="flex space-x-6 font-mono text-sm">
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;