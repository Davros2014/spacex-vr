import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: content;
  margin-top: auto;
  z-index: 5;
  min-height: 20vh;
  padding: 5vh 5vw;
  width: 100vw;
  margin: 0 auto;
  border-top: 1px solid ${(props) => props.theme.mainColors.lightLineColor};
  color: ${(props) => props.theme.mainColors.footerText};
  background: ${(props) => props.theme.mainColors.veryDarkGrey};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      black 25%,
      rgba(0, 0, 0, 0.6) 50%
    );
    opacity: 0.5;
    mix-blend-mode: multiply;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .footerWrapper {
    min-height: 10rem;
    width: 80vw;
    margin: 0 auto;
    & h4 {
      color: ${(p) => p.theme.mainColors.primaryColor};
      width: 100%;
      margin: 3rem 0;
      font-size: clamp(1.6rem, 1.25vw, 1.8rem);
      line-height: 1.6;
      letter-spacing: 0.25;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        max-width: 60%;
      }
    }
    & .contactsContainer {
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(4, 1fr);
      line-height: 1.5;
      border-top: 1px solid ${(props) => props.theme.mainColors.lightLineColor};
      border-bottom: 1px solid
        ${(props) => props.theme.mainColors.lightLineColor};
      padding: 2rem 0;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        display: grid;
      }
      & .contactsItem {
        grid-area: 1 / span 1;
        & h6 {
          color: white;
          text-transform: uppercase;
          margin-left: 0;
          font-weight: 700;
          margin-bottom: 0;
          font-size: clamp(1.1rem, 1.15vw, 1.25rem);
          letter-spacing: 1.75;
          @media (min-width: ${(props) => props.theme.media.desktop}) {
            margin-bottom: 1rem;
          }
        }
        & ul {
          & li {
            line-height: 1.5;
            & a {
              position: relative;
              color: rgba(255, 255, 255, 0.75);
              font-size: clamp(1rem, 1.25vw, 1.25rem);
              margin-bottom: 3rem;
              @media (min-width: ${(props) => props.theme.media.desktop}) {
                margin-bottom: 0;
              }
              &::after {
                cursor: pointer;
                content: "";
                position: absolute;
                top: 50%;
                left: -40px;
                right: 100%;
                bottom: 0;
                background: ${(p) => p.theme.mainColors.primaryColor};
                height: 3px;
                width: 10px;
                transform: translateY(-50%);
                opacity: 0;
              }
              &:hover {
                cursor: pointer;
                color: white;
                transition: ${(props) => props.theme.effects.fastTransition};
              }
              &:hover::after {
                opacity: 1;
                left: -20px;
                transition: ${(props) => props.theme.effects.fastTransition};
              }
            }
          }
        }
        & p {
          position: relative;
          color: rgba(255, 255, 255, 0.75);
          font-size: clamp(1rem, 1.25vw, 1.25rem);
          margin-bottom: 3rem;
          line-height: 1.5;
          @media (min-width: ${(props) => props.theme.media.desktop}) {
            margin-bottom: 0;
          }
        }
        & .inputContainer {
          background: ${(p) => p.theme.mainColors.lightLineColor};
          height: 3rem;
          border-radius: 50px;
          padding: 1rem 0.5rem 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          & .contactsInput {
            background: none;
            width: 90%;
            &::placeholder {
              color: white;
            }
            &:focus {
              color: ${(p) => p.theme.mainColors.primaryColor};
            }
          }
          & button {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
            font-size: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
            background: ${(p) => p.theme.mainColors.lightLineColor};
            &:hover {
              cursor: pointer;
              transition: ${(p) => p.theme.effects.fastTransition};
              background: ${(p) => p.theme.mainColors.primaryColor};
              color: black;
              font-weight: 700;
            }
          }
        }
      }
    }
    & .socialNav {
      margin: 4rem 0 2rem 0;
      display: flex;
      position: relative;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & svg {
        margin: 0;
      }
      & .socialList {
        display: flex;
        align-items: center;
        & svg {
          cursor: pointer;
          &:hover > path {
            transition: ${(p) => p.theme.effects.fastTransition};
            fill: ${(p) => p.theme.mainColors.primaryColor};
          }
        }
      }
      & h6 {
        position: relative;
        color: rgba(255, 255, 255, 0.75);
        font-size: clamp(0.8rem, 1.25vw, 1.1rem);
        font-weight: 400;
        line-height: 1.5;
        @media (min-width: ${(props) => props.theme.media.desktop}) {
          margin-bottom: 0;
        }

    }
  }
`;

export default StyledFooter;
