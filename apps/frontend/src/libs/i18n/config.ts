import { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const i18n = use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    ns: ['common', 'dashboard'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
