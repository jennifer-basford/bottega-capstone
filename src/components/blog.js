import React, { Component } from "react";

import Navbar from "./headernavbar/navbar";
import { Link } from "react-router-dom";

class Blog extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="blog-wrapper">
        <Navbar />
        <h2>Blog</h2>
        <Link to="/about-us">Read more about us...</Link>
      </div>
    );
  }
}
export default Blog;
