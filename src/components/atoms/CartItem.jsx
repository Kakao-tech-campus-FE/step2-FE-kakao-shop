import { comma } from "../../utils/convert";
import Box from "./Box";
import Counter from "./Counter";
import CheckBox from "./CheckBox";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../apis/product";
import Photo from "../atoms/Photo";
import { Link } from "react-router-dom";
import { staticServerUri } from "../../constants/serverUri";

const CartItem = ({ item, onChangeCount, onChangeCheck, onClick, checked }) => {
  const { data } = useQuery(
    [`product/${item.id}`],
    () => getProductById(item.id),
    { suspense: true }
  );

  return (
    <Box className="mb-3 bg-white px-3 py-5">
      <div className="flex items-center">
        <CheckBox
          value={item.id}
          onChange={onChangeCheck}
          checked={checked}
        ></CheckBox>
        <Photo
          src={staticServerUri + data.data.response.image}
          alt={item.productName}
          className="mx-2 block w-[60px] rounded-md border border-gray-100"
        ></Photo>
        <Link
          to={staticServerUri + `/product/${item.id}`}
          className="text-[15px] font-semibold"
        >
          {item.productName}
        </Link>
      </div>
      {item.carts.map((cart) => {
        return cart.quantity ? (
          <Box
            key={cart.id}
            className="my-2 ml-9 rounded-sm border border-gray-200 p-2"
          >
            <div>
              <span className="text-sm text-[#555]">
                {cart.option.optionName}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex">
                <button
                  className="mr-2 h-[30px] w-[54px] rounded-sm border border-gray-200 bg-white text-sm"
                  onClick={() => {
                    onClick(cart.id);
                  }}
                >
                  삭제
                </button>
                <Counter
                  quantity={cart.quantity}
                  onIncrease={(count, e) => {
                    onChangeCount(
                      cart.id,
                      count,
                      cart.option.price,
                      "increase"
                    );
                  }}
                  onDecrease={(count) => {
                    onChangeCount(
                      cart.id,
                      count,
                      cart.option.price,
                      "decrease"
                    );
                  }}
                />
              </div>

              <div className="pt-2">
                <span className="text-[15px] font-bold">
                  {comma(cart.option.price * cart.quantity)}원
                </span>
              </div>
            </div>
          </Box>
        ) : null;
      })}

      <div className="ml-9 flex justify-between rounded-sm border border-gray-200 bg-[#fafafa] p-3 text-[15px] font-bold text-[#333]">
        <h5>주문금액</h5>
        <div>
          {comma(
            item.carts.reduce((acc, cur) => {
              return acc + cur.option.price * cur.quantity;
            }, 0)
          )}
          원
        </div>
      </div>
    </Box>
  );
};

export default CartItem;
