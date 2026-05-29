import { useState } from "react";
import { Geist } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navigation_bar";
import { poems, poemTags, personal } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

function formatPoemDate(dateStr) {
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

function PoemCard({ poem }) {
  const [expanded, setExpanded] = useState(false);
  const contentTags = poem.tags.filter(t => t !== poem.location);

  return (
    <div
      className="card p-6 cursor-pointer transition-all duration-200"
      style={{ borderColor: expanded ? 'var(--accent)' : undefined }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Location badge + content tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {poem.location && (
              <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full"
                style={{ background: 'rgba(59,130,246,0.12)', color: 'var(--accent-lt)' }}>
                <LocationPin />
                {poem.location}
              </span>
            )}
            {contentTags.map((tag) => (
              <span key={tag} className="tag-neutral">{tag}</span>
            ))}
          </div>

          <h2 className="text-xl font-semibold leading-snug" style={{ color: 'var(--text)' }}>
            {poem.title}
          </h2>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            {formatPoemDate(poem.date)}
          </p>
        </div>

        {/* Expand chevron */}
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
          style={{
            background: 'rgba(255,255,255,0.06)',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            style={{ color: 'var(--muted)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Excerpt */}
      {!expanded && (
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {poem.excerpt}
        </p>
      )}

      {/* Full body */}
      {expanded && (
        <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
          <pre
            className="text-sm leading-8 whitespace-pre-wrap"
            style={{ color: 'var(--text)', fontFamily: 'inherit' }}
          >
            {poem.body}
          </pre>
        </div>
      )}
    </div>
  );
}

export default function Poems() {
  const [activeTag, setActiveTag] = useState("all");

  const filtered = activeTag === "all"
    ? poems
    : poems.filter((p) => p.tags.includes(activeTag));

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>Poems – Kaixin Zhang</title>
        <meta name="description" content="Poems and excerpts collected by Kaixin Zhang along the way." />
      </Head>
      <Navbar />

      <main>
        {/* Header */}
        <div className="page-header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>Poems</h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--muted)' }}>
              Words written and collected along the way — between cities, across seasons.
            </p>
          </div>
        </div>

        {/* Location filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag("all")}
              className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
              style={activeTag === "all"
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
            >
              全部
            </button>
            {poemTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
                style={activeTag === tag
                  ? { background: 'var(--accent)', color: '#fff' }
                  : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Poem list */}
        <section className="py-10 px-4 sm:px-6 lg:px-16 max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center py-16" style={{ color: 'var(--muted)' }}>此地暂无诗。</p>
          ) : (
            <div className="space-y-4">
              {filtered.map((poem) => (
                <PoemCard key={poem.id} poem={poem} />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="mt-1" style={{ color: '#475569' }}>Built with Next.js · Tailwind CSS</p>
      </footer>
    </div>
  );
}
