import React from "react";
import StyledAbout from "./about.styles";
import { Header2, LargeBodyText, SmallBodyText } from "../typography";
import { GridContainer } from "../structure";

import MainBtn from "../mainBtn";

const About = () => {
  return (
    <StyledAbout id="about">
      <GridContainer>
        <div className="mainPanel topPanel">
          <div className="circleBG" />
          <div className="textContainer">
            <Header2>Why are we doing this?</Header2>
            <SmallBodyText className="infoTextBody">
              Virtual Reality is not just a great new dimension in gaming and
              exploration but it's also a great aid against loneliness. We
              wanted to do something to raise the global community spirit during
              these difficult times, and what better way than to escape from the
              comfort of your own home with a VR experience.
            </SmallBodyText>
          </div>
        </div>
        <div className="midPanel">
          <div className="bigCircleBG">
            <Header2>What's it about?</Header2>
            <LargeBodyText className="infoTextBody">
              Of course, it's not all about space (although we confess to being
              biased) -{" "}
              <span>
                we are also giving away an addition 10,000 virtual excusions.
              </span>
              <br />
              <strong>
                We are also reaching out to the tech community to find more
                partners who want to join the initiative with differently themed
                VR excursions, covering unique, interesting topics.
              </strong>
              <br />
              <br />
              <span> Join us by registering below.</span>
            </LargeBodyText>
          </div>
        </div>
        <div className="mainPanel bottomPanel">
          <div className="circleBG" />
          <div className="textContainer">
            <Header2>What do I need to do now?</Header2>
            <LargeBodyText className="infoTextBody">
              Simply enter your details in the next section and if you are
              eligible you could be the lucky recipient of a new pair of VR
              googles or a VR excursion.
            </LargeBodyText>
          </div>
        </div>
        <MainBtn className="aboutBtn" type="submit" text="Submit">
          <a href="#sign-up">Register Now</a>
        </MainBtn>
      </GridContainer>
    </StyledAbout>
  );
};

export default About;
