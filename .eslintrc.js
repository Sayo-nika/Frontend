module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'quotes': ['warn', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': 'warn',
    'indent': ['error', 2, { 'SwitchCase': 1 }], // 2 spaces because the vue plugin wants 2 spaces in HTML.
    'no-unsafe-negation': 'error',
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'no-useless-return': 'error',
    'array-bracket-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': ['error', { 'overrides': { 'catch': { 'after': false } } }],
    'new-parens': 'error',
    'no-array-constructor': 'warn',
    'no-new-object': 'warn',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': 'error',
    'one-var-declaration-per-line': 'error',
    'quote-props': ['error', 'as-needed'],
    'semi-spacing': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      named: 'never',
      anonymous: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': 'error',
    'no-useless-rename': 'error',
    'prefer-arrow-callback': 'error',
    'template-curly-spacing': 'error',

    'vue/max-attributes-per-line': 0,
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'never'
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never'
    }],
    'vue/multiline-html-element-content-newline': 'off'
  }
}
