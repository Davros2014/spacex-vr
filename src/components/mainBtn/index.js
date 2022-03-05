import React from "react";
import StyledMainBtn from "./mainBtn.styles.js";

const MainBtn = ({ onClick, children, className }) => {
  return (
    <StyledMainBtn
      className={className}
      type="submit"
      text="Submit"
      onClick={onClick}
    >
      {children}
    </StyledMainBtn>
  );
};

export default MainBtn;
