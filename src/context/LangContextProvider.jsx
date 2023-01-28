import LangContext from "./LangContext";
import { IntlProvider } from "react-intl"; 
import { useState } from "react";
import englishContent from '../data/lang/en-US.json';  
import spanishContent from '../data/lang/es-CO.json'; 



const LangContextProvider = ({ children }) => {
    const [langContent, setLangContent] = useState(englishContent); 
    const [locale, setLocale] = useState('en-US')

    const changeLanguage = (language) => {
        switch(language){
            case "en-US": 
                setLangContent(englishContent); 
                setLocale("en-US"); 
                localStorage.setItem('lang', 'en-US');
                break; 
            case "es-CO":
                setLangContent(spanishContent);  
                setLocale("es-CO"); 
                localStorage.setItem('lang', 'es-CO');
                break; 
            default: 
                setLangContent(englishContent);
                localStorage.setItem('lang', 'en-US');
                setLocale("en-US"); 
        }
    }

    const langContextValues = {
        langContent, 
        setLangContent, 
        changeLanguage, 
        locale,
        setLocale
    }

    return (
        <LangContext.Provider value={langContextValues}>
            <IntlProvider locale={locale} messages={langContent}>
                { children }
            </IntlProvider>
        </LangContext.Provider>
  )
}

export default LangContextProvider