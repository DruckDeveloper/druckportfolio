import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import WebRoutes from "../../routes/WebRoutes";
import Header from "../header/Header";

const Layout = () => {

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
