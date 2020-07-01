const {
  NODE_ENV,
} = process.env;
const NODE_ENV_DEV = 'development';
const NODE_ENV_TEST = 'test';
const NODE_ENV_PROD = 'production';

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
    // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    parser: 'babel-eslint',
  },
  rules: {
    // #region ESLint规则

    // https://eslint.org/docs/rules/
    // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
    'no-console': NODE_ENV === NODE_ENV_PROD ? 'error' : 'off',
    'no-debugger': NODE_ENV === NODE_ENV_PROD ? 'error' : 'off',
    'max-len': ['error', 200],
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'func-names': ['off'],
    'linebreak-style': ['off'],
    'no-unused-vars': ['warn'],
    'no-useless-return': ['warn'],
    'no-use-before-define': ['error', 'nofunc'],
    'no-unused-expressions': ['off'],
    'no-param-reassign': ['warn'],
    'brace-style': ['off'],

    // #endregion

    // #region Vue ESLint规则

    // https://eslint.vuejs.org/rules/#uncategorized
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/key-spacing': ['error', {
      mode: 'strict',
      align: {
        beforeColon: false,
        afterColon: true,
        on: 'colon',
      },
    }],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: true,
    }],
    'vue/eqeqeq': ['error', 'always'],

    // #endregion
  },
  overrides: [{
    files: [
      '**/tests/*.{j,t}s?(x)',
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)',
    ],
    env: {
      mocha: true,
    },
  }],
};
