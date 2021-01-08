import React from "react";

import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";
import Main from "./main-page";
import Footer from "./footer";
import AuthButton from "./auth/auth-button";

export default function () {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Main />
      <Footer />
      <AuthButton />
    </div>
  );
}
