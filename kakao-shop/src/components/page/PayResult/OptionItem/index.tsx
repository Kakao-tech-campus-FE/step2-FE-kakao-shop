import type { Item } from '@apis/Order';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { comma } from '@utils/comma';

type Props = Item & {
  productName: string;
};

//item
const OptionItem = ({ productName, optionName, quantity, price }: Props) => {
  return (
    <S.Root>
      <S.Container>
        <S.Info>
          <S.Tit>{productName}</S.Tit>
          <S.OptionTit>{`[옵션] ${optionName}, ${quantity}개`}</S.OptionTit>
          <S.Price>
            <span>{comma(price)}</span>
            <span>원</span>
          </S.Price>
        </S.Info>
      </S.Container>
    </S.Root>
  );
};

export default OptionItem;

const S = {
  Root: styled.li`
    position: relative;
    margin: 0 16px;
  `,

  Container: styled.div`
    display: flex;

    padding: 16px 0 20px;
  `,

  Tit: styled.strong`
    display: block;

    padding-top: 1px;

    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    color: #333;
    text-overflow: ellipsis;
    word-break: break-all;
  `,

  OptionTit: styled.span`
    display: block;

    margin-bottom: 6px;
    padding-top: 2px;

    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    line-height: 16px;
    color: #555;
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

  ImageCSS: css`
    width: 60px;
    height: 60px;

    border-radius: 4px;
  `,

  Info: styled.div``,
};
