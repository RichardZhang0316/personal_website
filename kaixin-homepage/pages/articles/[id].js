import { Geist } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navigation_bar";
import { articles, personal } from "../../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${y}.${parseInt(m)}.${parseInt(d)}`;
}

function LocationPin() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

export async function getStaticPaths() {
  return {
    paths: articles.map(a => ({ params: { id: String(a.id) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.id === parseInt(params.id));
  if (!article) return { notFound: true };
  return { props: { article } };
}

export default function ArticlePage({ article }) {
  const paragraphs = article.body.split('\n\n').filter(p => p.trim());

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>{article.title} – Kaixin Zhang</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-sm mb-10 transition-colors"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回文章
        </Link>

        {/* Header */}
        <header className="mb-10">
          {article.location && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4"
              style={{ background: 'rgba(59,130,246,0.12)', color: 'var(--accent-lt)' }}>
              <LocationPin />
              {article.location}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mt-2"
            style={{ color: 'var(--text)' }}>
            {article.title}
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
            {formatDate(article.date)}
          </p>
        </header>

        <div className="divider mb-10" />

        {/* Body */}
        <article className="space-y-6">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-8" style={{ color: 'var(--text)' }}>
              {para}
            </p>
          ))}
        </article>

        <div className="divider mt-14 mb-10" />

        {/* Footer nav */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回文章
        </Link>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="mt-1" style={{ color: '#475569' }}>Built with Next.js · Tailwind CSS</p>
      </footer>
    </div>
  );
}
