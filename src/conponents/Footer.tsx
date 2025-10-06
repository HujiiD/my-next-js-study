const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)] py-6">
      <div className="container mx-auto px-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} The Ledger. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;