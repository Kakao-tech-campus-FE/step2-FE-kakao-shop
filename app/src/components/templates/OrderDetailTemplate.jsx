import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";
import OptionItem from "../molecules/OptionItem";

const ProductItems = (products) => {
  return products.map((product) => (
    <div
      className="product flex flex-col gap-2 mb-4 p-4 border-y bg-white"
      key={product.id}
    >
      <div className="font-bold text-sm">상품명</div>
      <p className="text-lg font-semibold">{product.productName}</p>
      <OptionItem items={product.items} />
    </div>
  ));
};

const OrderDetailTemplate = ({ data }) => {
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  const navigate = useNavigate();
  const productData = data?.data;

  if (!productData) {
    return <>Empty!!</>;
  }

  return (
    <Container className="complete-container mt-6 pb-10 mb-10 mx-auto max-w-[700px] w-full">
      <div className="success-message text-center py-4">
        <h1 className="text-xl font-bold">구매완료</h1>
        <h2 className="text-lg">구매가 정상적으로 완료됐습니다.</h2>
      </div>
      <div className="detail-message border mb-4">
        <div className="p-4 text-sm text-center font-bold">주문상품 정보</div>
        <div className="product-list bg-gray-100 ">
          {ProductItems(productData.response.products)}
          <div className="flex justify-between bg-white p-4 border-t border-gray-200">
            <div className="font-bold text-lg ">총 금액</div>
            <p className="text-xl font-medium">
              {comma(productData.response.totalPrice)}원
            </p>
          </div>
        </div>
      </div>
      <div className="payment border">
        <div className="flex justify-between p-4">
          <span className="font-bold text-xl">일반 결제 금액</span>
          <span className="text-indigo-500 font-bold text-lg">
            {comma(productData.response.totalPrice)}원
          </span>
        </div>
        <button
          className="w-full p-4 text-black font-bold text-xl bg-yellow-300"
          onClick={() => {
            navigate(staticServerUrl + "/");
          }}
        >
          쇼핑 계속하기
        </button>
      </div>
    </Container>
  );
};

export default OrderDetailTemplate;
