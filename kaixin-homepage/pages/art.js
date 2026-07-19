import { useState } from "react";
import Image from "next/image";
import { Geist } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navigation_bar";
import { paintings, paintingLocations, personal } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

function formatArtDate(dateStr) {
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

function Lightbox({ painting, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute -top-10 right-0 text-sm font-medium transition-opacity"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          onClick={onClose}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
        >
          关闭 ✕
        </button>

        {/* Image */}
        <div className="rounded-xl overflow-hidden" style={{ background: '#111' }}>
          <Image
            src={painting.image}
            alt={painting.title}
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            style={{ maxHeight: '80vh' }}
          />
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg font-semibold" style={{ color: '#fff' }}>
            《{painting.title}》
          </span>
          <span className="flex items-center gap-1 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <LocationPin />
            {painting.location}
          </span>
          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {formatArtDate(painting.date)}
          </span>
        </div>
      </div>
    </div>
  );
}

function PaintingCard({ painting, onClick }) {
  return (
    <div
      className="card overflow-hidden cursor-pointer group"
      onClick={() => onClick(painting)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={painting.image}
          alt={painting.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        >
          <span className="text-sm font-medium" style={{ color: '#fff' }}>点击查看</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
            《{painting.title}》
          </h2>
          <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0"
            style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
            <LocationPin />
            {painting.location}
          </span>
        </div>
        <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
          {formatArtDate(painting.date)}
        </p>
        {painting.description && (
          <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--muted)' }}>
            {painting.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Art() {
  const [activeLocation, setActiveLocation] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeLocation === "all"
    ? paintings
    : paintings.filter(p => p.location === activeLocation);

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>画 – Kaixin Zhang</title>
        <meta name="description" content="Paintings and sketches by Kaixin Zhang." />
      </Head>
      <Navbar />

      {lightbox && <Lightbox painting={lightbox} onClose={() => setLightbox(null)} />}

      <main>
        {/* Header */}
        <div className="page-header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>画</h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--muted)' }}>
              Sketches and paintings from the road.
            </p>
          </div>
        </div>

        {/* Location filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveLocation("all")}
              className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
              style={activeLocation === "all"
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
            >
              全部
            </button>
            {paintingLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
                style={activeLocation === loc
                  ? { background: 'var(--accent)', color: '#fff' }
                  : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Gallery grid */}
        <section className="py-10 px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center py-16" style={{ color: 'var(--muted)' }}>此地暂无画。</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(p => (
                <PaintingCard key={p.id} painting={p} onClick={setLightbox} />
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
