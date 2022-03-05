import React from "react";
import SignUpForm from "../signUpForm";
import StyledSignUpPage from "./signUpPage.styles";

import vrHeadset from "../../assets/vr-headset1.png";
import { Header1 } from "../typography";

const SignUpPage = () => {
  return (
    <StyledSignUpPage id="sign-up">
      <div className="vr-headset">
        <img alt="headset" src={vrHeadset} />
        <Header1>10.000 free VR glasses</Header1>
      </div>
      <SignUpForm />
    </StyledSignUpPage>
  );
};

export default SignUpPage;
