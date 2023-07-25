import { css } from '@emotion/react';

import { Button } from '@components/atom';

type Props = {
  isAllChecked: boolean;
};
const Submit = ({ isAllChecked }: Props) => {
  return (
    <Button onClick={onSubmit} css={S.ButtonCSS}>
      결제하기
    </Button>
  );

  function onSubmit() {
    if (!isAllChecked) {
      alert('약관에 동의해주세요.');
    }
  }
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
