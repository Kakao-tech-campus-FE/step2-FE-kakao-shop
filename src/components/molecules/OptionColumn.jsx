import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import { addCart } from "../../services/api/cart";
import Button from "../atoms/Button";
import { BsCart2, BsFillHeartFill, BsXLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOnClickOption = (option) => {
    // 동일한 옵션 클릭을 방지해 주는 코드(이미 선택된 옵션인지 확인)
    // Array의 find 메소드 이용, 찾았을 때 : 엘리먼트를 리턴, 찾지 못했을 때 : undefined 리턴
    const isOptionSelected = selectedOptions.find((el) => {
      return el.optionId === option.id;
    });
    // 이미 선택된 옵션이면 수량을 증가시킨다. => 코드를 간편하게 하기위해 강의에서는 아무 일도 일어나지 않도록 처리
    if (isOptionSelected) {
      // selectedOptions((prev) => {
      //   prev.map((el) => {
      //     el.optionId === option.id ? {
      //       ...el, quantity: el.quantity + 1
      //     } : el
      //   })
      // })
      return;
    }

    setSelectedOptions((prev) => {
      return [
        ...prev,
        {
          optionId: option.id,
          quantity: 1,
          price: option.price,
          name: option.optionName,
        },
      ];
    });
  };
  const handleOnChange = (count, optionId) => {
    setSelectedOptions((prev) => {
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

  const handleDeleteOption = (targetId) => {
    setSelectedOptions((prev) => prev.filter((el) => el.optionId !== targetId));
  };

  /* 장바구니 담기 api 처리
  리액트 쿼리에서 get 메소드는 useQuery를 이용하여 요청, 관리했다.
  post 메소드는 useMutation을 이용하여 관리한다.
  mutation : 돌연변이, 기존의 상태를 변경한다는 의미
  */
  /* useMutaion의 mutationFn으로 addCart 함수를 바인딩 했는데
  addCart 함수는 매개변수를 필요로 한다. => 그럼 어떻게 사용해야 하지?
  const {mutate} = useMutaion처럼 mutate에 useMutation을 받아주고
  mutate({ optionId: 1, quantity: 1}) 처럼 사용한다. */
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  const route = useNavigate();

  return (
    <div className="flex-none sticky top-20 pt-8 pl-8 pb-8 w-[380px] h-fit">
      <div className="overflow-y-auto max-h-[420px] mb-4">
        <h3 className="pl-1 pb-2 font-semibold">옵션선택</h3>
        {/* 옵션 담기를 할 수 있는 영역 */}
        <OptionList
          options={product.options}
          // 사용자가 선택한 option
          onClick={
            // 장바구니 담기 api
            // optionId, quantity
            handleOnClickOption
          }
        />
        <hr />
        {/* 담긴 옵션이 표기 */}
        {/* ui에서 필요한 정보: 옵션의 이름, 가격, 수량, 총 가격 */}
        <ol className="selected-option-list">
          {selectedOptions.map((option) => {
            return (
              <li
                key={option.optionId}
                className="bg-neutral-100 mt-[10px] p-5"
              >
                <span className="text-sm">{option.name}</span>
                <button
                  className="float-right border bg-white w-6 h-6 items-center"
                  onClick={() => handleDeleteOption(option.optionId)}
                >
                  <BsXLg className="m-auto" />
                </button>
                <div className="flex justify-between items-center pt-3">
                  <Counter
                    value={option.quantity}
                    /*Counter에 onDec, Inc의 props로 함수를 전달하였으므로
              onDec, Inc에서 이용되는 count는 Counter의 handleOnDec, Inc에서 실행된 
              count -1, count +1의 값이 여기에서 count로 이용된다. */
                    onDecrease={(count) =>
                      handleOnChange(count, option.optionId)
                    }
                    onIncrease={(count) =>
                      handleOnChange(count, option.optionId)
                    }
                    // 위의 두 줄의 코드를 아래 처럼 한 줄의 코드로 바꿔줘도 된다.
                    // 그렇게 하려면 Counter에서 props의 추가적인 수정이 필요하겠지만
                    // onChange={(count) => handleOnChange(count, option.id)}
                  />
                  <span className="text-sm">{comma(option.price)}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="border-b border-neutral-200">
        <div>
          <div className="float-left w-[70px]">
            <strong className="text-sm">배송방법</strong>
          </div>
          <div className="item_cont">
            <span className="text-sm"> 택배배송 </span>
          </div>
        </div>
        <div className="mt-1 mb-3">
          <div className="float-left w-[70px]">
            <strong className="text-sm">배송비</strong>
          </div>
          <div className="item_cont">
            <span className="text-sm"> 무료 </span>
          </div>
        </div>
      </div>
      <div className="total-price py-5">
        <span className="text-lg">
          총 수량{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              // acc : 이전 값
              // cur : 현재 선택된 엘리먼트
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span className="float-right text-lg">
          총 주문금액{" "}
          <span className="text-xl font-semibold text-red-500 px-1">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </span>
          원
        </span>
      </div>
      <div className="button-group flex justify-around">
        <Button
          className="w-14 h-14 rounded bg-rose-500 flex items-center justify-center"
          onClick={() => {}}
        >
          <BsFillHeartFill className="text-2xl text-white" />
        </Button>
        <Button
          className="w-14 h-14 rounded bg-black flex items-center justify-center"
          onClick={() => {
            if (selectedOptions.length === 0) {
              alert("선택된 옵션이 없습니다.");
              return;
            }
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.optionId,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다.");
                },
                onError: (error) => {
                  if (error.status === 401) alert("로그인이 필요합니다.");
                  else
                    alert(`${error?.message}\n장바구니 담기에 실패했습니다.`);
                },
              }
            );
          }}
        >
          <BsCart2 className="text-2xl text-white" />
        </Button>
        <Button
          className="w-48 h-14 rounded bg-[#FFEB00] hover:bg-yellow-400"
          onClick={() => {
            if (selectedOptions.length === 0) {
              alert("선택된 옵션이 없습니다.");
              return;
            }

            // mutate(selectedOptions)
            /* 위의 코드처럼 바로 전달해 주면 안된다. 
          api에서는 id와 quantity만을 필요로 하는데, 
          selectedOption에는 price, name과 같은 정보들이 추가적으로 담겨있기 때문 */
            /* 또한 mutate내에서 콜백을 관리할 수 있다.
          두 번째 매개변수로, 옵션을 지정하여 이용 */
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.optionId,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  route("/order"); //장바구니에 담은 후 주문 페이지로 이동
                },
                onError: (error) => {
                  if (error.status === 401) alert("로그인이 필요합니다.");
                  else {
                    alert(`요청에 실패했습니다.`);
                    console.log(error?.message);
                  }
                },
              }
            );
          }}
        >
          구매하기
        </Button>
      </div>
    </div>
  );
};
export default OptionColumn;
