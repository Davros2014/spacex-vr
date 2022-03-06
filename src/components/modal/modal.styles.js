import styled, { keyframes } from "styled-components";

import modalBg from "../../assets/modal-bg.png";

const bounceIn = keyframes` {
    0% { transform: translate(-50%, -50%) scale(1); }
    90% { transform: translate(-50%, -50%) scale(1.05); }
    100% { transform: translate(-50%, -50%) scale(1); }   
}`;

const StyledModal = styled.div`
  border-radius: 8px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  opacity: 0;
  display: none;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  padding: 2rem;
  &.active {
    opacity: 1;
    display: flex;
  }
  & .modalContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 20px;
    background-image: url(${modalBg});
    background-position: left bottom;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    box-shadow: 1px 1px 12px 8px rgba(255, 255, 255, 0.1);
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      width: 50%;
      height: 50%;
      background-position: center center;
    }
    & .modalText {
      position: relative;
      padding: 4rem;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      @media (min-width: ${(props) => props.theme.media.desktop}) {
        width: 50%;
      }
      & h3 {
        left: 0;
        color: red;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.mainColors.primaryColor};
      }
      & h5 {
        color: ${(props) => props.theme.mainColors.offWhite};
        & span {
          color: ${(props) => props.theme.mainColors.primaryColor};
        }
      }
    }
  }
  &.active .modalContainer {
    animation: 0.15s ${bounceIn} forwards ease-in-out;
  }
  & button {
    margin: 0 auto;
    padding: 4rem;
    margin-bottom: 5rem;
    & a {
      color: white;
      font-weight: 700;
      text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default StyledModal;
