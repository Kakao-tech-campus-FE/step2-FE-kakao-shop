import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";
import Link from "./Link";
import GrayBox from "./GrayBox";

/**
 * 장바구니에 담긴 상품 정보
 *
 * @param {Object} item { id, productName, carts: [{ id, quantity, option: { id, optionName, price } }] }
 * @param {Function} onChange 수량 변경 시 호출되는 함수
 * @param {Function} onDelete 삭제 버튼 클릭 시 호출되는 함수
 */
const CartItem = ({ item, onChange, onDelete }) => {
  // 모든 수량이 0인 경우 null 반환
  const allQuantitiesAreZero = item.carts.every((cart) => cart.quantity === 0);

  if (allQuantitiesAreZero) {
    return null;
  }

  return (
    <Box className="cart-item-box">
      {/* 상품 이름 */}
      <div className="font-bold py-4">
        <Link to={`/products/${item.id}`}>{item.productName}</Link>
      </div>

      {/* 선택된 옵션들 */}
      {item.carts.map(
        (cart) =>
          cart.quantity > 0 && ( // 수량이 0인 옵션은 보여주지 않음
            <div
              key={cart.id}
              className="cart-item-option border border-solid border-gray-300 rounded-md p-3 my-3"
            >
              <div className="option-name text-sm text-gray-600">
                <span className="">{cart.option.optionName}</span>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex">
                  <button
                    className="border border-solid border-gray-300 rounded-sm w-14 mr-2 text-xs text-gray-600"
                    onClick={() => onDelete(cart.id)}
                  >
                    삭제
                  </button>
                  <Counter
                    value={cart.quantity}
                    onIncrease={(count) => {
                      // 아이디, 변경된 수량, 해당 옵션의 상품의 가격
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
          )
      )}
      <div className="total-price">
        <GrayBox
          name="주문금액"
          value={`${comma(
            item.carts.reduce((acc, cur) => {
              return acc + cur.quantity * cur.option.price;
            }, 0)
          )}원`}
        />
      </div>
    </Box>
  );
};

export default CartItem;
