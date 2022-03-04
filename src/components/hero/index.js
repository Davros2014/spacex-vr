import React from "react";
import StyledHero from "./hero.styles";
import { Header1, Header5, SmallBodyText } from "../typography";
import { GridContainer } from "../structure";

const Hero = () => {
  return (
    <StyledHero id="hero">
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
    </StyledHero>
  );
};

export default Hero;
