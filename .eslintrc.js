module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: [
    'prettier',
    'vue',
  ],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        quoteProps: 'preserve',
        trailingComma: 'es5',
        arrowParens: 'avoid',
      },
    ],
  },
};
