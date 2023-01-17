import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import LanguagueSelector from '../ui/LanguagueSelector'

const Header = () => {
  return (     
      <header>
        <LanguagueSelector />
        <nav>            
              <Link to="/aboutme">
                <FormattedMessage
                id='header.nav.button-aboutme'
                defaultMessage='About me'
                />
              </Link>
              <Link to="/projects">              
                <FormattedMessage
                id='header.nav.button-projects'
                defaultMessage='Projects'
                /> 
              </Link>
              <Link to="/skills">              
                <FormattedMessage
                id='header.nav.button-skills'
                defaultMessage='Skills'
                />
              </Link>
              <Link to="/certifications">
                <FormattedMessage 
                id='header.nav.button-certifications'
                defaultMessage='Certifications'
                />
              </Link>
              <Link to="contactme">
                <FormattedMessage 
                id='header.nav.button-contactme'
                defaultMessage='Contact me'
                />
              </Link>
        </nav>
      </header>
  )
}

export default Header