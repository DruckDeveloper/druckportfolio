import { useContext } from 'react'

import LangContext, { localStorageLang } from '../../context/LangContext'

const LanguageSelector = () => {
  const { handleLang } = useContext(LangContext)

  return (
    <select onChange={handleLang} className='language__selector' defaultValue={localStorageLang()}>
      <option value='en'>English</option>
      <option value='es'>Spanish</option>
    </select>
  )
}

export default LanguageSelector
