import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./card";
import "../../styles.css";

export default function CarouselSlide() {
  const [isShowing, setIsShowing] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="carousel_slide">
      <div
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(true)}
      >
        <Carousel
          pagination={false}
          showArrows={isShowing}
          breakPoints={breakPoints}
        >
          <Card cardImage="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/1129510/pexels-photo-1129510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/1727123/pexels-photo-1727123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Card cardImage="https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </Carousel>
      </div>
    </div>
  );
}
