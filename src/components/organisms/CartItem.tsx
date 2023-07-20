import React from 'react';
import CartOptionItem from '../molecules/CartOptionItem';
import { CartProductInfo } from '../../dto/productDto';

interface CartItemProps {
  product: CartProductInfo;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className='mb-3'>
      <div className='flex h-16 items-center'>
        <strong className='text-lg'>{product.productName}</strong>
      </div>
      <div className='space-y-1'>
        {product.carts.map((cart) => (
          <CartOptionItem key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
