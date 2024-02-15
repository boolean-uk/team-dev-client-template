import { useEffect, useState } from "react"

import i18n from "../../i18n"
import Menu from "../menu"

import "./style.css"

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage)
  }, [selectedLanguage])

  return (
    <div
      className="language-select relative"
      onClick={() => setIsMenuVisible(!isMenuVisible)}
    >
      <div className="language-display text-blue1 bg-offwhite">{selectedLanguage}</div>
      {isMenuVisible && (
        <Menu className={"absolute boxshadow"}>
          <LanguageOptions selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
        </Menu>
      )}
    </div>
  )
}

const LanguageOptions = ({selectedLanguage, setSelectedLanguage}) => {
  const languageOptions = i18n.availableLanguages

  const handleClick = (language) => {
    setSelectedLanguage(language)
  }

  return (
    <>
      {languageOptions.map((language) => (
        <li key={`language-option${language}`} onClick={() => handleClick(language)}>{language}</li>
      ))}
    </>
  )
}

export default LanguageSelect
