import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { comma } from "../../utils/convert";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderCompleteTemplate = ({ data }) => {
  const [id, setId] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setId(data?.data?.response.id);
    setTotalPrice(data?.data?.response.totalPrice);
    setProducts(data?.data?.response.products[0]);
  }, [data]);

  return (
    <div className="text-black py-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">구매완료!</h1>
        <span>구매가 정상적으로 완료되었습니다.</span>
      </div>
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="order-product border text-center mt-10 p-2">
          <h2 className="text-lg font-bold">주문상품 정보</h2>
        </div>
        <table className="order-list flex border">
          <tbody>
            <tr>
              <td className="p-4">상품명</td>
              <td>{products?.productName}</td>
            </tr>
            <tr>
              <td className="p-4">주문번호</td>
              <td>{id}</td>
            </tr>
            <tr>
              <td className="p-4">옵션</td>
              <td>
                {products?.items
                  .filter((item) => item.quantity > 0)
                  .map((item) => (
                    <div key={item.id}>- {item.optionName}</div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="border p-4 mt-4 flex items-center justify-between">
          <h3 className=" text-lg font-bold p-2 ">일반 결제 금액</h3>
          <span className="text-lg font-bold text-blue-600">
            {comma(totalPrice)}원
          </span>
        </div>
        <button
          className="bg-yellow-300 text-black w-full p-4 font-medium"
          onClick={() => navigate(staticServerUri + "/")}
        >
          쇼핑 계속하기
        </button>
      </div>
    </div>
  );
};

export default OrderCompleteTemplate;
