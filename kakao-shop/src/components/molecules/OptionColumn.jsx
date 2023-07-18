import OptionList from '../atoms/OptionList.jsx';
import Counter from '../atoms/Counter.jsx';
import Button from '../atoms/Button.jsx';
import { comma } from '../../utils/convert.js';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { addCart } from '../../apis/cart.js';

import { GoGift, GoHeart } from 'react-icons/go';

/**
 * 옵션 선택 컬럼
 *
 * @param {object} product 상품 정보
 * @returns {JSX.Element} 옵션 선택 컬럼
 */

const OptionColums = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnclickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.id === option.id);

    // 이미 선택된 옵션이면 선택하지 못하게 처리
    if (isOptionSelected) {
      alert('이미 선택된 옵션입니다.');
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

  const handleOnIncrease = (count, optionId) => {
    setSelectedOptions((prev) => prev.map((el) => (el.id === optionId ? { ...el, quantity: el.quantity + 1 } : el)));
  };

  const handleOnDecrease = (count, optionId) => {
    setSelectedOptions((prev) => prev.map((el) => (el.id === optionId ? { ...el, quantity: el.quantity - 1 } : el)));
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
  });
  return (
    <div className="option-columns m-8">
      <h3>옵션 선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList
        options={product.options}
        // 사용자가 선택한 option
        onClick={
          handleOnclickOption
          // 장바구니 담기 api
          // optionId, quantity
        }
      />
      <hr />
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      {/* 담긴옵션이 표기 */}
      {/* ui에서 옵션이름, 옵션 가격 */}
      {selectedOptions.map((option) => (
        <ol key={option.id} className="seleted-option-list">
          수량변경{' '}
          <Counter
            value={option.quantity}
            onIncrease={(count) => handleOnIncrease(count, option.id)}
            onDecrease={(count) => handleOnDecrease(count, option.id)}
          />
          <span className="name">{option.name}</span>
          <span className="price">{comma(option.price)}원</span>
        </ol>
      ))}
      <hr />
      <div className="total-price">
        <span>
          총 수량:{' '}
          {selectedOptions.reduce((acc, cur) => {
            // acc: 이전 값
            // cur: 현재 선택된 엘리먼트
            return acc + cur.quantity;
          }, 0)}
          개
        </span>
        <span>
          총 상품금액:{' '}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              // acc: 이전 값
              // cur: 현재 선택된 엘리먼트
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
        </span>
      </div>
      <div className="button-group">
        {/* 장바구니 담기 버튼 위치 */}
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
                  alert('장바구니에 담기 실패했습니다.');
                },
              }
            );
          }}
        ></Button>
        {/* 톡딜가 X */}
      </div>

      <div className="flex mt-3">
        <GoGift size="25" color="gray" />
        <GoHeart size="25" color="gray" className="ml-2" />
      </div>
    </div>
  );
};

export default OptionColums;
