import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
