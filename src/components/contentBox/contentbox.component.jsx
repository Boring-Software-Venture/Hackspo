import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme.context";
import { CountDownContext } from "../../contexts/countdown.context";
import { DimensionContext } from "../../contexts/dimensions.context";

import DateIconLight from "../../assets/calendarIcon.png";
import DateIconDark from "../../assets/calendarIconDark.png";

const FloatingBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  width: ${(props) => (props.width > 500 ? "63vw" : "90%")};
  height: ${(props) => (props.width > 500 ? "62.64vh" : "60vh")};
  left: ${(props) => (props.width > 500 ? "17vw" : "3vw")};
  top: ${(props) => (props.width > 500 ? "23.5vh" : "20vh")};
  justify-content: center;

  background: ${(props) =>
    props.darkTheme ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.65)"};
  border: 6px solid #9fffea;
  backdrop-filter: blur(15px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
`;
const HeadTextBox = styled.div`
  display: flex;
  margin-bottom: 3vh;
  align-self: center;
  font-family: Dosis;
  font-style: normal;
  font-weight: bold;
  font-size: calc((5.5vw + 3.5vh + 0.5vmin));
  line-height: 128.19%;
  /* or 185px */

  display: flex;
  align-items: center;

  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "#484848")};
`;
const ColorText = styled.div`
  background-image: linear-gradient(94.49deg, #6ae3ff 2.58%, #62f7d6 97.25%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
const DateContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const DateIcon = styled.img`
  margin-top: ${(props) => (props.width > 500 ? "2vh" : "0vh")};
  margin-bottom: 3vh;
  width: ${(props) => (props.width > 500 ? "4vw" : "10vw")};
  height: ${(props) => (props.width > 500 ? "7vh" : "6vh")};
`;
const DateText = styled.div`
  font-family: Dosis;
  font-style: normal;
  font-weight: bold;
  font-size: calc((3vw + 2vh + 0.5vmin));
  line-height: 128.19%;
  /* identical to box height, or 82px */

  display: flex;
  align-items: center;
  padding-left: 3vw;
  margin-bottom: 3vh;
  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "#484848")};
`;
const TimeContainer = styled.div`
  font-family: Dosis;
  font-style: normal;
  font-weight: bold;
  align-self: center;
  font-size: calc((3.2vw + 2.2vh + 0.5vmin));
  line-height: 128.19%;
  /* or 92px */

  display: flex;
  align-items: center;
  margin-bottom: 3vh;

  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "#484848")};
`;
const SmallText = styled.div`
  font-size: calc((2vw + 1.5vh + 0.5vmin));
  margin-top: 1vh;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const GradiantButton = styled.button`
  width: ${(props) => (props.width > 500 ? "16vw" : "30vw")};
  height: ${(props) => (props.width > 500 ? "9vh" : "6.3vh")};
  display: flex;
  margin-left: 2vw;
  margin-right: 2vw;
  justify-content: center;
  background: linear-gradient(94.49deg, #6ae3ff 2.58%, #62f7d6 97.25%);
  margin-bottom: 4vh;
  border-radius: 1.5vw;
`;
const ButtonText = styled.div`
  font-family: Dosis;
  font-style: normal;
  font-weight: 600;
  font-size: calc((2.2vw + 1.2vh + 0.5vmin));
  line-height: 128.19%;

  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  align-items: center;
  vertical-align: middle;
  color: #ffffff;
`;

export const ContentBox = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { days, hours, minutes, seconds } = useContext(CountDownContext);
  const { windowDimensions } = useContext(DimensionContext);
  return (
    <FloatingBox darkTheme={darkTheme} width={windowDimensions.width}>
      <HeadTextBox darkTheme={darkTheme}>
        Hackspo&nbsp;<ColorText>2022</ColorText>
      </HeadTextBox>
      <DateContainer>
        {darkTheme ? (
          <DateIcon
            width={windowDimensions.width}
            src={DateIconDark}
            alt="Dark Date Icon"
          />
        ) : (
          <DateIcon
            width={windowDimensions.width}
            src={DateIconLight}
            alt="Light Date Icon"
          />
        )}
        <DateText darkTheme={darkTheme}>Jan 6th, 7th, 8th</DateText>
      </DateContainer>
      <TimeContainer darkTheme={darkTheme}>
        {days}
        <SmallText>days&nbsp;</SmallText>
        {hours}
        <SmallText>hours&nbsp;</SmallText>
        {minutes}
        <SmallText>mins&nbsp;</SmallText>
        {seconds}
        <SmallText>secs</SmallText>
      </TimeContainer>
      <ButtonContainer>
        <GradiantButton width={windowDimensions.width}>
          <ButtonText>Register</ButtonText>
        </GradiantButton>
        <GradiantButton width={windowDimensions.width}>
          <ButtonText>Discord</ButtonText>
        </GradiantButton>
      </ButtonContainer>
    </FloatingBox>
  );
};
