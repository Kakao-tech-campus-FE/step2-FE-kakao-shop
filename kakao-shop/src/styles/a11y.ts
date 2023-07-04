import { css } from '@emotion/react';

const hideWithA11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

export default hideWithA11y;
