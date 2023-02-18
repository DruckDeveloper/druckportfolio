import { useContext } from 'react'
import LangContext from '../../context/LangContext'
import { GrDownload } from 'react-icons/gr'
const Hero = () => {
  const { translations, language } = useContext(LangContext)

  const typingClass = language === 'es' ? 'esTyping' : 'enTyping'
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/public/dylan-ramirez-cv.pdf'
    link.download = 'Dylan_Ramirez-CV.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

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
          <button className='contactBtn'>
            {translations.hero.buttons.contactButton}
          </button>
          <button onClick={handleDownload} className='downloadCvBtn'>
            {translations.hero.buttons.downloadButotn}
            <GrDownload
              color='#ffffff'
            />
          </button>
        </div>
      </div>
      <div className='hero__image' />
    </article>
  )
}

export default Hero
