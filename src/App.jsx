import WebRoutes from './routes/WebRoutes'
import Header from './components/Header/Header'
import ResponsiveHeader from './components/Header/ResponsiveHeader'
import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from './context/LangContext'

const App = () => {
  return (
    <LangProvider>
      <BrowserRouter>
        <ResponsiveHeader />
        <Header />
        <main className='web__main'>
          <WebRoutes />
        </main>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
