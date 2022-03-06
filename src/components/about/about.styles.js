import styled from "styled-components";
import moon from "../../assets/moon.png";

const StyledAbout = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: ${(p) => p.theme.mainColors.primaryColor};
  background-position: center center;
  position: relative;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    height: 100vh;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      #0b0c19 0%,
      #0b0c19 10%,
      transparent 100%
    );
  }
  & .aboutBtn {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    padding: 5rem;
    background: ${(p) => p.theme.mainColors.secondaryColor};
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.5;
      border-radius: 50%;
      background: linear-gradient(
        45deg,
        ${(p) => p.theme.mainColors.secondaryColor} 0%,
        ${(p) => p.theme.mainColors.primaryColor} 100%,
        transparent 100%
      );
    }
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      margin: 0;
      margin-top: 5rem;
    }
    & a {
      color: white;
      font-weight: 700;
      text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    }
  }
  & .midPanel {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: auto;
    transform: translate(-50%, -50%);
    & .bigCircleBG {
      position: absolute;
      left: 50%;
      top: 50%;
      background-size: cover;
      background-image: url(${moon});
      background-position: center center;
      background-size: cover;
      border-radius: 50%;
      padding: 3rem;
      width: 90vw;
      aspect-ratio: 1 / 1;
      height: aspect-ratio;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transform: translate(-50%, -50%);
      z-index: -1;
      box-shadow: -3px 3px 8px 8px rgba(0, 0, 0, 0.25);
      @media (min-width: ${(props) => props.theme.media.tablet}) {
        height: 50vw;
      }
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        width: 30vw;
      }
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.8;
        border-radius: 50%;
        background: linear-gradient(
          45deg,
          ${(p) => p.theme.mainColors.secondaryColor} 40%,
          ${(p) => p.theme.mainColors.primaryColor} 100%,
          transparent 100%
        );
      }
      & h2 {
        color: ${(props) => props.theme.mainColors.offWhite};
        font-size: clamp(3.2rem, 2.5vw, 4.2rem);
        margin-bottom: 2rem;
        z-index: 3;
        text-shadow: 1px 1px 6px ${(p) => p.theme.mainColors.secondaryColor};
      }
      & p {
        color: ${(props) => props.theme.mainColors.offWhite};
        z-index: 3;
        font-weight: 700;
        padding: 0 1rem;
        & span {
          color: ${(p) => p.theme.mainColors.secondaryColor};
          font-weight: 900;
          color: #ddbf73;
        }
      }
    }
  }
  & .mainPanel {
    height: 25vw;
    width: 25vw;
    padding: 3rem;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      position: absolute;
      top: 10%;
      right: 0;
      margin-bottom: 0;
      text-align: left;
    }
    & .circleBG {
      position: relative;
      height: 50%;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: ${(p) => p.theme.mainColors.primaryColor};
      border-radius: 100%;
      box-shadow: -3px 3px 8px 4px rgba(0, 0, 0, 0.25);
      @media (min-width: ${(props) => props.theme.media.tablet}) {
        margin-top: 6rem;
      }
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 100%;
        background: linear-gradient(
          45deg,
          ${(p) => p.theme.mainColors.secondaryColor} 0%,
          ${(p) => p.theme.mainColors.primaryColor} 100%,
          transparent 100%
        );
      }
    }
    & .textContainer {
      position: absolute;
      top: 5%;
      left: 10%;
      & h2 {
        position: relative;
        color: ${(p) => p.theme.mainColors.offWhite};
        left: -20%;
        text-shadow: 1px 1px 8px ${(p) => p.theme.mainColors.secondaryColor};
        padding-right: 2rem;
        font-size: clamp(3.2rem, 2.5vw, 4.2rem);
        margin-top: 10%;
        line-height: 1.05;
      }
      & .infoTextBody {
        position: relative;
        color: ${(p) => p.theme.mainColors.offWhite};
        font-weight: 700;
        background: linear-gradient(
          180deg,
          ${(p) => p.theme.mainColors.secondaryColor} 20%,
          ${(p) => p.theme.mainColors.primaryColor} 160%
        );
        padding: 3rem;
        border-radius: 8px;
        box-shadow: -3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        @media (min-width: ${(props) => props.theme.media.desktop}) {
          margin-left: 5rem;
        }
      }
    }
  }
  & .mainPanel#bottomPanel {
    position: absolute;
    left: 0;
    border: 3px solid green;
    & .textContainer {
      top: 5%;
      left: 0%;
    }
  }
`;

export default StyledAbout;
