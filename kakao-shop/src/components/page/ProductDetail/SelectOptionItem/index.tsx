import close from '@assets/close.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import type { UserSelectOption } from 'types/product';

import { Button, Photo } from '@components/atom';
import { RegularInput } from '@components/molecules';

import { comma } from '@utils/comma';

type Props = {
  option: UserSelectOption;
  onDeleteOption: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
};

const SelectOptionItem = ({ option, onDeleteOption, onIncreaseQuantity, onDecreaseQuantity }: Props) => {
  return (
    <S.Root>
      <Button css={S.ButtonCSS} onClick={onDeleteOption(option.id)}>
        <Photo imageClassName={S.CloseCSS} src={close} alt={'닫기'} />
      </Button>

      <S.Tit>{option.optionName}</S.Tit>

      <S.Container>
        <RegularInput.Counter
          value={option.quantity}
          onClickMinusButton={onDecreaseQuantity(option.id)}
          onClickPlusButton={onIncreaseQuantity(option.id)}
        />
        <S.Price>{comma(option.price)}원</S.Price>
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

    border: 0 none;
    border-radius: 3px;
    background-color: #fafafa;
  `,

  Tit: styled.div`
    font-size: 14px;
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

  Price: styled.span`
    font-size: 14px;
    line-height: 28px;
    color: #333;
  `,

  CloseCSS: css`
    position: absolute;
    top: 12px;
    right: 14px;

    width: 13px;
    height: 13px;

    filter: invert(9%) sepia(0%) saturate(2635%) hue-rotate(318deg) brightness(88%) contrast(72%);
  `,

  ButtonCSS: css`
    position: absolute;
    top: 2px;
    right: 2px;

    border: none;
  `,
};
