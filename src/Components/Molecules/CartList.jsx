import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../Atoms/Container";
import Box from "../Atoms/Box";
import { Button, Card } from "react-bootstrap";
import { comma } from "../../Utils/convert";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateCart } from "../../Servicies/cart";
import CartItem from "../Atoms/CartItem";
import "../../Styles/Card.css";
import DeleteButton from "../Atoms/DeleteButton";

const CartList = ({ data }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);
  const initPayload = useRef([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountInludeOptions = useCallback(() => {
    let count = 0;

    cartItems &&
      cartItems.forEach((item) => {
        item.carts.forEach((cart) => {
          count += cart.quantity;
        });
      });

    return comma(count);
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리하는 함수
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션의 수량
   * @param {number} price : 옵션 가격
   */
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
  return (
    <div className=" bg-stone-100 flex min-h-screen justify-center items-centers">
      <Container className="mx-auto w-3/5 h-2/3 align-middle border-solid">
        <Box className="card">
          <h1 className="text-center font-bold p-2">장바구니</h1>
          <div className="flex justify-between bg-stone-50 ">
            <div className="p-3 ">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll" className="pl-1 text-sm">
                전체 선택
              </label>
            </div>
            <DeleteButton />
          </div>
        </Box>

        {/* 상품명 장바구니 */}
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <>
                <CartItem
                  key={item.id}
                  item={item}
                  onChange={handleOnChangeCount} // 개수 변경
                />
                <div className="h-3 bg-stone-100"></div>
              </>
            );
          })}

        <Card className="card mt-2">
          <div className="flex justify-between p-5">
            <span className="font-bold text-xl">주문 예상금액</span>
            <div className="font-bold text-blue-500">{comma(totalPrice)}원</div>
          </div>
        </Card>
        <Button
          className="bg-yellow-300 w-full p-3 font-bold mb-20"
          onClick={() => {
            mutate(updatePayload, {
              onSuccess: (data) => {
                navigate("/order");
              },
              onError: (error) => {
                if (error.response.status === 404) {
                  alert("주문할 장바구니 상품이 없습니다.");
                }
              },
            });
          }}
        >
          <span>{getTotalCartCountInludeOptions()}건 주문하기</span>
        </Button>
      </Container>
    </div>
  );
};

export default CartList;
