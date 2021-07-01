import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme.context";
import LightLogo from "../../assets/lightLogo.png";

export const Menu = () => {
  const { darkTheme } = useContext(ThemeContext);
  const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 67.708vw;
    height: 13.636vh;
    left: 15vw;
    top: -9px;

    justify-content: center;

    background: ${darkTheme
      ? "rgba(0, 0, 0, 0.3)"
      : "rgba(255, 255, 255, 0.65)"};
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
    color: ${darkTheme ? "#FFFFFF" : "#484848"};
  `;
  return (
    <MenuContainer>
      <MenuObjects to="/">
        <LogoBoxH>
          {darkTheme ? (
            <LogoImg src={LightLogo} alt="logorec" />
          ) : (
            <LogoImg src={LightLogo} alt="logorec" />
          )}
        </LogoBoxH>
      </MenuObjects>
      <MenuObjects to="/">Home</MenuObjects>
      <MenuObjects to="/">About</MenuObjects>
      <MenuObjects to="/">Sponsors</MenuObjects>
      <MenuObjects to="/">FAQ</MenuObjects>
      <MenuObjects to="/">Schedule</MenuObjects>
    </MenuContainer>
  );
};
