import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductOption, SelectedOption } from '../../types/product';
import { OptionReducerAction } from '../../types/reducerAction';
import Option from '../molecules/option';
import OptionCard from '../molecules/optionCard';
import { comma } from '../../utils/comma';
import { useAddCart } from '../../hooks/query';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { useUserSelector } from '../../hooks/store';

interface ProductOptionColumnProps {
  options: ProductOption[];
  selectedOptions: SelectedOption[];
  dispatch: React.Dispatch<OptionReducerAction>;
}

export default function ProductOptionColumn({
  options,
  selectedOptions,
  dispatch,
}: ProductOptionColumnProps) {
  const { mutate } = useAddCart();
  const { isLogin } = useUserSelector((state) => state.user);
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const handleAddCart = () => {
    if (!isLogin) {
      const response = window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?');
      if (response) {
        navigator('/login', { state: pathname });

        return;
      }

      return;
    }

    if (selectedOptions.length <= 0) {
      alert('옵션을 선택해주세요.');

      return;
    }

    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);

    if (token === null) {
      alert('토큰이 만료되었습니다.');
      navigator(0);

      return;
    }

    mutate({
      selectedOptions: selectedOptions.map((selectedOption) => ({
        optionId: selectedOption.id,
        quantity: selectedOption.quantity,
      })),
      auth: token,
    }, {
      onSuccess: () => {
        alert('장바구니에 상품을 담았습니다.');
        dispatch({ type: 'reset' });
      },
      onError: () => {
        alert('실패했습니다. 장바구니에 상품을 담지 못했습니다.');
      },
    });
  };

  return (
    <div>
      <Option optionDescription="옵션 선택">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="w-full px-3 py-2 text-left
              hover:bg-stone-200"
            onClick={() => dispatch({
              type: 'added',
              id: option.id,
              optionName: option.optionName,
              individualPrice: option.price,
            })}
          >
            <p>{option.optionName}</p>
            <p className="text-right text-sm">
              {comma(option.price)}
              {' '}
              원
            </p>
          </button>
        ))}
      </Option>
      {selectedOptions.length > 0 ? (
        <>
          <ul className="my-4 border-y border-stone-400">
            {selectedOptions.map((option) => (
              <li key={option.id}>
                <OptionCard
                  optionName={option.optionName}
                  quantity={option.quantity}
                  optionTotalPrice={option.individualPrice * option.quantity}
                  handleQuantityDecrease={() => dispatch({
                    type: 'updated',
                    id: option.id,
                    quantity: option.quantity - 1,
                  })}
                  handleQuantityIncrease={() => dispatch({
                    type: 'updated',
                    id: option.id,
                    quantity: option.quantity + 1,
                  })}
                  handleDeleteOption={() => dispatch({
                    type: 'deleted',
                    id: option.id,
                  })}
                />
              </li>
            ))}
          </ul>
          <div className="my-4 text-right text-lg font-bold">
            총 주문금액
            {' '}
            <span className="text-xl text-kakao-red">
              {comma(selectedOptions.reduce((accumulator, current) => accumulator + current.individualPrice * current.quantity, 0))}
              {' '}
              원
            </span>
          </div>
        </>
      ) : null}
      <div className="my-4 flex gap-4">
        <button
          onClick={handleAddCart}
          className="w-16 rounded bg-black p-2"
        >
          <FontAwesomeIcon
            icon={icon({ name: 'cart-plus', style: 'solid' })}
            color="#ffffff"
            size="lg"
            title="장바구니에 담기"
          />
        </button>
        <button className="grow rounded bg-kakao p-2 font-bold">
          구매하기
        </button>
      </div>
    </div>
  );
}
