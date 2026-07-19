import { Geist } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navigation_bar";
import { articles, personal } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${y}.${parseInt(m)}.${parseInt(d)}`;
}

function LocationPin() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

export default function Articles() {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>文章 – Kaixin Zhang</title>
        <meta name="description" content="Essays and writings by Kaixin Zhang." />
      </Head>
      <Navbar />

      <main>
        <div className="page-header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>文章</h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--muted)' }}>
              随笔与长文。
            </p>
          </div>
        </div>

        <div className="divider" />

        <section className="py-10 px-4 sm:px-6 lg:px-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {sorted.map(article => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="card-hover group flex flex-col p-6"
              >
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  {article.location && (
                    <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                      <LocationPin />
                      {article.location}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold mb-1" style={{ color: 'var(--text)' }}>
                  {article.title}
                </h2>
                <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>
                  {formatDate(article.date)}
                </p>

                <p className="text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: 'var(--muted)' }}>
                  {article.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium"
                  style={{ color: 'var(--accent-lt)' }}>
                  阅读全文
                  <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="mt-1" style={{ color: '#475569' }}>Built with Next.js · Tailwind CSS</p>
      </footer>
    </div>
  );
}
