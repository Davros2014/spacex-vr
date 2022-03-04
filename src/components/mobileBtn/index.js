import React from "react";
import StyledMobileBtn from "./MobileBtn.styles";

const MobileBtn = ({ onClick, className, children }) => {
  return (
    <StyledMobileBtn className={className} onClick={onClick}>
      {children}
    </StyledMobileBtn>
  );
};

export default MobileBtn;
