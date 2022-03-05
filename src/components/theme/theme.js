const colors = {
  primaryColor: "rgba(28, 128, 204, 1)",
  primaryColorRGB: "230, 39, 99",
  secondaryColor: "rgba(26, 25, 21, 1)",
  thirdColor: "rgba(192, 174, 160, 1)",
  lineColor: "rgba(0, 0, 0, 0.15)",
  lightLineColor: "rgba(270, 270, 270, 0.15)",
  accentGrey: "rgba(0, 0, 0, 0.376)",
  darkGrey: "rgba(47, 79, 79, 1)",
  midGrey: "rgba(105, 105, 105, 0.7)",
  lightDarkGrey: "rgba(0, 0, 0, 0.5)",
  accentColor: "rgba(51, 51, 51, 1)",
  complimentaryColor: "rgba(102, 102, 102, 1)",
  offWhite: "#e9e9e9",
  lightAccentColor: "rgba(230, 228, 223, 1)",
  footerColor: "rgba(32, 32, 32, 1)",
  footerText: "rgba(145, 145, 145, 1)",
  lightGreyColor: "rgba(230, 228, 223, 0.5)",
  lightOverlayColor: "rgba(270, 270, 270, 0.25)",
  midOverlayColor: "rgba(270, 270, 270, 0.7)",
  strongOverlayColor: "rgba(270, 270, 270, 0.75)",
  darkOverlayColor: "rgba(0, 0, 0, 0.75)",
  primaryTextColor: "rgba(145, 145, 145, 1)",
  textColorDark: "#919191",
  boxShadow: "245, 233, 177",
  googleBtn: "rgba(20, 105, 231, 1)",
};
const fontFamilies = {
  heading: "'Inter', Helvetica, Arial, sans-serif",
  body: "'Inter', Helvetica, Arial, sans-serif",
  serif: "'PT Serif', serif",
};
const { heading, body, serif } = fontFamilies;
// const { primaryColor, secondaryColor, primaryTextColor } = colors;
const { primaryTextColor, primaryColor } = colors;
export const Theme = {
  typeStyles: {
    header1: {
      as: "h1",
      fontSize: "clamp(3.2rem, 2.25vw, 4.2rem)",
      fontWeight: 700,
      lineHeight: ["32px", "36px", "56px"],
      fontFamily: heading,
      color: primaryTextColor,
    },
    header2: {
      as: "h2",
      fontSize: "clamp(2.4rem, 2vw, 3rem)",
      fontWeight: 700,
      fontFamily: heading,
      lineHeight: ["20px", "26px", "32px"],
      color: primaryTextColor,
    },
    header4: {
      as: "h4",
      fontSize: "clamp(1.8rem, 1.6vw, 2.2rem)",
      fontWeight: 700,
      fontFamily: heading,
      lineHeight: ["24px", "24px", "32px"],
      color: primaryTextColor,
    },
    header5: {
      as: "h5",
      fontSize: "clamp(1.5rem, 2vw, 1.75rem)",
      fontWeight: 700,
      fontFamily: heading,
      lineHeight: ["22px", "22px", "24px"],
      color: primaryTextColor,
    },
    header6: {
      as: "h6",
      fontWeight: 400,
      fontSize: "clamp(0.8rem, 1.2vw, 1.2rem)",
      fontFamily: heading,
      lineHeight: ["22px", "22px", "24px"],
      textTransform: "uppercase",
      ml: "1rem",
      color: primaryTextColor,
    },
    smallBodyText: {
      as: "p",
      fontSize: "clamp(1.4rem, 1.25vw, 1.6rem)",
      fontFamily: body,
      lineHeight: ["20px", "22px", "24px"],
      color: primaryTextColor,
    },
    largeBodyText: {
      as: "p",
      fontSize: "clamp(1.8rem, 2vw, 1.8rem)",
      fontFamily: body,
      lineHeight: ["20px", "22px", "16px"],
      color: primaryTextColor,
      letterSpacing: "0.015rem",
    },
    underline: {
      textDecoration: "underline",
      color: primaryTextColor,
    },
    footerTextheader: {
      fontSize: "clamp(1.45rem, 2vw, 1.6rem)",
      fontFamily: serif,
      color: primaryColor,
    },
    linkTextheader: {
      fontSize: "clamp(1.45rem, 2vw, 1.6rem)",
      fontFamily: body,
      color: primaryColor,
    },
  },
  fonts: {
    ...fontFamilies,
  },
  mainColors: {
    ...colors,
  },
  topSpacer: "6rem",
  fontSizes: [12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 52],
  breakpoints: ["319px", "599px"],
  media: {
    mobile: "375px",
    desktop: "980px",
  },
  effects: {
    boxShadow: `0px 0px 8px 4px rgba(${colors.boxShadow}, 0.095)`,
    boxShadowButtons: "0px 0px 4px rgba(0, 0, 0, 0.5)",
    authBoxShadow: "0px 0px 10px 8px rgba(219, 218, 218, 0.15)",
    smallBorderRadius: "4px",
    mediumBorderRadius: "8px",
    largeBorderRadius: "12px",
    slowTransition: "1s all ease-in-out",
    mediumTransition: "0.5s all ease-in-out",
    fastTransition: "0.25s all ease-in-out",
  },
  gridSize: {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  pseudoContent: {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  spacing: {
    gridGap: "2rem",
  },
  margins: {
    mt0: "margin-top: 0",
    mt1: "margin-top: 1rem",
    mt2: "margin-top: 2rem",
    mt5: "margin-top: 5rem",
    mt10: "margin-top: 10rem",
    mb0: "margin-bottom: 0",
    mb1: "margin-bottom: 1rem",
    mb2: "margin-bottom: 2rem",
    mb5: "margin-bottom: 5rem",
    mb10: "margin-bottom: 10rem",
    ml0: "margin-left: 0",
    ml1: "margin-left: 1rem",
    ml2: "margin-left: 2rem",
    ml5: "margin-left: 5rem",
    ml10: "margin-left: 10rem",
    mr0: "margin-right: 0",
    mr1: "margin-right: 1rem",
    mr2: "margin-right: 2rem",
    mr5: "margin-right: 5rem",
    mr10: "margin-right: 10rem",
  },
  widths: [
    "5vw",
    "10vw",
    "20vw",
    "30vw",
    "40vw",
    "50vw",
    "60vw",
    "70vw",
    "80vw",
    "90vw",
    "100vw",
  ],
};
export const DarkTheme = {
  ...Theme,
  mainColors: {
    ...colors,
    primaryColor: "rgba(0, 221, 221, 1)",
    primaryColorRGB: "0, 221, 221",
    // canvasColor: "rgba(255, 255, 255, 1)",
  },
};

console.log("DarkTheme", DarkTheme);
