import styled from '@emotion/styled';
import { Totals } from 'types/product';

import { comma } from '@utils/comma';

type Props = {
  totals?: Totals;
};

const SelectResult = ({ totals }: Props) => {
  if (!totals) return null;

  const { quantity, price } = totals;
  return (
    <S.Root>
      <S.Quantity>
        <span>총 수량</span>
        <span>{quantity}</span>
        <span>개</span>
      </S.Quantity>

      <S.Price>
        <span>주문금액</span>
        <span>{comma(price)}</span>
        <span>원</span>
      </S.Price>
    </S.Root>
  );
};

export default SelectResult;

const S = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    padding: 22px 3px 20px 0;

    border-top: 1px solid #f2f2f2;
    line-height: 24px;
  `,

  Quantity: styled.div`
    font-size: 16px;

    & > span:nth-of-type(1) {
      margin-right: 6px;
    }

    & > span:nth-of-type(2) {
      margin-right: 2px;

      font-weight: 700;
      font-size: 18px;
      vertical-align: top;
    }
  `,

  Price: styled.div`
    & > span:nth-of-type(1) {
      margin-right: 6px;
    }

    & > span:nth-of-type(2) {
      margin-right: 2px;

      font-weight: 700;
      font-size: 19px;
      color: #ff5959;
      vertical-align: top;
    }
  `,
};
