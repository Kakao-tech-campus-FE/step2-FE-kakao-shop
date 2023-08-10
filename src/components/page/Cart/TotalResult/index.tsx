import styled from '@emotion/styled';

import { comma } from '@utils/comma';

type Props = {
  totalPrice: number;
};

const TotalResult = ({ totalPrice }: Props) => {
  return (
    <S.Root>
      <S.Tit>주문 예상금액</S.Tit>
      <S.Price>
        <span>{comma(totalPrice)}</span>
        <span>원</span>
      </S.Price>
    </S.Root>
  );
};

export default TotalResult;

const S = {
  Root: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 60px;
    padding: 16px 20px;
    margin-top: 12px;

    background-color: #ffffff;
  `,

  Tit: styled.span`
    padding: 20px 0;

    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    color: #333;
    letter-spacing: -0.03em;
  `,

  Price: styled.span`
    padding: 20px 22px 20px 0;

    & > span:nth-of-type(1) {
      display: inline-block;

      margin-top: 1px;
      margin-right: 1px;

      font-weight: 700;
      font-size: 22px;
      line-height: 22px;
      color: #ff5959;
      letter-spacing: 0;
      vertical-align: top;
    }

    & > span:nth-of-type(2) {
      font-size: 20px;
    }
  `,
};
