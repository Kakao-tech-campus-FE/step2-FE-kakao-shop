import { comma } from "../../utils/convert";

const RenderComponent = ({ products }) => {
  return products.map((item) => {
    return item.carts.map((cart) => {
      return (
        <div key={cart.id} className="p-4 border-t">
          <div className="product-name font-bold">
            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
          </div>
          <div className="quantity">
            <span>{comma(cart.quantity)}개</span>
          </div>
          <div className="price font-bold">
            <span>{comma(cart.price * cart.quantity)}원</span>
          </div>
        </div>
      );
    });
  });
};

const OrderItems = ({ products }) => {
  if (!Array.isArray(products)) return;

  return <RenderComponent products={products} />;
};

export default OrderItems;
