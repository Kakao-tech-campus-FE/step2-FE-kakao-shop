import { Cart } from '@store/Cart/reducers';
import { Fragment, MouseEventHandler } from 'react';

import SelectOptionItem from '@components/page/Cart/SelectOption/Item';

type Props = {
  carts: Cart[];
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
};
const SelectOptionItemList = ({ carts, onIncreaseQuantity, onDecreaseQuantity }: Props) => {
  return (
    <Fragment>
      {carts.map(cart => (
        <SelectOptionItem
          key={cart.id}
          {...cart}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />
      ))}
    </Fragment>
  );
};

export default SelectOptionItemList;
