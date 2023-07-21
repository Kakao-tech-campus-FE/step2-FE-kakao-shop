import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useCallback } from "react";
import Box from "../atoms/Box";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";
import { getCart, updateCart } from "../../services/cart";
import Title from "../atoms/Title";
import CartItem from "../atoms/CartItem";

const CartList = ({ data }) => {
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    if (data?.data?.response) {
      setCartItems(data?.data?.response?.products);
      setTotalPrice(data?.data?.response?.totalPrice);
    }
  }, [data]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = await getCart();
        if (cartData) {
          setCartItems(cartData.products);
          setTotalPrice(cartData.totalPrice);
        }
      } catch (error) {

      }
    };
    fetchCartItems();
  }, []);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    if (cartItems) {
      cartItems.forEach((item) => {
        item.carts.forEach((cart) => {
          count += cart.quantity; // 개별 옵션에 해당
        });
      });
    }
    return comma(count);
  }, [cartItems]);

  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartId === optionId);
      if (isExist) {
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
    setTotalPrice((prev) => prev + price);
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

  const handleOnDeleteOption = useCallback((optionId, quantity, price) => {
    setUpdatePayload((prev) => {
        const isExist = prev.find((item) => item.cartId === optionId);

        if(isExist) {
            return [
                ...prev.filter((item) => item.cartId !== optionId),
                {
                    cartId: optionId,
                    quantity: 0,
                }
            ]
        };

        return[
            ...prev,
            {
                cartId: optionId,
                quantity: 0,
            }
        ]
    });
    setTotalPrice((prev) => prev - price * quantity);
    setCartItems((prev) => {
        return prev.map((item) => {
            return {
                ...item,
                carts: item.carts.map((cart) => {
                    if(cart.id === optionId) {
                        return {...cart, quantity: 0};
                    }
                    return cart;
                })
            }
        })
    });
}, [cartItems]);

  return (
    <Container className="cart-list">
      <Box>
        <Title className="ml-7">장바구니</Title>
      </Box>
      {cartItems.map((item) => (
        <CartItem
          key={item.productId}
          item={item}
          onChange={handleOnChangeCount}
          onDelete={handleOnDeleteOption}
        />
      ))}
      <div className="row flex  items-center"> {/* Added Tailwind classes */}
        <div className="sum-price ml-7">주문 예상금액 {comma(totalPrice)}원</div>
        <Button
          className="p-2 w-full font-bold bg-yellow-300 rounded-md ml-1.5 mr-1.5"
          onClick={() => {
            mutate(updatePayload, {
              onSuccess: (data) => {
                route.push("/order");
              },
              onError: (error) => {},
            });
          }}
        >
          <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
        </Button>
      </div>
    </Container>
  );
};

export default CartList;
