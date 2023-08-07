import { useState } from "react";
import Counter from "../atoms/Counter";
import { useMutation, useQuery } from "react-query";
import { addCart, inCart, modifiedCart } from "../../services/cart";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import OptionList from "../atoms/OptionList";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../store/cookies";

const OptionColumn = ({ product }) => {
  const navigate = useNavigate();
  const [selectiedOptions, setSelectiedOptions] = useState([]);
  const [modifiedOptions, setModifiedOptions] = useState([]);
  const handleOnClickOption = (option) => {
    //동일 옵션 클릭 방지 코드
    const isOptionSelected = selectiedOptions.find(
      (el) => el.optionId === option.id
    );
    if (isOptionSelected) {
      setSelectiedOptions((prev) =>
        prev.map((el) =>
          el.optionId === option.id ? { ...el, quantity: el.quantity } : el
        )
      );
      return;
    }
    setSelectiedOptions((prev) => [
      ...prev,
      {
        optionId: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName,
      },
    ]);
  };
  const handleOnClickCart = () => {
    new Promise((resolve, reject) => {
      if (getCookie("token") === null) {
        alert("로그인이 필요한 서비스입니다.");
        navigate("/login");
        reject(0);
        return;
      }
      checkCart(data?.data?.response);
      resolve(1);
    })
      .then(() => {
        if (selectiedOptions.length === 0) {
          return alert("장바구니에 담을 옵션을 선택해주세요.");
        }
        if (modifiedOptions.length !== 0) {
          mu2(modifiedOptions);
        }
        mutate(
          selectiedOptions.map((el) => {
            return {
              optionId: el.optionId,
              quantity: el.quantity,
            };
          }),
          {
            onSuccess: () => {
              alert("장바구니에 담겼습니다.");
              setSelectiedOptions([]);
            },
            onError: (e) => {
              console.log(e);
              alert("failed");
            },
          }
        );
      })
      .catch(() => {
        return;
      });
  };
  const handleOnClickBuy = () => {
    if (data?.data?.response?.products.length === 0) {
      alert("장바구니에 담긴 상품이 없습니다.");
    } else if (
      !data?.data?.response?.products.reduce((arr, cur) => {
        return (
          arr +
          cur.carts.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)
        );
      }, 0)
    ) {
      alert("장바구니에 담긴 상품이 없습니다.");
    } else navigate("/cart");
  };
  const handleOnChange = (count, optionId) => {
    if (count < 0) return;
    setSelectiedOptions((prev) => {
      //추가예정
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: count,
          };
        }
        return el;
      });
    });
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
  });
  const { mutate: mu2 } = useMutation({
    mutationFn: modifiedCart,
  });
  const checkCart = ({ products }) => {
    products.map((el) => {
      if (el.id === product.id) {
        el.carts.map((cart) => {
          selectiedOptions.map((item) => {
            if (cart.option.id === item.optionId) {
              const isOptionSelected = modifiedOptions.find(
                (mod) => mod.cartId === cart.id
              );
              if (isOptionSelected) {
                setModifiedOptions((prev) =>
                  prev.map((mod) =>
                    mod.cartId === cart.id
                      ? { ...mod, quantity: mod.quantity + cart.quantity }
                      : mod
                  )
                );
              } else {
                setModifiedOptions((prev) => [
                  ...prev,
                  { cartId: cart.id, quantity: item.quantity + cart.quantity },
                ]);
              }
            }
          });
          setSelectiedOptions(
            selectiedOptions.filter((item) => {
              return item.optionId !== cart.option.id;
            })
          );
        });
      }
    });
  };
  /*setSelectiedOptions((prev) => {
            console.log(prev);
            prev.map((target) => {
                if (target.optionId !== item.option.id) return target;
                else {
                  setModifiedptions((prev) => [
                    ...prev,
                    {
                      optionId: item.id,
                      quantity: target.quantity + item.quantity,
                    },
                  ]);
                }
                return;
              });*/

  const { data, error, isLoading } = useQuery(`/carts`, () => inCart());
  return (
    <div className="option-column w-full h-full pt-10 bg-white">
      <h3 className="text-left text-l font-bold boarder-2 border-inherit border-black block">
        옵션 선택
      </h3>
      {/*옵션 선택 영역 */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <hr />
      {selectiedOptions.map((option) => (
        <ol key={`${option.optionId}`} className="selected-option-list">
          <div className="bg-slate-300 rounded-md my-2 px-5 py-3">
            <li className="selected-option">
              <div className="text-left">
                <span className="name">{option.name}</span>
              </div>
              <Counter
                className="float-left"
                onIncrease={(count) => handleOnChange(count, option.optionId)}
                onDecrease={(count) => handleOnChange(count, option.optionId)}
              />
              <span className="price ">{comma(option.price)}원</span>
            </li>
          </div>
        </ol>
      ))}
      <div className="del border-2 border-white">
        <div className="flex">
          <div className="font-bold text-left">배송 방법</div>
          <div className="ml-6 w-1/2 text-center">택배 배송</div>
        </div>
        <div className="flex">
          <div className="font-bold text-left">배송비</div>
          <div className="ml-10 text-center w-1/2 border-2 bg-slate-100 rounded-md">
            무료
          </div>
        </div>
      </div>
      <div className="total-price mx-10">
        <span className=" float-left">
          총 수량:
          {comma(
            selectiedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span className="float-right">
          총 상품 금액:
          {comma(
            selectiedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </span>
      </div>
      <div className="button-group">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          className="bg-yellow-500 hover:bg-yellow-600 h-auto text-white font-bold py-2 px-1 w-2/3 mt-10 rounded cursor-pointer transition-colors duration-300"
          onClick={handleOnClickCart}
        >
          장바구니 담기
        </Button>
        {/* 톡딜가 구매 : 개발 x */}
        <Button
          className="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-1 w-2/3 rounded cursor-pointer transition-colors duration-300"
          onClick={handleOnClickBuy}
        >
          구매하기
        </Button>
      </div>
    </div>
  );
};
export default OptionColumn;
