import LangContext from "./LangContext";
import { useState } from "react";
import englishContent from '../data/lang/en-US.json';  
import spanishContent from '../data/lang/es-CO.json'; 


const LangContextProvider = ({ children }) => {
    const [langContent, setLangContent] = useState(englishContent); 
    
    const changeLanguague = (languague) => {
        console.log("El idioma seleccionado es", languague)
    }

    const langContextValues = {
        langContent, 
        setLangContent, 
        changeLanguague
    }

    return (
        <LangContext.Provider value={langContextValues}>
            { children }
        </LangContext.Provider>
  )
}

export default LangContextProvider