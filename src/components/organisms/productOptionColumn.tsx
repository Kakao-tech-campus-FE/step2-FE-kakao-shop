import { useNavigate } from 'react-router-dom';
import { useUserSelector } from '../../hooks/store';
import { AddCartOption, ProductOption, SelectedOption } from '../../types/product';
import { OptionReducerAction } from '../../types/reducerAction';
import Button from '../atoms/button';
import Option from '../atoms/option';
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
            className="w-full px-2 text-left text-sm
              hover:bg-stone-200"
            onClick={() => dispatch({
              type: 'added',
              id: option.id,
              optionName: option.optionName,
              individualPrice: option.price,
            })}
          >
            <p>{option.optionName}</p>
            <p><Price price={option.price} /></p>
          </button>
        ))}
      </Option>
      <ul>
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
      {selectedOptions.length > 0 ? (
        <div>
          총
          {' '}
          <Price price={selectedOptions.map((option) => option.individualPrice * option.quantity)
            .reduce((accumulator, currentValue) => accumulator + currentValue)}
          />
        </div>
      ) : null}
      <div className="flex gap-4">
        <Button onClick={addCart}>
          장바구니
        </Button>
        <Button>
          구매하기
        </Button>
      </div>
    </div>
  );
}
