import styled from "styled-components";

import mobileBg from "../../assets/about-background.png";
import desktopBg from "../../assets/about-background.png";

const StyledSignUpPage = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  position: relative;
  // border: 2px solid red;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
    height: 100vh;
  }
  & .vr-headset {
    position: relative;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 60%;
    transform: translateX(10%);
    margin-bottom: 6rem;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      position: absolute;
      width: 30%;
      top: 7%;
      left: 16%;
      width: 30%;
      transform: translateX(0);
    }
    & img {
      width: 100%;
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
  }
`;

export default StyledSignUpPage;
