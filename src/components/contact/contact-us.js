import React, { Component } from "react";

import Navbar from "../headernavbar/navbar";
import ContactForm from "./contact-form";
import Footer from "../footer";
import ContactTitle from "./contact-title";

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <Navbar />
        <div className="logo-wrapper">
          <img src={require("../../../images/honeysuckle-logo-white2.jpg")} />
        </div>
        <div className="contact-body-wrapper">
          <ContactTitle className="contact__contact-title" title="Contact Us" />
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
