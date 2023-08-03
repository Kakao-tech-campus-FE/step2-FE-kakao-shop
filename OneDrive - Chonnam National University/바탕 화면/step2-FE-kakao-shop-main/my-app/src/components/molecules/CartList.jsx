import React, { useCallback, useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import { getCart, updateCart } from "../../services/cart";
import { useMutation, useQuery } from "@tanstack/react-query";

const CartList = ( ) => {
  const { data } = useQuery(["cart"], getCart, {
    suspense: true,
  });
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: updateCart,
  });
  useEffect(() => {
    // ?. 연산자를 계속 쓰는 것이 별로 안좋은 패턴이기 때문에
    // validate 또는 구조분해 할당을 사용하는 편이 좋음.
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; // 개별 옵션에 해당
      });
    });
    return comma(count);
  }, [cartItems]);

  // 장바구니에서 수량 변경이 가능
  // 예상 질문
  // 장바구니 수량 변경 API 요청 > 변경된 후에 리턴 받은 데이터만 다시 보여주면 되지 않나요?
  // 맞는 말이긴 한데, 이 방식으로 하게 되었을 때 코드가 많이 지저분해짐.
  /**
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
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
    <Container className="cart-list">
      {/* 제목 */}
      <Box className="flex justify-center p-4">
        <h1 className="text-lg font-bold">장바구니</h1>
      </Box>
      {/* 장바구니에 담긴 품목 카드 */}
      <Card>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <>
                <CartItem
                  key={item.id}
                  item={item}
                  onChange={handleOnChangeCount}
                />
                <br />
              </>
            );
          })}
      </Card>
      <br />
      {/* 주문 예상금액 박스 */}
      <Card>
        <div className="row border flex justify-between p-4">
          <div className="expect font-bold">주문 예상 금액</div>
          <div className="sum-price font-bold text-sky-600">
            {comma(totalPrice)}원
          </div>
        </div>
      </Card>
      {/* 주문하기 버튼 */}
      <Button
        className="order-btn bg-yellow-300 p-4 rounded-xl font-bold w-96 mt-4"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => { // eslint-disable-line no-unused-vars
              navigate("/order");
            },
            onError: (error) => { // eslint-disable-line no-unused-vars
              alert("업데이트에 실패했습니다.");
            },
          });
        }}
      >
        <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
      </Button>
    </Container>
  );
};
export default CartList;

// import React, { useCallback, useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
// import Container from "../atoms/Container";
// import Box from "../atoms/Box";
// import Card from "../atoms/Card";
// import CartItem from "../atoms/CartItem";
// import Button from "../atoms/Button";
// import { useNavigate } from "react-router-dom";
// import { comma } from "../../utils/convert";
// import { updateCart } from "../../services/cart";
// import { useMutation} from "@tanstack/react-query";

// const CartList = ( { data } ) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // const router = useNavigate();
//   const [updatePayload, setUpdatePayload] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCartItems(data?.data?.response?.products);
//     setTotalPrice(data?.data?.response?.totalPrice);
//   }, [data]);

//   const getTotalCartCountIncludeOptions = useCallback(() => {
//     let count = 0;
//     cartItems.forEach((item) => {
//       item.carts.forEach((cart) => {
//         count += cart.quantity; // 개별 옵션에 해당
//       });
//     });
//     return comma(count);
//   }, [cartItems]);

//   /**
//    * @param {number} optionId : 옵션의 아이디
//    * @param {number} quantity : 옵션 수량
//    * @param {number} price : 옵션 가격
//    */
//   const handleOnChangeCount = (optionId, quantity, price) => {
//     setUpdatePayload((prev) => {
//       const isExist = prev.find((item) => item.cartId === optionId);
//       if (isExist) {
//         return [
//           ...prev.filter((item) => item.cartId !== optionId),
//           {
//             cartId: optionId,
//             quantity,
//           },
//         ];
//       }
//       return [
//         ...prev,
//         {
//           cartId: optionId,
//           quantity,
//         },
//       ];
//     });
//     setTotalPrice((prev) => prev + price);
//     setCartItems((prev) => {
//       return prev.map((item) => {
//         return {
//           ...item,
//           carts: item.carts.map((cart) => {
//             if (cart.id === optionId) {
//               return { ...cart, quantity };
//             }
//             return cart;
//           }),
//         };
//       });
//     });
//   };

//   const { mutate } = useMutation({
//     mutationFn: updateCart,
//   });

//   return (
//     <Container className="cart-list">
//       {/* 제목 */}
//       <Box className="flex justify-center p-4">
//         <h1 className="text-lg font-bold">장바구니</h1>
//       </Box>
//       {/* 장바구니에 담긴 품목 카드 */}
//       <Card>
//         {Array.isArray(cartItems) &&
//           cartItems.map((item) => {
//             return (
//               <>
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   onChange={handleOnChangeCount}
//                 />
//                 <br />
//               </>
//             );
//           })}
//       </Card>
//       <br />
//       {/* 주문 예상금액 박스 */}
//       <Card>
//         <div className="row border flex justify-between p-4">
//           <div className="expect font-bold">주문 예상 금액</div>
//           <div className="sum-price font-bold text-sky-600">
//             {comma(totalPrice)}원
//           </div>
//         </div>
//       </Card>
//       {/* 주문하기 버튼 */}
//       <Button
//         className="order-btn bg-yellow-300 p-4 rounded-xl font-bold w-96 mt-4"
//         onClick={() => {
//           mutate(updatePayload, {
//             onSuccess: (data) => { // eslint-disable-line no-unused-vars
//               navigate("/order");
//             },
//             onError: (error) => { // eslint-disable-line no-unused-vars
//               alert("업데이트에 실패했습니다.");
//             },
//           });
//         }}
//       >
//         <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
//       </Button>
//     </Container>
//   );
// };
// export default CartList;
