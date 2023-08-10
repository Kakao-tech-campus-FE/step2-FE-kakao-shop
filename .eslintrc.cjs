/* eslint-disable no-undef */
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  "globals": {
        "localStorage": true,
        "fetch": true,
        "alert": true,
        "IntersectionObserver" : true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-react'],
  rules: {
    "no-unused-vars": "off",
    'react/react-in-jsx-scope': "off",
    "react/prop-types": "off",
    "no-extra-boolean-cast": "off",
	"react/no-children-prop": "off",
	"react/no-unknown-property":"off",
	"no-dupe-keys":"off",
	
  },
};