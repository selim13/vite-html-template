/** @type {import("prettier").Config} */
export default {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  singleQuote: true,
  plugins: ['prettier-plugin-packagejson'],

  // https://github.com/prettier/prettier/issues/11223
  overrides: [{ files: '*.hbs', options: { parser: 'html' } }],
};
