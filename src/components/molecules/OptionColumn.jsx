import { useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { addCart } from "../../api/cart";
import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import comma from "../../utils/convert";
import Button from "../atoms/Button";
import { ReactComponent as Close } from "../../assets/close.svg";
import LinkButton from "../atoms/LinkButton";

/** 옵션 선택 컬럼
 *
 * @param {array} product - 상품 정보
 * @returns {JSX.Element}
 */
const optionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { isLogin } = useSelector((state) => state.auth);

  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.id === option.id);
    if (isOptionSelected) {
      alert("이미 선택된 옵션입니다.");
      return;
    }
    setSelectedOptions((prev) => [
      ...prev,
      {
        id: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName,
      },
    ]);
  };

  const handleOnClickDelete = (option) => {
    setSelectedOptions((prev) => prev.filter((el) => el.id !== option.id));
  };

  const handleOnIncrease = (count, optionId) => {
    setSelectedOptions((prev) =>
      prev.map((el) =>
        el.id === optionId ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
  };

  const handleOnDecrease = (count, optionId) => {
    setSelectedOptions((prev) =>
      prev.map((el) =>
        el.id === optionId ? { ...el, quantity: el.quantity - 1 } : el
      )
    );
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column bg-white w-[360px] py-[30px] pl-[30px]">
      <h3 className="pl-[3px] pb-[10px] text-[16px] font-bold">옵션 선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      {/* 담긴 옵션이 표기 */}
      {selectedOptions.map((option) => (
        <ol key={option.id} className="selected-option-list">
          <li className="selected-option relative pt-[19px] pb-[15px] pl-[18px] pr-[20px] mt-[10px] bg-gray-50">
            <span className="option-name text-[14px]">{option.name}</span>
            <div className="text-[15px] pt-[11px]">
              <Counter
                value={option.quantity}
                onDecrease={(count) => handleOnDecrease(count, option.id)}
                onIncrease={(count) => handleOnIncrease(count, option.id)}
                btnClassName="w-[29px] h-[26px] rounded-[0px]"
                cntClassName="w-[68px] h-[26px] rounded-[0px]"
              />
              <span className="float-right">{comma(option.price)}원</span>
            </div>
            <Button
              onClick={() => handleOnClickDelete(option)}
              className="absolute top-[12px] right-[12px]"
            >
              <Close />
            </Button>
          </li>
        </ol>
      ))}
      <hr className="mt-[10px]" />
      {/* 총 수량과 총 상품금액 */}
      <div className="total-price pt-[22px] pb-[20px] pr-[3px] text-[18px]">
        <span>
          총 수량{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span className="float-right flex whitespace-pre-wrap">
          총 상품금액{" "}
          <div className="text-red-400 font-bold">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </div>
          원
        </span>
      </div>
      <div className="button-group">
        {isLogin ? (
          <Button
            onClick={() =>
              mutate(
                selectedOptions.map((el) => {
                  return { optionId: el.id, quantity: el.quantity };
                }),
                {
                  onSuccess: () => {
                    alert("장바구니에 담겼습니다.");
                  },
                  onError: () => {
                    alert("장바구니에 담기 실패");
                  },
                }
              )
            }
            className="button-cart w-[144px] h-[60px] mr-[4px] rounded-[5px] bg-gray-900 text-white"
          >
            장바구니 담기
          </Button>
        ) : (
          <LinkButton
            to="/login"
            onClick={() => alert("로그인이 필요한 메뉴입니다.")}
            className="button-cart w-[144px] h-[60px] mr-[4px] rounded-[5px] bg-gray-900 text-white text-[18px]"
          >
            장바구니 담기
          </LinkButton>
        )}
        <Button
          onClick={() => {
            // 톡딜가로 구매하기는 과제 구현 요소 아님
            alert("준비중입니다.");
          }}
          className="button-buy w-[182px] h-[60px] rounded-[5px] bg-yellow-kakao text-[18px]"
        >
          톡딜가로 구매하기
        </Button>
      </div>
    </div>
  );
};

export default optionColumn;
