import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/atom';

const Submit = () => {
  const navigate = useNavigate();

  return (
    <Button css={S.ButtonCSS} onClick={() => navigate('/')}>
      확인
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
