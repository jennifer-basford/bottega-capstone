import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <div className="main-page-headline">Specialty Coffee...</div>
        <div className="main-page-content">
          is more than just your average cup of coffee. It’s hand crafted lattes
          made with perfectly pulled espresso shots from fresh artisan roasted
          beans and velvety smooth steamed milk, to bring out the delicate,
          sweet flavors in your drink. It’s individually made, single origin
          pour-overs. It’s a full bodied French press, a delicate Aero-press or
          a smooth Chemex made just for you.
          <ul>
            We offer something quality for everyone so that no matter what your
            flavor, you are covered! Our passion is to bring specialty coffee to
            the south side of the Salt Lake City valley and complement it with a
            heathy line of teas and fresh baked goods made with local & hormone
            free ingredients.
          </ul>
        </div>
        <div className="main-page-announcement-headline">
          Covid-19 Updates...
        </div>
        <div className="main-page-announcement-content">
          Now open for curb-side pickup, walk-up ordering, limited dine-in and
          we’ve expanded our outdoor seating. We are following the guidelines
          from the CDC closely, practicing social distancing, and keeping things
          very clean and healthy for you. PLEASE WEAR A MASK and come see us for
          coffee and brunch. Bread is also made fresh for purchase online and
          in-person every Tuesday and Friday until sold out. Online menu listed
          below by clicking the “shop” button. As always, we thank you for your
          outstanding support.
        </div>
      </div>
    );
  }
}

export default Main;
