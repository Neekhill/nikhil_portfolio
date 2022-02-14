import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { largeMobile, mobile, tabletPlus } from "../responsive";

const AboutMeConatiner = styled.div`
  margin-top: 5rem;
  ${tabletPlus({ flexDirection: "column" })}
  scroll-margin-top: 3.5em;
`;
const Wrapper = styled.div`
  padding: 0 20px;
`;
const Top = styled.div``;
const TopTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  padding: 1rem 2rem;
  color: #3a3a3a;
  ${largeMobile({ fontSize: "30px" })}
  ${mobile({ fontSize: "22px" })}
`;
const TopDesc = styled.p`
  font-size: 24px;
  color: #555;
  max-width: 60rem;
  line-height: 1.5rem;
  text-align: center;
  ${largeMobile({ fontSize: "20px" })}
  ${mobile({ fontSize: "16px" })}

  margin: 0 auto;
`;
const Bottom = styled.div`
  display: flex;
  margin-top: 5rem;
  ${tabletPlus({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 3rem;
  ${largeMobile({ padding: "1rem" })}
`;
const LeftTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  padding: 2rem 0;
  color: #3a3a3a;
  ${mobile({ fontSize: "20px" })}
`;
const LeftDesc = styled.p`
  font-size: 20px;
  color: #555;
  padding-bottom: 1rem;
  line-height: 1.5;
  ${largeMobile({ fontSize: "20px", paddingBottom: "10px" })}
  ${mobile({ fontSize: "16px" })}
`;
const Bold = styled.b``;
const LeftButton = styled.button`
  padding: 1rem 4rem;
  font-size: 20px;
  font-weight: 600;
  background-color: black;
  color: #fff;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  ${largeMobile({ padding: "0.5rem 1.5rem", fontSize: "16px" })}
`;
const Right = styled.div`
  flex: 1;
  margin: 3rem;
  ${largeMobile({ margin: "1rem" })}
`;
const RightTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding: 2rem 0;
  margin-left: 1rem;
  color: #3a3a3a;
  ${tabletPlus({ marginLeft: "0rem" })}
  ${mobile({ fontSize: "20px" })}
`;
const RightSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: #ededed;
  ${tabletPlus({ marginLeft: "0.4rem" })}
  ${largeMobile({ padding: "0.5rem 1.5rem" })}
  ${mobile({ fontSize: "14px" })}
`;
const AboutMe = () => {
  return (
    <AboutMeConatiner id="about">
      <Wrapper>
        <Top>
          <TopTitle>ABOUT ME</TopTitle>
          <TopDesc>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </TopDesc>
        </Top>
        <Bottom>
          <Left>
            <LeftTitle>Get to know me!</LeftTitle>
            <LeftDesc>
              A <Bold>Software Engineer</Bold> building <Bold>Full Stack </Bold>
              Websites and Web Applications that leads to the success of the
              overall product.Check out some of my work in the
              <Bold> Projects</Bold> section.
            </LeftDesc>
            <LeftDesc>
              I can adapt into any technology rapidly making myself flexible
              upon any techstack. A passionate, diligent person who wants to
              learn continuously.{" "}
            </LeftDesc>
            <LeftDesc>
              I'm open to <Bold>Job</Bold> opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to{" "}
              <Bold>contact me</Bold>.
            </LeftDesc>

            <Link to="#contact" smooth>
              <LeftButton>CONTACT</LeftButton>
            </Link>
          </Left>
          <Right>
            <RightTitle>My Skills</RightTitle>
            <RightSkillsContainer>
              <Skill>JavaScript</Skill>
              <Skill>ES6</Skill>
              <Skill>ES5</Skill>
              <Skill>React</Skill>
              <Skill>Redux</Skill>
              <Skill>Node basics</Skill>
              <Skill>MongoDb basics</Skill>
              <Skill>Mongoose</Skill>
              <Skill>Express </Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS</Skill>
              <Skill>GIT</Skill>
              <Skill>Github</Skill>
            </RightSkillsContainer>
          </Right>
        </Bottom>
      </Wrapper>
    </AboutMeConatiner>
  );
};

export default AboutMe;
