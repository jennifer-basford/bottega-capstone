//import React, { Component } from "react";

//import { Link } from "react-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

//class LoginButton extends Component {
//render() {
//const element = <FontAwesomeIcon icon={faSignInAlt} />;
//return (
//<div>
//<Link to="/signin">
//<FontAwesomeIcon icon="fa-sign-in-alt" />
//</Link>
//</div>
//);
//}
//}

//export default LoginButton;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const LoginButton = () => {
  return (
    <div className="login-button-wrapper">
      {/*<Link to="/signin">*/}
      <FontAwesomeIcon icon={faSignInAlt} link to="/signin" />
      {/*</Link>*/}
    </div>
  );
};

export default LoginButton;
