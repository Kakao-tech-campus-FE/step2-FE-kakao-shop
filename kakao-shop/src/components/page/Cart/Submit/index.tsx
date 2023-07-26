import { css } from '@emotion/react';
import { MouseEventHandler } from 'react';

import { Button } from '@components/atom';

type Props = {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
};
const Submit = ({ onSubmit }: Props) => {
  return (
    <Button onClick={onSubmit} css={S.ButtonCSS}>
      주문하기
    </Button>
  );
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
