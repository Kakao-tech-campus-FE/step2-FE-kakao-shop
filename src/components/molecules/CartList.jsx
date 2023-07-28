import Container from "../atoms/Container";
import Box from "../atoms/Box";
import { useEffect, useRef, useState } from "react";
import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import { useMutation } from "react-query";
import { modifiedCart } from "../../services/cart";
import { useNavigate } from "react-router-dom";

const CartList = ({ data }) => {
  const navigate = useNavigate();
  const initPayload = useRef([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: modifiedCart,
  });

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response.totalPrice);
  }, [data]);

  useEffect(() => {
    initPayload.current = data?.data?.response?.products;
  }, []);

  useEffect(() => {
    setTotalPrice(() => {
      if (Array.isArray(cartItems)) {
        return cartItems.reduce(
          (acc, cur) =>
            acc +
            cur.carts.reduce(
              (acc2, cur2) => acc2 + cur2.quantity * cur2.option.price,
              0
            ),
          0
        );
        /*cartItems.forEach((item) => {
          item.carts.forEach((cart) => {
            sum += cart.quantity * cart.option.price;
          });
        });
        return sum;*/
      }
    });
  }, [cartItems]);

  const getTotalCart = () => {
    if (Array.isArray(cartItems)) {
      return comma(
        cartItems.reduce(
          (acc, cur) =>
            acc + cur.carts.reduce((acc2, cur2) => acc2 + cur2.quantity, 0),
          0
        )
      );
      /*cartItems.forEach((item) => {
        item.carts.forEach((cart) => {
          count += cart.quantity;
        });
      });*/
    }
  };
  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartId === optionId);
      if (isExist) {
        if (quantity < 1) {
          return [
            ...prev.filter((item) => item.cartId !== optionId),
            {
              cartId: optionId,
              quantity: 0,
            },
          ];
        }
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

    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return { ...cart, quantity: quantity };
            }
            return cart;
          }),
        };
      });
    });
  };
  return (
    <Container className="cart-list ">
      <Box className="pt-4">
        <h1>장바구니</h1>
      </Box>
      <Card>
        {/*상품 별 장바구니 항목 */}
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
      </Card>
      <Card>
        <div className="row border-2 border-slate-200 bg-white">
          <span className="expect font-bold">주문 예상금액</span>
          <div className="sum-price">{comma(totalPrice)}원</div>
        </div>
      </Card>
      <Button
        className="order-button bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-1 w-full rounded cursor-pointer transition-colors duration-300"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              navigate("/order");
            },
            onError: (err) => {},
          });
        }}
      >
        <span>총 {getTotalCart()}건 주문하기</span>
      </Button>
    </Container>
  );
};
export default CartList;
