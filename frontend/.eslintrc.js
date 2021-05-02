module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    "prettier/prettier": ["error"],
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0,
    "max-len": ["error", { "code": 120, "tabWidth": 4 }],
    'no-console': 'off',
    'no-shadow': 'warn',
  },
};
