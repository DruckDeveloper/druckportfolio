import { useContext } from 'react'
import { Link } from 'react-router-dom'
import LangContext from '../../context/LangContext'

const Navbar = () => {
  const { translations } = useContext(LangContext)

  return (
    <nav className='web__header__nav'>
      <Link to='/aboutme' className='web__header__nav--item'>
        {translations.header.nav.buttonAboutme}
      </Link>
      <Link to='/projects' className='web__header__nav--item'>
        {translations.header.nav.buttonProjects}
      </Link>
      <Link to='/skills' className='web__header__nav--item'>
        {translations.header.nav.buttonSkills}
      </Link>
      <Link to='/certifications' className='web__header__nav--item'>
        {translations.header.nav.buttonCertifications}
      </Link>
      <Link to='contactme' className='web__header__nav--item'>
        {translations.header.nav.buttonContactme}
      </Link>
    </nav>
  )
}

export default Navbar
