import React from "react";
import StyledAbout from "./about.styles";
import { Header2, SmallBodyText } from "../typography";
import { GridContainer } from "../structure";

const About = () => {
  return (
    <StyledAbout id="about">
      <GridContainer>
        <div className="panelTop">
          <Header2>What's the story?</Header2>
          <SmallBodyText>
            As part of our initiative we plan to aid the elderly population
            during those difficult times. By providing 10.000 free VR glasses
            with three amazing space excursions to circulate around the world
            and by 10.000 additional passes to the space excursions for those
            who already have access to VR goggles.
          </SmallBodyText>
        </div>
      </GridContainer>
    </StyledAbout>
  );
};

export default About;
