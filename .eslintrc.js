module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'import/no-unresolved': 'off',
  },
};
