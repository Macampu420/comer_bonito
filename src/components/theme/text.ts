import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const fontWeight = {
  extraBold: 700,
  bold: 600,
  normal: 400,
};

const base = defineStyle({
  color: "#695D5D",
  fontFamily: "Quicksand, sans-serif",
  fontSize: "16px",
  fontWeight: fontWeight.normal,
  lineHeight: "1.6",
});

const bold = defineStyle({
  fontSize: "16px",
  fontWeight: fontWeight.bold,
});

const caption = defineStyle({
  fontSize: "14px",
  fontWeight: fontWeight.bold,
});

const textTheme = defineStyleConfig({
  baseStyle: base,
  variants: {
    bold,
    caption,
  },
});

export { fontWeight, textTheme };
