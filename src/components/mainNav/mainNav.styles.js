import styled from "styled-components";

const StyledMainNav = styled.nav`
  border: 3px solid green;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: yellow;
  & ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    & a {
      text-decoration: none;
      padding-left: 2rem;
    }
  }
`;

export default StyledMainNav;
