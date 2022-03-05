import styled from "styled-components";

import mobileBg from "../../assets/about-background.png";
import desktopBg from "../../assets/about-background.png";

const StyledSignUpPage = styled.section`
  width: 100vw;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
  }
`;

export default StyledSignUpPage;
