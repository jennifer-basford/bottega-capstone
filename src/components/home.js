import React from "react";

import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";

export default function () {
  return (
    <div className="home">
      <Header />
      <h1>Home</h1>
      <Navbar />
    </div>
  );
}
