import React, { Component } from "react";

import SocialFollow from "./social-follow";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-address-header">
          <h1>Address || Hours</h1>
          <div className="footer-address-info">
            The Honeysuckle Coffee Co.
            <ul>8745 South 700 East Unit #2</ul>
            <ul>Sandy, UT 84070</ul>
            <ul>Ph: 801.679.1483</ul>
            <ul>Monday - Saturday: 7am - 5pm</ul>
            <ul>Sundays: 8am - 4pm</ul>
          </div>
        </div>
        <SocialFollow />
      </div>
    );
  }
}

export default Footer;
