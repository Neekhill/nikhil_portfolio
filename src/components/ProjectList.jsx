import React from "react";
import Project from "./Project";
import { projects } from "../data";
import styled from "styled-components";

const ProjectListContainer = styled.div`
  margin-top: 5rem;
`;
const PLTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const PLTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  padding: 1rem 2rem;
  color: #3a3a3a;
`;
const PLDesc = styled.div`
  font-size: 20px;
  color: #555;
  max-width: 60rem;
  line-height: 1.5rem;
  text-align: center;

  margin: 0 auto;
`;
const PLBottom = styled.div`
  margin-top: 5rem;
  padding: 2rem;
`;

const ProjectList = () => {
  return (
    <ProjectListContainer>
      <PLTop>
        <PLTitle>PROJECTS</PLTitle>
        <PLDesc>
          Here you will find some of the personal and clients projects that I
          created with each project containing its live link and source code
          link
        </PLDesc>
      </PLTop>
      <PLBottom>
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </PLBottom>
    </ProjectListContainer>
  );
};

export default ProjectList;
