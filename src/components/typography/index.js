import React from "react";
import DynamicComponent from "../DynamicComponent";
import { Theme } from "../theme/theme";

const {
  header1,
  header2,
  header3,
  header4,
  header5,
  header6,
  smallBodyText,
  largeBodyText,
  subHeader1,
  subHeader2,
  navText,
} = Theme.typeStyles;

export const Header1 = (props) => (
  <DynamicComponent className="Header1" {...header1} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Header2 = (props) => (
  <DynamicComponent className="Header2" {...header2} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Header3 = (props) => (
  <DynamicComponent className="Header3" {...header3} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Header4 = (props) => (
  <DynamicComponent className="Header4" {...header4} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Header5 = (props) => (
  <DynamicComponent className="Header5" {...header5} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Header6 = (props) => (
  <DynamicComponent className="Header6" {...header6} {...props}>
    {props.children}
  </DynamicComponent>
);

export const SmallBodyText = (props) => (
  <DynamicComponent className="SmallBodyText" {...smallBodyText} {...props}>
    {props.children}
  </DynamicComponent>
);

export const LargeBodyText = (props) => (
  <DynamicComponent className="LargeBodyText" {...largeBodyText} {...props}>
    {props.children}
  </DynamicComponent>
);

export const SubHeader1 = (props) => (
  <DynamicComponent className="LargeBodyText" {...subHeader1} {...props}>
    {props.children}
  </DynamicComponent>
);

export const SubHeader2 = (props) => (
  <DynamicComponent className="LargeBodyText" {...subHeader2} {...props}>
    {props.children}
  </DynamicComponent>
);

export const NavText = (props) => (
  <DynamicComponent className="navText" {...navText} {...props}>
    {props.children}
  </DynamicComponent>
);
