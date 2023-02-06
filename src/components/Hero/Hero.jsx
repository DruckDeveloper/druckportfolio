import { useContext } from "react";
import LangContext from '../../context/LangContext';


const Hero = () => {
  const { translations, language } = useContext(LangContext)
  let typingClass = language == 'es' ? 'esTyping' : 'enTyping';  

  return (
    <article className="hero">
      <div className="hero__content">
        <h2 className={`hero__content--name ${typingClass}`}>
          {translations.hero.contentName}
        </h2>
        { translations.hero.contentText.map((text, index) => (
            <p key={index} className={`hero__content--text`}>
              {text}
            </p>
        ))}
      </div>
      <div className="hero__image">
        <p>hola mundo</p>
      </div>
    </article>
  );
};

export default Hero;
