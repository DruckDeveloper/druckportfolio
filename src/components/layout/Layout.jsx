import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import WebRoutes from "../../routes/WebRoutes";
import Header from "../Header/Header";
import { IntlProvider } from "react-intl";
import LangContext from "../../context/LangContext";

const Layout = () => {
  const { locale, langContent } = useContext(LangContext);

  return (
    <main className="web__layout">
      <BrowserRouter>
        <Header />
        <section>
          <WebRoutes />
        </section>
      </BrowserRouter>
    </main>
  );
};

export default Layout;
