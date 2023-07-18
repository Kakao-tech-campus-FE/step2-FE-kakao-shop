import OptionList from '../atoms/OptionList.jsx';
import Counter from '../atoms/Counter.jsx';
import Button from '../atoms/Button.jsx';
import { comma } from '../../utils/convert';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { addCart } from '../../services/cart';

/**
 * 옵션 선택 컬럼
 *
 * @param {object} product 상품 정보
 * @returns {JSX.Element} 옵션 선택 컬럼
 */

const OptionColums = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]); // [option, option, ...

  const handleOnclickOption = (option) => {
    // 동일한 옵션 클릭을 방지해주어야 하는 코드
    const isOptionSelected = selectedOptions.find((el) => el.Id === option.id);
    // 이미 선택된 옵션이면 수량을 증가시킨다.
    if (isOptionSelected) {
      setSelectedOptions((prev) => prev.map((el) => (el.Id === option.id ? { ...el, quantity: el.quantity + 1 } : el)));
      handleOnIncrease(option.quantity, option.id);
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        {
          Id: option.id,
          quantity: 1,
          price: option.price,
          name: option.optionName,
          optionquantity: option.quantity,
        },
      ]);
    }
  };

  const handleOnIncrease = (count, optionId) => {
    setSelectedOptions((prev) => prev.map((el) => (el.Id === optionId ? { ...el, quantity: el.quantity + 1 } : el)));
  };

  const handleOnDecrease = (count, optionId) => {
    setSelectedOptions((prev) => prev.map((el) => (el.Id === optionId ? { ...el, quantity: el.quantity - 1 } : el)));
  };

  const handleOnClickDelete = (option) => {
    setSelectedOptions((prev) => prev.filter((el) => el.Id !== option.Id));
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
  });
  return (
    <div className="option-columns">
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
            onIncrease={(count) => handleOnIncrease(count, option.Id)}
            onDecrease={(count) => handleOnDecrease(count, option.Id)}
          />
          <span className="name">{option.name}</span>
          {/* option 삭제 버튼 */}
          <span className="delete" onClick={() => handleOnClickDelete(option)}>
            X
          </span>
          <span className="price">{comma(option.price)}원</span>
        </ol>
      ))}
      <hr />
      <div className="total-price">
        <span>
          총 수량:{' '}
          {/* reduce 함수는 배열을 순회하면서 하나의 값으로 만들어준다.
          배열의 합산에 가장 많이 사용 */}
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
                  Id: el.Id,
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
    </div>
  );
};

export default OptionColums;
