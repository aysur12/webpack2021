module.exports = {
  extends: ["stylelint-config-standard",
            "stylelint-config-rational-order",
            "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "string-quotes": "single",
    "color-function-notation": "legacy",
    "at-rule-no-unknown" : null,
    "scss/at-rule-no-unknown" : true,
    "selector-class-pattern": null,
  }
};