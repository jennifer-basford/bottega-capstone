import React, { Component } from "react";

import Navbar from "../headernavbar/navbar";
import SignIn from "../auth/signin";
import LoginButton from "../login-button";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="shop-wrapper">
        <Navbar />
        <div className="shop-welcome-login">
          <h1>Welcome to our Shop...</h1>
          {/*<LoginButton />*/}
        </div>
      </div>
    );
  }
}

export default Shop;
