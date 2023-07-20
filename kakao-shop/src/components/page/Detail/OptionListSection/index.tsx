import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

import OptionList from '@components/page/Detail/OptionList';
import SelectOptionItemList from '@components/page/Detail/SelectOptionItemList';

import { UserSelectOption } from '@hooks/page/Detail/useOptionForm';

type Props = {
  options?: UserSelectOption[];
  onSelectOption: (id: number) => void;
  increaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  decreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
};

const OptionListSection = ({ options, onSelectOption, increaseQuantity, decreaseQuantity }: Props) => {
  return (
    <S.Root>
      <S.Tit>옵션 선택</S.Tit>
      <OptionList options={options} onSelectOption={onSelectOption} />
      <SelectOptionItemList options={options} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
    </S.Root>
  );
};

export default OptionListSection;

const S = {
  Root: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    max-height: 360px;
    overflow-y: auto;
  `,

  Tit: styled.span`
    margin-bottom: 10px;

    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: #000;
  `,
};
