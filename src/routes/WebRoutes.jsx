import React, {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Certifications from '../pages/Certifications'
import ContactMe from '../pages/ContactMe'
import LangContext from '../context/LangContext'
import {IntlProvider} from 'react-intl'; 

const WebRoutes = () => {
  const {locale, langContent} = useContext(LangContext); 


  return (
    <IntlProvider locale={locale} messages={langContent}>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/skills'  element={<Skills />} />
              <Route path='/certifications' element={<Certifications />} />
              <Route path='/contactme' element={<ContactMe />} />
          </Routes>
    </IntlProvider>
  )
}

export default WebRoutes