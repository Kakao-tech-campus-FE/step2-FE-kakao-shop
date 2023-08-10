import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import type { UserSelectOption } from 'types/product';

import OptionList from '@components/page/ProductDetail/OptionList';
import SelectOptionItemList from '@components/page/ProductDetail/SelectOptionItemList';

type Props = {
  isOpenList: boolean;
  options?: UserSelectOption[];
  onSelectOption: (id: number) => void;
  onDeleteOption: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onToggle: () => void;
};

const OptionListSection = ({
  isOpenList,
  options,
  onSelectOption,
  onDeleteOption,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onToggle,
}: Props) => {
  return (
    <S.Root>
      <S.Tit>옵션 선택</S.Tit>
      <OptionList isOpenList={isOpenList} options={options} onSelectOption={onSelectOption} onToggle={onToggle} />
      <SelectOptionItemList
        options={options}
        onDeleteOption={onDeleteOption}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
      />
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
