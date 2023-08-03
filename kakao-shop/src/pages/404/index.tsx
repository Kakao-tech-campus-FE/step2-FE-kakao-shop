import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/atom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Root>
      <div>NotFound</div>
      <Button onClick={() => navigate(-1)} css={S.ButtonStyle}>
        이전
      </Button>
    </S.Root>
  );
};

export default NotFound;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  `,

  ButtonStyle: css`
    display: inline-block;

    width: 68px;
    height: 28px;

    margin-top: 16px;

    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 2px;

    font-size: 13px;
    line-height: 29px;
    color: #555;
  `,
};
