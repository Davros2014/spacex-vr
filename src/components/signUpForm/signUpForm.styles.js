import styled from "styled-components";

const StyledSignUpForm = styled.form`
  height: auto;
  box-shadow: ${(props) => props.theme.effects.authBoxShadow};
  border-radius: 4px;
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 1000;
  width: 90vw;
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.fonts.primaryTextColor};
  background: rgba(0, 0, 0, 0.5);
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: 30vw;
  }
  & h5 {
    color: ${(props) => props.theme.mainColors.primaryColor};
    padding: 0 4rem;
  }
  & input {
    border: none;
    background: rgba(255, 255, 255, 0.15);
    font-size: 1.6rem;
    border-radius: 3px;
    margin-top: 1.4rem;
    transition: ${(props) => props.theme.effects.fastTransition};
    padding: 2rem 1rem 2rem 2rem;
    opacity: 1;
    width: 1px;
    height: 1px;
    font-family: ${(props) => props.theme.fonts.mainFont};
    overflow: hidden;
    width: 100%;
    &:focus {
      border: none;
      color: inherit;
      background: rgba(76, 76, 76, 0.8);
      outline: none;
    }
    &:focus-within {
      color: ${(props) => props.theme.mainColors.lightAccentColor};
      color: ${(props) => props.theme.mainColors.primaryColor};
      color: #56ec8c;
      font-weight: 700;
    }
    &:focus::placeholder {
      color: white;
    }
    &[type="submit"]:hover {
      color: #fff;
    }
    &[type="placeholder"] {
      color: ${(props) => props.theme.mainColors.primaryColor};
    }
    &:active::placeholder {
      color: pink;
    }
    &::placeholder {
      font-size: 1.6rem;
      color: rgba(0, 0, 0, 0.8);
      color: rgba(255, 255, 255, 0.8);
      letter-spacing: 0.1rem;
    }
    &:visited {
      font-size: 1.6rem;
      color: #56ec8c;
    }
  }
`;

export default StyledSignUpForm;
