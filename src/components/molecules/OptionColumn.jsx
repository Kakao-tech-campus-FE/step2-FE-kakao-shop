import React, { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import OptionList from '../atoms/OptionList';
import Counter from '../atoms/Counter';
import { comma } from '../../utils/convert';
import { addCart } from '../../services/cart';
import Button from '../atoms/Button';

const staticServerUrl = process.env.REACT_APP_PATH || '';
const OptionColumn = ({ product }) => {
  const navigate = useNavigate();
  // 선택 옵션들을 담는 배열
  const [selectedOptions, setSelectedOptions] = useState([]);

  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  const [totalQuantity, totalPrice] = useMemo(() => {
    const [quantity, price] = selectedOptions.reduce(
      (acc, option) => {
        acc[0] += option.quantity;
        acc[1] += option.quantity * option.price;
        return acc;
      },
      [0, 0],
    );
    return [quantity, price];
  }, [selectedOptions]);
  const handleOnClickOption = (option) => {
    // 동일 옵션 클릭 방지코드(이미 선택된 옵션인지 확인)
    const isOptionSelected = selectedOptions.find(
      (selectedOption) => selectedOption.optionId === option.id,
    );
    // 이미 선택된 옵션이면 가만히
    if (isOptionSelected) {
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
  const handleOnOrder = () => {
    mutate(
      selectedOptions.map((el) => {
        return {
          optionId: el.optionId,
          quantity: el.quantity,
        };
      }),
    );
    navigate('/cart');
  };
  return (
    <div className="option-column">
      <h3 className="font-bold">옵션 선택</h3>
      {/* 옵션담기 */}
      <div className="border-solid border-2 border-gray-100 p-4">
        <OptionList options={product.options} onClick={handleOnClickOption} />
        {selectedOptions.map((option) => (
          <ol
            key={`selected-option-key-${option.optionId}`}
            className="selected-option-list"
          >
            <li className="selected-option">
              <span className="name">{option.name}</span>
              <span className="price">{comma(option.price)}원</span>
              <Counter
                value={option.quantity}
                onIncrease={(count) => handleOnChange(count, option.optionId)}
                onDecrease={(count) => handleOnChange(count, option.optionId)}
              />
            </li>
          </ol>
        ))}
      </div>
      <hr />
      <div className="deliver">
        <span>배송방법 (택배배송){'\n'}</span>
        <span>배송비{'\n'}</span>
      </div>
      <div className="total-price">
        <span>총 수량 : {totalQuantity}</span>
        <span>총 상품금액 :{comma(totalPrice)}원</span>
      </div>
      {/* 담긴 옵션 표기 */}
      {/* UI에서 필요한 정보 : 옵션이름, 옵션 가격, 옵션 수량, 옵션 총가격 */}

      {/* 장바구니 담기 버튼 위치 : 장바구니 담기만 구현
      톡딜가 구매 : 개발 X */}
      <div className="button-group" />
      <Button
        disabled={!totalQuantity}
        onClick={() => {
          mutate(
            selectedOptions.map((el) => {
              return {
                optionId: el.optionId,
                quantity: el.quantity,
              };
            }),
            {
              onSuccess: () => {
                alert('장바구니에 담겼습니다.');
                setSelectedOptions([]);
              },
              onError: (error) => {
                if (error.response.request.status === 401) {
                  alert('로그인 세션이 만료되었습니다 다시 로그인해 주세요');
                  navigate(staticServerUrl + '/login');
                } else {
                  navigate(staticServerUrl + '/error');
                }
              },
            },
          );
        }}
      >
        장바구니담기
      </Button>
      <br />
      <Button onClick={handleOnOrder} disabled={!totalQuantity}>
        결제하기
      </Button>
    </div>
  );
};

export default OptionColumn;
