const customValue = (val: number) => `${val}px`;

export const theme = {
  colors: {
    primary: "#2773FF",
    secondary: "#D4E3FF",
    error: "#F44336",
    warning: "#FFA726",
    info: "#29B6F6",
    success: "#66BB6A",
  },
  background: {
    primary: "#F2F5F9",
    secondary: "#f2f2f2",
  },
  text: {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      tertiary: "#777777",
    },
    align: {
      left: "left",
      center: "center",
      right: "right",
      justify: "justify",
    },
    fonts: {
      amazonEmber: "Amazon Ember",
      sizes: {
        xs: "16px",
        sm: "20px",
        md: "24px",
        lg: "34px",
        xl: "48px",
        xxl: "60px",
        xxxl: "96px",
        custom: customValue,
      },
      weights: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      lineHeights: {
        xs: 1.167,
        sm: 1.2,
        md: 1.167,
        lg: 1.235,
        xl: 1.334,
        xxl: 1.5,
        xxxl: 1.6,
        custom: customValue,
      },
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      none: "none",
    },
  },
  paddings: {},
  margins: {},
};
