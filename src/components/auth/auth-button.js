import React, { Component } from "react";
import history from '../../history';


class AuthButton extends Component {
  render() {
    return (
      <div className="auth-button-wrapper">
        <div className="auth-button-title">
          Admin?
          <button 
          type='button'
          className="auth-button"
          onClick={() => history.push('/auth')}
          >Login</button>
        </div>
      </div>
    );
  }
}

export default AuthButton;
