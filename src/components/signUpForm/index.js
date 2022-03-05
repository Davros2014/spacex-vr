import React from "react";
import StyledSignUpForm from "./signUpForm.styles";

//import hooks
import useInputState from "../../hooks/useInputState";
import MainBtn from "../mainBtn";
import { Header5 } from "../typography";

const SignUpForm = ({ handleSubmit }) => {
  // const [first, setFirst] = useState("");
  // const [last, setLast] = useState("");
  // const [email, setEmail] = useState("");

  const [value, handleChange, reset] = useInputState("");
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
    reset();
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
          value={value}
          placeholder="First name"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={handleChange}
        />
        <input
          name="last"
          value={value}
          placeholder="Last name"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={handleChange}
        />
        <input
          name="email"
          value={value}
          placeholder="Email address"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={handleChange}
        />
      </StyledSignUpForm>
      {value && (
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
