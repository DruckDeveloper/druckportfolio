import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/WebRoutes";
import Header from "./components/Header/Header";
import LangContextProvider from "./context/LangContextProvider";

const App = () => { 
  return (
    <LangContextProvider>
      <BrowserRouter>
        <Header />
        <main className="web__main">
          <WebRoutes />
        </main>
      </BrowserRouter>
    </LangContextProvider>
  );
};

export default App;
