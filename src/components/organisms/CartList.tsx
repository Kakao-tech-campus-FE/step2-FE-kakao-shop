import { updateCart } from '@api/cartApi';
import { CartProductsQuery, CartProductData, CartedOptionData, EditCartedItem } from '@api/dto';
import FilledButton from '@components/atoms/button/FilledButton';
import CartItem from '@components/molecules/CartItem';
import { Card } from '@mui/material';
import comma from '@utils/commaUtils';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

interface CartListProps {
  data: CartProductsQuery;
}
const CartList = ({ data }: CartListProps) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartProductData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState<EditCartedItem[]>([]); // 렌더링에 관여 안할때는 useRef를 사용 ////근데 수정을 해야하는데 useState쓰는게 let쓰는게 차라리 나음?

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data?.response?.products);
    setTotalPrice(data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    // 재렌더링 될때도 실행x
    let count = 0;
    cartItems.forEach((item: CartProductData) => {
      item.carts.forEach((option: CartedOptionData) => {
        count += option.quantity;
      });
    });
    return count;
  }, [cartItems]);

  const handleOnChangeCount = (id: number, quantity: number, price: number) => {
    setUpdatePayload((prev: EditCartedItem[]) => {
      const isExist = prev.find((item: EditCartedItem) => item.cartId === id);
      if (isExist) {
        return prev;
      }
      return [...prev, { cartId: id, quantity }];
    });
    setTotalPrice((prev: number) => prev + price);
    setCartItems((prev) => {
      return prev.map((item: CartProductData) => {
        return {
          ...item,
          carts: item.carts.map((cart: CartedOptionData) => {
            if (cart.id === id) {
              return { ...cart, quantity };
            }
            return cart;
          }),
        };
      });
    });
  };

  return (
    <>
      <h1>장바구니</h1>
      <Card>
        {/* 상품별 장바구니 */}
        {Array.isArray(cartItems) &&
          cartItems.map((item: CartProductData) => {
            return <CartItem key={item.id} item={item} onChange={handleOnChangeCount} />;
          })}
      </Card>
      <Card>
        <div>
          <span>주문 예상금액</span>
          <div>{comma(totalPrice)}원</div>
        </div>
      </Card>
      <FilledButton
        onClick={() => {
          // updateCard
          // 변경된 개수만 파싱해서 페이로드로 보내준다.
          mutate(updatePayload, {
            onSuccess: () => {
              navigate('/order');
            },
            onError: (error) => {
              ('');
            },
          });
          navigate('/order');
        }}
      >
        <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
      </FilledButton>
    </>
  );
};

export default CartList;
