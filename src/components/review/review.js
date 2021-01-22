import React, { Component } from "react";

import Navbar from "../headernavbar/navbar";
import ReviewForm from "./review-form";
import Footer from "../footer";
import ReviewTitle from "./review-title";


class Review extends Component {
  render() {
    return (
      <div className="review-wrapper">
        <Navbar />
        <div className="logo-wrapper">
          <img src={require("../../../static/assets/images/honeysuckle-logo-white2.jpg")} />
        </div>
        <div className="review-body-wrapper">
          <ReviewTitle className="review__review-title" title="Review Us!" />
          <ReviewForm />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Review;
