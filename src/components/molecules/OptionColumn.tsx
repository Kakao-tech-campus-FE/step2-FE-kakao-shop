import { addCart } from '@api/cartApi';
import { ProductInfoData, ProductOptionData } from '@api/dto';
import Counter from '@components/atoms/Counter';
import OptionList from '@components/atoms/OptionList';
import PriceTag from '@components/atoms/PriceTag';
import FilledButton from '@components/atoms/button/FilledButton';
import comma from '@utils/commaUtils';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

interface OptionColumnProps {
  product: ProductInfoData;
}

type DictionaryItem = {
  optionId: number;
  quantity: number;
  price: number;
  name: string;
};

const OptionColumn = ({ product }: OptionColumnProps) => {
  const [selectedOptions, setSelectedOptions] = useState<DictionaryItem[]>([]);

  const handleOnClickOption = (option: ProductOptionData) => {
    // 이미 선택된 옵션의 선택 방지
    const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);

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

  const handleOnChange = (count: number, optionId: number) => {
    setSelectedOptions(
      selectedOptions.map((el) => {
        return el.optionId === optionId ? { ...el, quantity: count } : el;
      }),
    );
  };

  // 장바구니 담기 api 처리
  const { mutate } = useMutation({ mutationFn: addCart });

  return (
    <div className="flex-column rounded-2xl shadow-innerFlat p-[30px]">
      <div className="mb-10">
        <p className="text-xxl font-bold mb-5">{product.productName}</p>
        <PriceTag price={product.price} />
      </div>
      <div>
        <p className="font-bold">옵션 선택</p>
        <OptionList options={product.options} onClick={handleOnClickOption} />
        <div>
          {selectedOptions.map((option) => (
            <ol key={option.optionId} className="flex w-full my-6">
              <Counter
                value={option.quantity}
                onIncrease={(count) => handleOnChange(count, option.optionId)}
                onDecrease={(count) => handleOnChange(count, option.optionId)}
              />
              <div className="w-full flex justify-between">
                <span>{option.name}</span>
                <span className="">{comma(option.price)}원</span>
              </div>
            </ol>
          ))}
          <hr />
          <div className="flex text-xl justify-between my-3">
            <span>
              총 수량:
              {comma(
                selectedOptions.reduce((acc, cur) => {
                  return acc + cur.quantity;
                }, 0),
              )}
              개
            </span>
            <span>
              총 상품금액:
              <span className="font-bold text-subOrange">
                {comma(
                  selectedOptions.reduce((acc, cur) => {
                    return acc + cur.quantity * cur.price;
                  }, 0),
                )}{' '}
              </span>
              원
            </span>
          </div>
          <div className="flex justify-end mt-10">
            {/* 장바구니 담기 버튼 */}
            <FilledButton
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
                      alert('장바구니 담기 성공');
                    },
                    onError: () => {
                      alert('장바구니 담기 실패');
                    },
                  },
                );
              }}
            >
              장바구니 담기
            </FilledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionColumn;
