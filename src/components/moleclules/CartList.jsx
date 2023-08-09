import { useCallback, useEffect, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import { comma } from "../../utils/convert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../../apis/cart";
import CheckBox from "../atoms/CheckBox";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useCheckBox from "../../hooks/useCheckBox";
import { staticServerUri } from "../../constants/serverUri";

const CartList = ({ data }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [existProducts, setExistProducts] = useState([]);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems?.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity;
      });
    });
    return count;
  }, [cartItems]);

  useEffect(() => {
    setCartItems(data?.data.response.products);
    setTotalPrice(data?.data.response.totalPrice);
  }, [data]);

  useEffect(() => {
    if (cartItems && cartItems?.length !== 0) {
      setExistProducts(
        cartItems
          .filter((item) =>
            item.carts.reduce((acc, cur) => acc + cur.quantity, 0)
          )
          .map((item) => item.id)
      );
    }
  }, [cartItems]);

  const {
    checkedOptions,
    setCheckedOptions,
    handleOnChangeCheck,
    handleOnChangeCheckAll,
  } = useCheckBox(existProducts, existProducts);

  const handleOnChangeCount = (optionId, quantity) => {
    mutate([{ cartId: optionId, quantity }], {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      },
    });
  };

  const handleOnClickOptionDelete = (optionId) => {
    mutate([{ cartId: optionId, quantity: 0 }], {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      },
    });
  };

  const handleOnClickProductDelete = () => {
    const allOptions = [];
    cartItems
      .filter((item) => checkedOptions.includes(item.id.toString()))
      .forEach((item) => {
        item.carts.forEach((option) => {
          if (option.quantity > 0) allOptions.push(option.id);
        });
      });
    mutate(
      allOptions.map((option) => ({ cartId: option, quantity: 0 })),
      {
        onSuccess: () => {
          queryClient.invalidateQueries("cart");
        },
      }
    );
    setCheckedOptions([]);
  };

  return (
    <div className="bg-[#f4f4f4]">
      <Container className="max-w-[870px] px-0">
        <Box className="border-b border-gray-200 bg-white leading-[44px]">
          <h1 className="text-center text-[15px] font-bold">장바구니</h1>
        </Box>
        {existProducts.length ? (
          <>
            <div>
              <div className="flex justify-between border-b border-gray-200 bg-[#fafafa] p-3">
                <CheckBox
                  labelClassName="flex items-center text-sm"
                  onChange={handleOnChangeCheckAll}
                  checked={checkedOptions.length === existProducts.length}
                >
                  전체선택
                </CheckBox>
                <button
                  className="h-[30px] w-[54px] rounded-sm border border-gray-200 bg-white text-sm"
                  onClick={handleOnClickProductDelete}
                >
                  삭제
                </button>
              </div>
            </div>
            <div>
              {Array.isArray(cartItems) &&
                cartItems.map((item) =>
                  existProducts.includes(item.id) ? (
                    <CartItem
                      key={item.id}
                      item={item}
                      onChangeCount={handleOnChangeCount}
                      onChangeCheck={handleOnChangeCheck}
                      onClick={handleOnClickOptionDelete}
                      checked={checkedOptions.includes(item.id.toString())}
                    />
                  ) : null
                )}
            </div>

            <div className="flex justify-between border-t border-gray-200 bg-white p-4">
              <span className="text-lg font-bold">주문 예상금액</span>
              <div className="font-bold text-[#4684e9]">
                {comma(totalPrice)}원
              </div>
            </div>
            <button
              className="mb-5 w-full bg-kakao py-4"
              onClick={() => {
                navigate(staticServerUri + "/order");
              }}
            >
              <span className="font-bold">
                {getTotalCartCountIncludeOptions()}건 주문하기
              </span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center bg-white pb-[200px] pt-[200px]">
            <BiCart color="lightgray" size="50" />
            <p className="my-2 text-lg">장바구니에 담긴 상품이 없습니다.</p>
            <div>
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="mx-1 w-[100px] rounded-md border border-gray-200 py-2 text-sm"
              >
                이전 화면
              </button>
              <button
                onClick={() => {
                  navigate(staticServerUri + "/");
                }}
                className="mx-1 w-[100px] rounded-md bg-black py-2 text-sm text-white"
              >
                쇼핑하기 홈
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartList;
