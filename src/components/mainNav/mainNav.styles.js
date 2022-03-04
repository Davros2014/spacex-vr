import styled from "styled-components";

const StyledMainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    & a {
      text-decoration: none;
      padding-left: 2rem;
      font-size: 2rem;
      color: ${(props) => props.theme.mainColors.primaryColor};
    }
  }
`;

export default StyledMainNav;
