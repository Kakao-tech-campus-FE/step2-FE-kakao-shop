import { Fragment, MouseEventHandler } from 'react';
import type { Cart } from 'types/product';

import SelectOptionItem from '@components/page/Cart/SelectOption/Item';

type Props = {
  carts: Cart[];
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDeleteCartItem: (id: number) => MouseEventHandler<HTMLButtonElement>;
};
const SelectOptionItemList = ({ carts, onIncreaseQuantity, onDecreaseQuantity, onDeleteCartItem }: Props) => {
  return (
    <Fragment>
      {carts.map(cart => {
        if (cart.quantity === 0) return null;
        return (
          <SelectOptionItem
            key={cart.id}
            {...cart}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteCartItem={onDeleteCartItem}
          />
        );
      })}
    </Fragment>
  );
};

export default SelectOptionItemList;
