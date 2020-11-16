import React, { Component } from "react";

import Navbar from "./headernavbar/navbar";
import SignInForm from "./auth/signin";
import Footer from "./footer";

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <Navbar />
        <div className="contact-body-wrapper">
          <SignInForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
