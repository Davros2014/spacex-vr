import styled, { keyframes } from "styled-components";

const bounceIn = keyframes` {
    0% { transform: translate(-50%, -50%) scale(1); }
    90% { transform: translate(-50%, -50%) scale(1.2); }
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
  &.active {
    opacity: 1;
    display: flex;
    animation: 0.25s ${bounceIn} forwards ease-in-out;
  }
  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background: rgba(255, 255, 255, 0.5);
    width: 80vw;
    height: 80vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      width: 50vw;
      height: 50vh;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.active div {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default StyledModal;
