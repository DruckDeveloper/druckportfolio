import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Certifications from '../pages/Certifications'
import ContactMe from '../pages/ContactMe'
import {IntlProvider} from 'react-intl'; 
import englishContent from '../data/lang/en-US.json'; 

const WebRoutes = () => {
  return (
    <IntlProvider locale='en-US' messages={englishContent}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/skills'  element={<Skills />} />
              <Route path='/certifications' element={<Certifications />} />
              <Route path='/contactme' element={<ContactMe />} />
          </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default WebRoutes