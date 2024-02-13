import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationSE from "./locales/se/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  se: {
    translation: translationSE,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(
    {
      resources,
      fallbackLng: "en",
    },
    (err, t) => {
      if (err) return console.error(err)
      console.log("i18next is ready...")
      console.log(t("welcome"))
      console.log(t("welcome", { lng: "se" }))
    }
  )

export default i18n
