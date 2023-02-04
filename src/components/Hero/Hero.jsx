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

      </div>
      <div className="hero__image">
        <p>hola mundo</p>
      </div>
    </article>
  );
};

export default Hero;
