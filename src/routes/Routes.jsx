import React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Certifications from '../pages/Certifications'
import ContactMe from '../pages/ContactMe'

function Routes() {
  return (
    <BrowserRouter>
        <Router>
            <Route path='/' element={<Layout />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills'  element={<Skills />} />
            <Route path='/certifications' element={<Certifications />} />
            <Route path='/contactme' element={<ContactMe />} />
        </Router>
    </BrowserRouter>
  )
}

export default Routes