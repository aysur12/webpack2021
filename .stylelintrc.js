module.exports = {
  extends: ["stylelint-config-standard",
            "stylelint-config-rational-order",
            "stylelint-prettier/recommended"],
  plugins: ["stylelint-order",
            "stylelint-config-rational-order/plugin",
            "stylelint-scss",],
  "customSyntax" : "postcss-scss",
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": false,
      "empty-line-between-groups": false,
    }],
    "prettier/prettier": [true, {"singleQuote": true}],
    "string-quotes": "single",
    "color-function-notation": "legacy",
    "at-rule-no-unknown" : null,
    "scss/at-rule-no-unknown" : true,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
  }
};