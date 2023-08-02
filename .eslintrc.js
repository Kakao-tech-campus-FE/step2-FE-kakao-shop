module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', '@tanstack/query'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
