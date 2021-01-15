import React, { useState } from "react";
import axios from "axios";

const ReviewForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newReview = {
      name: name,
      email: email,
      review: review,
    };
    axios
      .post(
        "https://honeysuckle-coffee-backend.herokuapp.com/admin",
        newReview
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setName("");
    setEmail("");
    setReview("");
  };

  return (
    <div className="review">
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="form-input"
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          className="form-review"
          placeholder="Leave a Review"
          type="text"
          value={review}
          onChange={handleReviewChange}
        />
        <input className="form-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewForm;
