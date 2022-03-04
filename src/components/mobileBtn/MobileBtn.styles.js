import styled from "styled-components";

const StyledMobileBtn = styled.div`
  display: none;
  &.mobile-btn {
    display: flex;
    transition: all 0.2s ease-in-out;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    height: 2rem;
    width: 2rem;
    z-index: 10000;
    transform-origin: center center;
    transition: ${(props) => props.theme.effects.fastTransition};
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
    & span {
      height: 2px;
      background: white;
      transform-origin: center center;
      transition: ${(props) => props.theme.effects.fastTransition};
    }
    &.active span {
      transition: ${(props) => props.theme.effects.fastTransition};
      background: ${(props) => props.theme.mainColors.primaryColor};
    }
    & span:nth-child(1) {
      transform: translate(0, 0) rotate(0deg);
    }
    &.active span:nth-child(1) {
      transform: translate(0, 9px) rotate(45deg);
    }
    & span:nth-child(2) {
      opacity: 1;
    }
    &.active span:nth-child(2) {
      opacity: 0;
    }
    & span:nth-child(3) {
      transform: translate(0, 0) rotate(0deg);
    }
    &.active span:nth-child(3) {
      transform: translate(0, -10px) rotate(-45deg);
    }
  }
  &.mobile-btn.active {
    display: flex;
  }
`;
export default StyledMobileBtn;
