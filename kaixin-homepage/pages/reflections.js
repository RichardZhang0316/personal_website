import { Geist } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/navigation_bar";
import { reflections, personal } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

function ReflectionCard({ reflection }) {
  return (
    <div className="card p-6">
      <p
        className="text-base leading-8 whitespace-pre-line"
        style={{ color: 'var(--text)' }}
      >
        {reflection.text}
      </p>
      {reflection.source && (
        <p className="mt-3 text-xs font-medium" style={{ color: 'var(--muted)' }}>
          — {reflection.source}
        </p>
      )}
    </div>
  );
}

export default function Reflections() {
  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>反思录 – Kaixin Zhang</title>
        <meta name="description" content="Collected quotes and personal reflections." />
      </Head>
      <Navbar />

      <main>
        <div className="page-header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>反思录</h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--muted)' }}>
              摘抄与沉淀。
            </p>
          </div>
        </div>

        <div className="divider" />

        <section className="py-10 px-4 sm:px-6 lg:px-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {reflections.map((r) => (
              <ReflectionCard key={r.id} reflection={r} />
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
