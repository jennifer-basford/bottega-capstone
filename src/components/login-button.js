import React, { Component } from "react";

import { Link } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

class LoginButton extends Component {
  render() {
    //const element = <FontAwesomeIcon icon={faSignInAlt} />;
    return (
      <div>
        <Link to="/signin">
          <FontAwesomeIcon icon="fa-sign-in-alt" />
        </Link>
      </div>
    );
  }
}

export default LoginButton;
