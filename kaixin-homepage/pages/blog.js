import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navigation_bar";
import { blogPosts, blogTags, personal } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function Blog() {
  const [activeTag, setActiveTag] = useState("all");

  const filtered = activeTag === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.tags.includes(activeTag));

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>Blog – Kaixin Zhang</title>
        <meta name="description" content="Technical writing by Kaixin Zhang on distributed systems, systems programming, and software engineering." />
      </Head>
      <Navbar />

      <main>
        {/* Header */}
        <div className="page-header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>Blog</h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--muted)' }}>
              Technical writing on distributed systems, systems programming, and software engineering.
            </p>
            <a
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-lt)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              View all posts on Medium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
            {blogTags.map((tag) => (
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

        {/* Post list */}
        <section className="py-10 px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center py-16" style={{ color: 'var(--muted)' }}>No posts found for this tag.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filtered.map((post) => (
                <a
                  key={post.id}
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group flex flex-col p-6"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-neutral">{tag}</span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold leading-snug mb-2 transition-colors"
                    style={{ color: 'var(--text)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-lt)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>
                      {formatDate(post.date)} · {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium transition-colors"
                      style={{ color: 'var(--accent-lt)' }}>
                      Read on Medium
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              See all posts on Medium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
