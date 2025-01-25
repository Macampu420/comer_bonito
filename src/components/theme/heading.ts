export const HeadingTheme =  {
  baseStyle: ({ as }: { as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }) => {
    const base = {
      color: "#2D3430",
      fontFamily: "Questrial, sans-serif",
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "1.5",
    };
    const fontSize = {
      h1: "56px",
      h2: "48px",
      h3: "32px",
      h4: "24px",
      h5: "20px",
      h6: "18px",
    };
    return Object.assign({}, base, { fontSize: fontSize[as] });
  },
  defaultProps: {
    size: "dynamic",
  },
}