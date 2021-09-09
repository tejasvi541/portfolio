import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  FormText,
  FormP,
} from "./ContactElements";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = (e) => {
    e.preventDefault();
    if (isValidEmail(email) === true) {
      if (email && query) {
        const serviceId = "service_atm8jgy";
        const templateId = "template_rqpmo9p";
        const userId = "user_8lCAI1jNIHSjfCZxFrZ8F";
        const templateParams = {
          email,
          query,
        };

        emailjs
          .send(serviceId, templateId, templateParams, userId)
          .then((response) => alert("Email Sent to Tejasvi"))
          .then((error) => console.log(error));

        setEmail("");
        setQuery("");
        setEmailSent(true);
      } else {
        alert("Enter All Fields");
      }
    } else {
      alert("Enter a Valid Mail");
    }
  };

  return (
    <Fragment>
      <Container id="contact">
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Contact Me!</FormH1>
              <FormLabel htmlFor="for">Your Email</FormLabel>
              <FormInput
                htmlFor="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Your Query</FormLabel>
              <FormText
                htmlFor="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <FormButton type="submit" onClick={submit}>
                Submit
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </Fragment>
  );
};

export default Contact;
