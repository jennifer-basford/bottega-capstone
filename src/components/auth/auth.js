import React, { Component } from "react";

import loginImg from "../../../static/assets/images/auth-image.png";

import Navbar from "../headernavbar/navbar";
import Login from "./login";

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-page">
        <Navbar />

        <div className="auth-page-wrapper">
          <div
            className="left-column"
            style={{
              backgroundImage: `url(${loginImg})`,
            }}
          />
          <div className="right-column">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}
