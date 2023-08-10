import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import { useMutation } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { useState } from "react";
import Button from "../atoms/Button";
import { addCart } from "../services/cart";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OptionColumn = ({product}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {

    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

    if (isOptionSelected) {
      setSelectedOptions((prev) => 
        prev.map((el) => (el.optionId === option.id ? el: {...el}))
      );
      return;
    }

    setSelectedOptions((prev) => [
      ...prev,
      {
        optionId: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName,
      },
    ]);
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

  const handleOnRemove = (optionId) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: 0,
          };
        }
        return el;
      })
      .filter((el) => el.quantity > 0);
    });
  }

  // react-query의 post하기 위해 useMutation
  const {mutate} = useMutation({
    mutationFn: addCart,
  });


  return (
    <div className="mr-24 ml-6 w-3/5 text-black">
      <div className="mt-2 border rounded-1">
        <OptionList options={product.options} onClick={handleOnClickOption}/>
      </div>
      <hr/>
      <div className="my-4">
        {selectedOptions.length > 0 && (
          <>
            {selectedOptions.map((option) => (
              <div className="mb-2 p-3 border">
                <ol key={option.optionId} className="selected-option-list"> 
                <li className="selected-option">
                <div className="flex justify-between">
                <span>{option.name}</span>
                <button
                  className="border px-2"
                  onClick={() => {
                    handleOnRemove(option.optionId)
                  }}
                >X</button>
              </div>
              <div>
                
                  <Counter
                    onIncrease={(count) => handleOnChange(count, option.optionId)}
                    onDecrease={(count) => handleOnChange(count, option.optionId)}
                  />
                  {/* <span className="name">{option.name}</span> */}
                  <span className="price">{comma(option.price)}원</span>
              </div>
              </li>
              </ol>
            </div>
          ))}
          </>
          
        )}
      </div>
      <hr/>
      <div className="mt-4 flex justify-between">
        <span className="text-xl">총 수량 {" "}
        {comma(selectedOptions.reduce((acc, cur) => {
          return acc + cur.quantity;
        }, 0))}
        개
        </span>
        <span className="text-xl">총 주문금액 {" "}
          <span className="font-bold text-red-500">{comma(selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity * cur.price;
             }, 0))}
            원
          </span>
        </span>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
                  name: el.name,
                  optionId: el.optionId,
                  quantity: el.quantity,
                  price: el.price,
                };
              }), {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다.")
                },
                onError: () => {
                  alert("장바구니 담기에 실패했습니다.")
                }
              }
            )
          }}
        >
          <img src={staticServerUri + "/cart_white.png"} alt="장바구니 담기" className="h-15" />
        </Button>
        <div>
          <button className="text-xl block w-full h-15 mx-4 px-10 py-5 bg-yellow-400 rounded">구매하기</button>
        </div>
      </div>
    </div>
  ); 
};

export default OptionColumn;