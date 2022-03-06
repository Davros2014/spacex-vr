import styled from "styled-components";

import mobileBg from "../../assets/background-mobile-menu1.jpg";

const StyledMainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &.mobileNav.active {
    transition: ${(props) => props.theme.effects.mediumTransition};
    transform: translateX(0);
    opacity: 1;
  }
  & ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    height: 2rem;
    & a {
      text-decoration: none;
      margin-left: 4rem;
      font-size: 1.4rem;
      color: ${(props) => props.theme.mainColors.primaryColor};
      // color: #f3ec78;
      font-weight: 700;
      position: relative;
      &:hover {
        cursor: pointer;
        transition: ${(props) => props.theme.effects.fastTransition};
        color: white;
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${(props) => props.theme.mainColors.primaryColor};
        transform: translateY(-2.5rem);
      }
      &:hover:before {
        transition: ${(props) => props.theme.effects.fastTransition};
        height: 10px;
        transform: translateY(-2.5rem);
      }
    }
  }
  &.mobileNav {
    transition: ${(props) => props.theme.effects.mediumTransition};
    opacity: 0;
    display: flex;
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    left: 0;
    transform: translateX(100%);
    background-image: url(${mobileBg});
    background-size: cover;
    top: 0;
    width: 100%;
    height: 100vh;
    padding: 4rem;
    align-items: flex-start;
    & ul {
      border-left: red 3px solid red;
      padding-top: 10vh;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      list-style-type: none;
      line-height: 12rem;
      & a {
        text-decoration: none;
        padding-left: 2rem;
        font-size: 2rem;
        position: relative;
        color: ${(props) => props.theme.mainColors.primaryColor};
        &:before {
          content: "";
          width: 30px;
          height: 3px;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateX(-100%);
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${(props) => props.theme.mainColors.primaryColor};
          opacity: 0;
        }
        &:hover:before {
          transition: ${(props) => props.theme.effects.fastTransition};
          opacity: 1;
          transform: translateX(-55%);
        }
        &:hover {
          transition: ${(props) => props.theme.effects.fastTransition};
          color: white;
        }
      }
    }
  }
`;

export default StyledMainNav;
