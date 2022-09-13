import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang_en from './translations/en/lang.json';
import lang_tr from './translations/tr/lang.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en:{
        translation:lang_en
     },
      tr: {
        translation: lang_tr
     }
    },
    lng: document.querySelector('html').lang,
    fallbackLng: "en",

  });

export default i18n;