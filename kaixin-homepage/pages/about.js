import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navigation_bar";
import { personal, education, skills } from "../data/experience";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const interests = [
  {
    icon: "🖥",
    title: "Distributed Systems",
    description: "Fascinated by the challenges of consistency, fault tolerance, and scalability — from Chord DHTs to primary-backup replication.",
  },
  {
    icon: "🔐",
    title: "Privacy & Security Infrastructure",
    description: "Increasingly interested in signal privacy, data minimization, and building trustworthy measurement pipelines at scale.",
  },
  {
    icon: "⚙️",
    title: "Systems Programming",
    description: "Love working close to the metal — pthreads, TCP sockets, memory layout, and squeezing performance out of C/C++.",
  },
  {
    icon: "📊",
    title: "Machine Learning",
    description: "Curious about the intersection of ML and systems: efficient training infrastructure, LLMs, and responsible AI.",
  },
];

export default function About() {
  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>About – Kaixin Zhang</title>
        <meta name="description" content="Learn more about Kaixin Zhang — software engineer, UPenn MS CIS student, and incoming TikTok engineer." />
      </Head>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center flex-shrink-0">
              <div className="avatar-ring">
                <div className="w-52 h-52 rounded-2xl overflow-hidden">
                  <Image src="/profile_photo.jpeg" alt={personal.name}
                    width={208} height={208} className="object-cover w-full h-full" priority />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                Hi, I&apos;m Kaixin
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                I&apos;m a software engineer finishing my M.S. in Computer and Information Science at the{' '}
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>University of Pennsylvania</span>.
                This summer I&apos;ll be joining{' '}
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>TikTok</span>{' '}
                as a software engineer on the Ads Measurement Signal Privacy Infrastructure team.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                I build systems that care about correctness — distributed key-value stores, real-time
                arbitrage engines, full-stack analytics platforms. I&apos;m drawn to problems where the
                gap between "it works on my machine" and "it works at scale" is where the real engineering lives.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={`mailto:${personal.email}`} className="btn-primary px-5 py-2.5 text-sm">
                  Get in touch
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost px-5 py-2.5 text-sm">
                  LinkedIn
                </a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost px-5 py-2.5 text-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Currently */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
          <h2 className="section-heading">Currently</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Based in', value: 'Philadelphia, PA' },
              { label: 'Studying', value: 'M.S. CIS @ UPenn' },
              { label: 'Joining', value: 'TikTok — Ads Measurement Signal Privacy Infra' },
            ].map((item) => (
              <div key={item.label} className="card p-5">
                <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                  {item.label}
                </p>
                <p className="font-semibold" style={{ color: 'var(--text)' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Interests */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
          <h2 className="section-heading">What I&apos;m Interested In</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Education */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
          <h2 className="section-heading">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="card p-5 flex items-center gap-5">
                <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center p-1.5"
                  style={{ background: 'rgba(255,255,255,0.06)' }}>
                  {edu.logo ? (
                    <Image src={edu.logo} alt={`${edu.institution} logo`}
                      width={48} height={48} className="object-contain w-full h-full" />
                  ) : (
                    <span className="text-lg font-bold text-accent">{edu.institution.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{edu.institution}</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
                    {edu.degree} in {edu.major} · {edu.startDate.split('-')[0]}–{edu.endDate.split('-')[0]} · {edu.location}
                  </p>
                  {edu.achievements.length > 0 && (
                    <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{edu.achievements.join(' · ')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Skills */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-heading" style={{ marginBottom: 0 }}>Skills</h2>
            <Link href="/experiences" className="btn-ghost px-4 py-2 text-sm">Full experience →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { label: 'Languages', items: skills.languages },
              { label: 'Frameworks', items: skills.frameworks },
              { label: 'Tools', items: skills.tools },
            ].map(({ label, items }) => (
              <div key={label} className="card p-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => <span key={item} className="tag">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Contact CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
          <div className="card p-10 text-center">
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Let&apos;s connect</h2>
            <p className="mb-6 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>
              Always happy to chat about distributed systems, career paths, or just swap ideas.
            </p>
            <Link href="/contact" className="btn-primary px-6 py-3 text-sm inline-block">
              Get in touch
            </Link>
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
