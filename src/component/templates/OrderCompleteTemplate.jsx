import { Link } from "react-router-dom";
import { comma } from "../../utils/convert";

const OrderCompleteTemplate = ({ data }) => {
	
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  const orderId = data?.data?.response?.id;
  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;
  const OrderItems = ({ products }) => {
    return products?.map((item) => {
      // 해당 상품의 모든 옵션의 상품 수가 0이지 않을 경우에만 표현
      if (!item?.items.every((option) => option.quantity === 0))
        return (
          <div
            key={item.productName}
            className="border rounded bg-white p-4 my-2"
          >
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
      <p className="text-center text-3xl">주문 완료</p>
      <p className="text-center text-lg text-neutral-500 mt-4">
        주문이 성공적으로 완료되었습니다.
      </p>
      <div className="p-2 text-right">
        <p className="text-base text-neutral-500">주문번호: {orderId}</p>
      </div>

      <div className="text-center border rounded p-4 my-6">
        <span className="text-xl font-semibold">주문 정보</span>
      </div>
      <OrderItems products={products} />
      <div className="border rounded p-4 mt-6">
        <span className="text-lg font-semibold">총 주문금액</span>
        <span className="float-right text-xl font-semibold text-blue-500">
          {comma(totalPrice)}원
        </span>
      </div>
      <div className="text-center py-10">
        <button className="w-40 rounded px-5 py-2 bg-yellow-300 hover:bg-yellow-400">
          <Link to={staticServerUrl+ "/"} className="text-lg">
            쇼핑 계속하기
          </Link>
        </button>
      </div>
    </div>
  );
};
export default OrderCompleteTemplate;
