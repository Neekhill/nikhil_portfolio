import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled, { keyframes } from "styled-components";
import { largeMobile, mobile, tabletPlus } from "../responsive";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub, Height, Instagram, MailOutlined } from "@mui/icons-material";
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
  scroll-margin-top: 3.5em;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
`;
const Wrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${largeMobile({ padding: "0rem" })}
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 2rem;
  ${tabletPlus({ fontSize: "45px" })}
  ${mobile({ fontSize: "30px" })}
`;
const Desc = styled.div`
  font-size: 20px;
  letter-spacing: 4px;
  margin-bottom: 3rem;
  ${mobile({ fontSize: "16px" })}
`;
const HeroBtn = styled.button`
  padding: 1rem 4rem;
  font-size: 20px;
  font-weight: 600;
  border: none;
  background-color: black;
  color: #fff;
  cursor: pointer;
  ${largeMobile({ padding: ".8rem 2.2rem" })}
  ${mobile({ fontSize: "16px" })}
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-left: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  ${largeMobile({ width: "35px ", height: "35px" })}
  ${mobile({ width: "35px ", height: "35px" })}
`;
const Hero = ({ title, desc, btnTitle }) => {
  return (
    <HeroContainer id="home">
      <Wrapper>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Link to="#projects" smooth>
          <HeroBtn>{btnTitle}</HeroBtn>
        </Link>
        <SocialContainer>
          <a href="https://github.com/Neekhill" target="_blank">
            <SocialIcon color="545353">
              <GitHub />
            </SocialIcon>
          </a>

          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>

          <a
            href="https://www.linkedin.com/in/nikhil-yadav-b5a459208/"
            target="_blank"
          >
            <SocialIcon color="0077b5">
              <LinkedInIcon />
            </SocialIcon>
          </a>
          <Link to="#contact" smooth>
            <SocialIcon color="747171">
              <MailOutlined />
            </SocialIcon>
          </Link>
        </SocialContainer>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
