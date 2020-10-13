import React, { Component } from "react";

import background from "../../../images/header-background.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div
          className="header-background"
          styles={{ backgroundImage: `url(${background})` }}
        >
          Background Image
        </div>

        <div className="banner-image"></div>
        <img className="logo-white" src="images/Honeysuckle Logo white.jpg" />
      </div>
    );
  }
}

export default Header;
