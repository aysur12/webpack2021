module.exports = {
  plugins: ['fsd'],
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
    'plugin:fsd/all',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
};
