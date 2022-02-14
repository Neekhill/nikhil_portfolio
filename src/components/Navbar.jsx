import styled from "styled-components";
import nikhil from "../assets/nikhil.jpeg";
import { largeMobile, mobile, tablet } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
  background-color: #fff;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
  ${tablet({ display: "none" })}
  ${mobile({ height: "30px", display: "hidden" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${largeMobile({ padding: "5px 10px" })}
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
  ${largeMobile({ height: "30px", width: "30px", marginRight: "10px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${largeMobile({ fontSize: "25px" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${largeMobile({ marginLeft: "15px", fontSize: "12px" })}
`;

const ContainerSmall = styled.div`
  padding: 10px;

  display: none;
  ${tablet({ display: "block" })}
`;
const WrapperSmall = styled.div`
  margin-top: 10px;
`;
const MainMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DropDownMenu = styled.div`
  margin-top: 20px;
`;
const DDMenuItem = styled.div`
  height: 30px;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  color: balck;
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
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
      <ContainerSmall>
        <WrapperSmall>
          <MainMenu>
            <Left>
              <Image src={nikhil}></Image>
              <Logo>NIKHIL YADAV</Logo>
            </Left>
            <Right>
              <MenuItem onClick={handleClick}>
                <MenuIcon></MenuIcon>
              </MenuItem>
            </Right>
          </MainMenu>
          {showMenu && (
            <DropDownMenu>
              <DDMenuItem>HOME</DDMenuItem>
              <DDMenuItem>ABOUT</DDMenuItem>
              <DDMenuItem>PROJECTS</DDMenuItem>
              <DDMenuItem>CONTACT</DDMenuItem>
            </DropDownMenu>
          )}
        </WrapperSmall>
      </ContainerSmall>
    </>
  );
};

export default Navbar;
