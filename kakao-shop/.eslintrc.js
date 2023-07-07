module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  extends: [
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'error',
    //young-dong history module 때문에 설정하였습니다.
    'no-underscore-dangle': 'off',
    // _언더스코어 식별자 사용 관련 룰 비활성화
    'no-alert': 'off',
    'react/display-name': 'off',
    // alert 자주 사용하므로 비활성화
    'global-require': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // chechs rules of hooks
    'react-hooks/exhaustive-deps': 'warn',
    // dependency 관련 에러는 경고(노란줄)로 바꿈
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    // js도 확장자 가능하게끔 설정
    'prettier/prettier': 'error',
    // eslint-plugin-prettier의 룰을 활성화
    'arrow-body-style': 'off',
    // eslint-plugin-prettier와 충돌하는 ESLint 코어 룰을 비활성화
    'prefer-arrow-callback': 'off',
    // eslint-plugin-prettier와 충돌하는 ESLint 코어 룰을 비활성화
    'import/no-unresolved': 'off',
    // src 폴더 밑에 있는 이미지 file을 임포트하는 과정에서 에러로 표기되는 이슈 방지
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    // a tag에 href 사용하도록 경고하는 룰
    'jsx-a11y/click-events-have-key-events': 'off',
    // 마우스가 아닌 키보드로 컴퓨터를 이용하는 사람들을 위한 접근성 옵션 꺼둠. 추후 적용하고자 하면 제거할 것
    'jsx-a11y/no-static-element-interactions': 'off',
    // semantic 의미를 갖고 있지 않은 태그 사용을 지양하도록 하는 옵션 꺼둠
    'react/jsx-props-no-spreading': 'off',
    // jsx에 넘겨주는 props 에 spread 연산자를 사용할 수 있게끔 셋팅
    'react/no-children-prop': 'off',
    // children 으로 Prop 넘겨줄 수 있도록 설정
    'react/prop-types': 'off',
    // Since we do not use prop-types
    'react/require-default-props': 'off',
    // Since we do not use prop-types
    'react/no-array-index-key': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'import/named': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
