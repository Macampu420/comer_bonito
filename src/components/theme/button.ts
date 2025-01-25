import { defineStyle } from "@chakra-ui/react";
import { fontWeight } from "./text";

const primary = defineStyle({
  textTransform: "uppercase",
  bgColor: "#5C7063",
  borderColor: "transparent",
  color: "white",
  rounded: "8px",
  fontWeight: fontWeight.normal
  // _active: {
  //   bgColor: "primary.400",
  // },
  // _disabled: {
  //   bgColor: "neutral.100 !important",
  //   color: "neutral.400 !important",
  // },
  // _hover: {
  //   bgColor: "primary.200",
  // },
  // _loading: {
  //   bgColor: "primary.50",
  // },
  // _pressed: {
  //   bgColor: "primary.400",
  // },
  // _focus: {
  //   outline: "none",
  //   boxShadow: "none",
  // },
});

export const buttonTheme = {
  baseStyle: primary,
  sizes: {
    lg: {
      fontSize: "18px",
      h: "auto",
      minW: 0,
      p: "12px 32px",
    },
    md: {
      fontSize: "16px",
      h: "auto",
      minW: 0,
      p: "8px 24px",
    },
    sm: {
      fontSize: "14px",
      h: "auto",
      minW: 0,
      p: "6px 16px",
    },
  },
  variants: {
    primary,
  },
};
