module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-no-bind': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'off',
  },
};
