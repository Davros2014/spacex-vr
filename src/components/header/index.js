import React from "react";
import MainNav from "../mainNav";
import StyledHeader from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <p>LOGO</p>
      <MainNav />
    </StyledHeader>
  );
};

export default Header;
