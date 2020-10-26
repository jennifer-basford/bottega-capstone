import React, { Component } from "react";

import Navbar from "../headernavbar/navbar";
import SignIn from "../auth/signin";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* This is where you will put the sign in button and link */}
        <h1>Welcome to our Shop...</h1>
      </div>
    );
  }
}

export default Shop;
