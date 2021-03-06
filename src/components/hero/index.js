import React from "react";
import StyledHero from "./hero.styles";
import { Header1, Header3, Header5 } from "../typography";
import { GridContainer } from "../structure";
import MainBtn from "../mainBtn";
import astronaut from "../../assets/astronaut.png";

const Hero = () => {
  return (
    <StyledHero id="hero">
      <GridContainer>
        <img className="astronaut" alt="astronaut" src={astronaut} />
        <div className="panelLeft">
          <Header3>
            Have you ever dreamt of becoming an astronaut, ever fantasised about
            floating through space...?
          </Header3>
          <Header1>
            A world<span>*</span> of endless possibilities awaits
          </Header1>
        </div>
        <div className="panelRight">
          <Header5>
            <span>*</span>The virtual world is here for you to explore! We
            realise it's been a difficult time for everyone of late but
            especially so for the elderly and isolated, that's why we are giving
            away
            <span> 10,000 virtual reality headsets</span>, this is a unique
            opportunity for a truly out of this world experience.
            <br />
            <br />
            <span>Find out more below.</span>
          </Header5>
          <MainBtn className="introBtn" type="submit" text="Submit">
            <a href="#about">Discover more</a>
          </MainBtn>
        </div>
      </GridContainer>
    </StyledHero>
  );
};

export default Hero;
