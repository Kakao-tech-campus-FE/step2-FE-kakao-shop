import { useNavigate } from 'react-router-dom';
import { CartData } from '../../types/product';
import CartItemList from '../organisms/cartItemList';

interface CartTemplateProps {
  cartData: CartData;

  handleOption: (cardId: number, quantity: number) => void;
}

export default function CartTemplate({
  cartData,
  handleOption,
}: CartTemplateProps) {
  const navigator = useNavigate();

  return (
    <div className="w-[40rem]">
      <h1 className="py-2 text-center text-2xl font-bold">장바구니</h1>
      {cartData.products.filter(
        (product) => product.carts.filter(
          (cart) => cart.quantity > 0,
        ).length > 0,
      ).length > 0 ? (
        <>
          <CartItemList
            cartData={cartData}
            handleOption={handleOption}
          />
          <button
            type="button"
            className="w-full rounded-sm bg-kakao p-2 font-bold"
            onClick={() => {
              navigator('/order');
            }}
          >
            주문하기

          </button>
        </>
        ) : <div>담긴 상품이 없습니다.</div>}
    </div>
  );
}
