import { CartData } from '../../types/product';
import { comma } from '../../utils/comma';
import CartItemCard from '../organisms/cartItemCard';

interface CartTemplateProps {
  cartData: CartData;

  handleOption: (cardId: number, quantity: number) => void;
}

export default function CartTemplate({
  cartData,
  handleOption,
}: CartTemplateProps) {
  return (
    <div className="w-[40rem]">
      <h1 className="py-2 text-center text-2xl font-bold">장바구니</h1>
      {cartData.products.filter(
        (product) => product.carts.filter(
          (cart) => cart.quantity > 0,
        ).length > 0,
      ).length > 0 ? (
        <>
          <ul>
            {cartData.products.map((product) => (
              product.carts.filter((cart) => cart.quantity > 0).length > 0
                ? (
                  <li
                    key={`product-${product.id}`}
                    className="my-6"
                  >
                    <CartItemCard
                      id={product.id}
                      productName={product.productName}
                      carts={product.carts}
                      handleOption={handleOption}
                    />
                  </li>
                ) : null
            ))}
          </ul>
          <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
            총
            {' '}
            <span className="text-xl text-kakao-red">
              {comma(cartData.totalPrice)}
              {' '}
              원
            </span>
          </div>
          <button className="w-full rounded-sm bg-kakao p-2 font-bold">주문하기</button>
        </>
        ) : <div>담긴 상품이 없습니다.</div>}
    </div>
  );
}
