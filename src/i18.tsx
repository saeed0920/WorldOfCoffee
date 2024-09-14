import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglishHomePage from "@/Translation/en.json";

const resources = {
  en: {
    translation: translationEnglishHomePage,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", //default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18next;
