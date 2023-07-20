import close from '@assets/close.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

import { Photo } from '@components/atom';
import { RegularInput } from '@components/molecules';

import { UserSelectOption } from '@hooks/page/Detail/useOptionForm';

import { comma } from '@utils/comma';

type Props = {
  option: UserSelectOption;
  increaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  decreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
};

const SelectOptionItem = ({ option, increaseQuantity, decreaseQuantity }: Props) => {
  return (
    <S.Root key={option.id}>
      <Photo imageClassName={S.CloseCSS} src={close} alt={'닫기'} />
      <S.Tit>{option.optionName}</S.Tit>

      <S.Container>
        <RegularInput.Counter
          value={option.quantity}
          onClickMinusButton={decreaseQuantity(option.id)}
          onClickPlusButton={increaseQuantity(option.id)}
        />
        <S.Price>{comma(option.price)}</S.Price>
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
};
