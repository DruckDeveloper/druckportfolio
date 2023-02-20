import { useContext } from 'react'
import LangContext from '../context/LangContext'
import CertificationCard from '../components/certifications/CertificationCard'

const Certifications = () => {
  const { translations } = useContext(LangContext)

  return (
    <section className='certifications__section'>
      <h2 className='certifications__section--title'>{translations.certifications.title}</h2>
      <article className='certifications__section--container'>
        {translations.certifications.certs.map((card) => (
          <CertificationCard key={card.title} title={card.title} image={card.image} link={card.link} button={card.button} />
        ))}
      </article>
      <a className='certifications__section--see-all' href={translations.certifications.badges} target='_blank' rel='noreferrer'>{translations.certifications.seeAll}</a>
    </section>
  )
}

export default Certifications
