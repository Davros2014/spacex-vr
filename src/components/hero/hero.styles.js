import styled, { keyframes } from "styled-components";

import mobileBg from "../../assets/background-home-desktop1.jpg";
import desktopBg from "../../assets/background-home-desktop1.jpg";

const pulse = keyframes`
 0% { transform: scale(1);}
 50% { transform: scale(1.2);}
 100% { transform: scale(1);}
`;

const StyledHero = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
  }
  & .panelLeft {
    top: 0;
    margin-bottom: 10vh;
    @media (min-width: ${(props) => props.theme.media.tablet}) {
      margin-top: 6rem;
    }
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      position: absolute;
      top: calc(260px + 14rem);
      left: 0;
      grid-column: 1 / span 5;
      margin-bottom: 0;
      text-align: left;
    }
    h5 {
      margin-bottom: 5.5rem;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        margin-bottom: 7.5rem;
      }
    }
    h1 {
      margin-bottom: 6rem;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        margin-bottom: 7.5rem;
        font-size: 15rem;
      }
    }
    p {
      width: 90%;
      @media (max-width: ${(props) => props.theme.media.desktop}) {
        width: 60%;
        margin: 0 auto;
      }
    }
  }
  & a {
    top: 0;
    background: white;
    width: clamp(150px, 50vw, 274px);
    height: clamp(150px, 50vw, 274px);
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    transform: scale(1);
    transition: ${(props) => props.theme.effects.fastTransition};
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    z-index: 500;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      top: 360px;
      margin-top: 0;
      grid-column: 10 / span 3;
    }
    // &:hover {
    //    animation: 1s ${pulse} infinite cubic-bezier(0.66, 0, 0, 1);
    // }
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      z-index: 1;
      cursor: pointer;
      pointer-events: normal;
    }
    &:hover::after,
    &:hover::before {
      transition: ${(props) => props.theme.effects.mediumTransition};
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      transform: translate(-50%, -50%) scale(1.5);
      z-index: -1;
    }
    &:hover::before {
      transition: 0.3s transform ease-in-out;
      background: rgba(255, 255, 255, 0.1);
      transition-delay: 0.35s;
    }
    & h4 {
      color: ${(props) => props.theme.mainColors.primaryBlue};
      font-weight: 400;
      transition: ${(props) => props.theme.effects.mediumTransition};
    }
    &:hover > h4 {
      transition: ${(props) => props.theme.effects.mediumTransition};
      animation: 2s ${pulse} infinite ease-in-out;
    }
  }
`;

export default StyledHero;
