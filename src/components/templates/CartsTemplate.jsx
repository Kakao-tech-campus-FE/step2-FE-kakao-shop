import { useCallback, useEffect, useState } from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import CartItem from "../molecules/CartItem";
import Box from "../atoms/Box";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { updateCart } from "../../services/cart";
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const CartTemplate = ({ data }) => {
	
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatedPayload, setUpdatedPayload] = useState([]);
  const navigate = useNavigate();

  const totalQuantity = useCallback(() => {
    if (cartItems) {
      const count = cartItems
        .flatMap((item) => item.carts)
        .reduce((acc, cur) => acc + cur.quantity, 0);
      return count;
    } else {
      return 0;
    }
  }, [cartItems]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatedPayload((prev) => {
      if (prev.find((item) => item.cartId === optionId)) {
        return [
          ...prev.filter((item) => item.cartId !== optionId),
          {
            cartId: optionId,
            quantity,
          },
        ];
      }
      return [
        ...prev,
        {
          cartId: optionId,
          quantity,
        },
      ];
    });

    setTotalPrice((prev) => {
      return prev + price;
    });

    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return { ...cart, quantity };
            }
            return cart;
          }),
        };
      });
    });
  };
  return (
    <Container className="cart-list pb-6">
      <Box className="cart-title border rounded-lg bg-white py-2">
        <div className="text-center font-bold text-xl">장바구니</div>
      </Box>

      <Box className="cart-items border rounded-md bg-white">
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount}
              />
            );
          })}
      </Box>
      <Box className="cart-total border rounded-lg bg-white pt-2">
        <div className="row flex justify-between px-4 py-2">
          <span className="expect font-bold text-xl">주문 예상금액</span>
          <div className="sum-price font-bold text-xl  text-indigo-500">
            {totalPrice < 0 ? setTotalPrice(0) : comma(totalPrice)}원
          </div>
        </div>
        <Button
          className="order-button m-auto px-10 py-2 bg-yellow-300 border-none rounded w-full"
          onClick={() => {
            mutate(updatedPayload, {
              onSuccess: () => {
                navigate(staticServerUri + "/order");
              },
              onError: (error) => {
                alert("에러가 발생했습니다.");
              },
            });
          }}
        >
          <span className="font-bold">
            총 <span className=" text-red-500">{totalQuantity()}</span>건
            주문하기
          </span>
        </Button>
      </Box>
    </Container>
  );
};

export default CartTemplate;
