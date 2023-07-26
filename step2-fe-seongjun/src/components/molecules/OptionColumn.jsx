import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { useState } from "react";
import Button from "../atoms/Button";
import { addCart } from "../services/cart";
import {toast} from "react-toastify";

const OptionColumn = ({product}) => {
  const [selectedOptions, setSelectedOptions] = useState([{
     optionId : 1,
     quantity: 1,
     name: "옵션 이름",
     price: 1000,
  }]);

  const handleOnClickOption = (option) => {

    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

    if (isOptionSelected) {
      toast.error("이미 선택된 옵션입니다.", {
        hideProgressBar: true,
        autoClose: 2000,
      })

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
      }
    ])
  }
  
  const handleOnChange = (count, optionId) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: count,
          }
        }
      })
    })
  }

  const handleOnRemove = (optionId) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: 0,
          };
        }
      })
      .filter((el) => el.quantity > 0);
    });
  }

  // react-query의 post하기 위해 useMutation
  const {mutate} = useMutation({
    mutationFn: addCart,
  });


  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      <OptionList 
        options={product.options}
        onClick={handleOnClickOption}
      />
      <hr/>
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list"> 
          <div>
            <span>{option.name}</span>
            <button
              onClick={() => {
                handleOnRemove(option.optionId)
              }}
            >X</button>
          </div>
          <div>
            <li className="selected-option">
              <Counter
                  onIncrease={(count) => handleOnChange(count, option.optionId)}
                  onDecrease={(count) => handleOnChange(count, option.optionId)}
              />
              <span className="name">{option.name}</span>
              <span className="price">{comma(option.price)}원</span>
            </li>
          </div>
        </ol>
      ))}
      <hr/>
      <div className="total-price">
        <span>총 수량 {" "}
        {comma(selectedOptions.reduce((acc, cur) => {
          return acc + cur.quantity;
        }, 0))}
        개
        </span>
        <span>총 주문금액 {" "}
        {comma(selectedOptions.reduce((acc, cur) => {
          return acc + cur.quantity * cur.price;
        }, 0))}
        원
        </span>
      </div>
      <div className="button-group">
        <Button
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.optionId,
                  quantity: el.quantity,
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
          <img src="/cart_white.png" alt="장바구니 담기" />
        </Button>
        <Button>구매하기</Button>
      </div>
    </div>
  ); 
};

export default OptionColumn;