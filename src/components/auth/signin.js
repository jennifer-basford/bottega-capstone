import React, { Component } from "react";

import SignInForm from "./signin-form";
import LoginTitle from "./login-title";

class SignIn extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <LoginTitle className="sign-in__login-title" title="Login" />
        <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

export default SignIn;
