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
      #0b0c19 33%,
      transparent 100%
    );
  }
  & .panelTop {
    top: 0;
    margin-bottom: 10vh;
    background: ${(p) => p.theme.mainColors.primaryColor};
    border-radius: 100%;
    height: 30vw;
    width: 30vw;
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: -3px 3px 8px 4px rgba(0, 0, 0, 0.25);
    background: @media (min-width: ${(props) => props.theme.media.tablet}) {
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
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      position: absolute;
      top: calc(260px + 14rem);
      left: 0;
      grid-column: 1 / span 5;
      margin-bottom: 0;
      text-align: left;
    }
    & h2 {
      color: ${(p) => p.theme.mainColors.offWhite};
      margin-bottom: 2rem;
      text-shadow: 1px 1px 8px ${(p) => p.theme.mainColors.secondaryColor};
      padding-right: 8rem;
    }
    & p {
      color: ${(p) => p.theme.mainColors.secondaryColor};
      width: 90%;
      @media (max-width: ${(props) => props.theme.media.desktop}) {
        width: 60%;
        margin: 0 auto;
      }
    }
  }
`;

export default StyledAbout;
