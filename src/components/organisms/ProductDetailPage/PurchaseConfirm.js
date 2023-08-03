import { comma } from "../../../utils/convert";
import Button from "../../atoms/Button";

const PurchaseConfirm = ({
  getTotalQuantity,
  getTotalPrice,
  handleAddCart,
  handlePurchase,
}) => {
  return (
    <div className="purchase-confirm">
      <div className="purchase-result">
        <span>총 수량: {getTotalQuantity()}개</span>
        <span>총 주문금액: {comma(getTotalPrice())}원</span>
      </div>
      <div className="purchase-buttons">
        <button className="btn-add-cart" onClick={handleAddCart}>
          <img
            className="cart-image"
            src="/images/cart_white.png"
            alt="장바구니 담기"
          />
        </button>
        <Button className="btn-purchase primary" onClick={handlePurchase}>
          톡딜가로 구매하기
        </Button>
      </div>
    </div>
  );
};

export default PurchaseConfirm;
