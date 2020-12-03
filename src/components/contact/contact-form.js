import React, { useState } from "react";
import axios from "axios";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("helloooo");
    let newContact = {
      name: name,
      email: email,
      comment: comment,
    };
    axios
      .post(
        "https://honeysuckle-coffee-backend.herokuapp.com/contact",
        newContact
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="contact-us">
      <form className="contact-us-form" onSubmit={handleSubmit}>
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
          className="form-comment"
          placeholder="Comment"
          type="text"
          value={comment}
          onChange={handleCommentChange}
        />
        <input className="form-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
