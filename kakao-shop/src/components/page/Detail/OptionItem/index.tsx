import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '@components/atom';

import { comma } from '@utils/comma';

type Props = {
  id: number;
  optionName: string;
  price: number;
  isSelected: boolean;
  onSelectOption: (id: number) => void;
};
const OptionItem = ({ id, optionName: tit, price, isSelected, onSelectOption }: Props) => {
  return (
    <S.Root>
      <Button css={S.ButtonCSS(isSelected)} onClick={() => onSelectOption(id)}>
        <S.Tit>{tit}</S.Tit>
        <S.Price>{comma(price)}</S.Price>
      </Button>
    </S.Root>
  );
};

export default OptionItem;

const S = {
  Root: styled.li`
    border: solid rgba(0, 0, 0, 0.04);
    border-width: 1px 0 0;
  `,

  ButtonCSS: (isSelected: boolean) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;

    padding: 9px 14px 10px;

    border: none;
    background-color: ${isSelected ? 'none' : '#ffffff'};
  `,

  Tit: styled.span`
    margin-right: 4px;

    font-size: 16px;
    line-height: 20px;
    vertical-align: top;
    color: #333;
    letter-spacing: -0.03em;
  `,

  Price: styled.span`
    margin-right: 4px;

    font-size: 16px;
    line-height: 20px;
    vertical-align: top;
    color: #333;
    letter-spacing: -0.03em;
  `,
};
