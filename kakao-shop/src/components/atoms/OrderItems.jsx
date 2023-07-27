import Box from "./Box";
import Divider from "./Divider";

const OrderItems = ({ products }) => {
  return (
    <>
      {/* 같은 상품 종류 */}
      {products.map((item) => (
        <Box key={item.id} className="my-3">
          {/* 상품 내 옵션 */}
          {item.carts.map((cart) => (
            <div className="" key={cart.id}>
              <div className="product-name font-bold text-sm">
                <span>{item.productName}</span>
              </div>
              <div className="product-option text-sm text-gray-500">
                <span>{`${cart.option.optionName}, `}</span>
                <span>{cart.quantity}개</span>
              </div>

              <div className="price">
                <span>
                  <span className="font-bold text-lg">
                    {cart.price * cart.quantity}
                  </span>
                  원
                </span>
              </div>
              {cart !== item.carts[item.carts.length - 1] && (
                <div className="my-2">
                  <Divider />
                </div>
              )}
            </div>
          ))}
        </Box>
      ))}
    </>
  );
};

export default OrderItems;
