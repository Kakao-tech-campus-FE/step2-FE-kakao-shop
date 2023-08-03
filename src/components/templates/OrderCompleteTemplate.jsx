import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";

const ProductOption = ({ item, key }) => {
  return (
    <div
      className={
        "product-option mx-auto w-full border border-gray-300 p-2 text-start"
      }
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
        "product mx-auto flex w-full flex-col gap-4 border-b border-b-gray-300 pb-4"
      }
      key={key}
    >
      <div className={"product-name-order text-start text-lg font-bold"}>
        {product.productName}
      </div>
      <div className={"product-options flex w-full flex-col gap-4"}>
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
        "order-complete-session mx-auto flex w-[100%] max-w-4xl flex-col gap-2"
      }
    >
      <div className={"complete-message w-full"}>
        <div className={"flex h-20 items-center justify-center"}>
          <h1 className={"header text-4xl font-bold"}>구매완료</h1>
        </div>
        <h2 className={"pb-4 text-2xl"}>구매가 정상적으로 완료됐습니다</h2>
      </div>
      <div
        className={"order-info flex flex-col gap-4 border border-gray-300 p-2"}
      >
        <div
          className={
            "order-info-header mx-auto border-b border-b-gray-300 py-4 text-2xl font-semibold"
          }
        >
          주문상품 정보
        </div>
        <div className={"product-list mx-auto flex w-full flex-col gap-4"}>
          <Products products={data.data} />
        </div>
        <div className={"total-info"}>
          <div
            className={
              "total-price flex flex-row justify-between border-t border-gray-300 px-4 pt-4 text-xl font-semibold"
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
            "payment-button w-full bg-kakao-yellow py-4 text-xl font-bold"
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
