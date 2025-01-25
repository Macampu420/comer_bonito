import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { HeadingTheme } from "./heading";
import { textTheme } from "./text";
import { buttonTheme } from "./button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px",
  },
  colors: {
    primary: "#0FEE0F",
    secondary: "#EE0F0F",
  },
  fonts: {
    body: "Quicksand, sans-serif",
    heading: "Questrial, sans-serif",
  },
  components: {
    Heading: HeadingTheme,
    Text: textTheme,
    Button: buttonTheme
  },
});

export default theme;