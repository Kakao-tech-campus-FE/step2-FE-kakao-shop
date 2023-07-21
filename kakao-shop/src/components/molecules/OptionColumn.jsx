import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import OptionList from '../atoms/OptionList.jsx';
import Counter from '../atoms/Counter.jsx';
import Button from '../atoms/Button.jsx';
import Divider from '../atoms/Divider.jsx';

import { addCart } from '../../apis/cart.js';

import { comma } from '../../utils/convert.js';
import { goToToast, defaultToast } from '../../utils/swal.js';

import { GoHeart, GoX } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';

/**
 * 옵션 선택 컬럼
 *
 * @param {object} product 상품 정보
 * @returns {JSX.Element} 옵션 선택 컬럼
 */

const OptionColums = ({ product }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnclickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.id === option.id);

    // 이미 선택된 옵션이면 선택하지 못하게 처리
    if (isOptionSelected) {
      defaultToast('이미 선택된 옵션입니다');
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

  const handleMutation = (mutationOptions, successMessage, errorMessage) => {
    if (selectedOptions.length === 0) {
      defaultToast('옵션을 선택해주세요');
      return;
    }

    mutate(
      selectedOptions.map((el) => {
        return {
          optionId: el.id,
          quantity: el.quantity,
        };
      }),
      {
        onSuccess: () => {
          goToToast(successMessage, '/cart', navigate);
        },
        onError: () => {
          let message = errorMessage;
          if (error?.response?.status === 401) {
            message = '로그인이 필요한 기능입니다';
          }
          defaultToast(message);
        },
        ...mutationOptions,
      }
    );
  };

  const handleAddCart = () => {
    return () => {
      handleMutation({}, '장바구니에 물건을 담았습니다', '장바구니 담기 오류');
    };
  };

  /**
   * @todo 추후 구매페이지 상세 기능에 따라 수정
   */
  const handleBuyNow = () => {
    return () => {
      handleMutation({}, '선택한 상품을 구매합니다', '구매 오류');
    };
  };

  const { mutate, error } = useMutation({
    mutationFn: addCart,
    refetchQueries: ['cart', 'cartNum'],
  });

  return (
    <div className="option-columns ml-8 mt-8 sm:text-sm md:text-base text-gray-800 w-[400px]">
      <h3 className="font-bold mb-4">옵션선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList
        options={product.options}
        // 사용자가 선택한 option
        onClick={handleOnclickOption}
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

      <div className="button-group grid grid-flow-row-dense grid-cols-6 gap-2">
        {/* 찜 하기(기능 구현 X) */}
        <Button className="col-span-1 h-14" color="gray" onClick={() => {}}>
          <GoHeart size="34" color="white" />
        </Button>
        {/* 장바구니 담기 */}
        <Button color="black" className="col-span-1 h-14" onClick={handleAddCart()}>
          <BsCart2 size="30" />
        </Button>
        {/* 바로 구매하기 */}
        <Button className="col-span-4 h-14" color="kakao" onClick={handleBuyNow()}>
          바로 구매하기
        </Button>
      </div>
    </div>
  );
};

export default OptionColums;
