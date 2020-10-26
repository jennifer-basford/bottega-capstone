import React, { Component } from "react";

import backgroundPicture from "../../../images/header-background.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-wrapper">
          <img src={require("../../../images/honeysuckle-logo-white2.jpg")} />
        </div>
        <div
          className="header-background"
          style={{
            background: "url(" + backgroundPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    );
  }
}

export default Header;
