import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">KZ</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              Home
            </Link>
            <Link href="/experiences" className="px-3 py-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              Experience
            </Link>
            <Link href="/projects" className="px-3 py-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              Projects
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}