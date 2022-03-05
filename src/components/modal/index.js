import React from "react";
import MainBtn from "../mainBtn";
import { Header2 } from "../typography";
import StyledModal from "./modal.styles";

const Modal = ({ isActive, handleSubmit }) => {
  const handleClick = () => {
    handleSubmit();
  };
  return (
    <StyledModal className={`modal ${isActive ? "active" : ""}`}>
      <div>
        <Header2>Hello World</Header2>

        <MainBtn
          className="closeBtn"
          type="submit"
          text="Submit"
          onClick={handleClick}
        >
          Close
        </MainBtn>
      </div>
    </StyledModal>
  );
};

export default Modal;
