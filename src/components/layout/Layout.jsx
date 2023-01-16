import React from 'react'
import WebRoutes from '../../routes/WebRoutes'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      
    <main>
      <WebRoutes />
    </main>
  </>
  )
}

export default Layout