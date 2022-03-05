import styled from "styled-components";

import mobileBg from "../../assets/about-background.png";
import desktopBg from "../../assets/about-background.png";

const StyledAbout = styled.section`
  width: 100vw;
  background: #0b0e17;
  background: #000000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
  }
`;

export default StyledAbout;
