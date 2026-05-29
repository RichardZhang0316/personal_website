import { useState } from "react";
import { Geist } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navigation_bar";
import { poems, poemTags, personal } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

function PoemCard({ poem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="card p-6 cursor-pointer transition-all duration-200"
      style={{ borderColor: expanded ? 'var(--accent)' : undefined }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {poem.tags.map((tag) => (
              <span key={tag} className="tag-neutral">{tag}</span>
            ))}
          </div>
          <h2 className="text-xl font-semibold leading-snug" style={{ color: 'var(--text)' }}>
            {poem.title}
          </h2>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>{poem.date}</p>
        </div>

        {/* Expand icon */}
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

      {/* Excerpt (collapsed) */}
      {!expanded && (
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {poem.excerpt}
        </p>
      )}

      {/* Full body (expanded) */}
      {expanded && (
        <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
          <pre
            className="text-sm leading-8 whitespace-pre-wrap font-sans"
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
        <meta name="description" content="Original poems by Kaixin Zhang." />
      </Head>
      <Navbar />

      <main>
        {/* Header */}
        <div className="page-header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>Poems</h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--muted)' }}>
              Words written in the margins of life — between debugging sessions, across time zones, and under different skies.
            </p>
          </div>
        </div>

        {/* Tag filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag("all")}
              className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
              style={activeTag === "all"
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
            >
              All
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
            <p className="text-center py-16" style={{ color: 'var(--muted)' }}>No poems found for this tag.</p>
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
