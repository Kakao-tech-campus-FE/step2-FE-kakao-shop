import { css } from '@emotion/react';

import { Button } from '@components/atom';

const Submit = () => {
  return <Button css={S.ButtonCSS}>주문하기</Button>;
};

export default Submit;

const S = {
  ButtonCSS: css`
    font-weight: 700;
    font-size: 18px;
    line-height: 54px;
    color: #333;
    letter-spacing: -0.025em;
    background-color: #feeb00;
  `,
};
