import React from "react";

import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";
import Main from "./main-page";
import ReviewReturn from "../components/review/review-return";
import Footer from "./footer";


export default function () {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Main />
      <ReviewReturn />
      <Footer />  
    </div>
  );
}
