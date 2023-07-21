import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '@components/atom';
import { RegularInput } from '@components/molecules';

const SelectOptionItem = () => {
  return (
    <S.Root>
      <S.Tit>12.딥센트 용기 5.5L 스윗만다린 1개(+6,400원)</S.Tit>

      <S.Container>
        <S.ControlBox>
          <Button css={S.ButtonCSS}>삭제</Button>
          <RegularInput.Counter value={1} />
        </S.ControlBox>

        <S.Price>
          <span>119,400</span>
          <span>원</span>
        </S.Price>
      </S.Container>
    </S.Root>
  );
};

export default SelectOptionItem;

const S = {
  Root: styled.div`
    position: relative;

    margin-top: 10px;
    padding: 21px 22px 17px 20px;

    border-radius: 3px;
    border: 1px solid #e6e6e6;
  `,

  Tit: styled.div`
    font-size: 16px;
    line-height: 18px;
    color: #111;
    letter-spacing: -0.02em;
  `,

  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 11px;
  `,

  ControlBox: styled.span`
    display: flex;
  `,

  Price: styled.span`
    font-size: 16px;
    line-height: 15px;
    color: #000;

    & > span:nth-of-type(1) {
      margin-right: 1px;

      font-weight: 700;
      font-size: 18px;
    }
  `,

  ButtonCSS: css`
    box-sizing: border-box;
    width: 53px;

    margin-right: 6px;
    padding: 6px 8px;

    background-color: #fff;
    border: 1px solid #dee0e6;
    border-radius: 3px;

    font-size: 13px;
    line-height: 16px;
    color: #333;
    letter-spacing: -0.025em;
  `,
};
