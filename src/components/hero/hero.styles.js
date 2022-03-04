import styled from "styled-components";

import mobileBg from "../../assets/actionvance-t7EL2iG3jMc-unsplash.jpg";
import tabletBg from "../../assets/actionvance-t7EL2iG3jMc-unsplash.jpg";
import desktopBg from "../../assets/actionvance-t7EL2iG3jMc-unsplash.jpg";

const StyledHero = styled.section`
  width: 100vw;
  height: 100vh;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mobileBg});
  background-position: center center;
  background-size: cover;
  @media (min-width: ${(props) => props.theme.media.tablet}) {
    background-image: url(${tabletBg});
  }
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    background-image: url(${desktopBg});
  }
`;

export default StyledHero;
