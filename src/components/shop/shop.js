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
        <SignIn />
        <h1>Welcome to our Shop...</h1>
      </div>
    );
  }
}

export default Shop;
