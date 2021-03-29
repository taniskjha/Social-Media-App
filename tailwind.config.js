module.exports = {
  theme: {
    purge: {
      enabled: true,
      content: ["./src/**/*.html"],
    },
    extend: {},
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
