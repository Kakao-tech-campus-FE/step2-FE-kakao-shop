import React from "react";
import Box from "./Box";
import { comma } from "../../utils/convert";
import Card from "./Card";
import Counter from "./Counter";
import Button from "./Button";
import Photo from "./Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box border w-full p-4 mb-4">
      {/* 이미지 및 상품명 */}
      {/* Response에 Image 정보 없어 임의로 추가 */}
      <div className="title flex items-center">
        <Photo
          src={staticServerUri + "/images/" + item.id + ".jpg"}
          alt={item.productName}
          className="w-16 rounded-lg"
        />
        <h5 className="font-bold ml-4">{item.productName}</h5>
      </div>

      {item.carts.map((cart) => {
        if (cart.quantity !== 0) {
          return (
            <Card key={cart.id} className="cart">
              <div className="option bg-gray-100 p-4 my-4">
                <div className="option-name">{cart.option.optionName}</div>
                <div className="row flex justify-between">
                  <div className="flex">
                    <Button
                      className="border border-gray-400 bg-white w-10 mr-2"
                      onClick={() => {
                        onChange(cart.id, 0, 0);
                      }}
                    >
                      삭제
                    </Button>
                    <Counter
                      initCount={cart.quantity}
                      onIncrease={(count) => {
                        onChange(cart.id, count, cart.option.price);
                      }}
                      onDecrease={(count) => {
                        onChange(cart.id, count, -cart.option.price);
                      }}
                    ></Counter>
                  </div>
                  <div className="price font-bold">
                    <span>{comma(cart.option.price * cart.quantity)}원</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        }
      })}
      <Card className="total-price">
        <div className="row bg-gray-100 p-4 flex justify-between font-bold">
          <h5>주문금액</h5>
          <div className="price text-blue-500">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default CartItem;
