import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navigation_bar";
import { experiences, personal } from "../data/experience";
import Head from 'next/head';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function ExperiencePage() {
  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>Experience – Kaixin Zhang</title>
        <meta name="description" content="Professional experience of Kaixin Zhang." />
      </Head>
      <Navbar />

      <main>
        <div className="page-header">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>Professional Experience</h1>
          </div>
        </div>

        <section className="py-14 px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-track">
                <div className="timeline-dot" />
                <div className="card p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-5">
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{exp.position}</h3>
                    <span className="tag-neutral flex-shrink-0">
                      {exp.startDate.split('-')[0]}/{exp.startDate.split('-')[1]} – {exp.endDate.split('-')[0]}/{exp.endDate.split('-')[1]}
                    </span>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.06)' }}>
                      {exp.companyLogo ? (
                        <Image src={exp.companyLogo} alt={`${exp.company} logo`}
                          width={28} height={28} className="rounded" />
                      ) : (
                        <span className="text-sm font-bold" style={{ color: 'var(--accent-lt)' }}>
                          {exp.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: 'var(--text)' }}>{exp.company}</p>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>{exp.location}</p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                      Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
