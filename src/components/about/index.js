import React from "react";
import StyledAbout from "./about.styles";
import { Header2, Header5, SmallBodyText } from "../typography";
import { GridContainer } from "../structure";

const About = () => {
  return (
    <StyledAbout id="about">
      <GridContainer>
        <div className="panelLeft">
          <Header5>So, did you ever dream about becoming an astronaut?</Header5>
          <Header2>Do you have the wanderlust for space travel*</Header2>
          <SmallBodyText>
            As part of our initiative we plan to aid the elderly population
            during those difficult times. By providing 10.000 free VR glasses
            with three amazing space excursions to circulate around the world
            and by 10.000 additional passes to the space excursions for those
            who already have access to VR goggles.
            <br />
            Further, SpaceX is looking to find more partners who want to join
            the initiative with differently themed VR excursions, to cover other
            unique topics.
          </SmallBodyText>
        </div>
      </GridContainer>
    </StyledAbout>
  );
};

export default About;
