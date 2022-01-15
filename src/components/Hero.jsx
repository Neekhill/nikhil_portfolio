import React from "react";
import styled, { keyframes } from "styled-components";
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
const HeroContainer = styled.div`
  width: 100%;
  height: 97vh;
  margin-top: 12px;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${change} 10s ease-in-out infinite;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
`;
const Wrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 2rem;
`;
const Desc = styled.div`
  font-size: 20px;
  letter-spacing: 4px;
  margin-bottom: 3rem;
`;
const HeroBtn = styled.button`
  padding: 1rem 4rem;
  font-size: 20px;
  font-weight: 600;
  border: none;
  background-color: black;
  color: #fff;
`;
const Hero = ({ title, desc, btnTitle }) => {
  return (
    <HeroContainer>
      <Wrapper>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <HeroBtn>{btnTitle}</HeroBtn>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
