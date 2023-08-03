import React from 'react';
import CartOptionItem from '../molecules/CartOptionItem';
import { CartProductInfo, UpdateCart } from '../../dto/productDto';

interface CartItemProps {
  product: CartProductInfo;
  updatedCartOptions: UpdateCart[];
  setUpdatedCartOptions: React.Dispatch<React.SetStateAction<UpdateCart[]>>;
}

const CartItem = ({ product, updatedCartOptions, setUpdatedCartOptions }: CartItemProps) => {
  return (
    <div className='mb-3 bg-white'>
      <div className='border-b-1 flex h-16 items-center p-4'>
        <strong className='text-lg'>{product.productName}</strong>
      </div>
      <div className='space-y-1 p-4'>
        {product.carts.map((cart) => (
          <CartOptionItem
            key={cart.id}
            cart={cart}
            updatedCartOptions={updatedCartOptions}
            setUpdatedCartOptions={setUpdatedCartOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
