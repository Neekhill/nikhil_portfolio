import React from "react";
import styled, { keyframes } from "styled-components";
import ContactForm from "./ContactForm";
const change = keyframes`
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
`;
const ContactMeConatiner = styled.div`
  width: 100%;
  height: 120vh;
  margin-top: 12px;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${change} 10s ease-in-out infinite;
  position: relative;
  scroll-margin-top: 3.5em;
  clip-path: polygon(0 5vw, 100% 0, 100% calc(100%), 0 100%);
`;
const ContactMe = () => {
  return (
    <ContactMeConatiner id="contact">
      <ContactForm />
    </ContactMeConatiner>
  );
};

export default ContactMe;
