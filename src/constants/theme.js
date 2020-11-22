export default {
  global: {
    colors: {
      brand: "#ffabab",
      complement: "#abffff",
      light: "#ffffff",
      dark: "#000000",
    },

    font: {
      family: "Nunito Sans",
      size: "40px",
      height: "40px",
    },

    focus: {
      border: {
        color: "none",
      },
    },
  },

  clock: {
    analog: {
      hour: {
        color: { dark: "complement", light: "brand" },
      },
      minute: {
        color: { dark: "white", light: "black" },
      },
    },
  },

  card: {
    container: {
      elevation: "large",
    },
    footer: {
      pad: "medium",
    },
  },
};
