import React, { createContext, useContext, useState, useEffect } from 'react';
import { supportedLanguages, defaultLanguage } from '../i18n/languages';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('pethub_language');
      if (saved && supportedLanguages.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // localStorage fallback
    }
    return defaultLanguage;
  });

  const setLanguage = (langCode) => {
    if (supportedLanguages.some((l) => l.code === langCode)) {
      setCurrentLangState(langCode);
      try {
        localStorage.setItem('pethub_language', langCode);
      } catch {
        // ignore
      }
    }
  };

  useEffect(() => {
    const langObj = supportedLanguages.find((l) => l.code === currentLang);
    if (langObj) {
      document.documentElement.lang = langObj.code;
      document.documentElement.dir = langObj.direction || 'ltr';
    }
  }, [currentLang]);

  // Translation resolver: t('nav.dashboard')
  const t = (path, fallback = '') => {
    if (!path) return '';
    const keys = path.split('.');

    // Try current language
    let result = translations[currentLang];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        result = undefined;
        break;
      }
    }

    if (result !== undefined && typeof result === 'string') {
      return result;
    }

    // Fallback to English
    if (currentLang !== 'en') {
      let enResult = translations.en;
      for (const key of keys) {
        if (enResult && enResult[key] !== undefined) {
          enResult = enResult[key];
        } else {
          enResult = undefined;
          break;
        }
      }
      if (enResult !== undefined && typeof enResult === 'string') {
        return enResult;
      }
    }

    return fallback || path;
  };

  const currentLanguageMeta =
    supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t,
        supportedLanguages,
        currentLanguageMeta
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
