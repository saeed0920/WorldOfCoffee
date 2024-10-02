import { extendTheme } from "@chakra-ui/react";
const customTheme = extendTheme({
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    xl: "81.25em",
    lg: "63.93em",
    md: "47.93em",
    sm: "39.93em",
    ph: "21.87em",
    base: "0em",
  },
});
extendTheme({ customTheme });
export default customTheme;
