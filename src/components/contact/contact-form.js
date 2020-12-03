// import React, { Component } from "react";
// import axios from "axios";

// import { reduxForm, Field } from "redux-form";
// import { FormInput, FormButton, FormComment } from "../form-fields";

// class ContactForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       comment: "",
//       apiUrl: "localhost:5000",
//       apiAction: "post",
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     console.log("got here");
//     axios({
//       method: this.state.apiAction,
//       url: this.state.apiUrl,
//     }).then((response) => {
//       this.props.handleNewFormSubmission(response.data);
//     });
//   }

//   componentDidMount() {
//     axios
//       .get("http://127.0.0.1:5000/contacts")
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error));
//   }

//   render() {
//     const { className, handleSubmit } = this.props;
//     return (
//       <form onSubmit={handleSubmit} className={`${className} contact-us-form`}>
//         <Field
//           className="contact-us-form__name"
//           type="name"
//           title="Name"
//           placeholder="Name"
//           name="name"
//           component={FormInput}
//         />
//         <Field
//           className="contact-us-form__email"
//           type="email"
//           title="Email"
//           placeholder="Email"
//           name="email"
//           component={FormInput}
//         />
//         <Field
//           className="contact-us-form__comment"
//           type="comment"
//           title="Comment"
//           name="comment"
//           component={FormComment}
//         />

//         <Field
//           className="contact-us-form__submit"
//           onClick={() => console.log("submitting")}
//           type="submit"
//           title="Submit"
//           name="submit"
//           component={FormButton}
//         />
//       </form>
//     );
//   }
// }

// ContactForm = reduxForm({
//   form: "ContactForm",
// })(ContactForm);

// export default ContactForm;

import React, { useState } from "react";
import axios from "axios";

import { FormInput, FormButton, FormComment } from "../form-fields";

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
      .post("http://127.0.0.1:5000/contact", newContact)
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
