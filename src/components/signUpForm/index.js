import React, { useState } from "react";
import StyledSignUpForm from "./signUpForm.styles";

//import hooks
import MainBtn from "../mainBtn";
import { Header5 } from "../typography";

const SignUpForm = ({ handleSubmit }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
    setFirst("");
    setLast("");
    setEmail("");
  };
  return (
    <>
      <StyledSignUpForm>
        <Header5>
          For the opportunity to go into the virtual unknown or for more
          information about the initiative, please register below
        </Header5>
        <input
          name="first"
          placeholder="First name"
          value={first}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          name="last"
          placeholder="Last name"
          value={last}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => setLast(e.target.value)}
        />
        <input
          name="email"
          placeholder="Email address"
          value={email}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(e) => setEmail(e.target.value)}
        />
      </StyledSignUpForm>
      {first && last && email && (
        <MainBtn
          className="submitBtn"
          type="submit"
          text="Submit"
          onClick={handleClick}
        >
          Submit
        </MainBtn>
      )}
    </>
  );
};

export default SignUpForm;
