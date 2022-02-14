import styled from "styled-components";
import nikhil from "../assets/nikhil.jpeg";
import { largeMobile, mobile, tablet } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

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
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
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
            <Link
              to="#home"
              smooth
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>HOME</MenuItem>
            </Link>

            <Link
              to="#about"
              smooth
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>ABOUT</MenuItem>
            </Link>

            <Link
              to="#projects"
              smooth
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>PROJECTS</MenuItem>
            </Link>

            <Link
              to="#contact"
              smooth
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>CONTACT</MenuItem>
            </Link>
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
              <Link
                to="#home"
                smooth
                style={{ textDecoration: "none", color: "black" }}
              >
                <DDMenuItem>HOME</DDMenuItem>
              </Link>
              <Link
                to="#about"
                smooth
                style={{ textDecoration: "none", color: "black" }}
              >
                <DDMenuItem>ABOUT</DDMenuItem>
              </Link>
              <Link
                to="#projects"
                smooth
                style={{ textDecoration: "none", color: "black" }}
              >
                <DDMenuItem>PROJECTS</DDMenuItem>
              </Link>
              <Link
                to="#contact"
                smooth
                style={{ textDecoration: "none", color: "black" }}
              >
                <DDMenuItem>CONTACT</DDMenuItem>
              </Link>
            </DropDownMenu>
          )}
        </WrapperSmall>
      </ContainerSmall>
    </>
  );
};

export default Navbar;
