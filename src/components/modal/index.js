import React from "react";
import MainBtn from "../mainBtn";
import { Header3, Header5 } from "../typography";
import StyledModal from "./modal.styles";

const Modal = ({ isActive, handleSubmit }) => {
  const handleClick = () => {
    handleSubmit();
  };
  return (
    <StyledModal className={`modal ${isActive ? "active" : ""}`}>
      <div className="modalContainer">
        <div className="modalText">
          <Header3>One step nearer</Header3>
          <Header5>
            Thank you for your interest, we wish you the best of luck. If you
            are succesful, we will contact you in due course. In the meantime,
            maybe we can interest you in some further reading<span> here</span>
          </Header5>
        </div>
        <MainBtn
          className="closeBtn"
          type="submit"
          text="Submit"
          onClick={handleClick}
        >
          <a href="#hero">Close</a>
        </MainBtn>
      </div>
    </StyledModal>
  );
};

export default Modal;
