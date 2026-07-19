import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navigation_bar";
import { personal, education, skills } from "../data/experience";
import { t } from "../data/translations";
import { useLang } from "../contexts/LanguageContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function About() {
  const { lang } = useLang();
  const T = t.about;
  const interests = T.interests_list;

  return (
    <div className={`${geistSans.className} page-bg`}>
      <Head>
        <title>About – Kaixin Zhang</title>
        <meta name="description" content={T.metaDesc[lang]} />
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
                {T.greeting[lang]}
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                {lang === 'en' ? (
                  <>
                    {T.bio1.en}{' '}
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{T.bio1university.en}</span>
                    {T.bio1end.en}
                  </>
                ) : (
                  <>
                    {T.bio1.zh}
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{T.bio1university.zh}</span>
                    {T.bio1end.zh}
                  </>
                )}
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                {T.bio2[lang]}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={`mailto:${personal.email}`} className="btn-primary px-5 py-2.5 text-sm">
                  {T.getInTouch[lang]}
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
          <h2 className="section-heading">{T.currently[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: T.basedIn[lang],      value: T.basedInVal[lang] },
              { label: T.educationLabel[lang], value: T.educationVal[lang] },
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
          <h2 className="section-heading">{T.interests[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item, i) => (
              <div key={i} className="card-hover p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">
                  {['🖥', '🔐', '⚙️', '📊'][i]}
                </span>
                <div>
                  <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text)' }}>
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {item.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Education */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-14">
          <h2 className="section-heading">{T.educationSection[lang]}</h2>
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
            <h2 className="section-heading" style={{ marginBottom: 0 }}>{T.skills[lang]}</h2>
            <Link href="/experiences" className="btn-ghost px-4 py-2 text-sm">{T.fullExp[lang]}</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { label: T.languages[lang], items: skills.languages },
              { label: T.frameworks[lang], items: skills.frameworks },
              { label: T.tools[lang], items: skills.tools },
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
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>{T.letsConnect[lang]}</h2>
            <p className="mb-6 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>
              {T.connectSub[lang]}
            </p>
            <Link href="/contact" className="btn-primary px-6 py-3 text-sm inline-block">
              {T.getInTouch[lang]}
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {personal.name}. {t.footer.rights[lang]}</p>
        <p className="mt-1" style={{ color: '#475569' }}>Built with Next.js · Tailwind CSS</p>
      </footer>
    </div>
  );
}
