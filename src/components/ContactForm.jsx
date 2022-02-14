import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const FormConatiner = styled.div`
  padding: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 330px;
  box-shadow: 0px 28px 61px -19px black;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 22px;
  color: black;
  margin-bottom: 1rem;
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
const FormText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #606060;
`;
const FormInput = styled.input`
  height: 30px;
  width: 228px;
  border: none;
  outline: none;
  border-bottom: 2px solid #cbcbcb;
`;
const FormTextArea = styled.textarea`
  height: 100px;
  border: none;
  outline: none;
  border-bottom: 2px solid #cbcbcb;
`;
const FormButton = styled.button`
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  ${mobile({ padding: "0.5rem 1rem" })}
`;

const ContactForm = () => {
  return (
    <FormConatiner>
      <Title>Say Hello!</Title>
      <Form>
        <FormLabel for="name">
          <FormText>Name</FormText>
          <FormInput type="text" placeholder="Enter Your Name"></FormInput>
        </FormLabel>
        <FormLabel for="email">
          <FormText>Email</FormText>
          <FormInput type="email" placeholder="Enter Your Email"></FormInput>
        </FormLabel>
        <FormLabel for="message">
          <FormText>Message</FormText>
          <FormTextArea type="" placeholder="Your Message!"></FormTextArea>
        </FormLabel>
        <FormButton>Submit</FormButton>
      </Form>
    </FormConatiner>
  );
};

export default ContactForm;
