import { Fragment, MouseEventHandler } from 'react';

import SelectOptionItem from '@components/page/Detail/SelectOptionItem';

import { UserSelectOption } from '@hooks/page/Detail/useOptionForm';

type Props = {
  options?: UserSelectOption[];
  onDeleteOption: (id: number) => MouseEventHandler<HTMLButtonElement>;
  increaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  decreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
};
const SelectOptionItemList = ({ options, onDeleteOption, increaseQuantity, decreaseQuantity }: Props) => {
  return (
    <Fragment>
      {options?.map(option => {
        if (!option.isSelected) return null;
        return (
          <SelectOptionItem
            key={option.id}
            option={option}
            onDeleteOption={onDeleteOption}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}
    </Fragment>
  );
};

export default SelectOptionItemList;
