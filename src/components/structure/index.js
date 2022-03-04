import React from "react";

import { StyledAppContainer, StyledGridContainer } from "./Structure.styles.js";
export const AppContainer = ({ children }) => (
  <StyledAppContainer className="AppContainer">{children}</StyledAppContainer>
);
export const GridContainer = ({ children }) => (
  <StyledGridContainer className="gridSection">{children}</StyledGridContainer>
);

/* <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div>
    <div className="gridDiv"></div> */
