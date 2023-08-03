import { Link } from 'react-router-dom';
import { CartItem } from '../../types/product';
import OptionCard from '../molecules/optionCard';
import Photo from '../atoms/photo';
import { staticServerUri } from '../../utils/serverUri';

interface CartItemCardProps extends CartItem {
  handleOption: (cardId: number, quantity: number) => void;
}

export default function CartItemCard({
  id,
  productName,
  carts,
  handleOption,
}: CartItemCardProps) {
  return (
    <div>
      <section className="flex flex-row items-center gap-2">
        <div className="w-16 rounded-sm">
          <Photo src={`${staticServerUri}/images/${id}.jpg`} alt={productName} />
        </div>
        <h2 className="my-2 font-bold">
          <Link to={`/product/${id}`}>
            {productName}
          </Link>
        </h2>
      </section>
      <ul>
        {carts.map((cart) => (
          <li key={`product-${id}-option-${cart.option.id}`}>
            <OptionCard
              optionName={cart.option.optionName}
              quantity={cart.quantity}
              optionTotalPrice={cart.price}
              handleQuantityDecrease={() => {
                if (cart.quantity - 1 < 1) {
                  return;
                }
                handleOption(cart.id, cart.quantity - 1);
              }}
              handleQuantityIncrease={() => handleOption(cart.id, cart.quantity + 1)}
              handleDeleteOption={() => handleOption(cart.id, 0)}
              decreaseDisabled={cart.quantity <= 1}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
