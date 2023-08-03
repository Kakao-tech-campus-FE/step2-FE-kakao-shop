import OrderedOption from "../../molecules/OrderResultPage/OrderedOption";
import TotalPrice from "../../molecules/CartPage/TotalPrice";

const OrderedProduct = ({
  product
}) => {

  const totalPrice = product.items.reduce(
    (acc, option) => acc + option.price,
    0
  );

  const totalQuantity = product.items.reduce(
    (acc, option) => acc + option.quantity,
    0
  );


  return (
    <div className="selected-product">
      <div className="product-info">
        <span>{product.productName}</span>
        {product.items.map((option) => (
          <OrderedOption
            key={option.id}
            option={option}
          />
        ))}
        <TotalPrice
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          immediateDiscount={0}
          talkDealDiscount={0}
        />
      </div>
    </div>
  );
};

export default OrderedProduct;
