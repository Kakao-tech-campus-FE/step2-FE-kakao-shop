import { Link } from 'react-router-dom';
import { CartItem } from '../../types/product';
import OptionCard from '../molecules/optionCard';

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
      <h2 className="my-2 font-bold">
        <Link to={`/product/${id}`}>
          {productName}
        </Link>
      </h2>
      <ul>
        {carts.map((cart) => (
          cart.quantity > 0 ? (
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
          ) : null
        ))}
      </ul>
    </div>
  );
}
