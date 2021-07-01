import React, { useContext } from "react";
import styled from "styled-components";

import { Menu } from "../../components/menu/menu.component";
import { ContentBox } from "../../components/contentBox/contentbox.component";

import { ThemeContext } from "../../contexts/theme.context";

import LightBackground from "../../assets/lightBackground.png";
import DarkBackground from "../../assets/darkBackground.png";

export const Homepage = () => {
  const { darkTheme } = useContext(ThemeContext);

  const HomepageContainer = styled.div`
    background-image: url("${darkTheme ? DarkBackground : LightBackground}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  `;
  return (
    <HomepageContainer>
      <Menu></Menu>
      <ContentBox></ContentBox>
    </HomepageContainer>
  );
};
