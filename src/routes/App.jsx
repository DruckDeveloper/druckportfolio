import Layout from '../components/layout/Layout'
import LangContextProvider from '../context/LangContextProvider';

const App = () => {
  return (
    <LangContextProvider>
      <Layout />
    </LangContextProvider>
  )
}

export default App