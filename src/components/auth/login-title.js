import React, { Component } from "react";

class LoginTitle extends Component {
  render() {
    const { className, title } = this.props;
    return <div className={`${className} login-title`}>{title}</div>;
  }
}

export default LoginTitle;
