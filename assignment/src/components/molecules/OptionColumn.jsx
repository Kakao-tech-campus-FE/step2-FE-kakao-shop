import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import OptionList from '../atoms/OptionList';
import Counter from '../atoms/Counter';
import { comma } from '../../utils/convert';
import { addCart } from '../../services/cart';
import Button from '../atoms/Button';

const OptionColumn = ({ product }) => {
  // 선택 옵션들을 담는 배열
  const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleOnClickOption = (option) => {};
  // const handleOnChange = (count, optionId) => {};
  // 2.
  const { mutate } = useMutation({
    mutationFn: addCart,
  });
  // 1.
  // mutate({
  //   optionId: option.id,
  //   quantity: count,
  // });

  const handleOnClickOption = (option) => {
    // 동일 옵션 클릭 방지코드(이미 선택된 옵션인지 확인)
    const isOptionSelected = selectedOptions.find(
      (selectedOption) => selectedOption.optionId === option.id,
    );
    // 이미 선택된 옵션이면 수량 증가
    if (isOptionSelected) {
      setSelectedOptions((prev) =>
        prev.map((selectedOption) =>
          selectedOption.optionId === option.id
            ? {
                ...selectedOption,
                quantity: selectedOption.quantity + 1,
              }
            : selectedOption,
        ),
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
  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      {/* 옵션담기 */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      {selectedOptions.map((option) => (
        <ol key={option.id} className="selected-option-list">
          <li className="selected-option">
            <Counter
              onIncrease={(count) => handleOnChange(count, option.id)}
              onDecrease={(count) => handleOnChange(count, option.id)}
            />
            <span className="name">{option.name}</span>
            <span className="price">{comma(option.price)}원</span>
          </li>
        </ol>
      ))}
      {/* 사용자가 선택한 option */}
      <hr />
      <div className="total-price">
        <span>
          총 수량 :{' '}
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
        </span>
        <span>
          총 상품금액 :
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity * cur.price;
          }, 0)}
        </span>
      </div>
      {/* 담긴 옵션 표기 */}
      {/* UI에서 필요한 정보 : 옵션이름, 옵션 가격, 옵션 수량, 옵션 총가격 */}

      {/* 장바구니 담기 버튼 위치 : 장바구니 담기만 구현
      톡딜가 구매 : 개발 X */}
      <div className="button-group" />
      <Button
        onClick={() => {
          mutate(
            selectedOptions.map((el) => {
              return {
                optionId: el.id,
                quantity: el.quantity,
              };
            }),
            {
              onSuccess: () => {
                alert('장바구니에 담겼습니다.');
              },
              onError: () => {
                alert('장바구니 담기에 실패했습니다..');
              },
            },
          );
        }}
      >
        버튼
      </Button>
    </div>
  );
};

export default OptionColumn;
