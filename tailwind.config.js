module.exports = {
  purge: ["./src/**/*.tsx"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
};
