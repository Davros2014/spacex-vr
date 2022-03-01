import React from "react";
import Logo from "../logo";
import MainNav from "../mainNav";
import StyledHeader from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo swooshFill="#ffffff" textFill="#ffffff" width="150px" />
      <MainNav />
    </StyledHeader>
  );
};

export default Header;
