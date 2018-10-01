module.exports = {
  map: { inline: false },
  plugins: [
    require("postcss-url")({
      url: "inline"
    }),
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "color-mod-function": true,
        "custom-properties": { preserve: false },
        "nesting-rules": true
      }
    }),
    require("cssnano")()
  ]
};
