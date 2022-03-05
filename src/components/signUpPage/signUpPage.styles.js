import styled from "styled-components";

import mobileBg from "../../assets/about-background.png";
import desktopBg from "../../assets/about-background.png";

const StyledSignUpPage = styled.section`
  width: 100vw;
  height: calc(100vh - 6rem);
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  position: relative;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
  }
  & .vr-headset {
    position: absolute;
    top: 5%;
    left: 20%;
    width: 60%;
    top: 5%;
    left: 50%;
    transform: translateX(-40%);
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      width: 30%;
      top: 5%;
      left: 20%;
      width: 30%;
      transform: translateX(0);
    }
    & img {
      width: 100%;
    }
  }
  & h1 {
    position: absolute;
    top: 50%;
    left: -20%;
    color: white;
    letter-spacing: 0.5;
    font-size: clamp(4rem, 5vw, 8rem);
    padding-right: 40%;
    line-height: 1;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
  }
`;

export default StyledSignUpPage;
