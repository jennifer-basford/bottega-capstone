import React, { Component } from "react";

class ContactTitle extends Component {
  render() {
    const { className, title } = this.props;
    return <div className={`${className} contact-title`}>{title}</div>;
  }
}

export default ContactTitle;
