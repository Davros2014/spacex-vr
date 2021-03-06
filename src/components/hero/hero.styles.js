import styled, { keyframes } from "styled-components";

import mobileBg from "../../assets/background-home-desktop1.jpg";
import desktopBg from "../../assets/background-home-desktop1.jpg";

const pulse = keyframes`
 0% { transform: scale(1);}
 5% { transform: scale(1.1);}
 10% { transform: scale(1);}
 15% { transform: scale(1.1);}
 20% { transform: scale(1);}
 25% { transform: scale(1.1);}
 30% { transform: scale(1);}
 35% { transform: scale(1.1);}
 40% { transform: scale(1);}
 100% { transform: scale(1);}
`;
const foldOut = keyframes`
 0% { line-height: 0.2; opacity: 0;}
 100% { line-height: 1; opacity: 1;}
`;
const fadeInOut = keyframes`
 0% { opacity: 0.4; transform: scale(0.9); left: -5%; top: 64%;}
 50% { opacity: 1; transform: scale(1); left: 0%; top: 60%;}
 100% { opacity: 0.4; transform: scale(0.9); left: -5%; top: 64%;}
`;

const StyledHero = styled.section`
  width: 100vw;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  // min-height: 100vh;
  padding-top: 15vh;
  // border: 2px solid green;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
    height: 100vh;
    padding: 0;
  }
  & .astronaut {
    position: absolute;
    left: -2%;
    top: 80%;
    opacity: 1;
    width: 30%;
    z-index: 4000;
    // display: none;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      animation: 20s ${fadeInOut} infinite ease-in-out;
      top: 60%;
      width: 30%;
    }
  }
  & .panelLeft {
    top: 40%;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      position: absolute;
      top: 40%;
      left: 0;
      transform: translateY(-50%);
      grid-column: 1 / span 7;
      margin-bottom: 0;
    }
    & h3 {
      margin: 0 auto;
      margin-bottom: 3rem;
      line-height: 1.15;
      padding: 0 3rem;
      font-size: clamp(2rem, 3vw, 3rem);
      background-color: ${(props) => props.theme.mainColors.primaryColor};
      background-image: linear-gradient(45deg, #f3ec78, #af4261);
      background-clip: text;
      background-size: 100%;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        text-align: left;
        margin-bottom: 3.5rem;
        padding: 0 30% 0 0;
      }
    }
    & h1 {
      margin-bottom: 0;
      line-height: 0.2;
      animation: 0.25s ${foldOut} forwards ease-in-out;
      padding: 0 4rem;
      font-size: calc(4.5rem + 1vw);
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        padding: 0;
        margin-bottom: 7.5rem;
        font-size: clamp(8rem, 5vw, 12rem);
      }
      & span {
        color: ${(props) => props.theme.mainColors.primaryColor};
      }
    }
    & p {
      width: 90%;
      @media (max-width: ${(props) => props.theme.media.desktop}) {
        width: 60%;
        margin: 0 auto;
      }
    }
  }
  & .panelRight {
    position: relative;
    width: 90vw;
    margin: 0 auto;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      width: 100%;
      grid-column: 6 / span 6;
      grid-row: 8 / span 2;
    }
    & h5 {
      margin-top: 4rem;
      color: white;
      text-align: center;
      letter-spacing: 0.025rem;
      display: block;
      position: relative;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        text-align: left;
      }
      & span {
        color: ${(props) => props.theme.mainColors.primaryColor};
      }
    }
    & button {
      margin: 0 auto;
      margin-top: 5rem;
      padding: 5rem;
      animation: 10s ${pulse} infinite ease-in-out;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        margin: 0;
        margin-top: 5rem;
      }
    }
    & button > a {
      color: white;
      font-weight: 700;
      text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default StyledHero;
