import { Link } from 'react-router-dom';
import { CartData } from '../../types/product';
import Price from '../atoms/price';
import OptionCard from '../molecules/optionCard';

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
                    <h2 className="my-2 font-bold">
                      <Link to={`/product/${product.id}`}>
                        {product.productName}
                      </Link>
                    </h2>
                    {product.carts.map((cart) => (
                      cart.quantity > 0 ? (
                        <OptionCard
                          key={`product-${product.id}-option-${cart.option.id}`}
                          optionName={cart.option.optionName}
                          quantity={cart.quantity}
                          optionTotalPrice={cart.price}
                          handleQuantityDecrease={() => handleOption(cart.id, cart.quantity - 1)}
                          handleQuantityIncrease={() => handleOption(cart.id, cart.quantity + 1)}
                          handleDeleteOption={() => handleOption(cart.id, 0)}
                        />
                      ) : null
                    ))}
                  </li>
                ) : null
            ))}
          </ul>
          <div className="border-t border-stone-300 py-4 text-right text-lg font-bold">
            총
            {' '}
            <Price price={cartData.totalPrice} />
          </div>
          <button className="w-full rounded-sm bg-kakao p-2">주문하기</button>
        </>
        ) : <div>담긴 상품이 없습니다.</div>}
    </div>
  );
}
