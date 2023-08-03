import OptionList from '../atoms/OptionList';
import * as Option from '../../styles/molecules/ProductOption';
import Button from '../atoms/Button';
import { useEffect, useState } from 'react';
import Counter from '../atoms/Counter';
import { useMutation } from 'react-query';
import { addCart } from '../../apis/cart';
import { comma } from '../../utils/convert';
import { getLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const ProductOption = ({ product }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 동일한 옵션 클릭을 방지해주어야 하는 코드
    let isOptionSelected;
    if (getLocalStorage('user') && JSON.parse(getLocalStorage('user')).value) {
      isOptionSelected = selectedOptions.find(
        (selectedOption) => selectedOption.optionId === option.id
      );
    } else {
      alert('로그인이 필요합니다.');
      navigate(staticServerUrl + '/login');
    }

    // 이미 선택된 옵션이면 증가
    if (isOptionSelected) {
      setSelectedOptions((prev) =>
        prev.map((prevOption) =>
          prevOption.optionId === option.id
            ? { ...prevOption, quantity: prevOption.quantity + 1 }
            : prevOption
        )
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

  const handleonChange = (count, optionId) => {
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

  // 총 수량 계산 함수
  const calculateTotalQuantity = () => {
    const totalQuantity = selectedOptions.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);

    return totalQuantity;
  };

  const calculateTotalPrice = () => {
    const totalPrice = selectedOptions.reduce((acc, cur) => {
      return acc + cur.quantity * cur.price;
    }, 0);

    return comma(totalPrice);
  };

  const handleOnClickDelete = (optionId) => {
    setSelectedOptions((prev) =>
      prev.filter((option) => option.optionId !== optionId)
    );
  };

  useEffect(() => {
    // selectedOptions가 변경될 때마다 총 수량, 가격을 계산하여 반영
    calculateTotalQuantity();
    calculateTotalPrice();
  }, [selectedOptions]);

  // 장바구니 담기 api 처리
  const { mutate: mutateAddCart } = useMutation({
    mutationFn: addCart,
  });

  return (
    <Option.Container>
      <Option.Title>옵션선택</Option.Title>
      {/* 사용자가 선택한 옵션 option */}
      <OptionList
        items={product.response.options}
        onClick={handleOnClickOption}
      />
      <Option.Delivery>
        <Option.DeliveryTitle>배송방법</Option.DeliveryTitle>
        <span>택배배송</span>
      </Option.Delivery>
      <Option.Delivery>
        <Option.DeliveryTitle>배송비</Option.DeliveryTitle>
        <Option.DeliveryPrice>무료배송</Option.DeliveryPrice>
        <Option.AddPrice>
          제주 추가 3,000원, 제주 외 도서지역 추가 6,000원
        </Option.AddPrice>
      </Option.Delivery>
      {/* 선택한 상품 리스트 
            ui에서 필요한 정보: 옵션 이름, 옵션 가격, 옵션 수량, 옵션 총 가격*/}
      {selectedOptions.map((option) => (
        <div key={`selected-option-key-${option.optionId}`}>
          <Option.SelectedOption>
            <div>선택한 상품: {option.name}</div>
            <Option.CounterContainer>
              <Counter
                value={option.quantity}
                onIncrease={handleonChange}
                onDecrease={handleonChange}
                optionId={option.optionId}
              />
              <span
                style={{ marginRight: '1em', cursor: 'pointer', color: 'red' }}
                onClick={() => handleOnClickDelete(option.optionId)}
              >
                X
              </span>
            </Option.CounterContainer>
          </Option.SelectedOption>
        </div>
      ))}
      <Option.Result>
        <span>총 수량: {calculateTotalQuantity()}개</span>
        <span>총 주문금액: {calculateTotalPrice()}원</span>
      </Option.Result>
      <Option.Purchase>
        <Button
          className="cartButton"
          onClick={() => {
            if (
              getLocalStorage('user') &&
              JSON.parse(getLocalStorage('user')).value
            ) {
              mutateAddCart(
                selectedOptions.map((el) => {
                  return {
                    optionId: el.optionId,
                    quantity: el.quantity,
                  };
                }),
                {
                  onSuccess: () => {
                    alert('장바구니에 담겼습니다.');
                  },
                  onError: () => {
                    alert('장바구니 담기에 실패했습니다.');
                  },
                }
              );
            } else {
              alert('로그인이 필요합니다.');
              navigate(staticServerUrl + '/login');
            }
          }}
        >
          장바구니 담기
        </Button>
        <Button
          className="talkButton"
          onClick={() => {
            if (
              getLocalStorage('user') &&
              JSON.parse(getLocalStorage('user')).value
            ) {
              mutateAddCart(
                selectedOptions.map((el) => {
                  return {
                    optionId: el.optionId,
                    quantity: el.quantity,
                  };
                }),
                {
                  onSuccess: () => {
                    navigate(staticServerUrl + '/order');
                  },
                  onError: () => {
                    alert('주문하기가 실패했습니다.');
                  },
                }
              );
            } else {
              alert('로그인이 필요합니다.');
              navigate(staticServerUrl + '/login');
            }
          }}
        >
          톡딜가로 구매하기
        </Button>
      </Option.Purchase>
    </Option.Container>
  );
};

export default ProductOption;
