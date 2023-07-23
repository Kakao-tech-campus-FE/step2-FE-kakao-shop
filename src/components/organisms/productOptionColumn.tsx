import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useUserSelector } from '../../hooks/store';
import { AddCartOption, ProductOption, SelectedOption } from '../../types/product';
import { OptionReducerAction } from '../../types/reducerAction';
import Option from '../molecules/option';
import Price from '../atoms/price';
import { requestAddCart } from '../../apis/cart';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import OptionCard from '../molecules/optionCard';

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
  const user = useUserSelector((state) => state.user);
  const navigator = useNavigate();

  const checkLogin = () => {
    if (!user.isLogin) {
      const response = window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?');
      if (response) {
        navigator('/login');
      }

      return false;
    }

    return true;
  };

  const addCart = async () => {
    if (checkLogin()) {
      if (selectedOptions.length === 0) {
        alert('옵션을 선택해주세요.');

        return;
      }

      const cartOptions: AddCartOption[] = selectedOptions.map((option) => ({
        optionId: option.id,
        quantity: option.quantity,
      }));

      const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
      if (token === null) {
        alert('토큰이 만료되었습니다.');
        navigator(0);

        return;
      }

      const response = await requestAddCart(cartOptions, token);

      if (response.data.success === true) {
        alert('장바구니에 상품을 담았습니다.');
      }
    }
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
            <p className="text-right text-sm"><Price price={option.price} /></p>
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
              <Price price={selectedOptions.map((option) => option.individualPrice * option.quantity)
                .reduce((accumulator, currentValue) => accumulator + currentValue)}
              />
            </span>
          </div>
        </>
      ) : null}
      <div className="my-4 flex gap-4">
        <button
          onClick={addCart}
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
