import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import "../../styles/template/OrderTemplate.css";

const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: "order",
    queryFn: () => order,
  });

  // products 안에 있는 item
  // `${item.productName} - ${item.carts[0].option.optionName}`
  // 1개당 가격 : item.carts[0].price & item.carts[0].quantity

  const OrderItems = () => {
    let renderComponent = [];

    //각각 상품들
    products.forEach((item) => {
      // item: 각각의 상품. carts: 옵션들의 모임
      // 상품하나에 대한 각각의 옵션들
      renderComponent.push(
        item.carts.map((cart) => {
          return (
            <div key={cart.id} className="order-option">
              <div className="product-name">
                <span>{`${item.productName}`}</span>
                <br />
                <span>{`[옵션]${cart.option.optionName}`}</span>
                <span className="product-quantity">
                  {comma(cart.quantity)}개
                </span>
              </div>

              <div className="product-price">
                <span>{comma(cart.price * cart.quantity)}원</span>
              </div>
            </div>
          );
        })
      );
    });

    return renderComponent;
  };

  return (
    <div className="order-container">
      <div className="order-top">
        <strong>주문하기</strong>
      </div>

      <div className="order-delivery">
        <strong>배송지 정보(kakao계정정보)</strong>
        <div className="delivery-info">
          <p className="customer-name">
            춘식이<span>기본배송지</span>
          </p>
          <p className="customer-number">010-1234-5678</p>
          <p className="customer-address">
            <p>(12345)광주 카카오로 라이언길 1</p> (라이언동, 춘식팰리스)
            111-111
          </p>
        </div>
      </div>

      <div className="order-product-info">
        <strong>주문상품정보</strong>
        {/* 각 주문 정보 */}
        <OrderItems />

        <div className="order-total-price">
          <strong>총 주문 금액</strong>
          <span>{comma(totalPrice)}원</span>
        </div>
      </div>

      <div className="order-agree">
        <div className="agree-title">
          <input type="checkbox" id="agree-all" className="check" />
          <label htmlFor="agree-all">
            <span>전체 동의</span>
          </label>
        </div>
        <div className="agree-group">
          <input type="checkbox" id="agree-1" className="check" />
          <label htmlFor="agree-1">
            <span>구매조건 확인 및 결제 진행 동의</span>
          </label>

          <input type="checkbox" id="agree-2" className="check" />
          <label htmlFor="agree-2">
            <span>개인정보 제3자 제공 동의</span>
          </label>
        </div>
      </div>

      <div className="order-bottom">
        <div className="legal-notice">
          <span>법적고지</span>
          <br />
          <span>
            (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
            포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
            통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
            및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </span>
        </div>
        <button
          className="checkout-btn"
          onClick={() => {
            mutate(null, {
              onError: () => {
                alert("주문에 실패했습니다🥲");
              },
              onSuccess: (res) => {
                const id = res.response.id;
                alert("주문이 완료되었습니다!😉");
                navigate(`/orders/complete/${id}`);
              },
            });
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};
export default OrderTemplate;
