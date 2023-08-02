import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { ToastContext } from "../../App";

const CartItem = ({ item, onChange }) => {
  const getItemAmount = () => {
    return item?.carts.reduce((acc, cur) => acc + cur.quantity, 0) || 0;
  };

  const { showToast } = useContext(ToastContext);

  return (
    getItemAmount() !== 0 && (
      <div
        className={
          "cart-item w-full flex flex-col box-border text-left gap-4 p-4 border border-gray-300"
        }
      >
        <span className={"block cart-product-name text-xl font-semibold w-full break-normal"}>
          {item.productName}
        </span>
        {item.carts
          .filter((cart) => cart.quantity !== 0)
          .map((cart) => (
            <div
              key={cart.id}
              className={
                "cart-item-option flex flex-col items-end p-4 m-auto w-full border border-gray-300"
              }
            >
              <div className={"flex flex-row justify-between w-full"}>
              <span className={"font-semibold"}>{cart.option.optionName}</span>
              <button
                className={"del-button flex justify-end items-end"}
                onClick={() =>
                  onChange(cart.id, 0, -cart.quantity * cart.option.price)
                }
              >
                <RxCross2 className={"text-right"} />
              </button>
              </div>
              <div className={"flex flex-col w-full"}>
                <div className="option-name flex flex-row justify-between my-2 text-lg">

                  <span className={"text-sm text-gray-500 font-semibold"}>{comma(cart.option.price)}원</span>
                </div>

                <div className={"row flex flex-row"}>
                  <div className="option-count w-32">
                    <Counter
                      value={cart.quantity}
                      handleOnChange={(value) => {
                        return onChange(
                          cart.id,
                          value,
                          (value - cart.quantity) * cart.option.price
                        );
                      }}
                      handleOnLowerBound={() => {
                        showToast("주문 가능 수량은 1~1,000개입니다.");
                      }}
                      handleOnUpperBound={() => {
                        showToast("주문 가능 수량은 1~1,000개입니다.");
                      }}
                    />
                  </div>
                  <div className="option-price w-full text-right font-semibold">
                    <span>{comma(cart.option.price * cart.quantity)}원</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className={"cart-price text-right"}>
          <div className="row text-lg">
            <h5>주문금액</h5>
            <div className={"price text-xl font-bold"}>
              {comma(
                item.carts.reduce((acc, cur) => {
                  return acc + cur.option.price * cur.quantity;
                }, 0)
              )}
              원
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
