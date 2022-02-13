import styled from "styled-components";
import nikhil from "../assets/nikhil.jpeg";

const Container = styled.div`
  height: 60px;
  background-color: #fff;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={nikhil}></Image>
          <Logo>NIKHIL YADAV</Logo>
        </Left>
        <Right>
          <MenuItem>HOME</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>PROJECTS</MenuItem>
          <MenuItem>CONTACT</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
