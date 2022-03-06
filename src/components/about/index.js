import React from "react";
import StyledAbout from "./about.styles";
import { Header2, LargeBodyText } from "../typography";
import { GridContainer } from "../structure";

const About = () => {
  return (
    <StyledAbout id="about">
      <GridContainer>
        <div className="mainPanel" id="topPanel">
          <div className="circleBG" />
          <div className="textContainer">
            <Header2>What's the deal?</Header2>
            <LargeBodyText className="infoTextBody">
              We want to give somethign back to the broader community and raise
              the public spirit during these difficult times. Virtual Reality is
              not just a great new dimension of gaming and exploration but also
              an aid against loneliness.
            </LargeBodyText>
          </div>
        </div>
        <div className="mainPanel" id="midPanel">
          <div className="circleBG" />
          <div className="textContainer">
            <Header2>What's the deal?</Header2>
            <LargeBodyText className="infoTextBody">
              We want to give somethign back to the broader community and raise
              the public spirit during these difficult times. Virtual Reality is
              not just a great new dimension of gaming and exploration but also
              an aid against loneliness.
            </LargeBodyText>
          </div>
        </div>
        <div className="mainPanel" id="bottomPanel">
          <div className="circleBG" />
          <div className="textContainer">
            <Header2>What's the deal?</Header2>
            <LargeBodyText className="infoTextBody">
              We want to give somethign back to the broader community and raise
              the public spirit during these difficult times. Virtual Reality is
              not just a great new dimension of gaming and exploration but also
              an aid against loneliness.
            </LargeBodyText>
          </div>
        </div>
      </GridContainer>
    </StyledAbout>
  );
};

export default About;
