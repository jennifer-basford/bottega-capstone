import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
