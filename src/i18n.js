import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationSE from "./locales/se/translation.json"
import translationCY from "./locales/cy/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  se: {
    translation: translationSE,
  },
  cy: {
    translation: translationCY,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
  })

export default i18n
