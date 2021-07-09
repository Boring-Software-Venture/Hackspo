import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme.context";
import LightLogo from "../../assets/lightLogo.png";
import DarkLogo from "../../assets/darkLogo.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 67.708vw;
  height: 13.636vh;
  left: 15vw;
  top: -9px;

  justify-content: center;

  background: ${(props) =>
    props.darkTheme ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.65)"};
  border: 2px solid #9fffea;
  box-sizing: border-box;
  backdrop-filter: blur(15px);

  border-radius: 0px 0px 15px 15px;
`;
const LogoBoxH = styled.div`
  position: absolute;
  width: 10vw;
  left: -0.0002vw;
  z-index: -1;
  margin-top: 2vh;
`;
const LogoImg = styled.img`
  width: 55%;
`;
const MenuObjects = styled(Link)`
  display: flex;
  font-family: Dosis;
  font-style: normal;
  font-weight: 600;
  font-size: calc((1.6vw + 1vh + 0.5vmin));
  line-height: 128.19%;
  align-items: center;
  text-align: center;
  margin-left: 4vw;
  text-decoration: none;
  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "#484848")};
`;
const MobileMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column wrap;
  background: ${(props) =>
    props.darkTheme ? "rgba(0, 0, 0, 0.35);" : "rgba(255, 255, 255, 0.65)"};
  border: 1px solid #9fffea;
  box-sizing: border-box;
  backdrop-filter: blur(15px);
  border-radius: 0px 0px 5px 5px;
  position: relative;
  top: -9px;
  width: 100%;
  justify-content: center;
  z-index: 1;
`;
const MobileMenuObject = styled(Link)`
  display: flex;
  font-family: Dosis;
  font-style: normal;
  font-weight: 600;
  font-size: calc((1.6vw + 1vh + 0.5vmin));
  line-height: 128.19%;
  align-items: center;
  text-align: center;
  margin-left: 4vw;
  text-decoration: none;
  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "#484848")};
`;
const MenuAndLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const MobileLogoBox = styled.div`
  width: 20vw;
  position: relative;
  z-index: -1;
  margin-top: 2vh;
  left: -2vw;
`;
const HamburgerMenu = styled.nav`
  position: relative;
`;

const NavButton = styled.div`
  display: flex;
  background: transparent;
  position: absolute;
  width: 6vw;
  left: -35vw;
  margin-top: 2vh;
`;
const MenuItemContainer = styled.div``;
const MenuItems = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "#484848")};
  font-size: calc((1.5vw + 1.5vh + 0.5vmin));
  margin-bottom: 1.5vh;
  text-decoration: none;
  font-family: Dosis;
  font-style: normal;
  font-weight: 600;
`;
export const Menu = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <MenuContainer darkTheme={darkTheme}>
      <MenuObjects darkTheme={darkTheme} to="/">
        <LogoBoxH>
          {darkTheme ? (
            <LogoImg src={DarkLogo} alt="logorec" />
          ) : (
            <LogoImg src={LightLogo} alt="logorec" />
          )}
        </LogoBoxH>
      </MenuObjects>
      <MenuObjects darkTheme={darkTheme} to="/">
        Home
      </MenuObjects>
      <MenuObjects darkTheme={darkTheme} to="/">
        About
      </MenuObjects>
      <MenuObjects darkTheme={darkTheme} to="/">
        Sponsors
      </MenuObjects>
      <MenuObjects darkTheme={darkTheme} to="/">
        FAQ
      </MenuObjects>
      <MenuObjects darkTheme={darkTheme} to="/">
        Schedule
      </MenuObjects>
    </MenuContainer>
  );
};

export const MobileMenu = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <MobileMenuContainer darkTheme={darkTheme}>
      <MenuAndLogo>
        <HamburgerMenu>
          <NavButton
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {navOpen ? (
              darkTheme ? (
                <MdClose
                  style={{
                    color: "white",
                    width: "40px",
                    height: "40px",
                    background: "transparent",
                  }}
                />
              ) : (
                <MdClose
                  style={{
                    color: "black",
                    width: "40px",
                    height: "40px",
                    background: "transparent",
                  }}
                />
              )
            ) : darkTheme ? (
              <FiMenu
                style={{
                  color: "white",
                  width: "40px",
                  height: "40px",
                  background: "transparent",
                }}
              />
            ) : (
              <FiMenu
                style={{
                  color: "black",
                  width: "40px",
                  height: "40px",
                  background: "transparent",
                }}
              />
            )}
          </NavButton>
        </HamburgerMenu>
        <MobileMenuObject>
          <MobileLogoBox>
            {darkTheme ? (
              <LogoImg src={DarkLogo} alt="logorec" />
            ) : (
              <LogoImg src={LightLogo} alt="logorec" />
            )}
          </MobileLogoBox>
        </MobileMenuObject>
      </MenuAndLogo>
      {navOpen ? (
        <MenuItemContainer>
          <MenuItems darkTheme={darkTheme} to="/">
            Menu
          </MenuItems>
          <MenuItems darkTheme={darkTheme} to="/">
            About
          </MenuItems>
          <MenuItems darkTheme={darkTheme} to="/">
            Sponsors
          </MenuItems>
          <MenuItems darkTheme={darkTheme} to="/">
            FAQ
          </MenuItems>
          <MenuItems darkTheme={darkTheme} to="/">
            Schedule
          </MenuItems>
        </MenuItemContainer>
      ) : null}
    </MobileMenuContainer>
  );
};
