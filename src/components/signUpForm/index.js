import React from "react";
import StyledSignUpForm from "./signUpForm.styles";

const SignUpForm = () => {
  return (
    <StyledSignUpForm>
      <input
        name="first"
        placeholder="First name"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <input
        name="last"
        placeholder="Last name"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <input
        name="email"
        placeholder="Email address"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <button
        className="submitBtn"
        type="submit"
        onClick={(e) => this.submit()}
        text="Submit"
      >
        Submit
      </button>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
