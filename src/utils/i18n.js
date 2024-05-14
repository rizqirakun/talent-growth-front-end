import i18n from 'i18next';
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
// import XHR from "i18next-xhr-backend";
import locales from '../locales';
import { LANGUAGE } from './language';

i18n
  // .use(XHR)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales,
    /* default language when load the website in browser */
    lng: LANGUAGE.EN,
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: LANGUAGE.ID,
    /* debugger For Development environment */
    debug: import.meta.env.VITE_NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false, // react already safes from xss
      formatSeparator: ','
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;
