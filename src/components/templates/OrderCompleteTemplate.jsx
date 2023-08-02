import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";

const ProductOption = ({ item, key }) => {
  return (
    <div
      className={"product-option mx-auto w-full text-start border border-gray-300 p-2"}
      key={key}
    >
      <div className={"product-item-option-name font-semibold"}>
        {item.optionName}
      </div>
      <div className={"product-item-quantity text-gray-700"}>
        {item.quantity}개
      </div>
      <div className={"product-item-price text-gray-700"}>
        {comma(item.price)}원
      </div>
    </div>
  );
};

const Product = ({ product, key }) => {
  return (
    <div
      className={
        "product mx-auto pb-4 border-b border-b-gray-300 flex flex-col gap-4 w-full"
      }
      key={key}
    >
      <div className={"product-name-order text-start font-bold text-lg"}>
        {product.productName}
      </div>
      <div className={"product-options flex flex-col gap-4 w-full"}>
        {product.items.map((item, index) => (
          <ProductOption item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

const Products = ({ products }) => {
  return products.response.products.map((product, index) => {
    return Product({ product, index });
  });
};

const OrderCompleteTemplate = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section
      className={
        "order-complete-session flex flex-col mx-auto max-w-4xl w-[100%] gap-2"
      }
    >
      <div className={"complete-message w-full"}>
        <div className={"h-20 flex items-center justify-center"}>
          <h1 className={"header text-4xl font-bold"}>구매완료</h1>
        </div>
        <h2 className={"text-2xl pb-4"}>구매가 정상적으로 완료됐습니다</h2>
      </div>
      <div className={"flex flex-col gap-4 order-info border border-gray-300 p-2"}>
        <div
          className={
            "order-info-header text-2xl font-semibold mx-auto py-4 border-b border-b-gray-300"
          }>
          주문상품 정보
        </div>
        <div className={"product-list flex flex-col gap-4 mx-auto w-full"}>
          <Products products={data.data} />
        </div>
        <div className={"total-info"}>
          <div
            className={
              "total-price flex flex-row justify-between text-xl font-semibold px-4 pt-4 border-t border-gray-300"
            }
          >
            <div className={"total-price-label"}>총 상품금액</div>
            <div className={"total-price-value text-indigo-500"}>
              {comma(data.data.response.totalPrice)}원
            </div>
          </div>
        </div>
      </div>
        <div className={"payment-box"}>
          <button
            className={
              "w-full payment-button font-bold text-xl py-4 bg-kakao-yellow"
            }
            onClick={() => {
              navigate("/");
            }}
          >
            쇼핑 계속하기
          </button>
        </div>
    </section>
  );
};

export default OrderCompleteTemplate;
