import { useSelector } from "react-redux";
import { convertToPrice } from "utils/convert";

export default function OrderInformation({ data }) {
  const email = useSelector((state) => state.user.email);
  console.dir(data);
  return (
    <>
      <div>
        <span>배송지 정보</span>
        <p>
          <span>{/[^@]*/.exec(email).toString().toUpperCase()}</span>
          <span>기본 배송지</span>
        </p>
        <select>
          <option disabled={true} selected={true}>
            배송 요청사항을 선택해주세요
          </option>
          <option>배송 전 연락바랍니다.</option>
          <option>부재 시 경비실에 맡겨주세요.</option>
          <option>부재 시 연락주세요.</option>
          <option>직접입력</option>
        </select>
        <textarea />
      </div>
      <div>
        <span>주문상품 정보</span>
        {data.products.map((product) =>
          product.carts.map((cart) => (
            <div key={cart.id}>
              <p>{product.productName}</p>
              <p>
                [옵션] {cart.option.optionName}, {cart.quantity}개
              </p>
              <p>{convertToPrice(cart.price)}</p>
            </div>
          ))
        )}
      </div>
      <div>
        <span>결제정보</span>
        <div>
          <span>최종 결제금액</span>
          <span>{convertToPrice(data.totalPrice)}</span>
        </div>
      </div>
    </>
  );
}
