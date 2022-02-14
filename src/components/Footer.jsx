import {
  GitHub,
  Instagram,
  MailOutlined,
  Phone,
  Room,
} from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  background-color: black;
  color: white;
  ${tablet({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column", padding: "20px 5px" })}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;
const Logo = styled.h2``;
const Desc = styled.p`
  margin: 20px 0px;
  max-width: 350px;
`;
const Bold = styled.b``;
const SocialContainer = styled.div`
  display: flex;
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
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NIKHIL YADAV</Logo>
        <Desc>
          A <Bold>Software Engineer</Bold> building <Bold>Full Stack </Bold>
          Websites and Web Applications that leads to the success of the overall
          product.Check out some of my work in the
          <Bold> Projects</Bold> section.
        </Desc>
        <SocialContainer>
          <SocialIcon color="545353">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="0077b5">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 5,Westend Marg, Saidulajab,
          New Delhi-110030
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 8368757494
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "10px" }} />{" "}
          nikhilyadav331@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
