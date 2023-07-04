import { css } from '@emotion/react';

const globalStyle = css`
  /* 앱처럼 user-select 제거 */
  * {
    user-select: none;
  }

  /* iOS 15이하 대응 */
  input,
  textarea {
    user-select: auto;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body,
  div,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  input,
  select,
  span,
  strong {
    margin: 0;
    padding: 0;

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  *:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  input,
  textarea,
  button,
  select,
  div,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  /* 모바일 브라우저 높이 */
  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

export default globalStyle;
