import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="nav-wrapper">
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <X /> : <Menu />}
        </div>
        <div className={this.state.clicked ? "nav-links-active" : "nav-links"}>
          <NavLink className="navbar-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="navbar-link" to="/about-us">
            About Us
          </NavLink>
          <NavLink className="navbar-link" to="/contact-us">
            Contact Us
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
