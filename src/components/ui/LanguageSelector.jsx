import React from 'react'
import { useContext } from 'react'
import LangContext from '../../context/LangContext'


const LanguageSelector = () => {
    const { changeLanguage } = useContext(LangContext) 
    
    const handleLanguageChange = (e) => {
      changeLanguage(e.target.value); 
    }
    
    return (
    <select onChange={handleLanguageChange} className="language__selector">
        <option value="en-US">English</option>
        <option value="es-CO">Spanish</option>
    </select>
  )
}

export default LanguageSelector