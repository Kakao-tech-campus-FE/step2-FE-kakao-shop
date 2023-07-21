import { useState } from "react";
import Box from "./Box";
import Counter from "./Counter";
import { useCallback } from "react";
import { comma } from "../../utils/convert";
import { Link } from "react-router-dom";
import Button from "./Button";

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
    <Box className="border rounded bg-white p-6 my-2">
      <Link to={`/product/${item.id}`}>
        <h5 className="font-semibold text-[15px] mb-4">{item.productName}</h5>
      </Link>

      {item.carts.map((cart) => {
        return (
          // 개수가 0개인 옵션은 표시하지 않도록 한다.
          cart.quantity !== 0 && (
            <div
              //옵션 아이디
              key={cart.id}
              className="border rounded bg-[#FDFDFD] p-6 my-2"
            >
              <div className="mb-4">
                <span>{cart.option.optionName}</span>
              </div>
              <div className="flex items-center">
                {/* 삭제 버튼 구현 */}
                <Button
                  className="w-fit h-8 mr-3 bg-white border rounded border-neutral-200 "
                  onClick={() => {
                    onChange(cart.id, 0, -cart.quantity * cart.option.price);
                    window.location.replace("/cart");
                    setOptionAmountById(
                      cart.id,
                      -cart.quantity * cart.option.price
                    );
                  }}
                >
                  <span className="text-sm px-3">삭제</span>
                </Button>
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
                <span className="ml-auto">
                  {comma(getOptionAmountById(cart.id))}원
                </span>
              </div>
            </div>
          )
        );
      })}
      <div className="border rounded bg-[#FAFAFA] px-6 py-4 mt-6">
        <span className="font-semibold">주문금액</span>
        <span className="float-right font-semibold">
          {comma(totalAmount)}원
        </span>
      </div>
    </Box>
  );
};
export default CartItem;
