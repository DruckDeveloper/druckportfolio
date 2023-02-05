import React, {useContext} from "react";
import LangContext from '../../context/LangContext'; 
import { FormattedMessage } from "react-intl";


const Hero = () => {
  const { locale } = useContext(LangContext)
  let typingClass = locale == 'es-CO' ? 'esTyping' : 'enTyping';  

  return (
    <article className="hero">
      <div className="hero__content">
        <h2 className={`hero__content--name ${typingClass}`}>
          <FormattedMessage
            id="hero.content-name"
            defaultMessage="Hi, Im Dylan"
          />
        </h2>
        <p className="hero__content--text">
            <FormattedMessage
            id="hero.content-text"
            defaultMessage="Text not found" 
            values={{'<br />': <br/>}}
            />
        </p>
      </div>
      <div className="hero__image">
        <p>hola mundo</p>
      </div>
    </article>
  );
};

export default Hero;
