import React, { Component } from "react";

class ReviewTitle extends Component {
  render() {
    const { className, title } = this.props;
    return <div className={`${className} review-title`}>{title}</div>;
  }
}

export default ReviewTitle;
