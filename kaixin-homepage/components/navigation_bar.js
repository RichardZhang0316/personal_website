import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';

export default function Navbar() {
  const router = useRouter();
  const { lang, setLang } = useLang();

  const links = [
    { href: '/',            label: t.nav.home[lang] },
    { href: '/about',       label: t.nav.about[lang] },
    { href: '/experiences', label: t.nav.experiences[lang] },
    { href: '/projects',    label: t.nav.projects[lang] },
    { href: '/blog',        label: t.nav.blog[lang] },
    { href: '/poems',       label: t.nav.poems[lang] },
    { href: '/articles',    label: t.nav.articles[lang] },
    { href: '/art',         label: t.nav.art[lang] },
    { href: '/reflections', label: t.nav.reflections[lang] },
    { href: '/contact',     label: t.nav.contact[lang] },
  ];

  return (
    <nav className="navbar sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'var(--accent)' }}>
              KZ
            </div>
            <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
              Kaixin Zhang
            </span>
          </Link>

          <div className="flex items-center gap-0.5">
            {links.map(({ href, label }) => {
              const active = router.pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150"
                  style={active
                    ? { color: 'var(--text)', background: 'var(--active-bg)', fontWeight: 600 }
                    : { color: 'var(--muted)' }
                  }
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {label}
                </Link>
              );
            })}

            {/* Language toggle */}
            <div className="flex items-center ml-3 rounded-md overflow-hidden text-xs font-semibold"
              style={{ border: '1px solid var(--border)' }}>
              <button
                onClick={() => setLang('en')}
                className="px-2.5 py-1.5 transition-colors"
                style={lang === 'en'
                  ? { background: 'var(--text)', color: 'var(--bg)' }
                  : { background: 'transparent', color: 'var(--muted)' }}
              >
                EN
              </button>
              <button
                onClick={() => setLang('zh')}
                className="px-2.5 py-1.5 transition-colors"
                style={lang === 'zh'
                  ? { background: 'var(--text)', color: 'var(--bg)' }
                  : { background: 'transparent', color: 'var(--muted)' }}
              >
                中
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
