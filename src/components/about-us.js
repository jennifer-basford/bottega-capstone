import React, { Component } from "react";

import Navbar from "./headernavbar/navbar";
import Footer from "./footer";

import aboutImage from "../../static/assets/images/about-image.jpg";

class About extends Component {
  render() {
    return (
      <div className="about-us-wrapper">
        <Navbar />
        <div className="about-us-body-wrapper">
          <div className="about-us-logo">
            <img src={require("../../static/assets/images/honeysuckle-logo-white2.jpg")} />
          </div>
          <div className="about-us-columns">
            <div
              className="about-us-image"
              style={{
                background: "url(" + aboutImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="about-us-description">
              The Honeysuckle Coffee Co. was established in the suburbs of Salt
              Lake City in the fall of 2017 by Tim and Jenn, Utah transplants
              from Charlotte, NC. Our desire is to bring the depth of specialty
              style coffee to Sandy, one of our favorite little Utah cities, and
              complement it with house made baked goods and a southern touch of
              charm. “The city of Sandy is quant, full of people who value
              relationships and a love of heritage. For us, this city just made
              sense as a place we wanted to start our business. Our goal with
              our coffee is to bring out the intricate flavors by putting the
              utmost care into every aspect of our drinks. We are proud to
              partner with La Barba Coffee Roasters who roast only specialty
              grade coffee beans, imported seasonally and strive to support the
              farmers and everyone in between by purchasing only fair trade,
              direct trade and rainforest alliance certified green beans. In the
              end you can taste the difference because every bean is hand
              picked, dried with love and roasted with the utmost care before it
              makes it to our little shop to be ground and brewed by top notch
              equipment and baristas who have spent hours developing their
              craft. We really love coffee and learning it’s never ending
              intricacies to share with you is our passion. Everything at The
              Honeysuckle Coffee Company, from the baked goods to the jams,
              granola, and even the syrup in our drinks, is made in house from
              scratch with only hormone free, fresh, in-season and mostly
              organic and local ingredients. Because we care a lot about what we
              put in our bodies (you really are what you eat, y’all) and when
              it’s better and fresher for you, it does actually taste better
              too. Please email, thehoneysucklecoffeeco@gmail.com for inquires
              and pricing. Thanks for stopping by and we hope to see your face
              in our shop soon!”
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
