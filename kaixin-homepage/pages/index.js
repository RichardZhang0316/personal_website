import Image from "next/image";
import Navbar from "../components/navigation_bar";
import { Geist, Geist_Mono } from "next/font/google";
import { personal, education, skills, projects } from "../data/experience";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-24">
        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Text */}
          <div className="md:w-3/5 space-y-5">
            <div className="fade-up">
              <div className="status-pill mb-4">
                <span className="status-dot" />
                Joining TikTok · Ads Measurement · Signal Privacy Infra
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight" style={{ color: 'var(--text)' }}>
                {personal.name}
              </h1>
            </div>

            <p className="fade-up-1 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              {personal.summary}
            </p>

            <div className="fade-up-2 flex flex-wrap gap-3 pt-2">
              <a href={`mailto:${personal.email}`} className="btn-primary px-5 py-2.5 text-sm">
                Email Me
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="btn-ghost px-5 py-2.5 text-sm">
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-ghost px-5 py-2.5 text-sm">
                LinkedIn
              </a>
              <a href={personal.medium} target="_blank" rel="noopener noreferrer"
                className="btn-ghost px-5 py-2.5 text-sm">
                Medium
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="md:w-2/5 flex justify-center fade-up-3">
            <div className="avatar-ring">
              <div className="w-52 h-52 rounded-2xl overflow-hidden" style={{ background: 'var(--bg-card)' }}>
                <Image
                  src="/profile_photo.jpeg"
                  alt={personal.name}
                  width={208} height={208}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Education ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
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
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>{edu.institution}</h3>
                  <span className="tag-neutral">{edu.startDate.split('-')[0]} – {edu.endDate.split('-')[0]}</span>
                </div>
                <p style={{ color: 'var(--muted)' }} className="text-sm mt-0.5">{edu.degree} in {edu.major} · {edu.location}</p>
                {edu.achievements.length > 0 && (
                  <p className="text-sm mt-1.5" style={{ color: 'var(--muted)' }}>{edu.achievements.join(' · ')}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Skills ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <h2 className="section-heading">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Languages', items: skills.languages },
            { label: 'Frameworks', items: skills.frameworks },
            { label: 'Tools & Cloud', items: skills.tools },
          ].map(({ label, items }) => (
            <div key={label} className="card p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span key={i} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Featured Projects ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading" style={{ marginBottom: 0 }}>Featured Projects</h2>
          <Link href="/projects" className="btn-ghost px-4 py-2 text-sm">View All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card-hover overflow-hidden">
              <div className="h-44 relative" style={{ background: 'var(--bg)' }}>
                {project.image ? (
                  <Image src={project.image} alt={project.title}
                    width={600} height={300} className="object-cover w-full h-full" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span style={{ color: 'var(--muted)' }}>No image</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>{project.title}</h3>
                  <span className="tag-neutral flex-shrink-0">{project.period}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: 'var(--accent-lt)' }}>{project.subtitle}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tag-neutral">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tag-neutral">+{project.technologies.length - 4}</span>
                  )}
                </div>
                <Link href={`/projects#project-${project.id}`} className="text-sm font-medium" style={{ color: 'var(--accent-lt)' }}>
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="mt-1" style={{ color: '#475569' }}>Built with Next.js · Tailwind CSS</p>
      </footer>
    </div>
  );
}
