import Image from "next/image";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { projects, categories, personal } from "../data/experience";
import Navbar from "../components/navigation_bar";
import Head from 'next/head';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const toggle = (id) => setExpandedProject(expandedProject === id ? null : id);

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>Projects – Kaixin Zhang</title>
        <meta name="description" content="Projects of Kaixin Zhang." />
      </Head>
      <Navbar />

      <main>
        <div className="page-header">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold" style={{ color: 'var(--text)' }}>Projects</h1>
          </div>
        </div>

        {/* Category filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
              style={activeCategory === "all"
                ? { background: 'var(--accent)', color: '#fff' }
                : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
            >
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-1.5 rounded-md text-sm font-medium transition-all"
                style={activeCategory === cat.id
                  ? { background: 'var(--accent)', color: '#fff' }
                  : { background: 'var(--bg-card)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Project list */}
        <section className="py-10 px-4 sm:px-6 lg:px-16 max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <p className="text-center py-16" style={{ color: 'var(--muted)' }}>No projects found.</p>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div key={project.id} id={`project-${project.id}`} className="card overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Image */}
                    <div className="md:col-span-1 h-48 md:h-auto relative" style={{ background: 'var(--bg)' }}>
                      {project.image ? (
                        <Image src={project.image} alt={project.title}
                          width={400} height={300} className="object-cover w-full h-full" />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span style={{ color: 'var(--muted)' }}>No image</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2 p-6">
                      <div className="flex justify-between items-start gap-3 mb-1">
                        <h2 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{project.title}</h2>
                        <span className="tag-neutral flex-shrink-0">{project.period}</span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: 'var(--accent-lt)' }}>{project.subtitle}</p>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tag">{tech}</span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5 mb-4">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                            style={{ color: 'var(--muted)' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-lt)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                          </a>
                        )}
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                            style={{ color: 'var(--muted)' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-lt)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => toggle(project.id)}
                        className="flex items-center gap-1 text-sm font-medium transition-colors"
                        style={{ color: 'var(--accent-lt)' }}
                      >
                        {expandedProject === project.id ? 'Hide details' : 'Show details'}
                        <svg className={`w-4 h-4 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {expandedProject === project.id && (
                    <div className="px-6 py-5" style={{ borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
                      <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>
                        Project Details
                      </h3>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
