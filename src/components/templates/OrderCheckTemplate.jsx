import { BsTruck } from "react-icons/bs";
import { comma } from "../../utils/convert";

const OrderCheckTemplate = ({ data }) => {
  const orderId = data?.data?.response?.id;
  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;
  const OrderItems = ({ products }) => {
    return products?.map((item) => {
      return (
        <div key={item.id} className="border rounded bg-white p-4 my-2">
          {item.items.map((option) => {
            if (option.quantity !== 0) {
              return (
                <div className="flex items-center gap-3 py-2" key={option.id}>
                  <div className="product-info">
                    <div className="product-name-option-quantity">
                      <p className="font-semibold">{item.productName}</p>
                      <span className="text-sm">
                        [옵션] {option.optionName},{" "}
                      </span>
                      <span>{option.quantity}개</span>
                    </div>
                    <div className="price">
                      <p className="text-[17px] font-bold">
                        {comma(option.price)}원
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <hr />
          <div className="pt-4 text-center text-blue-500">
            <BsTruck className="inline text-2xl" />
            <span className="px-1 font-bold">무료배송</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <span>주문이 완료되었습니다.</span>
      <span>주문번호: {orderId}</span>
      <OrderItems products={products} />
      <span>총 주문금액: {totalPrice}</span>
    </div>
  );
};
export default OrderCheckTemplate;
