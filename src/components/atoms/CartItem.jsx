import { useState } from "react";
import Box from "./Box";
import Counter from "./Counter";
import { useCallback } from "react";
import { comma } from "../../utils/convert";

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음
const CartItem = ({ item, onChange }) => {
  const [amounts, setAmounts] = useState(
    item.carts.map((cart) => ({
      id: cart.id,
      amount: cart.price,
    }))
  );
  const [totalAmount, setTotalAmount] = useState(
    item.carts.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0)
  );
  const getOptionAmountById = useCallback(
    (id) => {
      const foundElement = amounts.find((element) => element.id === id);
      return foundElement ? foundElement.amount : 0;
    },
    [amounts]
  );
  const setOptionAmountById = useCallback((id, addNum) => {
    setAmounts((prev) => {
      return prev.map((element) => {
        if (element.id === id) {
          return { ...element, amount: element.amount + addNum };
        }
        return element;
      });
    });
    setTotalAmount((prev) => prev + addNum);
  }, []);

  return (
    <Box className="border rounded bg-white p-4 my-2">
      <h5 className="font-semibold text-[15px] mb-4">{item.productName}</h5>
      {item.carts.map((cart) => {
        return (
          <div
            //옵션 아이디
            key={cart.id}
            className="border rounded bg-[#FDFDFD] p-4 my-2"
          >
            <div className="mb-4">
              <span>{cart.option.optionName}</span>
            </div>
            <div className="flex justify-between items-center">
              <Counter
                value={cart.quantity}
                onIncrease={(count) => {
                  // onChange(아이디, 변경된 수량, 해당 옵션 상품의 가격)
                  onChange(cart.id, count, cart.option.price);
                  setOptionAmountById(cart.id, cart.option.price);
                }}
                onDecrease={(count) => {
                  onChange(cart.id, count, -cart.option.price);
                  setOptionAmountById(cart.id, -cart.option.price);
                }}
              />
              <span className="float-right">
                {comma(getOptionAmountById(cart.id))}원
              </span>
            </div>
          </div>
        );
      })}
      <div className="border rounded bg-[#FAFAFA] p-4 mt-6">
        <span className="font-semibold">주문금액</span>
        <span className="float-right font-semibold">
          {comma(totalAmount)}원
        </span>
      </div>
    </Box>
  );
};
export default CartItem;
