import React from "react";
import StyledAbout from "./about.styles";
import { Header1, Header5, SmallBodyText } from "../typography";
import { GridContainer } from "../structure";

const About = () => {
  return (
    <StyledAbout id="about">
      <GridContainer>
        <div className="panelLeft">
          <Header5>So, did you ever dream about becoming an astronaut?</Header5>
          <Header1>SPACE</Header1>
          <SmallBodyText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </SmallBodyText>
        </div>
      </GridContainer>
    </StyledAbout>
  );
};

export default About;
