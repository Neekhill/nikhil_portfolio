import React from "react";
import styled from "styled-components";
import { largeMobile, mobile, tablet, tabletPlus } from "../responsive";
const ProjectContainer = styled.div`
  display: flex;
  margin: 2rem;
  padding: 1.5rem 0rem 1.5rem 1.5rem;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  ${tabletPlus({ flexDirection: "column", height: "55vh" })}
  ${tablet({ padding: "10px", margin: "30px 0", height: "70vh" })}
  ${largeMobile({ height: "85vh" })}
  ${mobile({ height: "80vh" })}
`;
const ProjectLeft = styled.div`
  flex: 1;
  width: 50%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  ${tabletPlus({
    width: "93%",
    height: "50vh",
    overflow: "hidden",
  })}
`;
const BrowserBar = styled.div`
  height: 30px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;
const BrowserCircle = styled.div`
  width: 12px;
  height: 12px;
  margin: 5px;
  border-radius: 50%;
  background-color: white;
`;
const ProjectImage = styled.img`
  width: 100%;
  transition: all 10s ease;
  &:hover {
    transform: translateY(-50%);
  }
`;
const ProjectRight = styled.div`
  flex: 1;
  margin: 20px 10px;
  padding: 0 2rem;
  ${tabletPlus({ padding: "10px", margin: "10px" })}
`;
const ProjectTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 2rem;
  color: #3a3a3a;
  ${mobile({ fontSize: "20px", paddingBottom: "10px" })}
  ${largeMobile({ fontSize: "25px", paddingBottom: "10px" })}
`;
const ProjectDesc = styled.div`
  font-size: 18px;
  color: #555;
  padding-bottom: 1rem;
  line-height: 1.5;
  ${mobile({ fontSize: "16px", paddingBottom: "10px" })}
`;
const Bold = styled.b``;
const ProjectButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  background-color: black;
  color: #fff;
  border: none;
  margin-top: 50px;
  margin-right: 10px;
  ${mobile({ padding: "4px 8px", fontSize: "16px", marginTop: "20px" })}
`;

const Project = ({ img, link }) => {
  return (
    <ProjectContainer>
      <ProjectLeft>
        <BrowserBar>
          <BrowserCircle></BrowserCircle>
          <BrowserCircle></BrowserCircle>
          <BrowserCircle></BrowserCircle>
        </BrowserBar>
        <ProjectImage src={img}></ProjectImage>
      </ProjectLeft>
      <ProjectRight>
        <ProjectTitle>NIKHILL.</ProjectTitle>
        <ProjectDesc>
          Developed an eCommerce application using <Bold>MERN</Bold> stack that
          allows users to buy apparels. Integrated <Bold>RazorPay API</Bold> for
          payments. Incorporated <Bold>Redux Toolkit</Bold> for state management
          and utilized nodejs and mongoDB for backend
        </ProjectDesc>

        <ProjectButton>Live Link</ProjectButton>
        <ProjectButton>Source Code</ProjectButton>
      </ProjectRight>
    </ProjectContainer>
  );
};

export default Project;
