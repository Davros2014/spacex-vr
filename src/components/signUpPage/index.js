import React, { useState } from "react";
import SignUpForm from "../signUpForm";
import StyledSignUpPage from "./signUpPage.styles";

import vrHeadset from "../../assets/vr-headset1.png";
import { Header1 } from "../typography";
import Modal from "../modal";

const SignUpPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = () => {
    setIsActive(!isActive);
  };
  console.log("isActive", isActive);
  return (
    <StyledSignUpPage id="sign-up">
      <div className="vr-headset">
        <img alt="headset" src={vrHeadset} />
        <Header1>10,000 free VR glasses</Header1>
      </div>
      <SignUpForm handleSubmit={handleSubmit} />
      <Modal handleSubmit={handleSubmit} isActive={isActive} />
    </StyledSignUpPage>
  );
};

export default SignUpPage;
