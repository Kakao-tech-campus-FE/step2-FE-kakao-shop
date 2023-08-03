import React, { useEffect, useState } from 'react';
import Counter from '../atoms/Counter';
import { CartInfo, UpdateCart } from '../../dto/productDto';
import { comma } from '../../utils/convert';
import SimpleButton from '../atoms/SimpleButton';
import { useUpdateCartMutation } from '../../apis/productApi';

interface CartOptionItemProps {
  cart: CartInfo;
  updatedCartOptions: UpdateCart[];
  setUpdatedCartOptions: React.Dispatch<React.SetStateAction<UpdateCart[]>>;
}

const CartOptionItem = ({ cart, updatedCartOptions, setUpdatedCartOptions }: CartOptionItemProps) => {
  const [updatedQuantity, setUpdatedQuantity] = useState(cart.quantity);
  const { mutate: updateCart } = useUpdateCartMutation();

  const handleDecrementClick = (id: number) => {
    setUpdatedCartOptions((prevOptions) => {
      if (prevOptions.length === 0) {
        return [{ cartId: id, quantity: cart.quantity - 1 }];
      }

      return prevOptions.map((option) => {
        if (option.cartId === id) {
          return { ...option, quantity: option.quantity - 1 };
        }
        return option;
      });
    });
    setUpdatedQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleIncrementClick = (id: number) => {
    setUpdatedCartOptions((prevOptions) => {
      if (prevOptions.length === 0) {
        return [{ cartId: id, quantity: cart.quantity + 1 }];
      }

      return prevOptions.map((option) => {
        if (option.cartId === id) {
          return { ...option, quantity: option.quantity + 1 };
        }
        return option;
      });
    });
    setUpdatedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDeleteButtonClick = () => {
    setUpdatedCartOptions((prevOptions) => {
      if (prevOptions.length === 0) {
        return [{ cartId: cart.id, quantity: 0 }];
      }

      return prevOptions.map((option) => {
        if (option.cartId === cart.id) {
          return { ...option, quantity: 0 };
        }
        return option;
      });
    });
    setUpdatedQuantity(0);
  };

  useEffect(() => {
    updateCart(updatedCartOptions);
  }, [updatedCartOptions]);

  return (
    <div className='space-y-2 border p-3'>
      <p>{cart.option.optionName}</p>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-2'>
          <SimpleButton onClick={handleDeleteButtonClick}>삭제</SimpleButton>
          <Counter
            quantity={updatedQuantity}
            onDecrementClick={() => handleDecrementClick(cart.id)}
            onIncrementClick={() => handleIncrementClick(cart.id)}
          />
        </div>
        <strong>{comma(cart.option.price * updatedQuantity)}원</strong>
      </div>
    </div>
  );
};

export default CartOptionItem;
