import { createContext, useState } from 'react'
import { dictionary } from '../data/lang/dictionary.jsx'

const LangContext = createContext()

export const localStorageLang = () => {
  if (window.localStorage.getItem('lang')) {
    return window.localStorage.getItem('lang')
  } else {
    return 'en'
  }
}

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorageLang())
  const [translations, setTranslations] = useState(dictionary[localStorageLang()])

  const handleLang = (e) => {
    setLanguage(e.target.value)
    setTranslations(dictionary[e.target.value])
    window.localStorage.setItem('lang', e.target.value)
  }

  const data = { translations, handleLang, language }

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>
}

export { LangProvider }
export default LangContext
