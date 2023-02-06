import WebRoutes from "./routes/WebRoutes";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

import { LangProvider } from "./context/LangContext";

const App = () => { 
  return (
    <LangProvider>
      <BrowserRouter>
        <Header />
        <main className="web__main">
          <WebRoutes />
        </main>
      </BrowserRouter>
    </LangProvider>
  );
};

export default App;
