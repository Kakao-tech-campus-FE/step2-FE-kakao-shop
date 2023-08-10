import { comma } from "../../utils/convert";
import Box from "./Box";
import Divider from "./Divider";
import { LiaTruckSolid } from "react-icons/lia";

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
                    {comma(cart.price * cart.quantity)}
                  </span>
                  원
                </span>
              </div>
              {cart !== item.carts[item.carts.length - 1] && (
                <div className="my-3">
                  <Divider />
                </div>
              )}
            </div>
          ))}
          <div className="my-3">
            <Divider />
          </div>
          <div className="flex justify-center items-center gap-1 text-sm text-kakao-blue">
            <LiaTruckSolid size="20" />
            <span>무료배송</span>
          </div>
        </Box>
      ))}
    </>
  );
};

export default OrderItems;
