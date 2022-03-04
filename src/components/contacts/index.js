import React from "react";
import Logo from "../logo";
import StyledFooter from "./contacts.styles";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "../Icons/Social";

const Contacts = () => {
  return (
    <StyledFooter id="contacts">
      <div className="footerWrapper" id="contact">
        <h4>
          SpaceX designs, manufactures and launches the world's most advanced
          rockets and spacecraft <br />
          <br />
          You want to wake up in the morning and think the future is going to be
          great - and that’s what being a spacefaring civilization is all about.
          It’s about believing in the future and thinking that the future will
          be better than the past. And I can’t think of anything more exciting
          than going out there and being among the stars.{" "}
          <cite> - Elon Musk</cite>
        </h4>
        <div className="contactsContainer">
          <div className="contactsItem">
            <h6>Space X</h6>
            <ul className="linksList">
              <li>
                <a href="www.google.com">Our Mission</a>
              </li>
              <li>
                <a href="www.google.com">Careers</a>
              </li>
              <li>
                <a href="www.google.com">Updates</a>
              </li>
              <li>
                <a href="www.google.com">Shop</a>
              </li>
            </ul>
          </div>
          <div className="contactsItem">
            <h6>OUR GOALS</h6>
            <ul className="linksList">
              <li>
                <a href="https://www.spacex.com//">Company</a>
              </li>
              <li>
                <a href="https://shop.spacex.com/">Shop</a>
              </li>
              <li>
                <a href="https://www.spacex.com/updates/">Updates</a>
              </li>
              <li>
                <a href="https://www.spacex.com/rideshare/">Rideshare</a>
              </li>
              <li>
                <a href="https://www.spacex.com/launches/">Launches</a>
              </li>
            </ul>
          </div>
          <div className="contactsItem">
            <h6>CONTACT US</h6>
            <p>
              Space X Limited, <br />
              Corporate Headquarters, <br />
              1 Rocket Road, <br />
              Hawthorne, <br />
              CA, 90250, <br />
              United States <br />
            </p>
          </div>
          <div className="contactsItem">
            <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
            <form className="inputContainer">
              <input
                placeholder="email@example.com"
                className="contactsInput"
              />
              <button type="submit">GO</button>
            </form>
          </div>
        </div>
        <div className="socialNav">
          <Logo width="120px" swooshFill="lightblue" textFill="white" />
          <div className="socialList">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/spacex/"
            >
              <Facebook width="40px" fill="rgba(255, 255, 255, 0.5)" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/spacex"
            >
              <YouTube width="40px" fill="rgba(255, 255, 255, 0.5)" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/spacex/"
            >
              <Instagram width="40px" fill="rgba(255, 255, 255, 0.5)" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/spacex"
            >
              <Twitter width="40px" fill="rgba(255, 255, 255, 0.5)" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.flickr.com/photos/spacex"
            >
              <Pinterest width="40px" fill="rgba(255, 255, 255, 0.5)" />
            </a>
          </div>
          <h6>SpaceX Ltd ©2022. All rights reserved</h6>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Contacts;
