import { CartProductData, CartedOptionData } from '@api/dto';
import Counter from '@components/atoms/Counter';
import Card from '@components/atoms/Card';
import comma from '@utils/commaUtils';
import React from 'react';
import InnerFlatCard from '@components/atoms/InnerFlatCard';

interface CartItemProps {
  item: CartProductData;
  onChange: (id: number, quantity: number, price: number) => void;
}

const CartItem = ({ item, onChange }: CartItemProps) => {
  return (
    <div className="my-10">
      <h5 className="text-xl mb-3 ml-5 font-bold">{item.productName}</h5>
      <Card>
        <div className="p-5">
          {item.carts.map((cart: CartedOptionData) => (
            <InnerFlatCard>
              <div className="flex justify-between">
                <div>
                  {/** 선택된 옵션들 나열? */}
                  <div className="mb-3">{cart.option.optionName}</div>
                  <Counter
                    value={cart.quantity}
                    onIncrease={(count) => {
                      // id, 변경된 수량, 해당 상품 가격
                      onChange(cart.id, count, cart.option.price);
                    }}
                    onDecrease={(count) => {
                      onChange(cart.id, count, -cart.option.price);
                    }}
                  />
                </div>
                <span className="font-bold">{comma(cart.price)}원</span>
              </div>
            </InnerFlatCard>
          ))}
          <div className="flex justify-end my-5 text-xl font-bold space-x-3">
            <h5>주문금액</h5>
            <div>
              {comma(
                item.carts.reduce((acc, cur) => {
                  return acc + cur.price;
                }, 0),
              )}
              원
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartItem;
