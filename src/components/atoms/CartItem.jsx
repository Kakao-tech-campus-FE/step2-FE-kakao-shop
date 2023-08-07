import { comma } from "../../utils/convert";
import Box from "./Box";
import Counter from "./Counter";
import Photo from "./Photo";
import Button from "./Button";
import { useMutation } from "react-query";
import { modifiedCart } from "../../services/cart";

const CartItem = ({ item, onChange, onClick }) => {
  const { mutate } = useMutation({
    mutationFn: modifiedCart,
  });
  return (
    <Box className="cart-item-box border-t-2 border-b-2 border-solid bg-white p-16 rounded-lg">
      <div className="flex ">
        <div className="w-20 h-20 mx-5 mt-2 ">
          <Photo src={`/images/${item.id}.jpg`} />
        </div>
        <h5 className=" ml-5 mt-5 h-5">{item.productName}</h5>
        <Button
          className="border-2 bg-slate-200 rounded-md ml-auto mb-auto"
          onClick={() => {
            const target = item.carts.map((cart) => {
              return {
                cartId: cart.id,
                quantity: 0,
              };
            });
            mutate(target, {
              onSuccess: () => {
                alert("삭제되었습니다.");
              },
            });
          }}
        >
          삭제
        </Button>
      </div>
      {item.carts.map((cart) => {
        if (cart.quantity === 0) return null;
        return (
          <div
            key={cart.id}
            className="cart block border-2 border-slate-200 m-2"
          >
            <div className="option-name">
              <span className="text-black">{cart.option.optionName}</span>
            </div>
            <div className="row">
              <Counter
                onIncrease={(count) =>
                  onChange(cart.id, count, cart.option.price)
                }
                onDecrease={(count) =>
                  onChange(cart.id, count, cart.option.price)
                }
                num={cart.quantity}
              />
              <div className="price">
                <span>{comma(cart.option.price * cart.quantity)}원</span>
              </div>
            </div>
          </div>
        );
      })}

      <div className="total-price ">
        <div className="row">
          <h5 className="px-10 text-center font-bold">주문금액</h5>
          <div className="price">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </div>
        </div>
      </div>
    </Box>
  );
};
export default CartItem;
