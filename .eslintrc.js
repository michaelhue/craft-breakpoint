module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  plugins: ["prettier", "vue"]
};
