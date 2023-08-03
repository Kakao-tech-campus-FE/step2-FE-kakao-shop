import { useState } from "react";
import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { addCart } from "../../services/cart";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/molecules/OptionColumn.css";
import { useNavigate } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const OptionColumn = ({ product }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 동일한 옵션 클릭 했을때 방지해줄 코드(이미 선택된 옵션인가?)
    // 사용자가 선택한 옵션과 기존옵션이 일치하는 것을 isOptionSelected에 담아주고

    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

    if (isOptionSelected) {
      alert("이미 장바구니에 담긴 상품입니다🧐");
      return;
      // setSelectedOptions((prev) =>
      //   prev.map((prevOption) =>
      //     prevOption.optionId === option.id
      //       ? { ...prevOption, quantity: prevOption.quantity + 1 }
      //       : prevOption
      //   )
      // );
      // return;
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

  //장바구니 담기 api 처리(react-query)
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column">
      <h3>옵션선택</h3>
      <OptionList
        options={product.options}
        //사용자가 선택한 옵션이 담긴다.
        onClick={handleOnClickOption}
      />

      {/* 담긴 옵션 표기 */}
      {selectedOptions.map((option) => (
        <ol key={option.id} className="selected-option-list">
          <li className="selected-option-item">
            <span className="selected-option-name">{option.name}</span>
            <div className="selected-option-update">
              <Counter
                className="selected-option-count"
                onIncrease={(count) => handleOnChange(count, option.optionId)}
                onDecrease={(count) => handleOnChange(count, option.optionId)}
              />
              <span className="selected-option-price">
                {comma(option.price * option.quantity)}원
              </span>
            </div>
          </li>
        </ol>
      ))}

      <div className="delivery-row">
        <div className="row">
          <span className="row-l">배송방법</span>
          <span className="row-r">택배배송</span>
        </div>
        <div className="row">
          <span className="row-l">배송비</span>
          <span className="row-r">무료</span>
        </div>
      </div>

      {/* 구분선 */}
      <hr />
      <div className="total">
        <span className="total-quantity">
          총 수량:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span className="total-price">
          총 주문금액:{" "}
          <span>
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </span>
          원
        </span>
      </div>

      <div className="button-group">
        <Button className="btn-l">
          <span className="material-symbols-outlined">favorite</span>
        </Button>
        <Button
          onClick={() => {
            mutate(
              // selectedOptions에서 필요한 데이터만 id와 수량만
              selectedOptions.map((el) => {
                return {
                  optionId: el.optionId,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다😊");
                  navigate(staticServerUrl + "/cart");
                },
                onError: () => {
                  alert("장바구니 담기에 실패했습니다😥");
                },
              }
            );
          }}
          className="btn-l"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
        {/* <Button className="order-btn">구매하기</Button> */}
        <Button variant="order-btn" className="order-btn">
          구매하기
        </Button>
      </div>
    </div>
  );
};

export default OptionColumn;
