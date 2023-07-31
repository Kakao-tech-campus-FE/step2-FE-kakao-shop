import { Link } from "react-router-dom";
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
        </div>
      );
    });
  };
  return (
    <div className="w-[800px] py-10 mx-auto">
      <p className="text-center text-3xl">주문이 완료되었습니다.</p>
      <div className="p-4 text-right">
        <p className="text-lg">주문번호: {orderId}</p>
      </div>

      <OrderItems products={products} />
      <div className="border rounded p-4">
        <span className="text-lg font-semibold">총 주문금액</span>
        <span className="float-right text-xl font-semibold text-blue-500">
          {comma(totalPrice)}원
        </span>
      </div>
      <div className="text-center py-10">
        <button className="w-40 rounded px-5 py-2 bg-yellow-300 hover:bg-yellow-400">
          <Link to={"/"} className="text-xl">
            홈으로
          </Link>
        </button>
      </div>
    </div>
  );
};
export default OrderCheckTemplate;
