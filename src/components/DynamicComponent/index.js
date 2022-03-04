import React from "react";
import styled from "styled-components";

import {
  space,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  colorStyle,
  textStyle,
  fontFamily,
  fontWeight,
  letterSpacing,
  borderRadius,
} from "styled-system";

const StyledDynamicComponent = styled.div`
  ${space}
  ${lineHeight}
  ${fontSize}
  ${fontStyle}
  ${size}
  ${color}
  ${colorStyle}
  ${textStyle}
  ${fontFamily}
  ${fontWeight}
  ${letterSpacing}
  ${borderRadius}
`;

const WithComponent = StyledDynamicComponent.withComponent("div");
const DynamicComponent = ({ tag = "div", children, ...props }) => {
  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: "div",
};

export default DynamicComponent;
