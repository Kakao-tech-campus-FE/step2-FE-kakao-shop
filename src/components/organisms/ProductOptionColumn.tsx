import React, { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { AxiosError } from 'axios';
import ProductOptionList from '../molecules/ProductOptionList';
import Button from '../atoms/Button';
import DarkButton from '../atoms/DarkButton';
import { AddCart, OptionInfo } from '../../dto/productDto';
import { useAddCartMutation } from '../../apis/productApi';
import SelectedProductOptions from '../molecules/SelectedProductOptions';

interface ProductOptionColumnProps {
  options: OptionInfo[];
}

const ProductOptionColumn = ({ options }: ProductOptionColumnProps) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionInfo[]>([]);
  const [cartOptions, setCartOptions] = useState<AddCart[]>([]);

  const { mutate: addCart } = useAddCartMutation();

  const handleOptionClick = (option: OptionInfo) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
    setCartOptions((prevCartOptions) => [...prevCartOptions, { optionId: option.id, quantity: 1 }]);
  };

  const handleDarkButtonClick = () => {
    addCart(cartOptions, {
      onSuccess: () => {
        alert('장바구니 담기 완료');
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          if (err.response?.status === 401) {
            alert('계정정보 업데이트가 필요합니다. 새고고침 해주시거나 로그인되어 있는 지 확인해주세요.');
          } else {
            alert('장바구니 담기 실패');
          }
        }
      },
    });
  };

  return (
    <div className='h-full w-[360px] p-7'>
      <p className='pb-2 font-bold'>옵션선택</p>
      <ProductOptionList options={options} onOptionClick={handleOptionClick} />
      <SelectedProductOptions
        selectedOptions={selectedOptions}
        cartOptions={cartOptions}
        setCartOptions={setCartOptions}
      />
      <div className='mt-7'>
        <div className='space-y-1 pb-4'>
          <span className='flex items-center'>
            <strong className='w-16'>배송방법</strong>
            <p>택배배송</p>
          </span>
          <span className='flex items-center'>
            <strong className='w-16'>배송비</strong>
            <p>무료</p>
          </span>
        </div>
        <hr />
        <div className='flex justify-between py-5 text-lg'>
          <dl className='flex'>
            <dt className='pr-1'>총 수량</dt>
            <dd>
              {cartOptions.reduce((prev, curr) => {
                return prev + curr.quantity;
              }, 0)}
              개
            </dd>
          </dl>
          <dl className='flex'>
            <dt className='pr-1'>총 주문 금액</dt>
            <dd>
              <strong className='text-red-500'>
                {cartOptions.reduce((prev, curr) => {
                  const price = selectedOptions.find((option) => option.id === curr.optionId)?.price;
                  return price ? prev + curr.quantity * price : prev;
                }, 0)}
              </strong>
              원
            </dd>
          </dl>
        </div>
        <div className='flex'>
          <div className='mr-2 w-14'>
            <DarkButton onClick={handleDarkButtonClick}>
              <HiOutlineShoppingCart size={30} />
            </DarkButton>
          </div>
          <Button
            onClick={() => {
              // TODO
            }}
          >
            구매하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionColumn;
