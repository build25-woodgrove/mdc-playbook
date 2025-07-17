/* eslint-env node */
module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    'semi': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'no-unused-vars': 'error',
  }
};
