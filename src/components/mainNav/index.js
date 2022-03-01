import React from "react";
import StyledMainNav from "./mainNav.styles";

const MainNav = () => {
  return (
    <StyledMainNav>
      <ul>
        <li>
          <a href="#hero">Intro</a>
        </li>
        <li>
          <a smooth href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#sign-up">Sign Up</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </StyledMainNav>
  );
};

export default MainNav;
