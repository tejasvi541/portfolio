import React, { Fragment } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  FormText,
} from "./ContactElements";

const Contact = () => {
  return (
    <Fragment>
      <Container id="contact">
        <FormWrap>
          <Icon to="/">Tejasvi</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Contact Me!</FormH1>
              <FormLabel htmlFor="for">Your Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Your Query</FormLabel>
              <FormText htmlFor="text" required />
              <FormButton type="submit">Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </Fragment>
  );
};

export default Contact;
