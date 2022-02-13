import React from "react";
import styled from "styled-components";

const AboutMeConatiner = styled.div`
  margin-top: 5rem;
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
`;
const TopDesc = styled.p`
  font-size: 20px;
  color: #555;
  max-width: 60rem;
  line-height: 1.5rem;
  text-align: center;

  margin: 0 auto;
`;
const Bottom = styled.div`
  display: flex;
  margin-top: 5rem;
`;
const Left = styled.div`
  flex: 1;
  padding: 3rem;
`;
const LeftTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  padding: 2rem 0;
  color: #3a3a3a;
`;
const LeftDesc = styled.p`
  font-size: 20px;
  color: #555;
  padding-bottom: 1rem;
  line-height: 1.5;
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
`;
const Right = styled.div`
  flex: 1;
  margin: 3rem;
`;
const RightTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding: 2rem 0;
  margin-left: 1rem;
  color: #3a3a3a;
`;
const RightSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: #ededed;
`;
const AboutMe = () => {
  return (
    <AboutMeConatiner>
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

            <LeftButton>CONTACT</LeftButton>
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
