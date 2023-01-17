import React from 'react'
import { useContext } from 'react'
import LangContext from '../../context/LangContext'


const LanguagueSelector = () => {
    const { changeLanguague } = useContext(LangContext) 
    
    const handleLanguagueChange = (e) => {
      changeLanguague(e.target.value); 
    }
    
    return (
    <select onChange={handleLanguagueChange}>
        <option value="en-US">english</option>
        <option value="es-CO">spanish</option>
    </select>
  )
}

export default LanguagueSelector