module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  plugins: ['react', 'react-native'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'error',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};