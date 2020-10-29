import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div className="social-links">
      <h1>Follow Us!</h1>
      <a
        href="https://www.facebook.com/thehoneysucklecoffeeco/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a
        href="https://www.instagram.com/thehoneysucklecoffeeco/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
    </div>
  );
};

export default SocialFollow;
