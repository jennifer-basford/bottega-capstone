import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton, FormComment } from "../form-fields";

class ContactForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} contact-us-form`}>
        <Field
          className="contact-us-form__name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="contact-us-form__email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="contact-us-form__comment"
          type="comment"
          title="Comment"
          name="comment"
          component={FormComment}
        />

        <Field
          className="contact-us-form__submit"
          onClick={() => console.log("submitting")}
          type="submit"
          title="Submit"
          name="submit"
          component={FormButton}
        />
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: "ContactForm",
})(ContactForm);

export default ContactForm;
