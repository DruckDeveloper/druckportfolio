import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import WebRoutes from '../../routes/WebRoutes'
import Header from '../Header/Header'
import { IntlProvider } from 'react-intl'
import LangContext from '../../context/LangContext'

const Layout = () => {
  const {locale, langContent} = useContext(LangContext)

  return (
    <IntlProvider locale={locale} messages={langContent}>
        <BrowserRouter>
          <Header />
          <main>
            <WebRoutes />
          </main>
        </BrowserRouter>
    </IntlProvider>
  )
}

export default Layout