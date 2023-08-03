import { CartItem } from '../../types/product';
import { comma } from '../../utils/comma';
import { staticServerUri } from '../../utils/serverUri';
import Photo from '../atoms/photo';

export default function OrderItemCard({
  id,
  productName,
  carts,
}: CartItem) {
  return (
    <div>
      <section className="flex flex-row items-center gap-2">
        <div className="w-16 rounded-sm">
          <Photo src={`${new URL(`/images/${id}.jpg`, `${staticServerUri}/api`).toString()}`} alt={productName} />
        </div>
        <h2 className="my-2 font-bold">
          {productName}
        </h2>
      </section>
      <ul>
        {carts.map((cart) => (
          <li key={`product-${id}-option-${cart.option.id}`}>
            <div className="py-4">
              <div className="mb-2 flex flex-row justify-between">
                <h3>{cart.option.optionName}</h3>
              </div>
              <div className="flex flex-row justify-between font-bold">
                <span>
                  {cart.quantity}
                  {' '}
                  개
                </span>
                <span>
                  {comma(cart.price)}
                  {' '}
                  원
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
