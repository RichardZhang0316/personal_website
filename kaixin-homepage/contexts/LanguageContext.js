import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    const stored = localStorage.getItem('site-lang');
    if (stored === 'zh' || stored === 'en') setLangState(stored);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem('site-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
