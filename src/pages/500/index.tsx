import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/atom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <S.Root>
      <div>예상치 못한 에러가 발생했습니다.</div>
      <div> 잠시후 다시 시도해주세요.</div>
      <Button onClick={() => navigate('/')} css={S.ButtonStyle}>
        홈으로
      </Button>
    </S.Root>
  );
};

export default Error;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    & > div:nth-of-type(2) {
      margin-top: 4px;
    }
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
