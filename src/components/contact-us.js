import React, { Component } from "react";

import Navbar from "./headernavbar/navbar";

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <Navbar />
        <div className="contact-body-wrapper"></div>
      </div>
    );
  }
}

export default Contact;
