export default function Footer() {
  return (
    <footer className="border-t border-gray-400 dark:border-white/10 bg-gray-200 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-gray-600 dark:text-white/70 text-sm">
        © {new Date().getFullYear()} Javier. Hecho con Next.js + Tailwind.
      </div>
    </footer>
  );
}