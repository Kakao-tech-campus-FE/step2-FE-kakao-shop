import styled from '@emotion/styled';

import { comma } from '@utils/comma';

type Props = {
  totalPrice: number;
};

const SelectOptionResult = ({ totalPrice }: Props) => {
  return (
    <S.Root>
      <span>주문금액</span>
      <S.Price>
        <span>{comma(totalPrice)}</span>
        <span>원</span>
      </S.Price>
    </S.Root>
  );
};

export default SelectOptionResult;

const S = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
    margin: 10px 0;
    padding: 18px 22px 14px 20px;

    background-color: #fafafa;
    border: 1px solid #e6e6e6;
    border-radius: 3px;

    & > span:nth-of-type(1) {
      font-weight: 700;
      color: #333;
    }
  `,

  Price: styled.span`
    display: flex;

    font-size: 16px;
    line-height: 15px;
    color: #000;

    & > span:nth-of-type(1) {
      display: block;

      margin-right: 1px;

      font-weight: 700;
      color: #4684e9;
      font-size: 18px;
    }
  `,
};
