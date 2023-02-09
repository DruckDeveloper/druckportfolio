import WebRoutes from './routes/WebRoutes'
import Header from './components/Header/Header'
import ResponsiveHeader from './components/Header/ResponsiveHeader'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import { useState } from 'react'

const App = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <LangProvider>
      <BrowserRouter>
        <ResponsiveHeader setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <main className='web__main'>
          <WebRoutes />
        </main>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
