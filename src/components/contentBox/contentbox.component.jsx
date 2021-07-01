import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/theme.context";
import { CountDownContext } from "../../contexts/countdown.context";

import DateIconLight from "../../assets/calendarIcon.png";
import DateIconDark from "../../assets/calendarIconDark.png";

export const ContentBox = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { days, hours, minutes, seconds } = useContext(CountDownContext);
  const FloatingBox = styled.div`
    position: absolute;
    display: flex;
    flex-flow: column;
    width: 63vw;
    height: 62.64vh;
    left: 17vw;
    top: 23.5vh;
    justify-content: center;

    background: ${darkTheme
      ? "rgba(0, 0, 0, 0.3)"
      : "rgba(255, 255, 255, 0.65)"};
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

    color: ${darkTheme ? "#FFFFFF" : "#484848"};
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
    margin-top: 2vh;
    margin-bottom: 3vh;
    width: 4vw;
    height: 7vh;
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
    color: ${darkTheme ? "#FFFFFF" : "#484848"};
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

    color: ${darkTheme ? "#FFFFFF" : "#484848"};
  `;
  const SmallText = styled.div`
    font-size: calc((2vw + 1.5vh + 0.5vmin));
    margin-top: 2vh;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
  `;
  const GradiantButton = styled.button`
    width: 16vw;
    display: flex;
    margin-left: 2vw;
    margin-right: 2vw;
    justify-content: center;
    height: 9vh;
    background: linear-gradient(94.49deg, #6ae3ff 2.58%, #62f7d6 97.25%);
    margin-bottom: 4vh;
    border-radius: 20px;
  `;
  const ButtonText = styled.div`
    font-family: Dosis;
    font-style: normal;
    font-weight: 600;
    font-size: calc((2.2vw + 1.2vh + 0.5vmin));
    line-height: 128.19%;
    /* identical to box height, or 62px */

    display: flex;
    align-items: center;
    color: #ffffff;
  `;
  return (
    <FloatingBox>
      <HeadTextBox>
        Hackspo&nbsp;<ColorText>2022</ColorText>
      </HeadTextBox>
      <DateContainer>
        {darkTheme ? (
          <DateIcon src={DateIconDark} alt="Dark Date Icon" />
        ) : (
          <DateIcon src={DateIconLight} alt="Light Date Icon" />
        )}
        <DateText>Jan 6th, 7th, 8th</DateText>
      </DateContainer>
      <TimeContainer>
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
        <GradiantButton>
          <ButtonText>Register</ButtonText>
        </GradiantButton>
        <GradiantButton>
          <ButtonText>Discord</ButtonText>
        </GradiantButton>
      </ButtonContainer>
    </FloatingBox>
  );
};
