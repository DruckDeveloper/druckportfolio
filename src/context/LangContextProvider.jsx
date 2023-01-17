import LangContext from "./LangContext";
import { useState } from "react";
import englishContent from '../data/lang/en-US.json';  
import spanishContent from '../data/lang/es-CO.json'; 


const LangContextProvider = ({ children }) => {
    const [langContent, setLangContent] = useState(englishContent); 
    const [locale, setLocale] = useState('en-US')

    const changeLanguague = (languague) => {
        switch(languague){
            case "en-US": 
                setLangContent(englishContent); 
                setLocale("en-US"); 
                break; 
            case "es-CO":
                setLangContent(spanishContent);  
                setLocale("es-CO"); 
                break; 
            default: 
                setLangContent(englishContent); 
                setLocale("en-US"); 
        }
    }

    const langContextValues = {
        langContent, 
        setLangContent, 
        changeLanguague, 
        locale,
        setLocale
    }

    return (
        <LangContext.Provider value={langContextValues}>
            { children }
        </LangContext.Provider>
  )
}

export default LangContextProvider