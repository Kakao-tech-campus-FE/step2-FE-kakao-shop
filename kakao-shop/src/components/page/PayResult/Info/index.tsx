import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/atom';

const Info = () => {
  const navigate = useNavigate();

  return (
    <S.Root>
      <S.Header>구매 완료!</S.Header>
      <S.Desc>구매가 정상적으로 완료되었습니다.</S.Desc>
      <Button css={S.ButtonCSS} onClick={() => navigate('/')}>
        쇼핑 계속하기
      </Button>
    </S.Root>
  );
};

export default Info;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 12px;
    padding: 30px 20px;

    background-color: #fff;
  `,

  Header: styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #333;
  `,

  Desc: styled.div`
    margin-top: 8px;

    color: #555;
    font-weight: 400;
  `,

  ButtonCSS: css`
    width: 100px;
    height: 34px;

    margin-top: 12px;

    border-radius: 5px;
    background-color: #1e1e1e;

    color: #fff;
  `,
};
