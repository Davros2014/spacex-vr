import React from "react";
import StyledSignUpForm from "./signUp.styles";

const SignUpForm = () => {
  // const [signedUp, setSignedUp] = useState(false);
  return (
    <StyledSignUpForm>
      <input placeholder="Enter first name" />
      <input placeholder="Enter last name" />
      <input placeholder="hello" />
      <input placeholder="hello" />
      <button type="submit">SUBMIT</button>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
