import { OrderItem } from '../../types/product';
import { comma } from '../../utils/comma';

export default function ConfirmOrderItemCard({
  productName,
  items,
}: OrderItem) {
  return (
    <div>
      <h2 className="my-2">
        상품명:
        {' '}
        <span className="font-bold">{productName}</span>
      </h2>
      <ul>
        {items.map((item) => (
          item.quantity > 0 ? (
            <li key={`ordered-option-${item.id}`}>
              <div className="py-4">
                <div className="mb-2 flex flex-row justify-between">
                  <h3>
                    옵션:
                    {' '}
                    {item.optionName}
                  </h3>
                </div>
                <div className="flex flex-row justify-between font-bold">
                  <span>
                    수량:
                    {' '}
                    {item.quantity}
                    {' '}
                    개
                  </span>
                  <span>
                    {comma(item.price)}
                    {' '}
                    원
                  </span>
                </div>
              </div>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
}
