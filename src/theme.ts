import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        "primary.900": { value: "#EE0F0F" },
      },
    },
    textStyles: {
      heading: {
        fontFamily: "heading",
        fontWeight: "heading",
        lineHeight: "heading",
      },
    },
  },
});

const system = createSystem(config);

export default system;