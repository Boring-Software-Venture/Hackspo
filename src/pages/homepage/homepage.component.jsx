import React, { useContext } from "react";
import styled from "styled-components";

import { Menu, MobileMenu } from "../../components/menu/menu.component";
import { ContentBox } from "../../components/contentBox/contentbox.component";

import { ThemeContext } from "../../contexts/theme.context";
import { DimensionContext } from "../../contexts/dimensions.context";

import LightBackground from "../../assets/lightBackground.png";
import DarkBackground from "../../assets/darkBackground.png";

const HomepageContainer = styled.div`
  background-image: url("${(props) =>
    props.darkTheme ? DarkBackground : LightBackground}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Homepage = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { windowDimensions } = useContext(DimensionContext);
  return (
    <HomepageContainer darkTheme={darkTheme}>
      {windowDimensions.width > 665 ? <Menu /> : <MobileMenu />}
      <ContentBox></ContentBox>
    </HomepageContainer>
  );
};
