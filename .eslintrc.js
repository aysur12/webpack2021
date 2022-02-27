module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    ["plugin:fsd/all"]
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  {
    "plugins": ["fsd"]
  }
  rules: {
    'linebreak-style': 'off',
  },
};
