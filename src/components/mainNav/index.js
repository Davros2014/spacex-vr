import React, { useContext, useEffect } from "react";
import StyledMainNav from "./mainNav.styles";
import MobileBtn from "../mobileBtn";

import { DeviceContext } from "../../context/deviceContext";

const MainNav = () => {
  const { isDesktop, updateDesktop } = useContext(DeviceContext);

  useEffect(() => {
    window.addEventListener("resize", updateDesktop);
    return () => {
      window.removeEventListener("resize", updateDesktop);
    };
  }, [updateDesktop]);

  const showMobileNav = () => {
    document.getElementById("mobileMenu").classList.toggle("active");
    document.querySelector(".mobile-btn").classList.toggle("active");
    document.querySelector(".mobileNav").classList.toggle("active");
  };
  console.log("desktop", isDesktop);
  return (
    <>
      <StyledMainNav className={isDesktop ? "" : "mobileNav"}>
        <ul id={isDesktop ? "" : "mobileMenu"}>
          <li>
            <a href="#hero" onClick={isDesktop ? null : showMobileNav}>
              Intro
            </a>
          </li>
          <li>
            <a href="#about" onClick={isDesktop ? null : showMobileNav}>
              About
            </a>
          </li>
          <li>
            <a href="#sign-up" onClick={isDesktop ? null : showMobileNav}>
              Sign Up
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={isDesktop ? null : showMobileNav}>
              Contact
            </a>
          </li>
        </ul>
      </StyledMainNav>
      <MobileBtn
        className={isDesktop ? null : "mobile-btn"}
        onClick={showMobileNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileBtn>
    </>
  );
};

export default MainNav;
