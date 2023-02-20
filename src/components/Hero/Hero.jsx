import { useContext } from 'react'
import LangContext from '../../context/LangContext'
import { GrDownload } from 'react-icons/gr'
import heroImage from '../../assets/images/hero-image.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { translations, language } = useContext(LangContext)

  const typingClass = language === 'es' ? 'esTyping' : 'enTyping'

  return (
    <article className='hero'>
      <div className='hero__content'>
        <h2 className={`hero__content--name ${typingClass}`}>
          {translations.hero.contentName}
        </h2>
        {translations.hero.contentText.map((text, index) => (
          <p key={index} className='hero__content--text'>
            {text}
          </p>
        ))}
        <div className='hero__content--buttons'>
          <Link to='/contactme' className='contactBtn'>
            {translations.hero.buttons.contactButton}
          </Link>
          <a href='/public/dylan-ramirez-cv.pdf' download className='downloadCvBtn'>
            {translations.hero.buttons.downloadButotn}
            <GrDownload
              color='#ffffff'
            />
          </a>
        </div>
      </div>
      <div className='hero__image'>
        <img src={heroImage} alt='about me image' />
      </div>
    </article>
  )
}

export default Hero
