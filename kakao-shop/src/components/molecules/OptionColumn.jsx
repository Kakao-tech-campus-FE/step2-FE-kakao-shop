import OptionList from '../atoms/OptionList.jsx';
import Counter from '../atoms/Counter.jsx';
import Button from '../atoms/Button.jsx';
import Divider from '../atoms/Divider.jsx';
import { comma } from '../../utils/convert.js';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { addCart } from '../../apis/cart.js';

import { GoGift, GoHeart, GoX } from 'react-icons/go';
import GrayBox from '../atoms/GrayBox.jsx';

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

  const handleOptionDelete = (optionId) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== optionId);
    setSelectedOptions(updatedOptions);
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-columns ml-8 mt-8 sm:text-sm md:text-base text-gray-800 w-[400px]">
      <h3 className="font-bold mb-4">옵션선택</h3>
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
      {/* 담긴옵션이 표기 */}
      {/* ui에서 옵션이름, 옵션 가격 */}
      {selectedOptions.map((option) => (
        <ol key={option.id} className="seleted-option-list bg-gray-50 p-4 relative mt-4 mb-3">
          <span className="name text-sm block w-10/12 whitespace-pre-wrap">{option.name}</span>
          <button className="absolute right-2 top-2" onClick={() => handleOptionDelete(option.id)}>
            <GoX size="20" color="gray">
              X
            </GoX>
          </button>
          <div className="flex justify-between items-center mt-4">
            <Counter
              value={option.quantity}
              onIncrease={(count) => handleOnIncrease(count, option.id)}
              onDecrease={(count) => handleOnDecrease(count, option.id)}
            />
            <span className="price text-sm">{comma(option.price * option.quantity)}원</span>
          </div>
        </ol>
      ))}
      <Divider />
      <div className="total-price flex justify-between items-center my-4 text-lg tracking-tighter">
        <span>
          총 수량{' '}
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
          개
        </span>
        <span>
          총 주문금액{' '}
          <span className="font-extrabold text-red-500 tracking-normal">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </span>{' '}
          원
        </span>
      </div>

      <div className="button-group">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          color="kakao"
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
        >
          장바구니 담기
        </Button>
        {/* 톡딜가 X */}
      </div>
    </div>
  );
};

export default OptionColums;
