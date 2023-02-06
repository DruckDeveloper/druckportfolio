import React from "react";
import { useContext } from "react";
import LangContext from "../../context/LangContext";
import { localStorageLang } from "../../context/LangContext";

const LanguageSelector = () => {
  const { handleLang } = useContext(LangContext);

  return (
      <select onChange={handleLang} className="language__selector" defaultValue={localStorageLang()}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
  );
};

export default LanguageSelector;
