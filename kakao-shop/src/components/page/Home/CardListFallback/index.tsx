import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { resetHomeState, productDataRequest } from '@store/Home/reducers';
import { useDispatch } from 'react-redux';

import { Button } from '@components/atom';

const CardListFallback = ({ resetErrorBoundary }: any) => {
  const dispatch = useDispatch();

  return (
    <S.Root>
      <S.Tit>잠시 후 다시 시도해주세요.</S.Tit>
      <S.Desc>
        <div>요청사항을 처리하는데</div>
        <div>실패했습니다.</div>
      </S.Desc>
      <Button
        css={S.Button}
        onClick={() => {
          resetErrorBoundary();
          dispatch(resetHomeState());
          dispatch(productDataRequest());
        }}>
        다시 시도
      </Button>
    </S.Root>
  );
};

export default CardListFallback;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 890px;
  `,

  Tit: styled.div`
    font-size: 24px;
    font-weight: 700;
  `,

  Desc: styled.div`
    margin-top: 14px;

    line-height: 22px;
    color: #4c4c4c;
    font-size: 16px;
    text-align: center;
  `,

  Button: css`
    width: 40%;
    height: 50px;

    margin-top: 20px;

    border: 2px solid transparent;
    background-color: #fee500;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;
    line-height: 51px;
    color: #191919;

    cursor: pointer;
  `,
};
