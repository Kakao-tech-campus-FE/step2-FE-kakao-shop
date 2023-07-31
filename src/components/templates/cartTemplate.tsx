import { useNavigate } from 'react-router-dom';
import { CartData } from '../../types/product';
import CartItemList from '../organisms/cartItemList';
import { comma } from '../../utils/comma';

interface CartTemplateProps {
  cartData: CartData;

  handleOption: (cardId: number, quantity: number) => void;
}

// <div className="text-center">
//   담긴 상품이 없습니다.
// </div>

export default function CartTemplate({
  cartData,
  handleOption,
}: CartTemplateProps) {
  const navigator = useNavigate();

  if (cartData.products.length <= 0) {
    return (
      <div className="w-[40rem] text-center">
        <h1 className="py-2 text-2xl font-bold">장바구니</h1>
        담긴 상품이 없습니다.
      </div>
    );
  }

  return (
    <div className="w-[40rem]">
      <section>
        <h1 className="py-2 text-center text-2xl font-bold">장바구니</h1>
        <CartItemList
          cartData={cartData}
          handleOption={handleOption}
        />
        <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
          총
          {' '}
          <span className="text-xl text-kakao-red">
            {comma(cartData.totalPrice)}
            {' '}
            원
          </span>
        </div>
      </section>
      <button
        type="button"
        className="w-full rounded-sm bg-kakao p-2 font-bold"
        onClick={() => {
          navigator('/order');
        }}
      >
        주문하기
      </button>
    </div>
  );
}
