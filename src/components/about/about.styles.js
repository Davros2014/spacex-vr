import styled from "styled-components";

const StyledAbout = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.mainColors.primaryColor};
  background-position: center center;
  position: relative;
  background-size: cover;
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
  & .mainPanel {
    height: 25vw;
    width: 25vw;
    padding: 3rem;
    // border: 1px solid red;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      position: absolute;
      top: 10%;
      right: 0;
      // grid-column: 1 / span 5;
      margin-bottom: 0;
      text-align: left;
    }
    &#midPanel {
      left: 0;
      top: 30%;
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
          to top,
          rgba(0, 0, 0, 0.25) 0%,
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
        margin-bottom: 2rem;
        left: -20%;
        text-shadow: 1px 1px 8px ${(p) => p.theme.mainColors.secondaryColor};
        padding-right: 4rem;
        font-size: clamp(3.2rem, 2.5vw, 4.2rem);
        margin-top: 10%;
        line-height: 1.05;
      }
      & .infoTextBody {
        position: relative;
        margin-left: 15rem;
        color: ${(p) => p.theme.mainColors.offWhite};
        font-weight: 700;
        text-shadow: 1px 1px 4px ${(p) => p.theme.mainColors.secondaryColor};
        background: linear-gradient(
          45deg,
          to top,
          ${(p) => p.theme.mainColors.secondaryColor} 30%,
          ${(p) => p.theme.mainColors.primaryColor} 100%
        );
        background: rgba(255, 255, 255, 0.05);
        padding: 3rem;
        border-radius: 8px;
        box-shadow: -3px 3px 8px 4px rgba(0, 0, 0, 0.25);

        @media (min-width: ${(props) => props.theme.media.desktop}) {
          margin-left: 5rem;
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
          border-radius: 8px;
          opacity: 0.5;
        }
      }
    }
  }
`;

export default StyledAbout;
