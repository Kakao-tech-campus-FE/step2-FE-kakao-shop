import { convertToPrice } from "utils/convert";
import Button from "./Button";
import Counter from "./Counter";
import { updateCartReq } from "apis/cart";

export default function CartItem({ key, product, refetch }) {
  const handleDeleteClick = async (cart) => {
    await updateCartReq([{ ...cart, quantity: 0 }]);
    refetch();
  };

  const handleIncDecClick = async (cart, qtt) => {
    await updateCartReq([{ ...cart, quantity: qtt }]);
    refetch();
  };

  return (
    <div key={key}>
      <h3>{product.productName}</h3>
      {product.carts.map((cart) => (
        <div key={`cart-${cart.id}`}>
          <span>{cart.option.optionName}</span>
          <Button onClick={() => handleDeleteClick(cart)}>삭제</Button>
          <Counter value={cart} onClick={handleIncDecClick} />
          <span>{convertToPrice(cart.price)}</span>
        </div>
      ))}
      <span>
        {convertToPrice(product.carts.reduce((acc, cur) => acc + cur.price, 0))}
      </span>
    </div>
  );
}
