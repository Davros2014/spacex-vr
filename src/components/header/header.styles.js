import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  z-index: 4999;
  // background: linear-gradient(to top, black, rgba(0, 0, 0, 0.9));
  height: 6rem;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem;
  text-decoration: none;
  position: fixed;
  top: 0;
  left: 0;
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    padding: 3rem 6rem;
  }
  & svg {
    z-index: 5000;
`;

export default StyledHeader;
