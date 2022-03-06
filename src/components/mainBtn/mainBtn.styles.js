import styled from "styled-components";

const StyledMainBtn = styled.button`
    opacity: 1;
    margin-top: 2rem;
    color: ${(props) => props.theme.mainColors.lightAccentColor};
    padding: 4rem;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${(props) => props.theme.mainColors.primaryColor};
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
      z-index: -1;
    }
    &:hover {
        transform: scale(1.025);
        cursor: pointer;
        transition: ${(props) => props.theme.effects.fastTransition};
        box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.25);
    }
    &:clicked {
        transform: scale(1);
        transition: ${(props) => props.theme.effects.fastTransition}
        background: ${(props) => props.theme.mainColors.primaryColor};
    }
`;
export default StyledMainBtn;
