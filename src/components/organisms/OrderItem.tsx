import React from 'react';
import { FiBox } from 'react-icons/fi';
import { CartProductInfo } from '../../dto/productDto';
import OrderOptionItem from '../molecules/OrderOptionItem';

interface OrderItemProps {
  product: CartProductInfo;
}

const OrderItem = ({ product }: OrderItemProps) => {
  return (
    <div className='bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <FiBox />
        <strong className='text-md'>{product.productName}</strong>
      </div>
      <div className='space-y-1'>
        {product.carts.map((cart) => (
          <OrderOptionItem key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default OrderItem;
